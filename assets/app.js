

(function(){
'use strict';

const LANG = {
  en: {
    siteName: 'Toolflow', siteDesc: 'Free Online Tools for Developers',
    navTools: 'tools', searchPlaceholder: 'Search 100+ tools...',
    heroTitle: 'Your <span class="gradient">All-in-One Toolbox</span>',
    heroDesc: '100+ free online tools — all in your browser. Zero signups, instant results. <span class="speed-text">Constantly updated</span><span class="speed-cursor">|</span>',
    heroTools: 'Tools', heroCategories: 'Categories', heroAlways: 'Always Free',
    sectionAll: 'All Tools',
    devTools: 'Developer Tools', finance: 'Finance & Investment',
    security: 'Security & Privacy', utilities: 'Utilities',
    imageMedia: 'Image & Media', textWriting: 'Text & Writing',
    mostUsed: 'Most Used Today', uses: 'uses',
    comingSoon: 'Coming soon',
    footerText: '100+ free tools — all local, all private.',
    footerPrivacy: 'Your privacy matters — zero data leaves your device.',
    themeLabel: 'Theme', langLabel: 'Language',
    themeCosmic: 'Cosmic', themeLight: 'Light', themeOcean: 'Ocean',
    themeSunset: 'Sunset', themeForest: 'Forest',
    langEn: 'English', langZh: '中文',
    searchNoResults: 'No tools found', searchResults: 'results',
    ipLookup: 'IP Address Lookup', ipDesc: 'Find your public IP, location & ISP',
    jsonFmt: 'JSON Formatter', jsonDesc: 'Format, validate & compress JSON',
    barcode: 'Barcode Generator', barcodeDesc: 'EAN-13 barcodes in browser',
    pwdGen: 'Password Generator', pwdDesc: 'Create strong random passwords',
    jwtDecode: 'JWT Decoder', jwtDecodeDesc: 'Decode JWT tokens — header, payload & signature',
    htmlPrev: 'HTML Preview', htmlPrevDesc: 'Live preview HTML/CSS/JS editor',
    codeFmt: 'Code Formatter', codeFmtDesc: 'Beautify JSON, HTML, CSS & JavaScript',
    cssAnim: 'CSS Animation', cssAnimDesc: 'Generate CSS keyframes visually',
    cronGen: 'Cron Generator', cronGenDesc: 'Create cron expressions visually',
    whois: 'WHOIS Lookup', whoisDesc: 'Look up domain registration info',
    sslCheck: 'SSL/TLS Checker', sslCheckDesc: 'Check SSL certificate details',
    imgB64: 'Image to Base64', imgB64Desc: 'Convert images to Base64 data URIs',
    csvEdit: 'CSV Editor', csvEditDesc: 'View, sort & export CSV data in a table',
    subnet: 'Subnet Calculator', subnetDesc: 'Calculate IP subnet, CIDR & hosts',
    invCalc: 'Investment Calculator', invDesc: 'Compound interest & growth chart',
    dnsTest: 'DNS Leak Test', dnsDesc: 'Check if your VPN leaks DNS requests',
    loanCalc: 'Loan Calculator', loanDesc: 'Monthly payment & amortization schedule',
    base64: 'Base64 Encode/Decode', base64Desc: 'Encode text or files to Base64',
    uuid: 'UUID Generator', uuidDesc: 'Generate v4/v7 UUIDs in bulk',
    qrGen: 'QR Code Generator', qrDesc: 'Custom QR codes with colors & logo',
    colorPick: 'Color Picker', colorDesc: 'HEX/RGB/HSL/CMYK color converter',
    wordCount: 'Word Counter', wordDesc: 'Count words, chars, sentences & more',
    regex: 'Regex Tester', regexDesc: 'Test regular expressions in real-time',
    retire: 'Retirement Calculator', retireDesc: 'Plan your retirement savings',
    finger: 'Browser Fingerprint', fingerDesc: 'Check your browser fingerprint',
    portScan: 'Port Scanner', portScanDesc: 'Scan common ports for security',
    tzConv: 'Timezone Converter', tzConvDesc: 'Convert time across timezones',
    unitConv: 'Unit Converter', unitConvDesc: 'Length, weight, temperature converter',
    imgOpt: 'Image Optimizer', imgOptDesc: 'Compress PNG/JPG/WebP images',
    imgFmt: 'Image Format Converter', imgFmtDesc: 'Convert between image formats',
    svgOpt: 'SVG Optimizer', svgOptDesc: 'Clean and compress SVG files',
    mdEditor: 'Markdown Editor', mdEditorDesc: 'Live preview Markdown editor',
    diffCheck: 'Diff Checker', diffCheckDesc: 'Compare text & code differences',
    caseConv: 'Case Converter', caseConvDesc: 'Convert text between cases',
  },
  zh: {
    siteName: 'Toolflow', siteDesc: '免费在线开发者工具集',
    navTools: '工具', searchPlaceholder: '搜索工具...',
    heroTitle: '你的<span class="gradient">每日工具箱</span>',
    heroDesc: '100+ 免费在线工具：IP查询、JSON格式化、投资计算器、密码生成器等等，<span class="speed-text">持续更新中</span><span class="speed-cursor">|</span>',
    heroTools: '工具', heroCategories: '分类', heroAlways: '永久免费',
    sectionAll: '全部工具',
    devTools: '开发者工具', finance: '金融与投资',
    security: '安全与隐私', utilities: '实用工具',
    imageMedia: '图片与媒体', textWriting: '文本与写作',
    mostUsed: '今日热门', uses: '次使用',
    comingSoon: '即将上线',
    footerText: '免费在线开发者工具 &middot; 所有工具在浏览器本地运行，不上传任何数据',
    footerPrivacy: '你的隐私至关重要 — 零数据离开你的设备',
    themeLabel: '主题', langLabel: '语言',
    themeCosmic: '星河', themeLight: '明亮', themeOcean: '海洋',
    themeSunset: '日落', themeForest: '森林',
    langEn: 'English', langZh: '中文',
    searchNoResults: '未找到工具', searchResults: '个结果',
    ipLookup: 'IP 地址查询', ipDesc: '查看公网 IP、地理位置和 ISP',
    jsonFmt: 'JSON 格式化', jsonDesc: '格式化、验证和压缩 JSON',
    pwdGen: '密码生成器', pwdDesc: '创建高强度随机密码',
    jwtDecode: 'JWT 解码器', jwtDecodeDesc: '解析 JWT Token 的 Header、Payload、Signature',
    htmlPrev: 'HTML 预览', htmlPrevDesc: '实时预览 HTML/CSS/JS 代码效果',
    codeFmt: '代码格式化', codeFmtDesc: '美化 JSON、HTML、CSS、JavaScript 代码',
    cssAnim: 'CSS 动画', cssAnimDesc: '可视化创建 CSS 动画关键帧',
    cronGen: 'Cron 表达式', cronGenDesc: '可视化生成 Cron 定时任务表达式',
    whois: 'WHOIS 查询', whoisDesc: '查询域名注册信息和到期时间',
    sslCheck: 'SSL 证书检测', sslCheckDesc: '检测网站 SSL 证书详情和有效期',
    imgB64: '图片转 Base64', imgB64Desc: '将图片转换为 Base64 编码',
    csvEdit: 'CSV 编辑器', csvEditDesc: '以表格形式查看和排序 CSV 数据',
    subnet: '子网计算器', subnetDesc: '计算 IP 子网、CIDR 和可用主机数',
    invCalc: '投资计算器', invDesc: '复利计算与增长图表',
    dnsTest: 'DNS 泄露检测', dnsDesc: '检测 VPN 是否泄露 DNS 请求',
    loanCalc: '贷款计算器', loanDesc: '月供计算与还款计划表',
    base64: 'Base64 编解码', base64Desc: '文本或文件 Base64 编解码',
    uuid: 'UUID 生成器', uuidDesc: '批量生成 v4/v7 UUID',
    qrGen: '二维码生成器', qrDesc: '自定义二维码，支持颜色和 Logo',
    colorPick: '颜色选择器', colorDesc: 'HEX/RGB/HSL/CMYK 颜色转换',
    wordCount: '字数统计', wordDesc: '统计字数、字符数、句数和段落',
    regex: '正则测试器', regexDesc: '实时测试正则表达式',
    retire: '退休计算器', retireDesc: '规划退休储蓄目标',
    finger: '浏览器指纹', fingerDesc: '查看浏览器唯一指纹信息',
    portScan: '端口扫描', portScanDesc: '扫描常用端口检查安全',
    tzConv: '时区转换', tzConvDesc: '不同时区时间转换',
    unitConv: '单位转换', unitConvDesc: '长度、重量、温度转换',
    imgOpt: '图片压缩', imgOptDesc: '压缩 PNG/JPG/WebP 图片',
    imgFmt: '图片格式转换', imgFmtDesc: '图片格式互转',
    svgOpt: 'SVG 优化', svgOptDesc: '清理和压缩 SVG 代码',
    mdEditor: 'Markdown 编辑器', mdEditorDesc: '实时预览 Markdown',
    diffCheck: '差异对比', diffCheckDesc: '对比文本和代码差异',
    caseConv: '大小写转换', caseConvDesc: '多种大小写格式互转',
  }
};

var TOOLS = [];
var TOOLS_READY = false;
fetch('assets/tools.json').then(function(r){return r.json();}).then(function(data){
  TOOLS = data;
  TOOLS_READY = true;
  if(document.readyState==='complete'||document.readyState==='interactive'){
    populateCategories();
    if(typeof initHotGrid==='function') initHotGrid();
  }
}).catch(function(){console.log('Tools fetch failed, using backup');});

function populateCategories(){
  if(!TOOLS_READY){ setTimeout(populateCategories, 100); return; }
  var sec = document.getElementById('tcats');
  if(!sec) return;
  var cats = TOOLS.reduce(function(a,t){if(a.indexOf(t.cat)<0)a.push(t.cat);return a;},[]);
  var catsAll = ['dev','finance','security','design','writing','utility','health','math','fun','network'];

function getDaySeed(){
  var d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth()+1) * 100 + d.getDate();
}
function getUsageStats(){
  try {
    var raw = localStorage.getItem('tf_usage');
    return raw ? JSON.parse(raw) : {};
  } catch(e){ return {}; }
}
function getRecentTools(){
  try {
    var raw = localStorage.getItem('tf_recent');
    return raw ? JSON.parse(raw) : [];
  } catch(e){ return []; }
}
function renderHotTags(){
  var usage = getUsageStats();
  var suggest = document.getElementById('searchSuggest');
  if(!suggest) return;
  var day = getDaySeed();
  var scored = TOOLS.filter(function(t){ return t.ready; }).map(function(t, i){
    var used = usage[t.id] ? usage[t.id].count : 0;
    var daily = ((i * 7 + day) % 109) < 4 ? 3 : 0;
    return { tool: t, score: used * 2 + daily };
  });
  scored.sort(function(a,b){ return b.score - a.score; });
  var top = scored.slice(0, 8);
  suggest.innerHTML = '<span style="font-size:10px;color:var(--text-muted);margin-right:6px">🔥 </span>' +
    top.map(function(s){
      var t = s.tool;
      var lbl = t.key && LANG.en[t.key] ? LANG.en[t.key].split(' ')[0] : t.id.split('-')[0];
      return '<a href="' + t.url + '" class="hot-tag">' + t.icon + ' ' + lbl + '</a>';
    }).join('');
}

document.addEventListener('DOMContentLoaded', function(){
  try { applyTheme(currentTheme); } catch(e){}
  try { applyLang(currentLang); } catch(e){}
  try { initControls(); } catch(e){}
  try { initSearch(); } catch(e){}
  try { initStats(); } catch(e){}
  try { initCategoryTabs(); } catch(e){}
  try { initSearchHotTags(); } catch(e){}
  try { initRecentTools(); } catch(e){}
  setTimeout(function(){
    var tb = document.getElementById('tabBar');
    if(tb && !tb.children.length) try { initCategoryTabs(); } catch(e){}
  }, 300);
});

function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('tf_theme', t);
  currentTheme = t;
}

function initControls(){
  const themeBtn = document.getElementById('themeBtn');
  const themePanel = document.getElementById('themePanel');
  if(themeBtn && themePanel){
    themeBtn.addEventListener('click', function(e){
      e.stopPropagation();
      themePanel.classList.toggle('show');
      document.getElementById('langPanel')?.classList.remove('show');
    });
    document.querySelectorAll('.theme-opt').forEach(el => {
      el.addEventListener('click', function(){
        const t = this.dataset.theme;
        applyTheme(t);
        document.querySelectorAll('.theme-opt').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        themePanel.classList.remove('show');
      });
    });
    document.querySelector(`.theme-opt[data-theme="${currentTheme}"]`)?.classList.add('active');
  }

  const langBtn = document.getElementById('langBtn');
  const langPanel = document.getElementById('langPanel');
  if(langBtn && langPanel){
    langBtn.addEventListener('click', function(e){
      e.stopPropagation();
      langPanel.classList.toggle('show');
      document.getElementById('themePanel')?.classList.remove('show');
    });
    document.querySelectorAll('.lang-opt').forEach(el => {
      el.addEventListener('click', function(){
        const l = this.dataset.lang;
        applyLang(l);
        document.querySelectorAll('.lang-opt').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        langPanel.classList.remove('show');
        langBtn.innerHTML = l === 'en' ? 'EN' : '中';
      });
    });
    document.querySelector(`.lang-opt[data-lang="${currentLang}"]`)?.classList.add('active');
    langBtn.innerHTML = currentLang === 'en' ? 'EN' : '中';
  }

  document.addEventListener('click', function(){
    document.getElementById('themePanel')?.classList.remove('show');
    document.getElementById('langPanel')?.classList.remove('show');
  });
}

function applyLang(l){
  currentLang = l;
  localStorage.setItem('tf_lang', l);
  const t = LANG[l] || LANG.en;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(t[key] !== undefined){
      el.innerHTML = t[key];
    }
  });
  
  const searchInput = document.getElementById('heroSearchInput');
  if(searchInput){
    const word = l === 'zh' ? '个工具' : 'tools';
    searchInput.placeholder = (l === 'zh' ? '搜索 ' + TOOL_COUNT + ' ' + word : 'Search ' + TOOL_COUNT + ' ' + word);
  }
}

