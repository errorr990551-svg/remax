import os
import re

CANON_HOST = "https://remaxforge.com"
BAD_LINKS = {}

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js', '.html')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read()
            # find to="..." or href="..."
            matches = re.findall(r'(?:to|href)\s*=\s*["\']([^"\'#?]+)["\']', content)
            bad = []
            for href in matches:
                if href.startswith(('http://', 'https://')):
                    if href.startswith(CANON_HOST):
                        p = href[len(CANON_HOST):] or '/'
                    else:
                        continue
                elif href.startswith('/') and not href.startswith('//'):
                    p = href
                else:
                    continue
                
                # Check if it has an extension
                last = p.rsplit('/', 1)[-1]
                if '.' in last:
                    continue
                if not p.endswith('/'):
                    bad.append((p, href))
            if bad:
                BAD_LINKS[path] = bad

print(f"Found {len(BAD_LINKS)} files with non-trailing slash links:")
for path, b in BAD_LINKS.items():
    print(f"\n{path}:")
    for p, href in b[:10]:
        print(f"  {href}")
