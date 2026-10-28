"""Audit the actual pre-rendered HTML across every canonical website page."""
from collections import deque
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import json
import re

ROOT = Path(__file__).resolve().parents[1]
BUILT = ROOT / '.next/server/app'
HOST = 'www.tontongear.com'
WEBSITE_ID = f'https://{HOST}/#website'


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_main = False
        self.suppressed = 0
        self.h1 = 0
        self.words = []
        self.ids = set()
        self.links = []
        self.description = ''
        self.schema = []
        self.json_buffer = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'main':
            self.in_main = True
        if tag in ('script', 'style'):
            self.suppressed += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.json_buffer = []
        if tag == 'meta' and attrs.get('name') == 'description':
            self.description = attrs.get('content', '')
        if self.in_main and tag == 'h1':
            self.h1 += 1
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])

    def handle_endtag(self, tag):
        if tag == 'main':
            self.in_main = False
        if tag in ('script', 'style'):
            self.suppressed -= 1
        if tag == 'script' and self.json_buffer is not None:
            self.schema.append(json.loads(''.join(self.json_buffer)))
            self.json_buffer = None

    def handle_data(self, value):
        if self.json_buffer is not None:
            self.json_buffer.append(value)
        if self.in_main and not self.suppressed:
            self.words.extend(value.split())


def entities(node):
    if isinstance(node, list):
        for item in node:
            yield from entities(item)
    elif isinstance(node, dict):
        if '@type' in node:
            yield node
        for value in node.values():
            yield from entities(value)


def audit():
    urls = re.findall(r'<loc>(.*?)</loc>', (BUILT / 'sitemap.xml.body').read_text())
    assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
    pages = {}
    for url in urls:
        path = urlparse(url).path or '/'
        page = Page()
        page.feed((BUILT / ('index.html' if path == '/' else path.strip('/') + '.html')).read_text())
        assert page.h1 == 1, f'{path}: expected one H1, found {page.h1}'
        assert len(page.words) >= 100, f'{path}: important text missing from raw HTML'
        page_entities = [entity for entity in entities(page.schema) if entity['@type'] in ('WebPage', 'AboutPage', 'CollectionPage', 'Article')]
        assert page_entities, f'{path}: no page/article entity'
        for entity in page_entities:
            identity = entity.get('url') or entity.get('@id') or entity.get('mainEntityOfPage')
            if isinstance(identity, str) and urlparse(identity).netloc not in ('', HOST):
                assert entity.get('isPartOf', {}).get('@id') != WEBSITE_ID, f'{path}: external citation incorrectly belongs to this website'
                continue
            assert entity.get('inLanguage') == 'en', f'{path}: missing page language'
            assert entity.get('isPartOf', {}).get('@id') == WEBSITE_ID, f'{path}: disconnected website entity'
        pages[path] = page

    directory = json.loads((ROOT / 'data/site-directory.json').read_text())
    assert {item['path'] for item in directory} == set(pages) - {'/site-map'}, 'Directory must cover every canonical page'
    for item in directory:
        assert item['description'] == pages[item['path']].description, f"Stale directory description: {item['path']}"

    graph = {path: set() for path in pages}
    for path, page in pages.items():
        for href in page.links:
            parsed = urlparse(href)
            if parsed.scheme not in ('', 'https') or parsed.netloc not in ('', HOST):
                continue
            target = parsed.path or path
            if not target.startswith('/'):
                continue
            if target in pages:
                graph[path].add(target)
                assert not parsed.fragment or unquote(parsed.fragment) in pages[target].ids, f'{path}: broken anchor {href}'
            elif not target.startswith('/assets/'):
                assert (ROOT / 'public' / target.lstrip('/')).is_file(), f'{path}: noncanonical or missing link {href}'
    queue = deque(['/'])
    seen = {'/'}
    while queue:
        for target in graph[queue.popleft()]:
            if target not in seen:
                seen.add(target)
                queue.append(target)
    assert seen == set(pages), f'Unreachable pages: {set(pages) - seen}'
    print(f'READABLE HTML AUDIT PASSED: {len(pages)} pages; raw text, H1, valid connected JSON-LD, complete directory, internal anchors and crawl reachability.')


if __name__ == '__main__':
    audit()