function initSearch(){
  const input = document.getElementById('heroSearchInput');
  const panel = document.getElementById('heroSearchResults');
  if(!input || !panel) return;
  
  const langWord = currentLang === 'zh' ? '个工具' : 'tools';
  input.placeholder = (currentLang === 'zh' ? '搜索 ' + TOOL_COUNT + ' ' + langWord : 'Search ' + TOOL_COUNT + ' ' + langWord);

  input.addEventListener('input', function(){
    const q = this.value.trim().toLowerCase();
    if(q.length < 1){ panel.classList.remove('show'); return; }

    const t = LANG[currentLang] || LANG.en;
    
    const results = TOOLS.filter(tool => {
      const name = (t[tool.key] || tool.key).toLowerCase();
      const tags = tool.tags.toLowerCase();
      const cat = tool.cat.toLowerCase();
      return name.includes(q) || tags.includes(q) || cat.includes(q);
    });

    if(results.length === 0){
      panel.innerHTML = `<div class="hsr-count" style="text-align:center;padding:16px;color:var(--text-muted)">🔍 ${t.searchNoResults}</div>`;
      panel.classList.add('show');
      return;
    }

    let html = `<div class="hsr-count">${results.length} ${t.searchResults}</div>`;
    const max = 8;
    results.slice(0, max).forEach(tool => {
      const name = t[tool.key] || tool.key;
      const desc = t[tool.key.replace(/[A-Z]/g, m => m.toLowerCase())+'Desc'] || '';
      const status = tool.ready ? '' : '<span class="hsr-item-tag">'+t.comingSoon+'</span>';
      html += `<a href="${tool.url}" class="hsr-item ${tool.ready?'':'tcard-soon'}">
        <span class="hsr-item-icon">${tool.icon}</span>
        <div class="hsr-item-info">
          <div class="hsr-item-name">${name}</div>
          <div class="hsr-item-desc">${desc}</div>
        </div>
        ${status}
      </a>`;
    });
    if(results.length > max){
      html += `<div class="hsr-count" style="text-align:center;color:var(--text-muted)">… ${results.length-max} more</div>`;
    }
    panel.innerHTML = html;
    panel.classList.add('show');
  });

  input.addEventListener('focus', function(){
    if(this.value.trim().length >= 1){
      this.dispatchEvent(new Event('input'));
    }
  });

  const clearBtn = document.getElementById('searchClearBtn');
  if(clearBtn){
    clearBtn.addEventListener('click', function(){
      input.value = '';
      input.focus();
      panel.classList.remove('show');
    });
  }

  document.addEventListener('keydown', function(e){
    if((e.metaKey || e.ctrlKey) && e.key === 'k'){
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ panel.classList.remove('show'); input.blur(); }
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.hero-search')) panel.classList.remove('show');
  });
}

