#!/usr/bin/env python3
"""Toolflow self-check script - run with: python ~/toolspotr/self_check.py"""
import os, re, sys, subprocess

ROOT = os.path.expanduser("~/toolspotr")
TOOLS_DIR = os.path.join(ROOT, "tools")
ASSETS_DIR = os.path.join(ROOT, "assets")
PASS=0; FAIL=0; WARN=0

def check(n,c,d=""):
    global PASS,FAIL,WARN
    if c: PASS+=1; print(f"  ✅ {n}")
    else: FAIL+=1; print(f"  ❌ {n} {d}")
def warn(n,d=""):
    global WARN; WARN+=1; print(f"  ⚠️  {n} {d}")

print("="*50+"\n  Toolflow Self-Check\n"+"="*50+"\n")

# 1. JS syntax
ap=os.path.join(ASSETS_DIR,"app.js")
r=subprocess.run(['node','-c',ap],capture_output=True,text=True,timeout=10)
check("JS syntax",r.returncode==0,r.stderr[:80])

# 2. Tool count
with open(ap,'r',encoding='utf-8') as f: js=f.read()
arr=set(re.findall(r"id:'([^']+)'",re.search(r"const TOOLS\s*=\s*\[(.*?)\];",js,re.DOTALL).group(1)))
files=set(f.replace('.html','') for f in os.listdir(TOOLS_DIR) if f.endswith('.html'))
check(f"Array: {len(arr)} files: {len(files)}",len(arr)==len(files),f"Δ:{files-arr}")

# 3. HTML structure
hp=os.path.join(ROOT,"index.html")
with open(hp,'r',encoding='utf-8') as f: html=f.read()
cats=['dev','finance','security','design','writing','utility','health','math','fun','network']
all_ok=True
for cat in cats:
    s=html.find(f'<div class="tcat" data-cat="{cat}">')
    if s<0: warn(f"{cat} missing"); continue
    rest=html[s:]; ep=[rest.find(f'<div class="tcat" data-cat="{c}">') for c in cats if c!=cat]
    ep.append(rest.find('</section>')); ep=[e for e in ep if e>=0]
    sec=rest[:min(ep)] if ep else rest
    o=sec.count('<div'); c2=sec.count('</div>')
    if o!=c2: warn(f"{cat} div: {o}/{c2}"); all_ok=False
if all_ok: check("10 category div balance",True)

# Categories NOT inside Most Used Today
mut=html[html.find('mostUsed'):html.find('mostUsed')+1000]
bad=[c for c in cats if f'data-cat="{c}"' in mut]
if bad: warn(f"Cats inside MostUsed: {bad}")
else: check("No cats inside MostUsed",True)

# Security section
sec_s=html.find('<div class="tcat" data-cat="security">')
if sec_s>0:
    sec_e=html.find('<div class="tcat" data-cat="',sec_s+5)
    sec=html[sec_s:sec_e if sec_e>0 else sec_s+300]
    check("Security div balanced",sec.count('<div')==sec.count('</div>'))

# Populated categories check (JS-run)
import urllib.request as ur
try:
    resp = ur.urlopen("https://toolspotr.com/?cb=1", timeout=10)
    html_body = resp.read().decode('utf-8')
    card_count = len(re.findall(r'class="tcard"', html_body))
    if card_count > 0:
        check(f"Homepage has {card_count} tool cards", card_count >= 100)
    else:
        warn("No tool cards found - JS not populating")
except:
    warn("Could not fetch live site")

check("tabBar exists",'id="tabBar"' in html)
check("search input",'id="heroSearchInput"' in html)
check("hotGrid",'id="hotGrid"' in html)
check("hero-stats",'hero-stats' in html)
h_count=re.findall(r'hs-num">(\d+)<',html)
if h_count: check(f"Count {h_count[0]} = {len(files)}",int(h_count[0])==len(files))
check("Ends with </html>",html.rstrip().endswith('</html>'))
check("app.js loaded",'app.js' in html)

# 4. Tab matching
tab_keys=set(re.findall(r"data-cat='([^']+)'",js))
html_cats=set(cats)
if html_cats-tab_keys-{'all'}: warn(f"Tab mismatch: {html_cats-tab_keys-{'all'}}")
else: check("Category tab match",True)

# 5. Sample tool pages
samples=['age-calculator','barcode-generator','ip','word-counter']
for t in samples:
    fp=os.path.join(TOOLS_DIR,f"{t}.html")
    if not os.path.exists(fp): check(f"{t}.html exists",False); continue
    with open(fp,'r',encoding='utf-8') as f: c=f.read()
    e=[]
    if 'ca-pub-9946249937416673' not in c: e.append("noAdSense")
    if 'app.js' not in c: e.append("noJS")
    check(f"{t}.html",not e,' '.join(e))

# 6. CSS
sp2=os.path.join(ASSETS_DIR,"style.css")
with open(sp2,'r',encoding='utf-8') as f: css=f.read()
for k in ['fadeIn','scroll-top','hot-tag','fav-btn','tcat.hidden']:
    check(f"CSS: {k}",k in css)

# 7. Critical functions
for fn in ['applyTheme','applyLang','initSearch','initTabs','initHotTags','initHotGrid','initFavKeys','initScrollTop','populateCategories']:
    check(f"Fn: {fn}",fn in js)
check("TOOL_COUNT",'TOOL_COUNT=TOOLS.length' in js.replace(' ',''))
check("AdSense",'ca-pub-9946249937416673' in html)
check("ads.txt",os.path.exists(os.path.join(ROOT,"ads.txt")))
check("robots.txt",os.path.exists(os.path.join(ROOT,"robots.txt")))

print(f"\n{'='*50}\n  ✅ {PASS} | ❌ {FAIL} | ⚠️  {WARN}\n{'='*50}")
