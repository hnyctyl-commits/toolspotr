/* ═══ Toolflow — App Script ═══
   Features: Language switcher, Theme switcher, Tool search
   ====================================================== */

(function(){
'use strict';

// ── Translations ──
const LANG = {
  en: {
    siteName: 'Toolflow', siteDesc: 'Free Online Tools for Developers',
    navTools: 'tools', searchPlaceholder: 'Search 58 tools...',
    heroTitle: 'Your <span class="gradient">Daily Toolkit</span>',
    heroDesc: '50+ free online tools for developers, designers, and everyone. IP lookup, JSON formatter, investment calculator, and more. <span class="speed-text">Constantly updated</span><span class="speed-cursor">|</span>',
    heroTools: 'Tools', heroCategories: 'Categories', heroAlways: 'Always Free',
    sectionAll: 'All Tools',
    devTools: 'Developer Tools', finance: 'Finance & Investment',
    security: 'Security & Privacy', utilities: 'Utilities',
    imageMedia: 'Image & Media', textWriting: 'Text & Writing',
    mostUsed: 'Most Used Today', uses: 'uses',
    comingSoon: 'Coming soon',
    footerText: 'Free Online Tools for Developers &middot; All tools run locally in your browser. Nothing is uploaded.',
    footerPrivacy: 'Your privacy matters — zero data leaves your device.',
    themeLabel: 'Theme', langLabel: 'Language',
    themeCosmic: 'Cosmic', themeLight: 'Light', themeOcean: 'Ocean',
    themeSunset: 'Sunset', themeForest: 'Forest',
    langEn: 'English', langZh: '中文',
    searchNoResults: 'No tools found', searchResults: 'results',
    ipLookup: 'IP Address Lookup', ipDesc: 'Find your public IP, location & ISP',
    jsonFmt: 'JSON Formatter', jsonDesc: 'Format, validate & compress JSON',
    pwdGen: 'Password Generator', pwdDesc: 'Create strong random passwords',
    invCalc: 'Investment Calculator', invDesc: 'Compound interest & growth chart',
    dnsTest: 'DNS Leak Test', dnsDesc: 'Check if your VPN leaks DNS requests',
    loanCalc: 'Loan Calculator', loanDesc: 'Monthly payment & amortization schedule',
    base64: 'Base64 Encode/Decode', base64Desc: 'Encode text or files to Base64',
    uuid: 'UUID Generator', uuidDesc: 'Generate v4/v7 UUIDs in bulk',
    qrGen: 'QR Code Generator', qrDesc: 'Custom QR codes with colors & logo',
    colorPick: 'Color Picker', colorDesc: 'HEX/RGB/HSL/CMYK color converter',
    wordCount: 'Word Counter', wordDesc: 'Count words, chars, sentences & more',
    // Coming soon
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
    heroDesc: '50+ 免费在线工具：IP查询、JSON格式化、投资计算器、密码生成器等等，<span class="speed-text">持续更新中</span><span class="speed-cursor">|</span>',
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

// ── Tool Data (for search) ──
const TOOLS = [
  {id:'ip', icon:'🌐', key:'ipLookup', cat:'dev', ready:true, url:'tools/ip.html', tags:'network,ip,location,isp'},
  {id:'json-formatter', icon:'📋', key:'jsonFmt', cat:'dev', ready:true, url:'tools/json-formatter.html', tags:'json,format,validate,beautify'},
  {id:'password-generator', icon:'🔑', key:'pwdGen', cat:'dev', ready:true, url:'tools/password-generator.html', tags:'password,security,random,generator'},
  {id:'base64', icon:'🔤', key:'base64', cat:'dev', ready:true, url:'tools/base64.html', tags:'base64,encode,decode'},
  {id:'uuid-generator', icon:'🔀', key:'uuidGen', cat:'dev', ready:true, url:'tools/uuid-generator.html', tags:'uuid,guid,generator,v4'},
  {id:'regex-tester', icon:'🔍', key:'regex', cat:'dev', ready:true, url:'tools/regex-tester.html', tags:'regex,regular expression,tester'},
  {id:'binary-hex-converter', icon:'🔢', key:'binHex', cat:'dev', ready:true, url:'tools/binary-hex-converter.html', tags:'binary,hex,decimal,octal,converter'},
  {id:'http-status-codes', icon:'🔍', key:'httpStatus', cat:'dev', ready:true, url:'tools/http-status-codes.html', tags:'http,status,code,reference'},
  {id:'url-encoder', icon:'🔗', key:'urlEnc', cat:'dev', ready:true, url:'tools/url-encoder.html', tags:'url,encode,decode,encoder'},
  {id:'json-to-csv', icon:'📋', key:'jsonCsv', cat:'dev', ready:true, url:'tools/json-to-csv.html', tags:'json,csv,converter,transform'},
  {id:'html-entities', icon:'🔤', key:'htmlEnt', cat:'dev', ready:true, url:'tools/html-entities.html', tags:'html,entities,encode,decode'},
  {id:'hash-generator', icon:'🔐', key:'hashGen', cat:'dev', ready:true, url:'tools/hash-generator.html', tags:'hash,sha1,sha256,sha512'},
  {id:'fake-data', icon:'📋', key:'fakeData', cat:'dev', ready:true, url:'tools/fake-data.html', tags:'fake,data,generator,test,mock'},
  {id:'barcode-generator', icon:'📊', key:'barcode', cat:'dev', ready:true, url:'tools/barcode-generator.html', tags:'barcode,ean13,generator'},
  {id:'compound-interest', icon:'📈', key:'invCalc', cat:'finance', ready:true, url:'tools/compound-interest.html', tags:'investment,compound,interest,finance'},
  {id:'loan-calculator', icon:'🏠', key:'loanCalc', cat:'finance', ready:true, url:'tools/loan-calculator.html', tags:'loan,mortgage,amortization,finance'},
  {id:'retirement-calculator', icon:'🎯', key:'retire', cat:'finance', ready:true, url:'tools/retirement-calculator.html', tags:'retirement,savings,planning,finance'},
  {id:'mortgage-calculator', icon:'🏠', key:'mortgage', cat:'finance', ready:true, url:'tools/mortgage-calculator.html', tags:'mortgage,monthly,payment,finance'},
  {id:'tip-calculator', icon:'💵', key:'tipCalc', cat:'finance', ready:true, url:'tools/tip-calculator.html', tags:'tip,calculator,bill,split'},
  {id:'currency-converter', icon:'💱', key:'currency', cat:'finance', ready:true, url:'tools/currency-converter.html', tags:'currency,exchange,converter,rates'},
  {id:'dns-test', icon:'🛡️', key:'dnsTest', cat:'security', ready:true, url:'tools/dns-test.html', tags:'dns,vpn,leak,security,privacy'},
  {id:'browser-fingerprint', icon:'👆', key:'finger', cat:'security', ready:true, url:'tools/browser-fingerprint.html', tags:'fingerprint,browser,privacy,tracking'},
  {id:'port-scanner', icon:'🔌', key:'portScan', cat:'security', ready:true, url:'tools/port-scanner.html', tags:'port,scanner,network,reference'},
  {id:'password-strength', icon:'🔐', key:'pwdStrength', cat:'security', ready:true, url:'tools/password-strength.html', tags:'password,strength,checker,security'},
  {id:'qr-generator', icon:'📱', key:'qrGen', cat:'image', ready:true, url:'tools/qr-generator.html', tags:'qr,code,generator,custom'},
  {id:'color-picker', icon:'🎨', key:'colorPick', cat:'image', ready:true, url:'tools/color-picker.html', tags:'color,picker,hex,rgb,hsl'},
  {id:'image-optimizer', icon:'📦', key:'imgOpt', cat:'image', ready:true, url:'tools/image-optimizer.html', tags:'image,optimizer,compress,png,jpg'},
  {id:'image-converter', icon:'🔄', key:'imgFmt', cat:'image', ready:true, url:'tools/image-converter.html', tags:'image,converter,format,png,jpeg,webp'},
  {id:'svg-optimizer', icon:'✂️', key:'svgOpt', cat:'image', ready:true, url:'tools/svg-optimizer.html', tags:'svg,optimizer,compress,clean'},
  {id:'color-name-finder', icon:'🎨', key:'colorName', cat:'image', ready:true, url:'tools/color-name-finder.html', tags:'color,name,finder,css'},
  {id:'color-contrast', icon:'👁️', key:'contrast', cat:'image', ready:true, url:'tools/color-contrast.html', tags:'contrast,wcag,accessibility,color'},
  {id:'color-blind-test', icon:'👁️', key:'colorBlind', cat:'image', ready:true, url:'tools/color-blind-test.html', tags:'color,blind,test,ishihara,vision'},
  {id:'color-palette', icon:'🎨', key:'palette', cat:'image', ready:true, url:'tools/color-palette.html', tags:'color,palette,scheme,generator'},
  {id:'css-gradient', icon:'🌈', key:'cssGradient', cat:'image', ready:true, url:'tools/css-gradient.html', tags:'css,gradient,generator,linear,radial'},
  {id:'word-counter', icon:'📊', key:'wordCount', cat:'text', ready:true, url:'tools/word-counter.html', tags:'word,count,character,counter'},
  {id:'markdown-editor', icon:'📝', key:'mdEditor', cat:'text', ready:true, url:'tools/markdown-editor.html', tags:'markdown,editor,preview'},
  {id:'diff-checker', icon:'🔁', key:'diffCheck', cat:'text', ready:true, url:'tools/diff-checker.html', tags:'diff,comparison,text,difference'},
  {id:'case-converter', icon:'🔤', key:'caseConv', cat:'text', ready:true, url:'tools/case-converter.html', tags:'case,converter,uppercase,lowercase'},
  {id:'word-suggester', icon:'✍️', key:'wordSuggest', cat:'text', ready:true, url:'tools/word-suggester.html', tags:'word,suggester,autocomplete,dictionary'},
  {id:'anagram-solver', icon:'🔀', key:'anagram', cat:'text', ready:true, url:'tools/anagram-solver.html', tags:'anagram,solver,scrabble,word'},
  {id:'palindrome-checker', icon:'🔄', key:'palindrome', cat:'text', ready:true, url:'tools/palindrome-checker.html', tags:'palindrome,checker,word,text'},
  {id:'lorem-ipsum', icon:'📝', key:'lorem', cat:'text', ready:true, url:'tools/lorem-ipsum.html', tags:'lorem,ipsum,placeholder,generator'},
  {id:'online-notepad', icon:'📝', key:'notepad', cat:'text', ready:true, url:'tools/online-notepad.html', tags:'notepad,notes,online,autosave'},
  {id:'percentage-calculator', icon:'📊', key:'pctCalc', cat:'utility', ready:true, url:'tools/percentage-calculator.html', tags:'percentage,calculator,percent'},
  {id:'bmi-calculator', icon:'⚕️', key:'bmiCalc', cat:'utility', ready:true, url:'tools/bmi-calculator.html', tags:'bmi,calculator,health,weight'},
  {id:'age-calculator', icon:'🎂', key:'ageCalc', cat:'utility', ready:true, url:'tools/age-calculator.html', tags:'age,calculator,years,months'},
  {id:'unit-converter', icon:'📏', key:'unitConv', cat:'utility', ready:true, url:'tools/unit-converter.html', tags:'unit,converter,length,weight,temp'},
  {id:'timezone-converter', icon:'⏰', key:'tzConv', cat:'utility', ready:true, url:'tools/timezone-converter.html', tags:'timezone,converter,time,world'},
  {id:'date-calculator', icon:'📅', key:'dateCalc', cat:'utility', ready:true, url:'tools/date-calculator.html', tags:'date,calculator,difference,days'},
  {id:'countdown-timer', icon:'⏳', key:'countdown', cat:'utility', ready:true, url:'tools/countdown-timer.html', tags:'countdown,timer,alarm'},
  {id:'stopwatch', icon:'⏱️', key:'stopwatch', cat:'utility', ready:true, url:'tools/stopwatch.html', tags:'stopwatch,lap,timer,precision'},
  {id:'random-number-generator', icon:'🎲', key:'rng', cat:'utility', ready:true, url:'tools/random-number-generator.html', tags:'random,number,generator'},
  {id:'list-randomizer', icon:'🔀', key:'listRand', cat:'utility', ready:true, url:'tools/list-randomizer.html', tags:'list,randomizer,shuffle'},
  {id:'text-repeater', icon:'🔁', key:'textRepeat', cat:'utility', ready:true, url:'tools/text-repeater.html', tags:'text,repeater,repeat,generator'},
  {id:'emoji-picker', icon:'😄', key:'emojiPick', cat:'utility', ready:true, url:'tools/emoji-picker.html', tags:'emoji,picker,copy'},
  {id:'emoji-mashup', icon:'🎭', key:'emojiMash', cat:'utility', ready:true, url:'tools/emoji-mashup.html', tags:'emoji,mashup,generator'},
  {id:'morse-code', icon:'📡', key:'morse', cat:'utility', ready:true, url:'tools/morse-code.html', tags:'morse,code,converter'},
  {id:'roman-numerals', icon:'🏛️', key:'roman', cat:'utility', ready:true, url:'tools/roman-numerals.html', tags:'roman,numeral,converter'},
  {id:'typing-speed', icon:'⌨️', key:'typing', cat:'utility', ready:true, url:'tools/typing-speed.html', tags:'typing,speed,test,wpm'},
  {id:'pomodoro-timer', icon:'🍅', key:'pomodoro', cat:'utility', ready:true, url:'tools/pomodoro-timer.html', tags:'pomodoro,timer,focus,productivity'},
  {id:'name-generator', icon:'📛', key:'nameGen', cat:'utility', ready:true, url:'tools/name-generator.html', tags:'name,generator,random,username'},
  {id:'gpa-calculator', icon:'🎓', key:'gpa', cat:'utility', ready:true, url:'tools/gpa-calculator.html', tags:'gpa,calculator,grade,average'},
  {id:'calorie-calculator', icon:'🔥', key:'calorie', cat:'utility', ready:true, url:'tools/calorie-calculator.html', tags:'calorie,bmr,tdee,calculator'},
  {id:'text-to-speech', icon:'🔊', key:'tts', cat:'utility', ready:true, url:'tools/text-to-speech.html', tags:'text,speech,tts,reader'},
  {id:'audio-visualizer', icon:'🛠️', key:'audiovisualizer', cat:'utility', ready:true, url:'tools/audio-visualizer.html', tags:'audio,visualizer'},
  {id:'body-fat', icon:'🛠️', key:'bodyfat', cat:'health', ready:true, url:'tools/body-fat.html', tags:'body,fat'},
  {id:'calorie-burn', icon:'🛠️', key:'calorieburn', cat:'health', ready:true, url:'tools/calorie-burn.html', tags:'calorie,burn'},
  {id:'color-blind-sim', icon:'🛠️', key:'colorblindsim', cat:'image', ready:true, url:'tools/color-blind-sim.html', tags:'color,blind,sim'},
  {id:'crypto-converter', icon:'🛠️', key:'cryptoconverter', cat:'finance', ready:true, url:'tools/crypto-converter.html', tags:'crypto,converter'},
  {id:'css-minifier', icon:'🛠️', key:'cssminifier', cat:'dev', ready:true, url:'tools/css-minifier.html', tags:'css,minifier'},
  {id:'days-until', icon:'🛠️', key:'daysuntil', cat:'utility', ready:true, url:'tools/days-until.html', tags:'days,until'},
  {id:'decision-maker', icon:'🛠️', key:'decisionmaker', cat:'utility', ready:true, url:'tools/decision-maker.html', tags:'decision,maker'},
  {id:'fuel-calculator', icon:'🛠️', key:'fuelcalculator', cat:'finance', ready:true, url:'tools/fuel-calculator.html', tags:'fuel,calculator'},
  {id:'habit-tracker', icon:'🛠️', key:'habittracker', cat:'health', ready:true, url:'tools/habit-tracker.html', tags:'habit,tracker'},
  {id:'html-to-markdown', icon:'🛠️', key:'htmltomarkdown', cat:'dev', ready:true, url:'tools/html-to-markdown.html', tags:'html,to,markdown'},
  {id:'invoice-generator', icon:'🛠️', key:'invoicegenerator', cat:'finance', ready:true, url:'tools/invoice-generator.html', tags:'invoice,generator'},
  {id:'macro-calculator', icon:'🛠️', key:'macrocalculator', cat:'finance', ready:true, url:'tools/macro-calculator.html', tags:'macro,calculator'},
  {id:'pet-age', icon:'🛠️', key:'petage', cat:'utility', ready:true, url:'tools/pet-age.html', tags:'pet,age'},
  {id:'qr-reader', icon:'🛠️', key:'qrreader', cat:'image', ready:true, url:'tools/qr-reader.html', tags:'qr,reader'},
  {id:'salary-calculator', icon:'🛠️', key:'salarycalculator', cat:'finance', ready:true, url:'tools/salary-calculator.html', tags:'salary,calculator'},
  {id:'savings-goal', icon:'🛠️', key:'savingsgoal', cat:'finance', ready:true, url:'tools/savings-goal.html', tags:'savings,goal'},
  {id:'screen-recorder', icon:'🛠️', key:'screenrecorder', cat:'utility', ready:true, url:'tools/screen-recorder.html', tags:'screen,recorder'},
  {id:'sql-formatter', icon:'🛠️', key:'sqlformatter', cat:'dev', ready:true, url:'tools/sql-formatter.html', tags:'sql,formatter'},
  {id:'vat-calculator', icon:'🛠️', key:'vatcalculator', cat:'finance', ready:true, url:'tools/vat-calculator.html', tags:'vat,calculator'},
  {id:'water-intake', icon:'🛠️', key:'waterintake', cat:'health', ready:true, url:'tools/water-intake.html', tags:'water,intake'},
  {id:'website-checker', icon:'🛠️', key:'websitechecker', cat:'utility', ready:true, url:'tools/website-checker.html', tags:'website,checker'},
  {id:'word-cloud', icon:'🛠️', key:'wordcloud', cat:'text', ready:true, url:'tools/word-cloud.html', tags:'word,cloud'},
  {id:'meme-generator', icon:'😂', key:'memeGen', cat:'image', ready:true, url:'tools/meme-generator.html', tags:'meme,generator,image,text,funny'},
  {id:'pdf-merger', icon:'📄', key:'pdfMerge', cat:'utility', ready:true, url:'tools/pdf-merger.html', tags:'pdf,merge,combine,documents'},
  {id:'grammar-checker', icon:'📝', key:'grammar', cat:'text', ready:true, url:'tools/grammar-checker.html', tags:'grammar,checker,writing,spelling'},
  {id:'scientific-calculator', icon:'🔢', key:'sciCalc', cat:'utility', ready:true, url:'tools/scientific-calculator.html', tags:'scientific,calculator,trig,log'},
  {id:'discount-calculator', icon:'🏷️', key:'discount', cat:'finance', ready:true, url:'tools/discount-calculator.html', tags:'discount,sale,tax,savings'},
  {id:'image-resizer', icon:'📐', key:'imgResize', cat:'image', ready:true, url:'tools/image-resizer.html', tags:'image,resizer,crop,resize'},
  {id:'dice-roller', icon:'🎲', key:'diceRoll', cat:'utility', ready:true, url:'tools/dice-roller.html', tags:'dice,roller,coin,flip'},
  {id:'country-info', icon:'🌍', key:'country', cat:'utility', ready:true, url:'tools/country-info.html', tags:'country,info,capital,flag'},
  {id:'fancy-text', icon:'✨', key:'fancyText', cat:'text', ready:true, url:'tools/fancy-text.html', tags:'fancy,text,unicode,font,stylish'},
  {id:'due-date-calculator', icon:'🤰', key:'dueDate', cat:'health', ready:true, url:'tools/due-date-calculator.html', tags:'due,date,pregnancy,calculator'},
  {id:'sleep-calculator', icon:'💤', key:'sleepCalc', cat:'health', ready:true, url:'tools/sleep-calculator.html', tags:'sleep,calculator,cycles,wake'},
  {id:'fraction-calculator', icon:'➗', key:'fractionCalc', cat:'utility', ready:true, url:'tools/fraction-calculator.html', tags:'fraction,calculator,math'},
  {id:'std-dev-calculator', icon:'📊', key:'stdDev', cat:'utility', ready:true, url:'tools/std-dev-calculator.html', tags:'standard,deviation,variance,statistics'},
];
  {id:'border-radius', icon:'🛠️', key:'borderradius', cat:'image', ready:true, url:'tools/border-radius.html', tags:'border,radius'},
  {id:'box-shadow', icon:'🛠️', key:'boxshadow', cat:'image', ready:true, url:'tools/box-shadow.html', tags:'box,shadow'},
  {id:'color-from-image', icon:'🛠️', key:'colorfromimage', cat:'image', ready:true, url:'tools/color-from-image.html', tags:'color,from,image'},
  {id:'gif-maker', icon:'🛠️', key:'gifmaker', cat:'image', ready:true, url:'tools/gif-maker.html', tags:'gif,maker'},
  {id:'html-minifier', icon:'🛠️', key:'htmlminifier', cat:'dev', ready:true, url:'tools/html-minifier.html', tags:'html,minifier'},
  {id:'js-minifier', icon:'🛠️', key:'jsminifier', cat:'dev', ready:true, url:'tools/js-minifier.html', tags:'js,minifier'},
  {id:'signature-maker', icon:'🛠️', key:'signaturemaker', cat:'image', ready:true, url:'tools/signature-maker.html', tags:'signature,maker'},
  {id:'timestamp-converter', icon:'🛠️', key:'timestampconverter', cat:'dev', ready:true, url:'tools/timestamp-converter.html', tags:'timestamp,converter'},
  {id:'yaml-json', icon:'🛠️', key:'yamljson', cat:'dev', ready:true, url:'tools/yaml-json.html', tags:'yaml,json'},

// ── Tool Count (auto from array) ──
const TOOL_COUNT = TOOLS.length;

// ── State ──
let currentLang = localStorage.getItem('tf_lang') || 'en';
let currentTheme = localStorage.getItem('tf_theme') || 'cosmic';

// ── Init ──
document.addEventListener('DOMContentLoaded', function(){
  applyTheme(currentTheme);
  applyLang(currentLang);
  initControls();
  initSearch();
  initStats();
});

// ── Theme ──
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('tf_theme', t);
  currentTheme = t;
}

function initControls(){
  // Theme button
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
    // Highlight current theme
    document.querySelector(`.theme-opt[data-theme="${currentTheme}"]`)?.classList.add('active');
  }

  // Language button
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

  // Close panels on outside click
  document.addEventListener('click', function(){
    document.getElementById('themePanel')?.classList.remove('show');
    document.getElementById('langPanel')?.classList.remove('show');
  });
}

// ── Language ──
function applyLang(l){
  currentLang = l;
  localStorage.setItem('tf_lang', l);
  const t = LANG[l] || LANG.en;
  
  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(t[key] !== undefined){
      el.innerHTML = t[key];
    }
  });
  
  // Update search placeholder with dynamic count
  const searchInput = document.getElementById('heroSearchInput');
  if(searchInput){
    const word = l === 'zh' ? '个工具' : 'tools';
    searchInput.placeholder = (l === 'zh' ? '搜索 ' + TOOL_COUNT + ' ' + word : 'Search ' + TOOL_COUNT + ' ' + word);
  }
}