(function initCookieConsent(){
  if(localStorage.getItem('tf_cookie_consent')) return;
  var banner = document.createElement('div');
  banner.className = 'cookie-bar';
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99999;padding:12px 20px;background:rgba(7,11,21,0.97);backdrop-filter:blur(12px);border-top:1px solid var(--border);font-size:13px;line-height:1.6;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap';
  banner.innerHTML = '<span style="color:var(--text-primary);font-size:12px">🍪 We use cookies for analytics and ads. <a href="privacy.html" style="color:var(--accent);text-decoration:none">Learn more</a></span>' +
    '<button class="cookie-accept" style="padding:6px 18px;border-radius:8px;background:var(--accent);color:#000;border:none;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap">Accept</button>' +
    '<button class="cookie-dismiss" style="padding:6px 12px;border-radius:8px;background:transparent;color:var(--text-muted);border:1px solid var(--border);font-size:12px;cursor:pointer;white-space:nowrap">Decline</button>';
  document.body.appendChild(banner);
  banner.querySelector('.cookie-accept').addEventListener('click', function(){
    localStorage.setItem('tf_cookie_consent', 'accepted');
    banner.remove();
  });
  banner.querySelector('.cookie-dismiss').addEventListener('click', function(){
    localStorage.setItem('tf_cookie_consent', 'declined');
    banner.remove();
  });
})();

