import os,re,json,collections,sys
from bs4 import BeautifulSoup
D='dist'; pages={}
for root,_,fs in os.walk(D):
    if 'index.html' not in fs or '/assets' in root: continue
    url='/'+os.path.relpath(root,D).replace('.','')+'/' if root!=D else '/'
    url=url.replace('//','/')
    s=BeautifulSoup(open(os.path.join(root,'index.html'),encoding='utf8').read(),'html.parser')
    if s.find('meta',attrs={'name':'robots','content':re.compile('noindex')}): continue
    for t in s(['script','style','nav','footer','noscript','svg','header']): t.decompose()
    body=s.body or s
    blocks=[]
    for el in body.find_all(['p','li','h1','h2','h3','h4','td','th','dd','dt','summary','span','a','div']):
        if el.find(['p','li','h1','h2','h3','h4','td','th','div','ul','table']): continue
        t=' '.join(el.get_text(' ').split())
        if len(t)>2: blocks.append(t)
    slug=url.strip('/').split('/')[-1] if url!='/' else ''
    names=[w for w in re.split('[-_]',slug) if len(w)>2]
    norm=[]
    for b in blocks:
        n=b.lower()
        name=' '.join(names)
        if name: n=n.replace(name,'{x}')
        norm.append(re.sub(r'\d+','#',n))
    pages[url]=(blocks,norm,(s.title.string if s.title else '').strip())
freq=collections.Counter()
for u,(b,n,_) in pages.items(): freq.update(set(n))
N=len(pages); out=[]
for u,(b,n,t) in pages.items():
    total=sum(len(x.split()) for x in b)
    uniq=sum(len(x.split()) for x,y in zip(b,n) if freq[y]<=3)
    out.append((uniq,total,u,t))
out.sort()
json.dump(out,open(sys.argv[1],'w'))
print('pages',N)
for o in out[:15]: print(o)