// ── Search ──
function initSearch(){
  const input = document.getElementById('heroSearchInput');
  const panel = document.getElementById('heroSearchResults');
  if(!input || !panel) return;
  
  // Dynamic placeholder: count tools
  const langWord = currentLang === 'zh' ? '个工具' : 'tools';
  input.placeholder = (currentLang === 'zh' ? '搜索 ' + TOOL_COUNT + ' ' + langWord : 'Search ' + TOOL_COUNT + ' ' + langWord);

  // Create panel if not exists
  input.addEventListener('input', function(){
    const q = this.value.trim().toLowerCase();
    if(q.length < 1){ panel.classList.remove('show'); return; }

    const t = LANG[currentLang] || LANG.en;
    
    // Filter tools
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

  // Clear button
  const clearBtn = document.getElementById('searchClearBtn');
  if(clearBtn){
    clearBtn.addEventListener('click', function(){
      input.value = '';
      input.focus();
      panel.classList.remove('show');
    });
  }

  // ⌘K / Ctrl+K shortcut
  document.addEventListener('keydown', function(e){
    if((e.metaKey || e.ctrlKey) && e.key === 'k'){
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  // Close on Escape / outside
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ panel.classList.remove('show'); input.blur(); }
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.hero-search')) panel.classList.remove('show');
  });
}

// ── Homepage Stats ──
function initStats(){
  const usage = getUsageStats();
  const recent = getRecentTools();
  
  // Update Most Used Today with real data
  const crossGrid = document.querySelector('.cross-grid');
  if(crossGrid && Object.keys(usage).length > 0){
    const cards = crossGrid.querySelectorAll('.cross-card');
    cards.forEach(card => {
      const name = card.querySelector('.cross-name')?.textContent?.toLowerCase().trim() || '';
      // Match by finding the tool
      for(const [id, data] of Object.entries(usage)){
        if(data.name.toLowerCase().includes(name) || name.includes(id)){
          const countEl = card.querySelector('.cross-count');
          if(countEl) countEl.textContent = data.count + ' ' + (data.count === 1 ? 'use' : 'uses');
          break;
        }
      }
    });
  }
  
  // Add Recently Used section
  if(recent.length > 0 && !document.getElementById('recentTools')){
    const toolsSection = document.querySelector('.cross-section');
    if(toolsSection){
      const section = document.createElement('section');
      section.className = 'cross-section';
      section.id = 'recentTools';
      section.innerHTML = `
        <div class="section-header">
          <span class="section-icon">🕐</span>
          <h2>Recently Used</h2>
        </div>
        <div class="cross-grid">
          ${recent.slice(0,6).map(t => 
            `<a href="tools/${t.id}.html" class="cross-card"><span class="cross-icon">📌</span><span class="cross-name">${t.name}</span></a>`
          ).join('')}
        </div>`;
      toolsSection.after(section);
    }
  }
}

// ── Tool Usage Tracking ──
function trackTool(toolId, toolName){
  try{
    const key = 'tf_usage';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    if(!data[toolId]) data[toolId] = {name: toolName, count: 0, lastUsed: ''};
    data[toolId].count++;
    data[toolId].lastUsed = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(data));
    
    // Track recent tools (max 5)
    const recentKey = 'tf_recent';
    let recent = JSON.parse(localStorage.getItem(recentKey) || '[]');
    recent = recent.filter(r => r.id !== toolId);
    recent.unshift({id: toolId, name: toolName, time: Date.now()});
    if(recent.length > 8) recent = recent.slice(0, 8);
    localStorage.setItem(recentKey, JSON.stringify(recent));
  } catch(e) {/* localStorage might be full */}
}

function getUsageStats(){
  try{
    return JSON.parse(localStorage.getItem('tf_usage') || '{}');
  } catch(e) { return {}; }
}

function getRecentTools(){
  try{
    return JSON.parse(localStorage.getItem('tf_recent') || '[]');
  } catch(e) { return []; }
}

// Auto-track on tool pages
(function autoTrack(){
  const path = window.location.pathname;
  if(path.includes('/tools/')){
    const match = path.match(/\/tools\/(.+)\.html/);
    if(match){
      const id = match[1];
      const name = document.querySelector('h1')?.textContent?.trim() || id;
      trackTool(id, name);
    }
  }
})();

// ── Cookie Consent (GDPR/EEA compliance) ──
(function initCookieBar(){
  const cookieConsent = localStorage.getItem('tf_cookie');
  if(cookieConsent) return;
  
  // Create banner
  const bar = document.createElement('div');
  bar.className = 'cookie-bar show';
  bar.innerHTML = `
    <div class="cookie-inner">
      <div class="cookie-text">
        This site uses cookies from Google to personalize ads and analyze traffic. 
        <a href="/privacy.html" target="_blank">Learn more</a>
      </div>
      <div class="cookie-btns">
        <button class="cookie-btn cookie-btn-reject" id="cookieReject">✗ Reject</button>
        <button class="cookie-btn cookie-btn-accept" id="cookieAccept">✓ Accept All</button>
      </div>
    </div>`;
  document.body.appendChild(bar);
  
  document.getElementById('cookieAccept').addEventListener('click', function(){
    localStorage.setItem('tf_cookie', 'accepted');
    bar.classList.remove('show');
  });
  
  document.getElementById('cookieReject').addEventListener('click', function(){
    localStorage.setItem('tf_cookie', 'rejected');
    bar.classList.remove('show');
  });
})();

})();
