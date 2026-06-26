import json

with open("market_keys.json", "r", encoding="utf-8") as f:
    keys = json.load(f)

mumbai_keys = [k for k in keys if "mumbai" in k]
supplier_keys = [k for k in keys if "supplier" in k]

print("Mumbai keys:", mumbai_keys)
print("Supplier keys count:", len(supplier_keys))
print("Supplier keys sample:", supplier_keys[:5])