(function initPwaInstall(){
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.createElement('div');
    banner.className = 'install-banner';
    banner.innerHTML = '<span>📲 Install Toolflow for quick access</span><button class="install-btn">Install</button><button class="install-dismiss">✕</button>';
    document.body.prepend(banner);
    banner.querySelector('.install-btn').addEventListener('click', () => {
      banner.remove();
      if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt.userChoice.then(() => deferredPrompt = null); }
    });
    banner.querySelector('.install-dismiss').addEventListener('click', () => banner.remove());
  });
  window.addEventListener('appinstalled', () => { console.log('Toolspotr installed!'); });
})();

function initSearchHotTags(){
  const suggest = document.getElementById('searchSuggest');
  if(!suggest) return;
  const tags = [
    {label:'JSON', icon:'📋', url:'tools/json-formatter.html'},
    {label:'Password', icon:'🔑', url:'tools/password-generator.html'},
    {label:'Base64', icon:'🔤', url:'tools/base64.html'},
    {label:'IP', icon:'🌐', url:'tools/ip.html'},
    {label:'QR', icon:'📱', url:'tools/qr-generator.html'},
    {label:'Color', icon:'🎨', url:'tools/color-picker.html'},
    {label:'UUID', icon:'🔀', url:'tools/uuid-generator.html'},
    {label:'BMI', icon:'⚕️', url:'tools/bmi-calculator.html'},
  ];
  suggest.innerHTML = '<span style="font-size:10px;color:var(--text-muted);margin-right:6px">🔥 </span>' +
    tags.map(t => '<a href="' + t.url + '" class="hot-tag">' + t.icon + ' ' + t.label + '</a>').join('');
}

