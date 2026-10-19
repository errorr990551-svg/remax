import re

new_meta_entries = {
  "/products/socket-weld-fittings/": {
    "title": "Socket Weld Fittings Manufacturer & Supplier | Remax Forge",
    "description": "ISO 9001 manufacturer of ASME B16.11 forged socket weld fittings in Mumbai. Elbows, tees, couplings, unions, nipples. 3000#, 6000#, 9000#. MTC 3.1.",
    "h1": "Forged Socket Weld Fittings Manufacturer"
  },
  "/products/socket-weld-fittings/socket-weld-nipple-fittings/": {
    "title": "Socket Weld Nipple Fittings | ASME B16.11 | Remax Forge",
    "description": "High-pressure forged socket weld nipple fittings in carbon steel, stainless steel, and alloy steel. Class 3000# & 6000#, EN 10204 3.1 MTC, factory direct.",
    "h1": "Socket Weld Nipple Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-reducer-insert-fittings/": {
    "title": "Socket Weld Reducer Insert Fittings | Remax Forge",
    "description": "Forged socket weld reducer inserts per ASME B16.11 and MSS SP-79. Precision machined in A105, SS 316, and alloy steel. Class 3000# & 6000#. Get a quote.",
    "h1": "Socket Weld Reducer Insert Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-bushing-fittings/": {
    "title": "Socket Weld Bushing Fittings | ASME B16.11 | Remax Forge",
    "description": "ASME B16.11 forged socket weld bushings in carbon steel, stainless steel, and nickel alloys. Class 3000# & 6000# reducing bushings with EN 10204 3.1 MTC.",
    "h1": "Socket Weld Bushing Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-cap-fittings/": {
    "title": "Socket Weld End Caps | ASME B16.11 Forged | Remax Forge",
    "description": "Heavy-duty forged socket weld pipe caps per ASME B16.11. Class 3000#, 6000#, 9000# pipe end closures in A105, 304L, 316L, and Alloy Steel. Instant quote.",
    "h1": "Socket Weld Cap Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-cross-fittings/": {
    "title": "Socket Weld Cross Fittings | 4-Way Forged | Remax Forge",
    "description": "Class 3000# & 6000# forged socket weld crosses per ASME B16.11. 4-way distribution fittings in carbon steel, stainless steel, and duplex. Full MTC 3.1.",
    "h1": "Socket Weld Cross Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-lateral-tee-fittings/": {
    "title": "Socket Weld Lateral Tee Fittings (45°) | Remax Forge",
    "description": "45-degree forged socket weld lateral tees manufactured to ASME B16.11. Class 3000# & 6000# for smooth low-resistance branching in process piping systems.",
    "h1": "Socket Weld Lateral Tee Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-plug-fittings/": {
    "title": "Socket Weld Plug Fittings | High Pressure | Remax Forge",
    "description": "Forged socket weld and round/hex head plugs per ASME B16.11. Class 3000# & 6000# in ASTM A105, SS 316L, and alloy steel. Leak-proof line terminations.",
    "h1": "Socket Weld Plug Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-union-fittings/": {
    "title": "Socket Weld Union Fittings | ASME B16.11 | Remax Forge",
    "description": "Forged socket weld unions with ground metal-to-metal seat (MSS SP-83). Class 3000# & 6000# unions for quick line disassembly. ASTM A105, SS 316. MTC 3.1.",
    "h1": "Socket Weld Union Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-coupling-fittings/": {
    "title": "Socket Weld Coupling Fittings | Full & Half | Remax",
    "description": "Class 3000# & 6000# full couplings, half couplings, and reducing couplings per ASME B16.11. Forged in Mumbai with complete 100% PMI and 3.1 certification.",
    "h1": "Socket Weld Coupling Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-elbow-fittings/": {
    "title": "Socket Weld Elbow Fittings (90° & 45°) | Remax Forge",
    "description": "Forged 90-degree and 45-degree socket weld elbows per ASME B16.11. Class 3000#, 6000#, and 9000# in carbon steel, stainless steel, and nickel alloys.",
    "h1": "Socket Weld Elbow Fittings"
  },
  "/products/socket-weld-fittings/socket-weld-tee-fittings/": {
    "title": "Socket Weld Tee Fittings | Equal & Reducing | Remax",
    "description": "ASME B16.11 forged socket weld equal tees and reducing tees. Class 3000# and 6000# in A105, SS 304/316, and Alloy Steel with EN 10204 3.1 MTC inspection.",
    "h1": "Socket Weld Tee Fittings"
  },
  "/products/buttweld-fittings/butt-weld-bends-fittings/": {
    "title": "Butt Weld Pipe Bends | 3D, 5D Long Radius | Remax Forge",
    "description": "Seamless and welded buttweld pipe bends (3D, 5D, 6D, 10D radius) per ASME B16.49 / B16.9. Manufactured in Mumbai in carbon, alloy, and stainless steel.",
    "h1": "Butt Weld Bends Fittings"
  },
  "/products/buttweld-fittings/butt-weld-reducers-fittings/": {
    "title": "Butt Weld Reducers | Concentric & Eccentric | Remax",
    "description": "ASME B16.9 concentric and eccentric buttweld reducers. Schedule 10 to XXS in ASTM A234 WPB, SS 316, and Alloy Steel. Factory hydro-tested with 3.1 MTC.",
    "h1": "Butt Weld Reducers Fittings"
  },
  "/products/buttweld-fittings/butt-weld-tee-fittings/": {
    "title": "Butt Weld Tee Fittings | Straight & Reducing | Remax",
    "description": "Seamless and fabricated buttweld straight and reducing tees per ASME B16.9. Sizes 1/2\" to 36\" in WPB, WP316L, and Duplex 2205. Certified quality from Mumbai.",
    "h1": "Butt Weld Tee Fittings"
  },
  "/brochure/": {
    "title": "Download Technical Product Catalog (PDF) | Remax Forge",
    "description": "Download the complete Remax Forge & Fittings technical catalog. ASME dimensions, weight charts, material grades (A105, SS 316, Duplex), and flange ratings.",
    "h1": "Remax Technical Product Brochure"
  },
  "/career/": {
    "title": "Careers at Remax Forge & Fittings | Job Openings Mumbai",
    "description": "Join the engineering and forging team at Remax Forge & Fittings. Current job vacancies in production, CNC machining, sales engineering, and quality control.",
    "h1": "Careers at Remax Forge & Fittings"
  },
  "/certification/": {
    "title": "Certifications & Approvals | ISO 9001:2015 | Remax Forge",
    "description": "Remax Forge quality accreditations: ISO 9001:2015, IBR approval, PED 2014/68/EU compliance, and third-party inspection certifications from TUV, SGS & DNV.",
    "h1": "Accreditations & Certificates"
  },
  "/certificates/": {
    "title": "Certifications & Approvals | ISO 9001:2015 | Remax Forge",
    "description": "Remax Forge quality accreditations: ISO 9001:2015, IBR approval, PED 2014/68/EU compliance, and third-party inspection certifications from TUV, SGS & DNV.",
    "h1": "Accreditations & Certificates"
  },
  "/export/uae/": {
    "title": "Flange Supplier UAE & Middle East | ASME B16.5 | Remax",
    "description": "Leading manufacturer exporting ASME B16.5 flanges & forged fittings to UAE (Dubai, Abu Dhabi, Sharjah). ADNOC compliant, EN 10204 3.1 MTC. Rapid sea freight.",
    "h1": "Flange Supplier & Exporter to United Arab Emirates"
  },
  "/export/usa/": {
    "title": "Flange Supplier United States | ASME / ANSI | Remax Forge",
    "description": "Exporting ASME B16.5 / B16.47 flanges and fittings to USA (Houston, New Orleans, Gulf Coast). Domestic EPC compliance, EN 10204 3.1 MTC, competitive pricing.",
    "h1": "Flange Supplier & Exporter to United States"
  },
  "/oil-gas-pipe-fittings/": {
    "title": "Oil & Gas Pipe Fittings & Flanges | NACE MR0175 | Remax",
    "description": "Forged fittings and flanges for upstream and downstream oil & gas projects. Sour service (NACE MR0175) and high-yield alloys in stock. Fast RFQ quotes.",
    "h1": "Oil & Gas Pipe Fittings & Flanges"
  },
  "/tech-info/pipe-dimensions/": {
    "title": "Pipe Dimensions & Schedule Chart | ANSI B36.10 | Remax",
    "description": "Comprehensive ANSI/ASME B36.10M and B36.19M pipe dimensions chart. Outer diameters, wall thicknesses, and internal diameters from NPS 1/8 to NPS 36.",
    "h1": "Pipe Dimensions & Schedule Chart"
  },
  "/tech-info/dimension-chart/": {
    "title": "Flange Dimension Chart | ASME B16.5 Classes | Remax Forge",
    "description": "Complete ASME B16.5 flange dimension tables for Class 150 to 2500#. Outer diameters, bolt circle diameters, hole counts, and thicknesses from 1/2\" to 24\".",
    "h1": "Flange Dimension Chart"
  },
  "/pipe-fittings-manufacturer-india/": {
    "title": "Pipe Fittings Manufacturer in India | Remax Forge",
    "description": "Leading ISO 9001 manufacturer of buttweld and forged pipe fittings in Mumbai, India. Exporting ASTM A234 WPB, SS 316, and Duplex fittings to 45+ countries.",
    "h1": "Pipe Fittings Manufacturer in India"
  },
  "/buttweld-fittings-exporter-india/": {
    "title": "Buttweld Fittings Exporter India | ASME B16.9 | Remax",
    "description": "Premier Indian exporter of ASME B16.9 seamless buttweld elbows, tees, and reducers. Serving oil & gas, refineries, and EPC clients in USA, UAE, and Europe.",
    "h1": "Buttweld Fittings Exporter India"
  },
  "/blogs/weld-neck-vs-slip-on-flange/": {
    "title": "Weld Neck vs Slip-On Flange: Strength & Cost Guide | Remax",
    "description": "Compare Weld Neck (WNRF) vs Slip-On (SORF) flanges. Analysis of fatigue strength, welding costs, pressure limits (ASME B16.5), and engineering selection.",
    "h1": "Weld Neck vs. Slip-On Flange: Strength, Fatigue & Cost Analysis"
  },
  "/blogs/a105-vs-a350-lf2/": {
    "title": "ASTM A105 vs A350 LF2: Low Temp Steel Comparison | Remax",
    "description": "ASTM A105 vs A350 LF2 comparison for piping engineers. Impact testing (-46°C Charpy V-notch), chemistry, heat treatment, ASME B31.3 low-temp selection.",
    "h1": "ASTM A105 vs. ASTM A350 LF2: Low-Temperature Comparison"
  },
  "/blogs/duplex-vs-super-duplex/": {
    "title": "Duplex vs Super Duplex Stainless Steel Guide | Remax",
    "description": "Duplex 2205 vs Super Duplex 2507 comparison. PREN numbers, pitting resistance, yield strength, seawater corrosion, and offshore piping specification.",
    "h1": "Duplex vs. Super Duplex Stainless Steel: PREN, Strength & Corrosion"
  },
  "/blogs/ibr-approved-fittings-guide/": {
    "title": "IBR Approved Pipe Fittings Guide: Rules & MTC | Remax",
    "description": "Complete guide to IBR approved pipe fittings and flanges. Form III-C, Form IV-A, inspection procedures, and steam piping compliance under IBR 1950.",
    "h1": "The Complete Guide to IBR Approved Pipe Fittings & Flanges"
  },
  "/blogs/mtc-en10204-explained/": {
    "title": "EN 10204 MTC Guide: 2.1, 2.2, 3.1 & 3.2 Differences | Remax",
    "description": "Understand EN 10204 inspection documents: 2.1, 2.2, 3.1, and 3.2 Mill Test Certificates. Traceability, chemical analysis, and 3rd-party inspection rules.",
    "h1": "MTC EN 10204 Explained: 2.1, 2.2, 3.1 & 3.2 Certificates"
  },
  "/blogs/flange-pressure-class-guide/": {
    "title": "Flange Pressure Classes: 150# to 2500# Guide | Remax",
    "description": "ASME B16.5 flange pressure classes explained: 150, 300, 600, 900, 1500, and 2500#. Pressure-temperature ratings, hydrostatic test rules, and selection.",
    "h1": "Flange Pressure Classes Explained: Class 150 to 2500#"
  },
  "/blogs/flange-face-types/": {
    "title": "Flange Face Types: RF, FF, RTJ & T&G Guide | Remax Forge",
    "description": "Guide to flange facing types: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), and Tongue & Groove. Gasket compatibility and surface finish rules.",
    "h1": "Flange Face Types Explained: RF, FF, RTJ & Tongue-and-Groove"
  },
  "/blogs/asme-b16-5-vs-b16-47/": {
    "title": "ASME B16.5 vs B16.47 Flange Standard Guide | Remax Forge",
    "description": "ASME B16.5 vs ASME B16.47 comparison for piping engineers. Size limits (up to NPS 24 vs NPS 60), Series A vs Series B differences, and bolting requirements.",
    "h1": "ASME B16.5 vs. ASME B16.47: Complete Standards Comparison"
  },
  "/blogs/hardox-400-vs-450/": {
    "title": "Hardox 400 vs Hardox 450: Wear Plate Comparison | Remax",
    "description": "Hardox 400 vs Hardox 450 wear plate comparison: Brinell hardness, yield strength, impact toughness, weldability, and heavy mining liner service life.",
    "h1": "Hardox 400 vs. Hardox 450: Hardness & Wear Life Comparison"
  }
}

# Also generate no-slash versions
full_new_entries = {}
for path, meta in new_meta_entries.items():
    full_new_entries[path] = meta
    no_slash = path.rstrip('/')
    if no_slash:
        full_new_entries[no_slash] = meta

# Helper to shorten title and description
def clean_title(title):
    if len(title) <= 60:
        return title
    # replace common long suffixes
    t = title.replace(" | Remax Forge & Fittings", " | Remax Forge")
    t = t.replace(" Industry | ASME B16.5", " | ASME B16.5")
    t = t.replace(" Manufacturer in India", " Manufacturer India")
    t = t.replace(" Forged Flange Manufacturing", " Forged Flanges")
    t = t.replace(" — Machined to Your Drawing", "")
    t = t.replace(" | Remax Forge", " | Remax")
    if len(t) > 60:
        # truncate at last space before 57 + ...
        t = t[:57].rsplit(' ', 1)[0] + ' | Remax'
        if len(t) > 60:
            t = t[:60]
    return t

def clean_desc(desc):
    if len(desc) <= 160:
        return desc
    d = desc.replace(" — forged and tested in-house in Mumbai. EN 10204 3.1 MTC, 3rd-party inspection (SGS/Lloyd's/DNV) available on request. Quote in 30 minutes.", ". ASME B16.5 compliant, EN 10204 3.1 MTC, tested in Mumbai. Quote in 30 min.")
    d = d.replace("Forged blind flanges engineered for ", "Forged blind flanges for ")
    d = d.replace("Forged weld neck flanges engineered for ", "Forged weld neck flanges for ")
    d = d.replace("Forged slip-on flanges engineered for ", "Forged slip-on flanges for ")
    d = d.replace("service. ASME B16.5 compliant, EN 10204 3.1 MTC, 3rd-party inspection available. Mumbai manufacturer, 45+ country exports. Quote in 30 min.", "service. ASME B16.5, EN 10204 3.1 MTC, 3rd-party inspection. 45+ exports. 30-min quote.")
    if len(d) > 160:
        d = d[:157].rsplit(' ', 1)[0] + '...'
    return d

print("Updating sheet4MetaData.js...")
with open("src/assets/data/sheet4MetaData.js", "r", encoding="utf-8") as f:
    s4 = f.read()

# Trim existing long titles and descriptions in sheet4MetaData.js
def replacer_s4(match):
    prefix = match.group(1)
    key = match.group(2)
    body = match.group(3)
    
    # check if key in new entries
    if key in full_new_entries:
        entry = full_new_entries[key]
        return f'{prefix}"{key}": {{\n    "title": "{entry["title"]}",\n    "description": "{entry["description"]}",\n    "h1": "{entry["h1"]}"\n  }}'
    
    # Otherwise check title and description
    t_match = re.search(r'("title":\s*")([^"]*)(")', body)
    d_match = re.search(r'("description":\s*")([^"]*)(")', body)
    
    new_body = body
    if t_match:
        old_t = t_match.group(2)
        new_t = clean_title(old_t)
        new_body = new_body.replace(f'"title": "{old_t}"', f'"title": "{new_t}"')
    if d_match:
        old_d = d_match.group(2)
        new_d = clean_desc(old_d)
        new_body = new_body.replace(f'"description": "{old_d}"', f'"description": "{new_d}"')
        
    return f'{prefix}"{key}": {{{new_body}}}'

pattern = r'(\n\s*)["\'](/[^"\']*)["\']:\s*\{([^}]+)\}'
s4_updated = re.sub(pattern, replacer_s4, s4)

# Append any missing new entries before the closing };
entries_to_append = ""
for key, entry in full_new_entries.items():
    if f'"{key}":' not in s4_updated:
        entries_to_append += f',\n  "{key}": {{\n    "title": "{entry["title"]}",\n    "description": "{entry["description"]}",\n    "h1": "{entry["h1"]}"\n  }}'

if entries_to_append:
    # insert before the last };
    last_idx = s4_updated.rfind('};')
    s4_updated = s4_updated[:last_idx] + entries_to_append + '\n' + s4_updated[last_idx:]

with open("src/assets/data/sheet4MetaData.js", "w", encoding="utf-8") as f:
    f.write(s4_updated)

print("sheet4MetaData.js updated successfully!")

# Now update newFlangePagesData.js
print("Updating newFlangePagesData.js...")
with open("src/assets/data/newFlangePagesData.js", "r", encoding="utf-8") as f:
    nfd = f.read()

def replacer_nfd(match):
    prefix = match.group(1)
    key = match.group(2)
    body = match.group(3)
    
    if key in full_new_entries:
        entry = full_new_entries[key]
        body = re.sub(r'"title":\s*"[^"]*"', f'"title": "{entry["title"]}"', body)
        body = re.sub(r'"description":\s*"[^"]*"', f'"description": "{entry["description"]}"', body)
        return f'{prefix}"{key}": {{{body}}}'
        
    t_match = re.search(r'("title":\s*")([^"]*)(")', body)
    d_match = re.search(r'("description":\s*")([^"]*)(")', body)
    
    new_body = body
    if t_match:
        old_t = t_match.group(2)
        new_t = clean_title(old_t)
        new_body = new_body.replace(f'"title": "{old_t}"', f'"title": "{new_t}"')
    if d_match:
        old_d = d_match.group(2)
        new_d = clean_desc(old_d)
        new_body = new_body.replace(f'"description": "{old_d}"', f'"description": "{new_d}"')
        
    return f'{prefix}"{key}": {{{new_body}}}'

nfd_updated = re.sub(pattern, replacer_nfd, nfd)

with open("src/assets/data/newFlangePagesData.js", "w", encoding="utf-8") as f:
    f.write(nfd_updated)

print("newFlangePagesData.js updated successfully!")
