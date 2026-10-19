import re

with open('src/assets/data/marketAreaData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find top-level keys
# In marketAreaData, keys are 2-space indented: '  "city": {'
keys = re.findall(r'^  "([^"]+)": \{', text, re.MULTILINE)
print(f'Total cities in marketAreaData: {len(keys)}')
print('Sample cities:', keys[:15])

# Check for West Bengal cities
wb_cities = [k for k in keys if k in ['kolkata', 'durgapur', 'asansol', 'howrah']]
print('West Bengal cities found:', wb_cities)
