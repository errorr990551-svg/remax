import re
import os

with open('dist/visakhapatnam/index.html', 'r', encoding='utf-8') as f:
    h = f.read()

out = []
for m in re.finditer(r'href\s*=\s*["\']([^"\'#?]+)', h, re.I):
    href = m.group(1)
    if href.startswith('https://remaxforge.com'):
        path = href[len('https://remaxforge.com'):] or '/'
    elif href.startswith('/') and not href.startswith('//'):
        path = href
    else:
        continue
    if not path.endswith('/') and '.' not in path.rsplit('/', 1)[-1]:
        out.append(path)

print('Bad links in visakhapatnam:', sorted(set(out)))
for bad in sorted(set(out)):
    # find where bad is in h
    idx = h.find(bad)
    print("Snippet around", bad, ":", h[max(0, idx-50):min(len(h), idx+50)])
