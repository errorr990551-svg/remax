import openpyxl
import json
import re

# Load the excel cities
wb = openpyxl.load_workbook("remaxforge_city_pages_seo_v2.xlsx")
sheet = wb['1_City_URL_Plan']
excel_cities = []
for row in list(sheet.iter_rows(values_only=True))[2:52]: # 50 cities
    if row[1]:
        excel_cities.append(row[1].strip())

print("Excel cities count:", len(excel_cities))
print("Excel cities:", excel_cities)

# Load the js file keys
with open("src/assets/data/marketAreaData.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Match depth-1 keys of marketAreaData
keys = re.findall(r'^\s{2}"([^"]+)":', js_content, re.MULTILINE)
print("JS keys count:", len(keys))

missing = []
for city in excel_cities:
    city_key = city.lower().replace(" ", "-")
    if city_key not in keys:
        # Check other variations
        alternative = city.lower().replace(" ", "")
        if alternative in keys:
            print(f"Match found for {city} using alternative {alternative}")
        else:
            missing.append((city, city_key))

print("Missing cities in JS:", missing)
