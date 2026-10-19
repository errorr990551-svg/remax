import json
import re

def audit_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match patterns like:
    # "title": "..."
    # "description": "..."
    items = re.findall(r'["\'](/[^"\']*)["\']:\s*\{([^}]+)\}', content)
    print(f"Auditing {filepath}: found {len(items)} entries")
    
    over_60_titles = []
    over_160_descs = []
    descs_count = {}

    for url, block in items:
        t_m = re.search(r'["\']title["\']:\s*["\']([^"\']+)["\']', block)
        d_m = re.search(r'["\']description["\']:\s*["\']([^"\']+)["\']', block)
        if t_m:
            title = t_m.group(1)
            if len(title) > 60:
                over_60_titles.append((url, len(title), title))
        if d_m:
            desc = d_m.group(1)
            descs_count[desc] = descs_count.get(desc, 0) + 1
            if len(desc) > 160:
                over_160_descs.append((url, len(desc), desc))
                
    print(f"Titles > 60: {len(over_60_titles)}")
    for u, l, t in over_60_titles[:10]:
        print(f"  {u} [{l}]: {t}")

    print(f"Descriptions > 160: {len(over_160_descs)}")
    for u, l, d in over_160_descs[:10]:
        print(f"  {u} [{l}]: {d}")

    duplicates = {d: c for d, c in descs_count.items() if c > 1}
    print(f"Duplicate descriptions count: {len(duplicates)}")
    for d, c in list(duplicates.items())[:5]:
        print(f"  Repeated {c} times: {d[:80]}...")

if __name__ == '__main__':
    audit_file('src/assets/data/sheet4MetaData.js')
    audit_file('src/assets/data/newFlangePagesData.js')
    audit_file('src/assets/data/exportHubsData.js')
