#!/usr/bin/env python3
"""
Toolflow 网站完整性自查脚本
============================
运行: python ~/toolspotr/self_check.py
检查内容:
  ✅ JS 语法
  ✅ TOOLS 数组 vs 实际文件数
  ✅ HTML 结构（标签嵌套）
  ✅ 所有分类 data-cat 属性
  ✅ 所有页面可访问性
  ✅ 分类 Tab 匹配
  ✅ 搜索功能
  ✅ CSS 关键规则
  ✅ AdSense 代码
  ✅ 版本一致性
"""

import os, re, sys, subprocess

ROOT = os.path.expanduser("~/toolspotr")
TOOLS_DIR = os.path.join(ROOT, "tools")
ASSETS_DIR = os.path.join(ROOT, "assets")
PASS = 0
FAIL = 0
WARN = 0

def check(name, condition, detail=""):
    global PASS, FAIL, WARN
    if condition:
        PASS += 1
        print(f"  ✅ {name}")
    else:
        FAIL += 1
        print(f"  ❌ {name} {detail}")

def warn(name, detail=""):
    global WARN
    WARN += 1
    print(f"  ⚠️  {name} {detail}")

print("=" * 55)
print("  Toolflow 网站完整性自查")
print("=" * 55)
print()

# ═══ 1. JS 语法检查 ═══
print("📄 [1/7] JavaScript 语法检查")
ap = os.path.join(ASSETS_DIR, "app.js")
if os.path.exists(ap):
    result = subprocess.run(['node', '-c', ap], capture_output=True, text=True, timeout=10)
    check("app.js 语法", result.returncode == 0, result.stderr[:100] if result.stderr else "")
else:
    check("app.js 存在", False, "文件不存在！")

# ═══ 2. TOOLS 数组 vs 实际文件 ═══
print("\n📁 [2/7] 工具数量一致性")
with open(ap, 'r', encoding='utf-8') as f:
    js = f.read()

tools_match = re.search(r"const TOOLS = \[(.*?)\];", js, re.DOTALL)
array_entries = set(re.findall(r"id:'([^']+)'", tools_match.group(1))) if tools_match else set()
html_files = set(f.replace('.html','') for f in os.listdir(TOOLS_DIR) if f.endswith('.html'))

check(f"TOOLS 数组: {len(array_entries)} 个", len(array_entries) > 0)
check(f"实际文件: {len(html_files)} 个", len(html_files) > 0)
check(f"两者数量一致", len(array_entries) == len(html_files),
      f"(数组={len(array_entries)}, 文件={len(html_files)})")

missing_in_array = html_files - array_entries
missing_in_files = array_entries - html_files
if missing_in_array:
    warn(f"数组缺少文件: {', '.join(sorted(missing_in_array)[:5])}")
if missing_in_files:
    warn(f"文件缺少数组条目: {', '.join(sorted(missing_in_files)[:5])}")

# ═══ 3. HTML 结构检查 ═══
print("\n🏗️  [3/7] HTML 结构检查")
hp = os.path.join(ROOT, "index.html")
with open(hp, 'r', encoding='utf-8') as f:
    html = f.read()

# Category div balance
cats = ['dev', 'finance', 'security', 'design', 'writing', 'utility', 'health', 'math', 'fun', 'network']
all_ok = True
for cat in cats:
    start = html.find(f'<div class="tcat" data-cat="{cat}">')
    if start < 0:
        warn(f"分类 {cat} 未找到")
        all_ok = False
        continue
    rest = html[start:]
    import re as re2
    endpoints = [rest.find(f'<div class="tcat" data-cat="{c}">') for c in cats if c != cat]
    endpoints.append(rest.find('<!-- Most Used Today -->'))
    endpoints = [e for e in endpoints if e >= 0]
    end = min(endpoints) if endpoints else len(rest)
    section = rest[:end]
    opens = len(re2.findall(r'<div\b', section))
    closes = len(re2.findall(r'</div>', section))
    if opens != closes:
        warn(f"分类 {cat} div 不平衡: {opens}开/{closes}关")
        all_ok = False
if all_ok:
    check("全部 10 个分类 div 平衡", True)

# Tab bar
check("tabBar 元素存在", 'id="tabBar"' in html)
check("搜索栏存在", 'id="heroSearchInput"' in html)
check("搜索建议存在", 'id="searchSuggest"' in html)
check("收藏区存在", 'id="favSection"' in html)
check("今日热门存在", 'id="hotGrid"' in html)
check("hero-stats 存在", 'hero-stats' in html)
check(f"计数正确", f'hs-num\">{len(html_files)}<' in html)

