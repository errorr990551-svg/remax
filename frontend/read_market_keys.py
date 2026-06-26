import json
import re

with open("src/assets/data/marketAreaData.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find keys of export const marketAreaData
# Since it's javascript export const marketAreaData = { ... }
# we can parse it by finding lines that have keys at depth 1.
# Usually format is: "key": { or key: {
# Let's match patterns like: \s{2}"([^"]+)":
matches = re.findall(r'^\s{2}"([^"]+)":', content, re.MULTILINE)
print("Found keys count:", len(matches))
print("Sample keys:", matches[:10])
with open("market_keys.json", "w", encoding="utf-8") as out:
    json.dump(matches, out, indent=2)
