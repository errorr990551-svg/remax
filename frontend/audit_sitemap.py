import re

with open('public/sitemap.xml', 'r', encoding='utf-8') as f:
    text = f.read()

urls = re.findall(r'<loc>([^<]+)</loc>', text)
lastmods = re.findall(r'<lastmod>([^<]+)</lastmod>', text)

print(f"Total URLs in sitemap: {len(urls)}")
print(f"First 5 URLs:\n" + "\n".join(urls[:5]))

# Checks
home = [u for u in urls if u in ['https://remaxforge.com', 'https://remaxforge.com/']]
print(f"Homepage URL: {home}")

print(f"Has /howrah/: {any('/howrah/' in u for u in urls)}")
print(f"Has /tech-info/dimension-chart/: {any('/tech-info/dimension-chart/' in u for u in urls)}")
print(f"Has /naharlagun/: {any('/naharlagun' in u for u in urls)}")
print(f"Has /pasighat/: {any('/pasighat' in u for u in urls)}")
print(f"Has /certificates/: {any('/certificates' in u for u in urls)}")
print(f"Has /products/: {any(u == 'https://remaxforge.com/products/' for u in urls)}")
print(f"Has /materials/: {any(u == 'https://remaxforge.com/materials/' for u in urls)}")
print(f"Unique lastmod dates: {set(lastmods)}")
