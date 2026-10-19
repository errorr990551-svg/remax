import os
import re

with open('src/assets/data/materialsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', text)
print(f'Total material slugs ({len(slugs)}): {slugs}')

unlinked = []
for s in slugs:
    url = f'/materials/{s}/'
    url_no_slash = f'/materials/{s}'
    found = False
    for root, dirs, files in os.walk('src'):
        for f in files:
            if f.endswith(('.jsx', '.js')) and 'materialsData' not in f and 'App.jsx' not in f and 'sheet4MetaData' not in f and 'find_orphans' not in f:
                with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                    c = file.read()
                    if url in c or url_no_slash in c:
                        found = True
                        break
        if found:
            break
    if not found:
        unlinked.append(s)

print('Unlinked material slugs:', unlinked)
