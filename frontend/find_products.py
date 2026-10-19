import os

matches = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                content = file.read()
                if '/products"' in content or "/products'" in content:
                    matches.append(p)
print('Files matching /products:', len(matches))
for m in matches:
    print(m)
