import re
import html

def get_main(path):
    with open(path, 'r', encoding='utf-8') as f:
        h = f.read()
    m = re.search(r"<main\b.*?</main>", h, re.S | re.I)
    h = m.group(0) if m else h
    h = re.sub(r"<(script|style|noscript|svg|template)\b.*?</\1>", " ", h, flags=re.S | re.I)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))

def shingles(t, n=5):
    w = re.findall(r"[a-z0-9]+", t.lower())
    return {tuple(w[i:i + n]) for i in range(len(w) - n + 1)}

v_text = get_main('dist/visakhapatnam/index.html')
w_text = get_main('dist/vijayawada/index.html')

v_sh = shingles(v_text)
w_sh = shingles(w_text)

common = v_sh & w_sh
print(f"Visakhapatnam words: {len(v_text.split())}, shingles: {len(v_sh)}")
print(f"Vijayawada words: {len(w_text.split())}, shingles: {len(w_sh)}")
print(f"Common shingles: {len(common)}")

print("\nSample common 5-word shingles:")
for s in list(common)[:25]:
    print(" ", " ".join(s))
