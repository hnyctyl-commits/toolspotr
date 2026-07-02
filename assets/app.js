/* ═══ Toolflow — App Script ═══
   Features: Language switcher, Theme switcher, Tool search
   ====================================================== */

(function(){
'use strict';

// ── Translations ──
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
  {id:'password-generator', icon:'🔑', key:'pwdGen', cat:'security', ready:true, url:'tools/password-generator.html', tags:'password,security,random,generator'},
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
  {id:'dns-test', icon:'🛡️', key:'dnsTest', cat:'network', ready:true, url:'tools/dns-test.html', tags:'dns,vpn,leak,security,privacy'},
  {id:'browser-fingerprint', icon:'👆', key:'finger', cat:'network', ready:true, url:'tools/browser-fingerprint.html', tags:'fingerprint,browser,privacy,tracking'},
  {id:'port-scanner', icon:'🔌', key:'portScan', cat:'network', ready:true, url:'tools/port-scanner.html', tags:'port,scanner,network,reference'},
  {id:'password-strength', icon:'🔐', key:'pwdStrength', cat:'security', ready:true, url:'tools/password-strength.html', tags:'password,strength,checker,security'},
  {id:'qr-generator', icon:'📱', key:'qrGen', cat:'design', ready:true, url:'tools/qr-generator.html', tags:'qr,code,generator,custom'},
  {id:'color-picker', icon:'🎨', key:'colorPick', cat:'design', ready:true, url:'tools/color-picker.html', tags:'color,picker,hex,rgb,hsl'},
  {id:'image-optimizer', icon:'📦', key:'imgOpt', cat:'design', ready:true, url:'tools/image-optimizer.html', tags:'image,optimizer,compress,png,jpg'},
  {id:'image-converter', icon:'🔄', key:'imgFmt', cat:'design', ready:true, url:'tools/image-converter.html', tags:'image,converter,format,png,jpeg,webp'},
  {id:'svg-optimizer', icon:'✂️', key:'svgOpt', cat:'design', ready:true, url:'tools/svg-optimizer.html', tags:'svg,optimizer,compress,clean'},
  {id:'color-name-finder', icon:'🎨', key:'colorName', cat:'design', ready:true, url:'tools/color-name-finder.html', tags:'color,name,finder,css'},
  {id:'color-contrast', icon:'👁️', key:'contrast', cat:'design', ready:true, url:'tools/color-contrast.html', tags:'contrast,wcag,accessibility,color'},
  {id:'color-blind-test', icon:'👁️', key:'colorBlind', cat:'design', ready:true, url:'tools/color-blind-test.html', tags:'color,blind,test,ishihara,vision'},
  {id:'color-palette', icon:'🎨', key:'palette', cat:'design', ready:true, url:'tools/color-palette.html', tags:'color,palette,scheme,generator'},
  {id:'css-gradient', icon:'🌈', key:'cssGradient', cat:'design', ready:true, url:'tools/css-gradient.html', tags:'css,gradient,generator,linear,radial'},
  {id:'word-counter', icon:'📊', key:'wordCount', cat:'writing', ready:true, url:'tools/word-counter.html', tags:'word,count,character,counter'},
  {id:'markdown-editor', icon:'📝', key:'mdEditor', cat:'writing', ready:true, url:'tools/markdown-editor.html', tags:'markdown,editor,preview'},
  {id:'diff-checker', icon:'🔁', key:'diffCheck', cat:'writing', ready:true, url:'tools/diff-checker.html', tags:'diff,comparison,text,difference'},
  {id:'case-converter', icon:'🔤', key:'caseConv', cat:'writing', ready:true, url:'tools/case-converter.html', tags:'case,converter,uppercase,lowercase'},
  {id:'word-suggester', icon:'✍️', key:'wordSuggest', cat:'writing', ready:true, url:'tools/word-suggester.html', tags:'word,suggester,autocomplete,dictionary'},
  {id:'anagram-solver', icon:'🔀', key:'anagram', cat:'writing', ready:true, url:'tools/anagram-solver.html', tags:'anagram,solver,scrabble,word'},
  {id:'palindrome-checker', icon:'🔄', key:'palindrome', cat:'writing', ready:true, url:'tools/palindrome-checker.html', tags:'palindrome,checker,word,text'},
  {id:'lorem-ipsum', icon:'📝', key:'lorem', cat:'writing', ready:true, url:'tools/lorem-ipsum.html', tags:'lorem,ipsum,placeholder,generator'},
  {id:'online-notepad', icon:'📝', key:'notepad', cat:'writing', ready:true, url:'tools/online-notepad.html', tags:'notepad,notes,online,autosave'},
  {id:'percentage-calculator', icon:'📊', key:'pctCalc', cat:'utility', ready:true, url:'tools/percentage-calculator.html', tags:'percentage,calculator,percent'},
  {id:'bmi-calculator', icon:'⚕️', key:'bmiCalc', cat:'health', ready:true, url:'tools/bmi-calculator.html', tags:'bmi,calculator,health,weight'},
  {id:'age-calculator', icon:'🎂', key:'ageCalc', cat:'utility', ready:true, url:'tools/age-calculator.html', tags:'age,calculator,years,months'},
  {id:'unit-converter', icon:'📏', key:'unitConv', cat:'utility', ready:true, url:'tools/unit-converter.html', tags:'unit,converter,length,weight,temp'},
  {id:'timezone-converter', icon:'⏰', key:'tzConv', cat:'utility', ready:true, url:'tools/timezone-converter.html', tags:'timezone,converter,time,world'},
  {id:'date-calculator', icon:'📅', key:'dateCalc', cat:'utility', ready:true, url:'tools/date-calculator.html', tags:'date,calculator,difference,days'},
  {id:'countdown-timer', icon:'⏳', key:'countdown', cat:'utility', ready:true, url:'tools/countdown-timer.html', tags:'countdown,timer,alarm'},
  {id:'stopwatch', icon:'⏱️', key:'stopwatch', cat:'utility', ready:true, url:'tools/stopwatch.html', tags:'stopwatch,lap,timer,precision'},
  {id:'random-number-generator', icon:'🎲', key:'rng', cat:'utility', ready:true, url:'tools/random-number-generator.html', tags:'random,number,generator'},
  {id:'list-randomizer', icon:'🔀', key:'listRand', cat:'utility', ready:true, url:'tools/list-randomizer.html', tags:'list,randomizer,shuffle'},
  {id:'text-repeater', icon:'🔁', key:'textRepeat', cat:'writing', ready:true, url:'tools/text-repeater.html', tags:'text,repeater,repeat,generator'},
  {id:'emoji-picker', icon:'😄', key:'emojiPick', cat:'utility', ready:true, url:'tools/emoji-picker.html', tags:'emoji,picker,copy'},
  {id:'emoji-mashup', icon:'🎭', key:'emojiMash', cat:'utility', ready:true, url:'tools/emoji-mashup.html', tags:'emoji,mashup,generator'},
  {id:'morse-code', icon:'📡', key:'morse', cat:'utility', ready:true, url:'tools/morse-code.html', tags:'morse,code,converter'},
  {id:'roman-numerals', icon:'🏛️', key:'roman', cat:'utility', ready:true, url:'tools/roman-numerals.html', tags:'roman,numeral,converter'},
  {id:'typing-speed', icon:'⌨️', key:'typing', cat:'utility', ready:true, url:'tools/typing-speed.html', tags:'typing,speed,test,wpm'},
  {id:'pomodoro-timer', icon:'🍅', key:'pomodoro', cat:'utility', ready:true, url:'tools/pomodoro-timer.html', tags:'pomodoro,timer,focus,productivity'},
  {id:'name-generator', icon:'📛', key:'nameGen', cat:'utility', ready:true, url:'tools/name-generator.html', tags:'name,generator,random,username'},
  {id:'gpa-calculator', icon:'🎓', key:'gpa', cat:'math', ready:true, url:'tools/gpa-calculator.html', tags:'gpa,calculator,grade,average'},
  {id:'calorie-calculator', icon:'🔥', key:'calorie', cat:'health', ready:true, url:'tools/calorie-calculator.html', tags:'calorie,bmr,tdee,calculator'},
  {id:'text-to-speech', icon:'🔊', key:'tts', cat:'utility', ready:true, url:'tools/text-to-speech.html', tags:'text,speech,tts,reader'},
  {id:'audio-visualizer', icon:'🛠️', key:'audiovisualizer', cat:'utility', ready:true, url:'tools/audio-visualizer.html', tags:'audio,visualizer'},
  {id:'body-fat', icon:'🛠️', key:'bodyfat', cat:'health', ready:true, url:'tools/body-fat.html', tags:'body,fat'},
  {id:'calorie-burn', icon:'🛠️', key:'calorieburn', cat:'health', ready:true, url:'tools/calorie-burn.html', tags:'calorie,burn'},
  {id:'color-blind-sim', icon:'🛠️', key:'colorblindsim', cat:'design', ready:true, url:'tools/color-blind-sim.html', tags:'color,blind,sim'},
  {id:'crypto-converter', icon:'🛠️', key:'cryptoconverter', cat:'finance', ready:true, url:'tools/crypto-converter.html', tags:'crypto,converter'},
  {id:'css-minifier', icon:'🛠️', key:'cssminifier', cat:'dev', ready:true, url:'tools/css-minifier.html', tags:'css,minifier'},
  {id:'days-until', icon:'🛠️', key:'daysuntil', cat:'utility', ready:true, url:'tools/days-until.html', tags:'days,until'},
  {id:'decision-maker', icon:'🛠️', key:'decisionmaker', cat:'utility', ready:true, url:'tools/decision-maker.html', tags:'decision,maker'},
  {id:'fuel-calculator', icon:'🛠️', key:'fuelcalculator', cat:'finance', ready:true, url:'tools/fuel-calculator.html', tags:'fuel,calculator'},
  {id:'habit-tracker', icon:'🛠️', key:'habittracker', cat:'utility', ready:true, url:'tools/habit-tracker.html', tags:'habit,tracker'},
  {id:'html-to-markdown', icon:'🛠️', key:'htmltomarkdown', cat:'dev', ready:true, url:'tools/html-to-markdown.html', tags:'html,to,markdown'},
  {id:'invoice-generator', icon:'🛠️', key:'invoicegenerator', cat:'finance', ready:true, url:'tools/invoice-generator.html', tags:'invoice,generator'},
  {id:'macro-calculator', icon:'🛠️', key:'macrocalculator', cat:'health', ready:true, url:'tools/macro-calculator.html', tags:'macro,calculator'},
  {id:'pet-age', icon:'🛠️', key:'petage', cat:'utility', ready:true, url:'tools/pet-age.html', tags:'pet,age'},
  {id:'qr-reader', icon:'🛠️', key:'qrreader', cat:'design', ready:true, url:'tools/qr-reader.html', tags:'qr,reader'},
  {id:'salary-calculator', icon:'🛠️', key:'salarycalculator', cat:'finance', ready:true, url:'tools/salary-calculator.html', tags:'salary,calculator'},
  {id:'savings-goal', icon:'🛠️', key:'savingsgoal', cat:'finance', ready:true, url:'tools/savings-goal.html', tags:'savings,goal'},
  {id:'screen-recorder', icon:'🛠️', key:'screenrecorder', cat:'utility', ready:true, url:'tools/screen-recorder.html', tags:'screen,recorder'},
  {id:'sql-formatter', icon:'🛠️', key:'sqlformatter', cat:'dev', ready:true, url:'tools/sql-formatter.html', tags:'sql,formatter'},
  {id:'vat-calculator', icon:'🛠️', key:'vatcalculator', cat:'finance', ready:true, url:'tools/vat-calculator.html', tags:'vat,calculator'},
  {id:'water-intake', icon:'🛠️', key:'waterintake', cat:'health', ready:true, url:'tools/water-intake.html', tags:'water,intake'},
  {id:'website-checker', icon:'🛠️', key:'websitechecker', cat:'utility', ready:true, url:'tools/website-checker.html', tags:'website,checker'},
  {id:'word-cloud', icon:'🛠️', key:'wordcloud', cat:'writing', ready:true, url:'tools/word-cloud.html', tags:'word,cloud'},
  {id:'meme-generator', icon:'😂', key:'memeGen', cat:'design', ready:true, url:'tools/meme-generator.html', tags:'meme,generator,image,text,funny'},
  {id:'pdf-merger', icon:'📄', key:'pdfMerge', cat:'utility', ready:true, url:'tools/pdf-merger.html', tags:'pdf,merge,combine,documents'},
  {id:'grammar-checker', icon:'📝', key:'grammar', cat:'writing', ready:true, url:'tools/grammar-checker.html', tags:'grammar,checker,writing,spelling'},
  {id:'scientific-calculator', icon:'🔢', key:'sciCalc', cat:'math', ready:true, url:'tools/scientific-calculator.html', tags:'scientific,calculator,trig,log'},
  {id:'discount-calculator', icon:'🏷️', key:'discount', cat:'finance', ready:true, url:'tools/discount-calculator.html', tags:'discount,sale,tax,savings'},
  {id:'image-resizer', icon:'📐', key:'imgResize', cat:'design', ready:true, url:'tools/image-resizer.html', tags:'image,resizer,crop,resize'},
  {id:'dice-roller', icon:'🎲', key:'diceRoll', cat:'fun', ready:true, url:'tools/dice-roller.html', tags:'dice,roller,coin,flip'},
  {id:'country-info', icon:'🌍', key:'country', cat:'utility', ready:true, url:'tools/country-info.html', tags:'country,info,capital,flag'},
  {id:'fancy-text', icon:'✨', key:'fancyText', cat:'writing', ready:true, url:'tools/fancy-text.html', tags:'fancy,text,unicode,font,stylish'},
  {id:'due-date-calculator', icon:'🤰', key:'dueDate', cat:'health', ready:true, url:'tools/due-date-calculator.html', tags:'due,date,pregnancy,calculator'},
  {id:'sleep-calculator', icon:'💤', key:'sleepCalc', cat:'health', ready:true, url:'tools/sleep-calculator.html', tags:'sleep,calculator,cycles,wake'},
  {id:'fraction-calculator', icon:'➗', key:'fractionCalc', cat:'math', ready:true, url:'tools/fraction-calculator.html', tags:'fraction,calculator,math'},
  {id:'std-dev-calculator', icon:'📊', key:'stdDev', cat:'math', ready:true, url:'tools/std-dev-calculator.html', tags:'standard,deviation,variance,statistics'},
  {id:'border-radius', icon:'🛠️', key:'borderradius', cat:'design', ready:true, url:'tools/border-radius.html', tags:'border,radius'},
  {id:'box-shadow', icon:'🛠️', key:'boxshadow', cat:'design', ready:true, url:'tools/box-shadow.html', tags:'box,shadow'},
  {id:'color-from-image', icon:'🛠️', key:'colorfromimage', cat:'design', ready:true, url:'tools/color-from-image.html', tags:'color,from,image'},
  {id:'gif-maker', icon:'🛠️', key:'gifmaker', cat:'design', ready:true, url:'tools/gif-maker.html', tags:'gif,maker'},
  {id:'html-minifier', icon:'🛠️', key:'htmlminifier', cat:'dev', ready:true, url:'tools/html-minifier.html', tags:'html,minifier'},
  {id:'js-minifier', icon:'🛠️', key:'jsminifier', cat:'dev', ready:true, url:'tools/js-minifier.html', tags:'js,minifier'},
  {id:'signature-maker', icon:'🛠️', key:'signaturemaker', cat:'design', ready:true, url:'tools/signature-maker.html', tags:'signature,maker'},
  {id:'timestamp-converter', icon:'🛠️', key:'timestampconverter', cat:'dev', ready:true, url:'tools/timestamp-converter.html', tags:'timestamp,converter'},
  {id:'yaml-json', icon:'🛠️', key:'yamljson', cat:'dev', ready:true, url:'tools/yaml-json.html', tags:'yaml,json'},
  {id:'background-remover', icon:'🖼️', key:'bgremover', cat:'design', ready:true, url:'tools/background-remover.html', tags:'background,remover,image'},
  {id:'bmr-calculator', icon:'⚡', key:'bmr', cat:'health', ready:true, url:'tools/bmr-calculator.html', tags:'bmr,metabolism,calories'},
  {id:'emi-calculator', icon:'🏦', key:'emi', cat:'finance', ready:true, url:'tools/emi-calculator.html', tags:'emi,loan,installment'},
  {id:'hashtag-generator', icon:'#️⃣', key:'hashtagGen', cat:'writing', ready:true, url:'tools/hashtag-generator.html', tags:'hashtag,social,media'},
  {id:'image-cropper', icon:'✂️', key:'imgCrop', cat:'design', ready:true, url:'tools/image-cropper.html', tags:'image,crop,cropper'},
  {id:'love-calculator', icon:'💕', key:'loveCalc', cat:'fun', ready:true, url:'tools/love-calculator.html', tags:'love,calculator,fun'},
  {id:'online-ruler', icon:'📏', key:'onlineRuler', cat:'utility', ready:true, url:'tools/online-ruler.html', tags:'ruler,measure,screen'},
  {id:'pdf-compressor', icon:'📄', key:'pdfCompress', cat:'utility', ready:true, url:'tools/pdf-compressor.html', tags:'pdf,compress,reduce'},
  {id:'resume-builder', icon:'📝', key:'resumeBuilder', cat:'writing', ready:true, url:'tools/resume-builder.html', tags:'resume,cv,builder,career'},
  {id:'passport-photo-maker', icon:'📸', key:'passportPhoto', cat:'design', ready:true, url:'tools/passport-photo-maker.html', tags:'passport,photo,id,visa'},
  {id:'gst-calculator', icon:'🏷️', key:'gstCalc', cat:'finance', ready:true, url:'tools/gst-calculator.html', tags:'gst,tax,calculator,goods,services'},
  {id:'image-to-text', icon:'🖼️', key:'imgToText', cat:'design', ready:true, url:'tools/image-to-text.html', tags:'ocr,image,text,extract,scan'},
  {id:'period-tracker', icon:'📅', key:'periodTrack', cat:'health', ready:true, url:'tools/period-tracker.html', tags:'period,cycle,ovulation,tracker,menstrual'},
  {id:'gradient-generator', icon:'🎨', key:'gradientGen', cat:'design', ready:true, url:'tools/gradient-generator.html', tags:'gradient,css,color,generator'},
  {id:'image-compressor', icon:'🖼️', key:'imgCompress', cat:'design', ready:true, url:'tools/image-compressor.html', tags:'image,compressor,optimize,reduce'},
  {id:'article-rewriter', icon:'✍️', key:'articleRewrite', cat:'writing', ready:true, url:'tools/article-rewriter.html', tags:'rewrite,paraphrase,article,seo'},

];

// ── Tool Count (auto from array) ──
const TOOL_COUNT = TOOLS.length;

// ── State ──
let currentLang = localStorage.getItem('tf_lang') || 'en';
let currentTheme = localStorage.getItem('tf_theme') || 'cosmic';

// ── Init ──
document.addEventListener('DOMContentLoaded', function(){
  try { applyTheme(currentTheme); } catch(e){}
  try { applyLang(currentLang); } catch(e){}
  try { initControls(); } catch(e){}
  try { initSearch(); } catch(e){}
  try { initStats(); } catch(e){}
  try { initCategoryTabs(); } catch(e){}
  try { initSearchHotTags(); } catch(e){}
  try { initRecentTools(); } catch(e){}
  // Retry tab-bar if empty (may be needed after populateCategories)
  setTimeout(function(){
    var tb = document.getElementById('tabBar');
    if(tb && !tb.children.length) try { initCategoryTabs(); } catch(e){}
  }, 300);
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

// ── PWA Install Prompt ──
(function initPwaInstall(){
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install banner
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

// ── Search Hot Tags ──
function initSearchHotTags(){
  const suggest = document.getElementById('searchSuggest');
  if(!suggest) return;
  // Show popular/searchable tag chips
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

// ── Homepage Recent Tools ──
function initRecentTools(){
  const favSection = document.getElementById('favSection');
  if(!favSection) return;
  // Insert recent tools block after favorites
  let recent;
  try { recent = JSON.parse(localStorage.getItem('tf_recent') || '[]'); } catch(e){ recent = []; }
  if(!recent.length) return;
  // Remove any existing recent section
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

// ── Category Tabs ──
function initCategoryTabs(){
  const bar = document.getElementById('tabBar');
  if(!bar) return;
  
  // Read categories from the DOM
  const cats = [];
  document.querySelectorAll('.tcat').forEach(el => {
    const cat = el.dataset.cat;
    if(!cat) return;
    const head = el.querySelector('.tcat-head');
    if(!head) return;
    const icon = head.querySelector('.tcat-icon')?.textContent || '🛠️';
    const name = head.querySelector('.tcat-name')?.textContent || cat;
    const cnt = head.querySelector('.tcat-cnt')?.textContent || '0';
    cats.push({ cat, icon, name, cnt });
  });
  
  if(!cats.length) return;
  
  // Build tab buttons: All + each category
  let html = '<button class="tab-btn active" data-cat="all">🌟 All (' + TOOL_COUNT + ')</button>';
  cats.forEach(c => {
    html += '<button class="tab-btn" data-cat="' + c.cat + '">' + c.icon + ' ' + c.name + ' (' + c.cnt + ')</button>';
  });
  bar.innerHTML = html;
  
  // Tab click handler
  bar.addEventListener('click', function(e){
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    
    const cat = btn.dataset.cat;
    
    // Update active state
    bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if(cat === 'all'){
      // Show all categories
      document.querySelectorAll('.tcat').forEach(el => el.classList.remove('hidden'));
      // Show Most Used + Favorites
      document.querySelector('.cross-section')?.classList.remove('hidden');
      // Re-evaluate favorites visibility (in case it was hidden by filter)
      const favSec = document.getElementById('favSection');
      if(favSec) {
        const hasFavs = (JSON.parse(localStorage.getItem('tf_favs')||'[]')).length > 0;
        favSec.classList.toggle('show', hasFavs);
      }
      // Scroll to tools section
      document.querySelector('.cross-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Hide all, show selected
      document.querySelectorAll('.tcat').forEach(el => {
        el.classList.toggle('hidden', el.dataset.cat !== cat);
      });
      // Hide Most Used + Favorites when filtering
      document.querySelector('.cross-section')?.classList.add('hidden');
      document.getElementById('favSection')?.classList.remove('show');
      // Scroll to selected category
      const target = document.querySelector('.tcat[data-cat="' + cat + '"]');
      if(target){
        // Small offset to account for sticky tab bar
        const y = target.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
  
  // Read URL hash for direct category link
  const hash = window.location.hash.replace('#','');
  if(hash){
    const targetBtn = bar.querySelector('[data-cat="' + hash + '"]');
    if(targetBtn) targetBtn.click();
  }
}

// ── Export configs needed by downstream code ──
window.TOOLS = TOOLS; window.TOOL_COUNT = TOOL_COUNT; window.LANG = LANG;

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
  
  
  // Check if we need to refresh
  const lastUpdate = parseInt(localStorage.getItem('tf_hot_date') || '0');
  if(lastUpdate !== getDaySeed() || !suggest.children.length){
    renderHotTags();
  }
  
  // Also re-render when usage changes
  window.addEventListener('storage', function(){
    if(parseInt(localStorage.getItem('tf_hot_date') || '0') !== getDaySeed()){
      renderHotTags();
    }
  });
}

// ── Hot Grid (12 tools, daily updated) ──
(function initHotGrid(){
  const grid = document.getElementById('hotGrid');
  if(!grid) return;
  
  function renderHotGrid(){
    const usage = getUsageStats();
    
    // Score all tools: usage + daily rotation
    const scored = TOOLS.filter(t => t.ready).map((t, i) => {
      const used = usage[t.id]?.count || 0;
      // Daily rotation: different mix each day
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
  // Re-render on page focus (in case of cross-tab usage)
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

// ── Favorites + Keyboard Shortcuts ──
(function initFavKeys(){
  // Favorites
  function getFavs(){try{return JSON.parse(localStorage.getItem('tf_favs')||'[]')}catch(e){return[]}}
  function saveFavs(f){localStorage.setItem('tf_favs',JSON.stringify(f))}
  function toggleFav(id){
    let f=getFavs();const i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);saveFavs(f);renderFavs();renderFavBtns();}
  function isFaved(id){return getFavs().includes(id)}
  
  // Add fav buttons to cards
  function renderFavBtns(){
    document.querySelectorAll('.fav-btn').forEach(b=>{
      const id=b.dataset.tool;b.classList.toggle('faved',isFaved(id));b.textContent=isFaved(id)?'★':'☆';
    });
  }
  
  // Render favorites section
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
  
  // Add fav buttons to all cards
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
  
  // Keyboard shortcuts
  const searchInput = document.getElementById('heroSearchInput');
  document.addEventListener('keydown', function(e){
    // / or Ctrl+K → focus search
    if(e.key==='/' && !['INPUT','TEXTAREA'].includes(e.target.tagName)){e.preventDefault();searchInput?.focus();}
    if((e.ctrlKey||e.metaKey) && e.key==='k'){e.preventDefault();searchInput?.focus();}
    // Esc → blur search
    if(e.key==='Escape' && document.activeElement===searchInput){searchInput?.blur();document.getElementById('heroSearchResults').innerHTML='';}
  });
  // Enter → open first result
  searchInput?.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      const first=document.querySelector('#heroSearchResults a');
      if(first){window.location.href=first.getAttribute('href');}
    }
  });

  // Find current tool info
  const tool = TOOLS.find(t => t.id === currentId);
  if(!tool) return;
  
  // 1. Copy Link Button
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
  
  // 2. Quick Nav (same category tools)
  const sameCat = TOOLS.filter(t => t.cat === tool.cat && t.id !== currentId && t.ready).slice(0, 10);
  if(sameCat.length){
    const bar = document.createElement('div');
    bar.className = 'tool-quick show';
    bar.innerHTML = `<span style="color:var(--text-muted);font-size:10px;padding:0 4px">${tool.cat === 'dev' ? '💻' : tool.cat === 'finance' ? '💰' : tool.cat === 'image' ? '🎨' : tool.cat === 'text' ? '✍️' : tool.cat === 'health' ? '🏥' : tool.cat === 'security' ? '🔒' : '🛠️'}</span>` +
      sameCat.map(t => `<a href="${t.url}" ${t.id===currentId?'class="active"':''}>${t.icon||'🛠️'} ${t.name||t.id.replace(/-/g,' ')}</a>`).join('');
    document.body.appendChild(bar);
  }
})();

// ── Scroll to Top ──
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


// ── Tool Page Enhancements: Share, Rating, FAQ Schema, Recent ──
(function initToolEnhance(){
  const path = window.location.pathname;
  if(!path.includes('/tools/')) return;
  
  const currentId = path.match(/\/tools\/(.+)\./);
  if(!currentId) return;
  const toolId = currentId[1];
  const tool = typeof TOOLS !== 'undefined' ? TOOLS.find(t => t.id === toolId) : null;
  
  // ── 1. Track Recent Tools ──
  try {
    let recent = JSON.parse(localStorage.getItem('tf_recent') || '[]');
    recent = [toolId, ...recent.filter(id => id !== toolId)].slice(0, 10);
    localStorage.setItem('tf_recent', JSON.stringify(recent));
  } catch(e){}
  
  // ── 2. Social Share Bar ──
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
  
  // ── 3. Rating Widget ──
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
  
  // ── 4. Related tools ──
  const related = TOOLS.filter(t => t.cat === tool.cat && t.id !== tool.id && t.ready).slice(0, 4);
  if(related.length){
    const cross = document.querySelector('.tool-cross-grid');
    if(cross){
      cross.innerHTML = related.map(t =>
        '<a href="' + t.url + '" class="tcard" style="margin:0"><div class="tcard-icon">' + t.icon + '</div><div class="tcard-body"><div class="tcard-title">' + t.id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) + '</div></div></a>'
      ).join('') + cross.innerHTML;
    }
  }
  
  // ── 5. FAQ Schema JSON-LD (SEO) ──
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

// ── Populate all category grids from TOOLS array ──
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

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){ populateCategories(); });
// And immediately
populateCategories();
setTimeout(populateCategories, 200);

})();
// force rebuild 1782529339
