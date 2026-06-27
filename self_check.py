#!/usr/bin/env python3
"""
Toolflow 完整自查脚本
======================
检测所有历史 bug 和常见问题。运行: cd ~/toolspotr && python self_check.py
"""
import os, re, subprocess, sys

BASE = os.path.expanduser("~/toolspotr")
TOOLS = os.path.join(BASE, "tools")
ASSETS = os.path.join(BASE, "assets")
PASS = 0; FAIL = 0; WARN = 0

def ok(n):
    global PASS; PASS += 1; print(f"  ✅ {n}")
def fail(n, d=""):
    global FAIL; FAIL += 1; print(f"  ❌ {n} {d}")
def warn(n, d=""):
    global WARN; WARN += 1; print(f"  ⚠️  {n} {d}")

print("="*55)
print("  Toolflow 网站完整自查")
print("="*55)

# ── 1. JS 语法 ──
ap = os.path.join(ASSETS, "app.js")
r = subprocess.run(['node', '-c', ap], capture_output=True, text=True, timeout=10)
ok("JS语法") if r.returncode == 0 else fail("JS语法错误", r.stderr[:80])

with open(ap, 'r', encoding='utf-8') as f: js = f.read()

# ── 2. TOOLS 数组完整性 ──
# 检查所有条目是否在数组内（防止 ]; 提前关闭）
array_match = re.search(r"const TOOLS = \[(.*?)\];", js, re.DOTALL)
if not array_match: fail("TOOLS数组未找到"); sys.exit(1)

array_text = array_match.group(1)
array_ids = set(re.findall(r"id:'([^']+)'", array_text))

# 检查 ]; 后是否有条目
after_array = js[array_match.end():]
stray = re.findall(r"id:'([^']+)'", after_array[:300])
if stray: fail(f"数组外有条目: {stray}")
else: ok("TOOLS数组无外溢条目")

# ── 3. 工具文件数与数组数一致 ──
file_ids = set(f.replace('.html','') for f in os.listdir(TOOLS) if f.endswith('.html'))
missing_in_array = file_ids - array_ids
missing_in_files = array_ids - file_ids
if missing_in_array: fail(f"数组缺少工具: {sorted(missing_in_array)[:5]}")
if missing_in_files: fail(f"文件缺少数组条目: {sorted(missing_in_files)[:5]}")
if not missing_in_array and not missing_in_files:
    ok(f"工具数一致: {len(array_ids)} 数组 = {len(file_ids)} 文件")

# ── 4. 首页完整性 ──
hp = os.path.join(BASE, "index.html")
with open(hp, 'r', encoding='utf-8') as f: h = f.read()

# 4a. </html> 结尾
ok("首页以</html>结尾") if h.rstrip().endswith('</html>') else fail("首页未以</html>结尾")
after_html = h[h.rfind('</html>')+7:].strip()
if after_html: fail(f"</html>后有{len(after_html)}字符多余内容")
else: ok("</html>后无多余内容")

# 4b. 加载 JS/CSS
ok("加载app.js") if 'app.js' in h else fail("未加载app.js")
ok("加载style.css") if 'style.css' in h else fail("未加载style.css")

# 4c. 版本号
ok("JS版本号存在") if re.search(r'app\.js\?v=\d+', h) else fail("JS版本号缺失")
ok("CSS版本号存在") if re.search(r'style\.css\?v=\d+', h) else fail("CSS版本号缺失")

# 4d. 关键元素
for eid in ['tabBar', 'heroSearchInput', 'searchSuggest', 'hotGrid', 'favSection']:
    ok(f"元素 {eid} 存在") if f'id="{eid}"' in h else fail(f"元素 {eid} 缺失")

# 4e. 10 个分类
cats = ['dev','finance','security','design','writing','utility','health','math','fun','network']
for cat in cats:
    ok(f"分类 {cat} 存在") if h.count("data-cat=\"" + cat + "\"") == 1 else fail(f"分类 {cat} 出现次数不对", "应为1次")

