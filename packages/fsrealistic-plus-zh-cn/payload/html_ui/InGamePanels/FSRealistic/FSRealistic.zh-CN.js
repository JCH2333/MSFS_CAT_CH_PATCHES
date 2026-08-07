(function () {
  "use strict";

  var translations = {
    "ACTIVATE": "激活",
    "ACTIVATE SERIAL": "使用序列号激活",
    "Activated": "已激活",
    "All Set!": "设置完成！",
    "ALL": "全部",
    "Announce Connection": "连接提示音",
    "APPLY": "应用",
    "Author": "作者",
    "Back": "返回",
    "BROWSE": "浏览",
    "BUY CHASEPLANE": "购买 ChasePlane",
    "CANCEL": "取消",
    "CAMERA": "相机",
    "ChasePlane": "ChasePlane",
    "ChasePlane Integration": "ChasePlane 集成",
    "CLOSE": "关闭",
    "COMMUNITY": "社区",
    "CONTACT SUPPORT": "联系支持",
    "COPY": "复制",
    "Copy from Profile": "从配置文件复制",
    "CREATE SOUND": "创建声音",
    "Default Profiles": "默认配置文件",
    "Description": "描述",
    "Details": "详情",
    "DISCORD": "Discord",
    "Downloads": "下载量",
    "EMAIL ADDRESS": "电子邮件地址",
    "EULA": "许可协议",
    "EXCELLENT": "优秀",
    "EXTERNAL": "外部",
    "FSRealistic Service": "FSRealistic 服务",
    "FSRealistic+": "FSRealistic+",
    "INTERNAL": "内部",
    "INSTALLED": "已安装",
    "License": "许可证",
    "Loading sounds...": "正在加载声音...",
    "LOADING...": "正在加载...",
    "Master Switch": "总开关",
    "Master Volume": "主音量",
    "Mute in Background": "后台静音",
    "Need More Help": "需要更多帮助",
    "No file selected": "未选择文件",
    "OFF": "关",
    "ON": "开",
    "Open": "打开",
    "Output Device": "输出设备",
    "PASTE": "粘贴",
    "POOR": "较差",
    "Profile": "配置文件",
    "Profiles": "配置文件",
    "RESET": "重置",
    "Reset to Defaults": "恢复默认值",
    "RESTART": "重启",
    "Restart Service": "重启服务",
    "rkApps Servers": "rkApps 服务器",
    "RKAPPS STORE": "rkApps 商店",
    "SAVE": "保存",
    "SEND": "发送",
    "Send Logs": "发送日志",
    "Settings": "设置",
    "SHARE": "分享",
    "Share to Cloud": "分享至云端",
    "Share with community": "与社区分享",
    "SOUND": "声音",
    "SOUND CLOUD": "声音云库",
    "START TRIAL": "开始试用",
    "SUPPORT": "支持",
    "TEST": "测试",
    "TUTORIAL": "教程",
    "Type to search...": "输入以搜索...",
    "UPDATE": "更新",
    "Version": "版本",
    "WORLD": "世界",
    "Airflow Noise": "气流噪声",
    "Afterburner": "加力燃烧室",
    "Belly Landing": "机腹着陆",
    "Braking": "刹车",
    "Breathing": "呼吸声",
    "Cabin Chatter": "客舱交谈",
    "Cabin Panic": "客舱惊慌",
    "Clear Prop": "螺旋桨净空",
    "Cockpit Ambience": "驾驶舱环境声",
    "Control Gust": "操纵面阵风",
    "Control Lean": "操纵倾斜",
    "Engine Blast": "发动机喷流",
    "Engine Motion": "发动机运动",
    "Engine Start / Stop": "发动机启动 / 停止",
    "Engine Vibrations": "发动机振动",
    "Flaps Drag": "襟翼阻力",
    "Flaps Stress": "襟翼受力",
    "Flight Headshake": "飞行头部晃动",
    "Gear Drag": "起落架阻力",
    "Gear Up / Down": "起落架收放",
    "Ground Effect": "地面效应",
    "Ground Headshake": "地面头部晃动",
    "Ground Roll": "地面滑跑",
    "Heavy": "强烈",
    "Head Anticipation": "头部预判",
    "Head Physics": "头部物理效果",
    "Landing Feedback": "着陆反馈",
    "Lavatory Flush": "洗手间冲水",
    "Light": "轻微",
    "Light Bumps": "轻微颠簸",
    "Nosewheel Shimmy": "前轮摆振",
    "Over G": "过载",
    "Over Speed": "超速",
    "Pilot Stress": "飞行员压力",
    "Prop Sideslip": "螺旋桨侧滑",
    "Reverse Thrust": "反推力",
    "Rotor Dynamics": "旋翼动态",
    "Screen Saver": "屏幕保护",
    "Speed Brake Drag": "减速板阻力",
    "Stall Buffeting": "失速抖振",
    "Stress Creaks": "受力吱嘎声",
    "Touchdown Front": "前轮接地",
    "Touchdown Main": "主轮接地",
    "Turbulence": "湍流",
    "Wheel Well": "轮舱",
    "7-DAY TRIAL": "7 天试用",
    "Quick Diagnosis": "快速诊断",
    "Start Diagnosis": "开始诊断",
    "Is the Service Running?": "服务是否正在运行？",
    "Try a Different Port": "尝试其他端口",
    "Check Antivirus / Security Software": "检查杀毒软件 / 安全软件",
    "Service Not Connected": "服务未连接",
    "Service Not Running": "服务未运行",
    "Yes, It's Running": "是，正在运行",
    "No, Not Found": "否，未找到",
    "It Works Now": "现在可以正常工作",
    "Still Not Working": "仍无法正常工作",
    "Start Over": "重新开始",
    "Common reasons FSR+ won't connect:": "FSR+ 无法连接的常见原因：",
    "FSR+ service is not running": "FSR+ 服务未运行",
    "FSR+ port is in use by another application": "FSR+ 端口被其他应用占用",
    "Antivirus or security software is blocking FSR+": "杀毒软件或安全软件阻止了 FSR+",
    "Close Microsoft Flight Simulator completely": "完全关闭 Microsoft Flight Simulator",
    "Save the file": "保存文件",
    "Start MSFS and open the FSR+ in-game panel": "启动 MSFS 并打开 FSR+ 游戏内面板",
    "Found it running?": "找到正在运行的服务了吗？",
    "Option 1 (Recommended):": "选项 1（推荐）：",
    "Option 2 (Quick Test):": "选项 2（快速测试）：",
    "Temporarily disable your antivirus/security software to test if that's the issue.": "暂时禁用杀毒软件或安全软件，以确认是否为此问题。",
    "You may need to restart MSFS after making changes.": "更改后可能需要重启 MSFS。",
    "FSR+ is connected. Enjoy your flight!": "FSR+ 已连接。祝你飞行愉快！",
    "The FSR+ service didn't start automatically. Please open a support ticket so we can help.": "FSR+ 服务没有自动启动。请提交支持工单以便我们协助。",
    "Support website:": "支持网站：",
    "Serial number": "序列号",
    "Sound name": "声音名称",
    "Author name": "作者名称",
    "Sound description": "声音描述",
    "No file selected": "未选择文件",
    "Only upload sounds you created or have rights to use.": "请仅上传你创作或拥有使用权的声音。",
    "SOUND REQUIREMENTS": "声音要求",
    "UPLOAD": "上传",
    "Sort by: Downloads": "排序：下载量",
    "Sort by: Newest": "排序：最新",
    "Sort by: Rating": "排序：评分"
  };

  var attributes = ["placeholder", "title", "aria-label", "data-tooltip"];

  function translate(value) {
    if (typeof value !== "string") return value;
    var normalized = value.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    return translations[normalized] || translations[value] || value;
  }

  function translateTextNode(node) {
    var original = node.nodeValue;
    var translated = translate(original);
    if (translated !== original) node.nodeValue = translated;
  }

  function translateElement(element) {
    var index;
    if (!element || element.nodeType !== 1) return;
    for (index = 0; index < attributes.length; index += 1) {
      if (element.hasAttribute && element.hasAttribute(attributes[index])) {
        var original = element.getAttribute(attributes[index]);
        var translated = translate(original);
        if (translated !== original) element.setAttribute(attributes[index], translated);
      }
    }
  }

  function translateTree(root) {
    var walker;
    var node;
    if (!root) return;
    if (root.nodeType === 1) translateElement(root);
    walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    while ((node = walker.nextNode())) translateTextNode(node);
    if (root.querySelectorAll) {
      var elements = root.querySelectorAll("*");
      for (var index = 0; index < elements.length; index += 1) translateElement(elements[index]);
    }
  }

  function start() {
    translateTree(document.body);
    if (!window.MutationObserver || !document.body) return;
    new MutationObserver(function (records) {
      for (var index = 0; index < records.length; index += 1) {
        var record = records[index];
        if (record.type === "characterData") translateTextNode(record.target);
        for (var child = 0; child < record.addedNodes.length; child += 1) translateTree(record.addedNodes[child]);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
}());
