with open('src/assets/components/common/Navbar.jsx', 'r', encoding='utf-8') as f:
    c = f.read()

replacements = [
    ('to="/about-us"', 'to="/about-us/"'),
    ('to="/blogs"', 'to="/blogs/"'),
    ('to="/certification"', 'to="/certification/"'),
    ('to="/contact"', 'to="/contact/"'),
    ('to="/export"', 'to="/export/"'),
    ('to="/quality"', 'to="/quality/"'),
    ('to="/tech-info/chemical-composition"', 'to="/tech-info/chemical-composition/"'),
    ('to="/tech-info/dimensions"', 'to="/tech-info/dimension-chart/"'),
    ('to="/tech-info/mechanical-properties"', 'to="/tech-info/mechanical-properties/"'),
    ('to="/tech-info/weight-chart"', 'to="/tech-info/weight-chart/"'),
    ('to="/products/flanges/slip-on-flange"', 'to="/products/flanges/slip-on-flange/"'),
    ('linkHref = "/products/forged-fittings";', 'linkHref = "/products/forged-fittings/";'),
    ('linkHref = "/products/pipes/alloy-steel-pipes";', 'linkHref = "/products/pipes/alloy-steel-pipes/";'),
    ('linkHref = "/product-details/boiler-quality-plate";', 'linkHref = "/product-details/boiler-quality-plate/";'),
    ('linkHref = "/product-details/hardox-plate";', 'linkHref = "/product-details/hardox-plate/";'),
    ('let linkHref = `/products/${createSlug(\n                            productData[activeCategory].category\n                          )}/${createSlug(subItem)}`;',
     'let linkHref = `/products/${createSlug(\n                            productData[activeCategory].category\n                          )}/${createSlug(subItem)}/`;'),
    ('let linkHref = `/products/${createSlug(item.category)}/${createSlug(subItem)}`;',
     'let linkHref = `/products/${createSlug(item.category)}/${createSlug(subItem)}/`;')
]

for old, new in replacements:
    c = c.replace(old, new)

with open('src/assets/components/common/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated Navbar.jsx with trailing slashes")