function initRecentTools(){
  const favSection = document.getElementById('favSection');
  if(!favSection) return;
  let recent;
  try { recent = JSON.parse(localStorage.getItem('tf_recent') || '[]'); } catch(e){ recent = []; }
  if(!recent.length) return;
  document.querySelector('.recent-section')?.remove();
  const sec = document.createElement('div');
  sec.className = 'recent-section';
  sec.innerHTML = '<div class="section-header"><span class="section-icon">🕐</span><h2>Recently Used</h2></div><div class="fav-grid">' +
    recent.map(id => {
      const card = document.querySelector('.tcard[href*="' + id + '"]');
      if(!card) return '';
      const icon = card.querySelector('.tcard-icon')?.textContent || '🛠️';
      const title = card.querySelector('.tcard-title')?.textContent || id;
      return '<a href="tools/' + id + '.html" class="fav-card"><span>' + icon + '</span><span style="font-size:13px;font-weight:500">' + title + '</span></a>';
    }).filter(Boolean).join('') + '</div>';
  favSection.after(sec);
}

function initCategoryTabs(){
  const bar = document.getElementById('tabBar');
  if(!bar || !bar.children.length) return;
  
  bar.addEventListener('click', function(e){
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    
    const cat = btn.dataset.cat;
    
    bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if(cat === 'all'){
      document.querySelectorAll('.tcat').forEach(el => el.classList.remove('hidden'));
      document.querySelector('.cross-section')?.classList.remove('hidden');
      const favSec = document.getElementById('favSection');
      if(favSec) {
        const hasFavs = (JSON.parse(localStorage.getItem('tf_favs')||'[]')).length > 0;
        favSec.classList.toggle('show', hasFavs);
      }
      document.querySelector('.cross-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.querySelectorAll('.tcat').forEach(el => {
        el.classList.toggle('hidden', el.dataset.cat !== cat);
      });
      document.querySelector('.cross-section')?.classList.add('hidden');
      document.getElementById('favSection')?.classList.remove('show');
      const target = document.querySelector('.tcat[data-cat="' + cat + '"]');
      if(target){
        const y = target.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
  
  const hash = window.location.hash.replace('#','');
  if(hash){
    const targetBtn = bar.querySelector('[data-cat="' + hash + '"]');
    if(targetBtn) targetBtn.click();
  }
}

window.TOOLS = TOOLS; window.TOOL_COUNT = TOOL_COUNT; window.LANG = LANG;

function initStats(){
  const usage = getUsageStats();
  const recent = getRecentTools();
  
  const crossGrid = document.querySelector('.cross-grid');
  if(crossGrid && Object.keys(usage).length > 0){
    const cards = crossGrid.querySelectorAll('.cross-card');
    cards.forEach(card => {
      const name = card.querySelector('.cross-name')?.textContent?.toLowerCase().trim() || '';
      for(const [id, data] of Object.entries(usage)){
        if(data.name.toLowerCase().includes(name) || name.includes(id)){
          const countEl = card.querySelector('.cross-count');
          if(countEl) countEl.textContent = data.count + ' ' + (data.count === 1 ? 'use' : 'uses');
          break;
        }
      }
    });
  }

  const lastUpdate = parseInt(localStorage.getItem('tf_hot_date') || '0');
  const suggestEl = document.getElementById('searchSuggest');
  if(lastUpdate !== getDaySeed() || (suggestEl && !suggestEl.children.length)){
    renderHotTags();
  }
  
  window.addEventListener('storage', function(){
    if(parseInt(localStorage.getItem('tf_hot_date') || '0') !== getDaySeed()){
      renderHotTags();
    }
  });
}

(function initHotGrid(){
  const grid = document.getElementById('hotGrid');
  if(!grid) return;
  
  function renderHotGrid(){
    const usage = getUsageStats();
    
    const scored = TOOLS.filter(t => t.ready).map((t, i) => {
      const used = usage[t.id]?.count || 0;
      const dayNum = new Date().getDate();
      const daily = ((i * 3 + dayNum) % 109) < 12 ? 5 : 0;
      return { ...t, score: used * 2 + daily };
    });
    
    scored.sort((a,b) => b.score - a.score);
    const top = scored.slice(0, 12);
    
    grid.innerHTML = top.map(t => 
      `<a href="${t.url}" class="cross-card">
        <span class="cross-icon">${t.icon || '🛠️'}</span>
        <span class="cross-name">${t.id.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
        <span class="cross-count">${usage[t.id]?.count || 0} <span>uses</span></span>
      </a>`
    ).join('');
  }
  
  renderHotGrid();
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden) renderHotGrid();
  });
})();
(function initHeatSort(){
  const usage = getUsageStats();
  const cats = document.querySelectorAll('.tcat');
  if(!Object.keys(usage).length) return;
  cats.forEach(cat => {
    const grid = cat.querySelector('.tool-grid-cards');
    if(!grid) return;
    const cards = [...grid.querySelectorAll('.tcard')];
    cards.sort((a,b) => {
      const aid = a.getAttribute('href')?.match(/tools\/(.+)\.html/)?.[1] || '';
      const bid = b.getAttribute('href')?.match(/tools\/(.+)\.html/)?.[1] || '';
      const ac = usage[aid]?.count || 0;
      const bc = usage[bid]?.count || 0;
      return bc - ac;
    });
    cards.forEach(c => grid.appendChild(c));
  });
})();

