import json

with open("src/assets/data/marketAreaData.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Let's write a python script to parse a small part of the JS file.
# We can find where "nellore" is defined.
import re
match = re.search(r'"nellore":\s*\{', js_content)
if match:
    start_pos = match.start()
    # Print next 1000 characters
    print(js_content[start_pos:start_pos+1500])
else:
    print("nellore not found")
