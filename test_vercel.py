import urllib.request
import urllib.error
import ssl
import sys
import os

proxies_file = "proxies.txt"
test_url = "https://tonton-b2b-fightwear-website-e2mz6lmvj-mark-ton-s-projects.vercel.app/"
css_url = "https://tonton-b2b-fightwear-website-e2mz6lmvj-mark-ton-s-projects.vercel.app/style.css"
js_url = "https://tonton-b2b-fightwear-website-e2mz6lmvj-mark-ton-s-projects.vercel.app/script.js"

print("Reading proxy list from file...")
try:
    with open(proxies_file, "r") as f:
        proxies = [line.strip() for line in f if line.strip()]
    print(f"Loaded {len(proxies)} proxies.")
except Exception as e:
    print(f"Failed to read proxies file: {e}")
    sys.exit(1)

# Disable SSL verification for simplicity on proxies
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def try_url_with_proxy(url, proxy, save_name):
    # Set up proxy handler
    proxy_support = urllib.request.ProxyHandler({'http': proxy, 'https': proxy})
    opener = urllib.request.build_opener(proxy_support, urllib.request.HTTPSHandler(context=ctx))
    urllib.request.install_opener(opener)
    
    print(f"Trying to fetch {url} via proxy {proxy}...")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with opener.open(req, timeout=5) as response:
            content = response.read()
            code = response.getcode()
            headers = dict(response.info())
            print(f"Success! Status code: {code}")
            with open(save_name, 'wb') as f:
                f.write(content)
            return True, headers, content
    except Exception as e:
        print(f"Failed: {e}")
        return False, None, None

# Try some proxies to download the Vercel HTML, CSS and JS
successful_proxy = None
html_headers, html_content = None, None

for i, proxy in enumerate(proxies[:100]):
    print(f"\n--- Proxy {i+1}/100: {proxy} ---")
    success, headers, content = try_url_with_proxy(test_url, proxy, "vercel_index.html")
    if success:
        successful_proxy = proxy
        html_headers = headers
        html_content = content
        break

if not successful_proxy:
    print("\nCould not find a working proxy to fetch the HTML in the first 100.")
    sys.exit(1)

print(f"\nUsing working proxy {successful_proxy} to download CSS and JS...")
css_success, css_headers, css_content = try_url_with_proxy(css_url, successful_proxy, "vercel_style.css")
js_success, js_headers, js_content = try_url_with_proxy(js_url, successful_proxy, "vercel_script.js")

print("Finished fetching from Vercel!")