(function initFavKeys(){
  function getFavs(){try{return JSON.parse(localStorage.getItem('tf_favs')||'[]')}catch(e){return[]}}
  function saveFavs(f){localStorage.setItem('tf_favs',JSON.stringify(f))}
  function toggleFav(id){
    let f=getFavs();const i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);saveFavs(f);renderFavs();renderFavBtns();}
  function isFaved(id){return getFavs().includes(id)}
  
  function renderFavBtns(){
    document.querySelectorAll('.fav-btn').forEach(b=>{
      const id=b.dataset.tool;b.classList.toggle('faved',isFaved(id));b.textContent=isFaved(id)?'★':'☆';
    });
  }
  
  function renderFavs(){
    const sec=document.getElementById('favSection'),grid=document.getElementById('favGrid'),cnt=document.getElementById('favCount');
    if(!sec)return;const f=getFavs();if(!f.length){sec.classList.remove('show');return;}
    sec.classList.add('show');cnt.textContent=f.length;
    grid.innerHTML=f.map(id=>{
      const card=document.querySelector(`.tcard[href*="${id}"]`);if(!card)return'';
      const icon=card.querySelector('.tcard-icon')?.textContent||'🛠️',title=card.querySelector('.tcard-title')?.textContent||id;
      return`<a href="tools/${id}.html" class="fav-card"><span>${icon}</span><span style="font-size:13px;font-weight:500">${title}</span></a>`;
    }).filter(Boolean).join('');
  }
  
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.tcard').forEach(card=>{
      const match=card.getAttribute('href')?.match(/tools\/(.+)\.html/);
      if(!match||card.querySelector('.fav-btn'))return;
      const id=match[1];
      const btn=document.createElement('button');
      btn.className='fav-btn'+(isFaved(id)?' faved':'');
      btn.dataset.tool=id;
      btn.textContent=isFaved(id)?'★':'☆';
      btn.onclick=function(e){e.preventDefault();e.stopPropagation();toggleFav(id);};
      card.style.position='relative';
      card.appendChild(btn);
    });
    renderFavs();
  });
  
  const searchInput = document.getElementById('heroSearchInput');
  document.addEventListener('keydown', function(e){
    if(e.key==='/' && !['INPUT','TEXTAREA'].includes(e.target.tagName)){e.preventDefault();searchInput?.focus();}
    if((e.ctrlKey||e.metaKey) && e.key==='k'){e.preventDefault();searchInput?.focus();}
    if(e.key==='Escape' && document.activeElement===searchInput){searchInput?.blur();document.getElementById('heroSearchResults').innerHTML='';}
  });
  searchInput?.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      const first=document.querySelector('#heroSearchResults a');
      if(first){window.location.href=first.getAttribute('href');}
    }
  });

  const tool = TOOLS.find(t => t.id === currentId);
  if(!tool) return;
  
  const header = document.querySelector('.tool-page-title');
  if(header){
    const btn = document.createElement('button');
    btn.className = 'copy-link-btn';
    btn.innerHTML = '🔗 Share';
    btn.title = 'Copy link to this tool';
    btn.onclick = function(){
      navigator.clipboard.writeText(window.location.href);
      this.innerHTML = '✅ Copied!';
      setTimeout(() => this.innerHTML = '🔗 Share', 2000);
    };
    header.parentElement?.querySelector('.tool-page-header')?.appendChild(btn);
  }
  
  const sameCat = TOOLS.filter(t => t.cat === tool.cat && t.id !== currentId && t.ready).slice(0, 10);
  if(sameCat.length){
    const bar = document.createElement('div');
    bar.className = 'tool-quick show';
    bar.innerHTML = `<span style="color:var(--text-muted);font-size:10px;padding:0 4px">${tool.cat === 'dev' ? '💻' : tool.cat === 'finance' ? '💰' : tool.cat === 'image' ? '🎨' : tool.cat === 'text' ? '✍️' : tool.cat === 'health' ? '🏥' : tool.cat === 'security' ? '🔒' : '🛠️'}</span>` +
      sameCat.map(t => `<a href="${t.url}" ${t.id===currentId?'class="active"':''}>${t.icon||'🛠️'} ${t.name||t.id.replace(/-/g,' ')}</a>`).join('');
    document.body.appendChild(bar);
  }
})();

