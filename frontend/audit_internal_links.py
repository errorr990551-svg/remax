import os
import re

targets = [
    '/products',
    '/products/',
    '/products/buttweld-fittings',
    '/products/buttweld-fittings/',
    '/materials',
    '/materials/',
    '/industries',
    '/industries/',
    '/product-details',
    '/product-details/',
    '/tech-info',
    '/tech-info/',
    '/about',
    '/about/',
    '/certificates',
    '/certificates/'
]

findings = {t: [] for t in targets}

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for idx, line in enumerate(lines, 1):
                    # Check for href="..." or to="..."
                    for t in targets:
                        pattern = r'["\']' + re.escape(t) + r'["\']'
                        if re.search(pattern, line):
                            # Ignore App.jsx route definitions
                            if 'App.jsx' in p and ('<Route' in line or 'legacyProductRedirects' in p):
                                continue
                            findings[t].append((p, idx, line.strip()))

for t, hits in findings.items():
    if hits:
        print(f"=== Target: {t} ({len(hits)} occurrences) ===")
        for p, line_no, line in hits[:5]:
            print(f"  {p}:{line_no} -> {line}")