# ═══ 4. 分类 Tab 匹配 ═══
print("\n🔖 [4/7] 分类 Tab 匹配检查")
tab_keys = set(re.findall(r"data-cat='([^']+)'", js))
tcat_keys = set()
for cat in cats:
    if f'data-cat="{cat}"' in html:
        tcat_keys.add(cat)
missing_tabs = tcat_keys - tab_keys
missing_tcats = tab_keys - tcat_keys - {'all'}
if missing_tabs:
    warn(f"HTML有但Tab无: {missing_tabs}")
if missing_tcats:
    warn(f"Tab有但HTML无: {missing_tcats}")
if not missing_tabs and not missing_tcats:
    check("分类 Tab 与 HTML 完全匹配", True)

# ═══ 5. 工具页面可访问性检查 ═══
print("\n🔗 [5/7] 工具页面抽样检查")
# Check a random sample of tool pages
all_tools = sorted(html_files)
sample = all_tools[:5] + all_tools[len(all_tools)//2:len(all_tools)//2+3] + all_tools[-5:]
for tool_id in sample:
    fp = os.path.join(TOOLS_DIR, f"{tool_id}.html")
    if not os.path.exists(fp):
        check(f"{tool_id}.html 存在", False)
        continue
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    errors = []
    if 'ca-pub-9946249937416673' not in content:
        errors.append("缺AdSense")
    if 'app.js' not in content:
        errors.append("缺app.js")
    if 'nav' not in content:
        errors.append("缺导航")
    check(f"{tool_id}.html ({' '.join(errors) if errors else '完整'})", not errors, '|'.join(errors))

# ═══ 6. CSS 关键规则 ═══
print("\n🎨 [6/7] CSS 关键规则检查")
sp = os.path.join(ASSETS_DIR, "style.css")
with open(sp, 'r', encoding='utf-8') as f:
    css = f.read()
checks_css = {
    "themePanel 隐藏": ".theme-panel{display:none" in css.replace(' ', ''),
    "tcat.hidden": ".tcat.hidden{display:none" in css.replace(' ', ''),
    "hot-tag 样式": ".hot-tag" in css,
    "scroll-top": ".scroll-top" in css,
    "淡入动画": "fadeIn" in css,
    "科技动画": "heroGlow" in css or "gradientShift" in css,
    "收藏按钮": "fav-btn" in css,
    "复制链接": "copy-link-btn" in css,
}
for name, ok in checks_css.items():
    check(f"CSS: {name}", ok)

# ═══ 7. 版本与关键功能 ═══
print("\n⚙️  [7/7] 关键功能检查")
checks_func = {
    "applyTheme": "function applyTheme" in js,
    "applyLang": "function applyLang" in js,
    "initSearch": "function initSearch" in js,
    "initControls": "function initControls" in js,
    "initTabs": "initTabs" in js,
    "initHotTags": "initHotTags" in js,
    "initHotGrid": "initHotGrid" in js,
    "initFavKeys": "initFavKeys" in js,
    "initToolPage": "initToolPage" in js,
    "initScrollTop": "initScrollTop" in js,
    "populateCategories": "populateCategories" in js,
}
for name, ok in checks_func.items():
    check(f"函数: {name}", ok)

# TOOL_COUNT auto
check("TOOL_COUNT = TOOLS.length", "TOOL_COUNT = TOOLS.length" in js)

# Version check
has_version = bool(re.search(r'app\.js\?v=\d+', html))
check("JS 版本号", has_version)

# AdSense on homepage
check("首页 AdSense 代码", 'ca-pub-9946249937416673' in html)

# i18n text
check("中文 100+", "100+ 免费在线工具" in js)
check("英文 100+", "100+ free online tools" in html)

# ads.txt
ads_path = os.path.join(ROOT, "ads.txt")
check("ads.txt 存在", os.path.exists(ads_path))
if os.path.exists(ads_path):
    with open(ads_path) as f:
        check("ads.txt 含发布商ID", 'pub-9946249937416673' in f.read())

# robots.txt
check("robots.txt 存在", os.path.exists(os.path.join(ROOT, "robots.txt")))

print()
print("=" * 55)
total = PASS + FAIL
print(f"  结果: ✅ {PASS} 通过 | ❌ {FAIL} 失败 | ⚠️  {WARN} 警告")
if FAIL == 0:
    print("  🎉 网站状态完美！")
else:
    print(f"  🔧 需要修复 {FAIL} 个问题")
print("=" * 55)