(function initScrollTop(){
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.innerHTML = '↑';
  btn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 300);
  });
})();

(function initToolEnhance(){
  const path = window.location.pathname;
  if(!path.includes('/tools/')) return;
  
  const currentId = path.match(/\/tools\/(.+)\./);
  if(!currentId) return;
  const toolId = currentId[1];
  const tool = typeof TOOLS !== 'undefined' ? TOOLS.find(t => t.id === toolId) : null;
  
  try {
    let recent = JSON.parse(localStorage.getItem('tf_recent') || '[]');
    recent = [toolId, ...recent.filter(id => id !== toolId)].slice(0, 10);
    localStorage.setItem('tf_recent', JSON.stringify(recent));
    
    let usage = JSON.parse(localStorage.getItem('tf_usage') || '{}');
    if(!usage[toolId]) usage[toolId] = { count: 0 };
    usage[toolId].count++;
    localStorage.setItem('tf_usage', JSON.stringify(usage));
    localStorage.setItem('tf_hot_date', String(getDaySeed()));
  } catch(e){}
  
  const header = document.querySelector('.tool-page-header');
  if(header && !header.querySelector('.share-bar')){
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const shareBar = document.createElement('div');
    shareBar.className = 'share-bar';
    shareBar.style.cssText = 'display:flex;gap:6px;margin-top:8px;flex-wrap:wrap';
    shareBar.innerHTML =
      '<button class="share-btn" data-share="twitter" title="Share on X">𝕏</button>' +
      '<button class="share-btn" data-share="facebook" title="Share on Facebook">f</button>' +
      '<button class="share-btn" data-share="copy" title="Copy link">🔗</button>' +
      '<button class="share-btn" data-share="native" title="Share...">📤</button>';
    shareBar.addEventListener('click', function(e){
      const btn = e.target.closest('.share-btn');
      if(!btn) return;
      const type = btn.dataset.share;
      if(type === 'twitter') window.open('https://twitter.com/intent/tweet?text=' + title + '&url=' + url, '_blank', 'width=600,height=400');
      else if(type === 'facebook') window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank', 'width=600,height=400');
      else if(type === 'copy'){ navigator.clipboard.writeText(decodeURIComponent(url)); btn.textContent = '✅'; setTimeout(() => btn.textContent = '🔗', 1500); }
      else if(type === 'native' && navigator.share) navigator.share({title:document.title,url:decodeURIComponent(url)});
    });
    header.appendChild(shareBar);
  }
  
  if(!tool) return;
  
  const ratings = JSON.parse(localStorage.getItem('tf_ratings') || '{}');
  const box = document.querySelector('.tool-box');
  if(box && !box.querySelector('.tool-rating')){
    const rdiv = document.createElement('div');
    rdiv.className = 'tool-rating';
    rdiv.style.cssText = 'display:flex;gap:8px;align-items:center;margin-top:16px;padding-top:12px;border-top:1px solid var(--border);flex-wrap:wrap';
    const r = ratings[toolId] || 0;
    rdiv.innerHTML = '<span style="font-size:11px;color:var(--text-sec);margin-right:4px">Was this helpful?</span>' +
      '<button class="rate-btn" data-vote="1" style="padding:4px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);cursor:pointer;font-size:13px;transition:all.2s">👍 <span class="rc">' + (r > 0 ? r : '') + '</span></button>' +
      '<button class="rate-btn" data-vote="-1" style="padding:4px 14px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);cursor:pointer;font-size:13px;transition:all.2s">👎</button>';
    box.appendChild(rdiv);
    rdiv.querySelectorAll('.rate-btn').forEach(b => b.addEventListener('click', function(){
      const v = parseInt(this.dataset.vote);
      ratings[toolId] = v; localStorage.setItem('tf_ratings', JSON.stringify(ratings));
      rdiv.querySelectorAll('.rate-btn').forEach(x => { x.style.borderColor = 'var(--border)'; x.style.background = 'var(--bg-card)'; });
      this.style.borderColor = 'var(--accent)'; this.style.background = 'rgba(0,212,170,0.08)';
      const sc = this.querySelector('.rc');
      if(sc) sc.textContent = '1';
    }));
  }
  
  const related = TOOLS.filter(t => t.cat === tool.cat && t.id !== tool.id && t.ready).slice(0, 4);
  if(related.length){
    const cross = document.querySelector('.tool-cross-grid');
    if(cross){
      cross.innerHTML = related.map(t =>
        '<a href="' + t.url + '" class="tcard" style="margin:0"><div class="tcard-icon">' + t.icon + '</div><div class="tcard-body"><div class="tcard-title">' + t.id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) + '</div></div></a>'
      ).join('') + cross.innerHTML;
    }
  }
  
  const name = tool.id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [{
      '@type': 'Question',
      'name': 'What is ' + name + '?',
      'acceptedAnswer': { '@type': 'Answer', 'text': name + ' is a free online tool on Toolspotr. It runs entirely in your browser with no data uploaded to any server. Just open and use it instantly — no signup required.' }
    },{
      '@type': 'Question',
      'name': 'Is ' + name + ' free?',
      'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, ' + name + ' is completely free to use with no limits or hidden charges.' }
    },{
      '@type': 'Question',
      'name': 'Is my data private when using ' + name + '?',
      'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. ' + name + ' runs entirely in your browser. No data is sent to any server — your privacy is guaranteed.' }
    }]
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
})();

