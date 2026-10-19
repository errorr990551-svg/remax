import re

with open('src/assets/data/sheet4MetaData.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for idx, line in enumerate(lines, 1):
    # Match patterns like: "key": "value",
    m = re.match(r'^(\s*"[^"]+"\s*:\s*)"(.*)"(,?)\s*$', line)
    if m:
        prefix = m.group(1)
        val = m.group(2)
        suffix = m.group(3)
        # In val, any unescaped quote should be escaped
        # First unescape already escaped quotes to normalize
        val_norm = val.replace(r'\"', '"')
        # Now escape all quotes in val
        val_escaped = val_norm.replace('"', r'\"')
        new_line = f'{prefix}"{val_escaped}"{suffix}\n'
        new_lines.append(new_line)
    else:
        new_lines.append(line)

with open('src/assets/data/sheet4MetaData.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Processed and cleaned all lines in sheet4MetaData.js")
