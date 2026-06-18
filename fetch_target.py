import urllib.request
import urllib.error
import ssl
import sys
import concurrent.futures

proxies_file = "proxies.txt"
test_url = "https://tonton-b2b-fightwear-website-3zvbe20xy-mark-ton-s-projects.vercel.app/index.html"
css_url = "https://tonton-b2b-fightwear-website-3zvbe20xy-mark-ton-s-projects.vercel.app/style.css"

# Disable SSL verification for simplicity on proxies
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def test_proxy(proxy):
    proxy_support = urllib.request.ProxyHandler({'http': proxy, 'https': proxy})
    opener = urllib.request.build_opener(proxy_support, urllib.request.HTTPSHandler(context=ctx))
    try:
        req = urllib.request.Request(
            test_url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with opener.open(req, timeout=5) as response:
            code = response.getcode()
            if code == 200:
                content = response.read()
                return proxy, content
    except Exception as e:
        pass
    return None

def main():
    try:
        with open(proxies_file, "r") as f:
            proxies = [line.strip() for line in f if line.strip()]
    except Exception as e:
        print(f"Failed to read proxies: {e}")
        return

    print(f"Testing {len(proxies)} proxies concurrently for target URL...")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
        results = executor.map(test_proxy, proxies)
        for result in results:
            if result:
                proxy, content = result
                print(f"FOUND WORKING PROXY: {proxy}")
                with open("fetched_index.html", "wb") as f:
                    f.write(content)
                
                # Fetch CSS using the same proxy
                proxy_support = urllib.request.ProxyHandler({'http': proxy, 'https': proxy})
                opener = urllib.request.build_opener(proxy_support, urllib.request.HTTPSHandler(context=ctx))
                try:
                    req_css = urllib.request.Request(
                        css_url, 
                        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
                    )
                    with opener.open(req_css, timeout=5) as resp_css:
                        if resp_css.getcode() == 200:
                            css_content = resp_css.read()
                            with open("fetched_style.css", "wb") as css_f:
                                css_f.write(css_content)
                            print("Successfully fetched style.css")
                        else:
                            print(f"Failed to fetch CSS, code: {resp_css.getcode()}")
                except Exception as css_e:
                    print(f"Error fetching CSS: {css_e}")
                return

    print("No working proxies found.")

if __name__ == "__main__":
    main()
