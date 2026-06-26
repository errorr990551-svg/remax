import json

with open("market_keys.json", "r", encoding="utf-8") as f:
    keys = json.load(f)

# Let's search for partial matches of the missing ones
missing_names = ['delhi', 'bangalore', 'navi-mumbai', 'jamnagar', 'ankleshwar', 'vapi', 'halol', 'faridabad', 'gurgaon', 'noida', 'chandigarh', 'amravati', 'aurangabad', 'bhavnagar', 'gandhidham', 'mundra', 'silvassa', 'daman', 'bharuch', 'panipat', 'mathura', 'mangalore', 'tirunelveli']

for name in missing_names:
    matches = [k for k in keys if name in k or k in name]
    print(f"Searched '{name}': matches {matches}")