function populateCategories(){
  if(typeof TOOLS === 'undefined' || !TOOLS.length) return;
  var cats = ['dev','finance','security','design','writing','utility','health','math','fun','network'];
  for(var i = 0; i < cats.length; i++){
    var k = cats[i];
    var sec = document.querySelector('.tcat[data-cat="' + k + '"]');
    if(!sec) continue;
    var g = sec.querySelector('.tool-grid-cards');
    if(!g) continue;
    var t = [];
    for(var j = 0; j < TOOLS.length; j++){
      if(TOOLS[j].cat === k && TOOLS[j].ready) t.push(TOOLS[j]);
    }
    if(!t.length) continue;
    var h = '';
    for(var j = 0; j < t.length; j++){
      var ti = t[j];
      var nm = ti.id.replace(/-/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
      h += '<a href="' + ti.url + '" class="tcard"><div class="tcard-icon">' + ti.icon + '</div><div class="tcard-title">' + nm + '</div><div class="tcard-desc">' + ti.tags.split(',')[0] + ' tool</div><div class="tcard-tags"><span class="tag">' + ti.cat + '</span></div></a>';
    }
    if(h) g.innerHTML = h;
    var c = document.getElementById('cnt-' + k);
    if(c) c.textContent = t.length;
  }
}

document.addEventListener('DOMContentLoaded', function(){ populateCategories(); });
setTimeout(populateCategories, 800);

})();
