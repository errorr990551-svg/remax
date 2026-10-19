custom_descs = {
    "/blogs/rtj-vs-raised-face-flange/": "Compare Ring Type Joint (RTJ) vs Raised Face (RF) flanges. High-pressure sealing mechanics, temperature ratings, gasket selection, and ASME B16.5 standards.",
    "/blogs/blind-flange-vs-spectacle-blind/": "Blind flange vs spectacle blind comparison. Permanent end closure vs positive line isolation for piping maintenance, turnaround safety, and ASME B16.48 rules.",
    "/blogs/threaded-vs-socket-weld-flange/": "Threaded vs socket weld flange comparison. Small-bore piping suitability, welding safety in explosive zones, pressure thresholds, and ASME B16.5 guidelines.",
    "/blogs/slip-on-vs-socket-weld-flange/": "Slip-on vs socket weld flange differences: internal bore fillet vs socket weld hub, fluid turbulence, fatigue resistance, and small vs large diameter lines.",
    "/blogs/lap-joint-vs-weld-neck-flange/": "Lap joint vs weld neck flange engineering guide. Stub end mating, cost savings with carbon steel backing on exotic alloy pipe, and bolt alignment ease.",
    "/blogs/blind-flange-vs-blank-flange/": "Blind flange vs blank flange terminology explained. ASME B16.5 bolted blind discs vs paddle blanks / spade blinds, testing methods, and piping specs."
}

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for url, desc in custom_descs.items():
        no_slash = url.rstrip('/')
        # pattern to replace description for this url
        for u in [url, no_slash]:
            # find block
            import re
            pattern = re.compile(rf'("{re.escape(u)}":\s*\{{[^}}]*"description":\s*")[^"]*(")', re.DOTALL)
            content = pattern.sub(rf'\g<1>{desc}\g<2>', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

update_file("src/assets/data/sheet4MetaData.js")
update_file("src/assets/data/newFlangePagesData.js")