# 4f. 计数一致性
hs_match = re.search(r'hs-num">(\d+)<', h)
if hs_match:
    hs_num = int(hs_match.group(1))
    ok(f"首页计数 {hs_num} = 实际 {len(file_ids)}") if hs_num == len(file_ids) else fail(f"首页计数 {hs_num} != 实际 {len(file_ids)}")

# 4g. SEO/社会化标签
ok("Schema.org结构化数据") if 'application/ld+json' in h else fail("缺少Schema结构化数据")
ok("Twitter卡片") if 'twitter:card' in h else fail("缺少Twitter卡片")
ok("OG标签") if 'og:title' in h else fail("缺少OG标签")
ok("PWA manifest") if 'manifest.json' in h else fail("缺少PWA manifest")
ok("主题色 meta") if 'theme-color' in h else fail("缺少theme-color")

# 4h. AdSense
ok("AdSense代码") if 'ca-pub-9946249937416673' in h else fail("缺少AdSense代码")

# 4i. 分类位于 tools-section 内
for cat in cats:
    idx = h.find(f'data-cat="{cat}"')
    section_before = h.rfind('<section', 0, idx)
    section_tag = h[section_before:section_before+30]
    if 'tools-section' not in section_tag and 'cross-section' not in section_tag:
        warn(f"分类 {cat} 不在 section 内")

# ── 5. CSS ──
sp = os.path.join(ASSETS, "style.css")
with open(sp, 'r', encoding='utf-8') as f: css = f.read()
opens = css.count('{'); closes = css.count('}')
ok("CSS大括号平衡") if opens == closes else fail(f"CSS大括号不平衡 {opens}/{closes}")

# 媒体查询去重
mqs = re.findall(r'@media[^{]*\{', css)
unique_mqs = set(mqs)
if len(mqs) != len(unique_mqs):
    warn(f"CSS重复媒体查询: {len(mqs)}个总, {len(unique_mqs)}个唯一")
else: ok("CSS无重复媒体查询")

for rule in ['fadeIn','scroll-top','hot-tag','fav-btn','share-btn','tab-bar','tool-grid-cards','hero-search-results','tcat.hidden']:
    if rule in css: ok(f"CSS规则 {rule}")
    else: warn(f"CSS规则 {rule} 缺失")

# ── 6. 工具页抽样 ──
samples = ['bmi-calculator','password-generator','qr-generator','gst-calculator','article-rewriter']
for sid in samples:
    fp = os.path.join(TOOLS, f"{sid}.html")
    if not os.path.exists(fp): warn(f"工具页 {sid}.html 不存在"); continue
    with open(fp, 'r', encoding='utf-8') as f: c = f.read()
    errs = []
    if 'ca-pub-9946249937416673' not in c: errs.append("无AdSense")
    if 'app.js' not in c: errs.append("无JS")
    if 'tool-box' not in c: errs.append("无工具框")
    if 'tool-page' not in c: errs.append("无页面结构")
    if errs: fail(f"{sid}.html", ', '.join(errs))
    else: ok(f"{sid}.html 完整")

# ── 7. PWA ──
ok("manifest.json存在") if os.path.exists(os.path.join(BASE, "manifest.json")) else fail("manifest.json缺失")
ok("sw.js存在") if os.path.exists(os.path.join(BASE, "sw.js")) else fail("sw.js缺失")
ok("ServiceWorker注册") if 'serviceWorker' in js or 'serviceWorker' in h else fail("ServiceWorker未注册")

# ── 8. 其他文件 ──
for f in ['ads.txt', 'robots.txt', 'sitemap.xml']:
    ok(f"{f}存在") if os.path.exists(os.path.join(BASE, f)) else fail(f"{f}缺失")

# ── 9. 没有 stray 文件 ──
for f in os.listdir(BASE):
    if f.endswith('.md') and f not in ['README.md'] and f != 'AGENTS.md':
        warn(f"Stray文件: {f}")

# ── 结果 ──
total = PASS + FAIL
print(f"\n{'='*55}")
print(f"  结果: ✅ {PASS} | ❌ {FAIL} | ⚠️  {WARN} | 总计 {total}")
if FAIL == 0:
    print(f"  🎉 网站状态完美！")
print(f"{'='*55}")
