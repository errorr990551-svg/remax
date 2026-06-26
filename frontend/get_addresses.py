import re

with open("src/assets/data/marketAreaData.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Let's find some occurrences of streetAddress
matches = re.findall(r'"streetAddress":\s*"([^"]+)"', js_content)
print("Unique streetAddress values found:")
print(set(matches))
