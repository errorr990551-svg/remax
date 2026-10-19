import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('src/assets/data/marketAreaData.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = None
end = None
for i, line in enumerate(lines):
    if line.startswith('  "kolkata": {'):
        start = i
        break

if start is not None:
    # find next city or end
    for j in range(start + 1, len(lines)):
        if lines[j].startswith('  "'):
            end = j
            break
    print("".join(lines[start:end]))
