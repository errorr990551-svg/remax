#!/usr/bin/env python3
# Remax Forge city-page QA - Python 3 standard library only. Run: python3 qa_city_pages.py [BASE_URL]
# Exit code 0 = every page PASS, 1 = at least one FAIL. Re-run after every deploy (tab 16, ticket C-14).
import html, itertools, json, re, sys, urllib.request

BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://remaxforge.com").rstrip("/")
CANON_HOST = "https://remaxforge.com"          # canonicals must always point here, whatever BASE is
PAGES = {                                       # path: word floor (tab 6, column N)
    "/visakhapatnam/": 1400,
    "/vijayawada/": 1100,
    "/guntur/": 1050,
    "/nellore/": 1050,
    "/kurnool/": 1000,
    "/itanagar/": 900,
    "/market-area/andhra-pradesh/": 550,
    "/market-area/arunachal-pradesh/": 450,
    "/market-area/": 50,
}
CITY = ["/visakhapatnam/", "/vijayawada/", "/guntur/", "/nellore/", "/kurnool/", "/itanagar/"]
FORBID = re.compile(r'tel:|wa\.me|whatsapp|"telephone"|9[ -]?7[ -]?6[ -]?9[ -]?9[ -]?8[ -]?3[ -]?1[ -]?0[ -]?8', re.I)
MARKER = re.compile(r"\[(CLIENT|CONFIRM|DEV)")
UNIQ_MIN, SIM_WARN, SIM_FAIL = 0.65, 0.25, 0.35


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (RemaxQA)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, r.geturl(), r.read().decode("utf-8", "replace")


def attr(tag, name):
    m = re.search(r"\b" + name + r"\s*=\s*[\"']([^\"']*)[\"']", tag, re.I)
    return m.group(1).strip() if m else ""


def main_text(h):
    m = re.search(r"<main\b.*?</main>", h, re.S | re.I)
    h = m.group(0) if m else h
    h = re.sub(r"<(script|style|noscript|svg|template)\b.*?</\1>", " ", h, flags=re.S | re.I)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))


def shingles(t, n=5):
    w = re.findall(r"[a-z0-9]+", t.lower())
    return {tuple(w[i:i + n]) for i in range(len(w) - n + 1)}


def bad_links(h):
    out = []
    for href in re.findall(r"href\s*=\s*[\"']([^\"'#?]+)", h, re.I):
        if href.startswith(CANON_HOST):
            path = href[len(CANON_HOST):] or "/"
        elif href.startswith("/") and not href.startswith("//"):
            path = href
        else:
            continue
        if not path.endswith("/") and "." not in path.rsplit("/", 1)[-1]:
            out.append(path)
    return sorted(set(out))


fails, texts = 0, {}
for path, floor in PAGES.items():
    url = BASE + path
    try:
        code, final, h = fetch(url)
    except Exception as e:
        print("FAIL  %-34s could not fetch: %s" % (path, e))
        fails += 1
        continue
    text = main_text(h)
    words = len(text.split())
    if path in CITY:
        texts[path] = shingles(text)
    m = re.search(r"<title[^>]*>(.*?)</title>", h, re.S | re.I)
    title = html.unescape(m.group(1)).strip() if m else ""
    canon = [attr(t, "href") for t in re.findall(r"<link\b[^>]*>", h, re.I) if attr(t, "rel").lower() == "canonical"]
    robots = " ".join(attr(t, "content") for t in re.findall(r"<meta\b[^>]*>", h, re.I) if attr(t, "name").lower() == "robots")
    ld_ok = True
    for block in re.findall(r"<script[^>]*application/ld\+json[^>]*>(.*?)</script>", h, re.S | re.I):
        try:
            json.loads(block)
        except ValueError:
            ld_ok = False
    links = bad_links(h)
    checks = [
        ("HTTP 200 at the slash URL, no redirect", code == 200 and final == url),
        ("exactly one <h1>", len(re.findall(r"<h1\b", h, re.I)) == 1),
        ("title 30-60 characters (now %d)" % len(title), 30 <= len(title) <= 60),
        ("one canonical = " + CANON_HOST + path, canon == [CANON_HOST + path]),
        ("indexable (no noindex)", "noindex" not in robots.lower()),
        ("no phone number, tel:, WhatsApp or telephone", not FORBID.search(h)),
        ("no [CLIENT] / [CONFIRM] / [DEV] markers", not MARKER.search(h)),
        ("quote form id=rfq present", re.search(r"id\s*=\s*[\"']rfq[\"']", h) is not None),
        ("JSON-LD blocks parse", ld_ok),
        ("internal links in slash form %s" % (links[:3] if links else ""), not links),
        ("words in <main> >= %d (now %d)" % (floor, words), words >= floor),
    ]
    bad = [name for name, ok in checks if not ok]
    fails += 1 if bad else 0
    print("%s  %-34s %5d words  %s" % ("FAIL" if bad else "PASS", path, words, "; ".join(bad)))

print("\nUniqueness between city pages (5-word shingles):")
for p in texts:
    others = set().union(*[texts[o] for o in texts if o != p]) if len(texts) > 1 else set()
    share = 1 - len(texts[p] & others) / max(1, len(texts[p]))
    flag = "PASS" if share >= UNIQ_MIN else "FAIL"
    fails += flag == "FAIL"
    print("%s  %-34s unique share %.1f%%" % (flag, p, 100 * share))
for a, b in itertools.combinations(texts, 2):
    sim = len(texts[a] & texts[b]) / max(1, len(texts[a] | texts[b]))
    flag = "FAIL" if sim > SIM_FAIL else "WARN" if sim > SIM_WARN else "ok"
    fails += flag == "FAIL"
    if flag != "ok":
        print("%s  %s vs %s similarity %.3f" % (flag, a, b, sim))
print("\nRESULT:", "PASS" if fails == 0 else "FAIL (%d)" % fails)
sys.exit(1 if fails else 0)
