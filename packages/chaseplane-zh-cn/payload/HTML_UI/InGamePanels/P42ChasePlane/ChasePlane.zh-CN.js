(function () {
  "use strict";

  var translations = {
    "Camera": "相机", "Cameras": "相机", "Camera Behaviors": "相机行为",
    "Camera Settings": "相机设置", "Camera Position": "相机位置", "Camera Presets": "相机预设",
    "Reset Camera Position": "重置相机位置", "Reset Camera": "重置相机", "Cinematics": "电影模式",
    "Cinematics Mode": "电影模式", "Controls": "控制", "Control": "控制", "Assign Control": "分配控制",
    "Clear Control": "清除控制", "Settings": "设置", "Profile": "配置文件", "Profiles": "配置文件",
    "View": "视图", "Views": "视图", "Aircraft": "飞机", "Aircraft Profile": "飞机配置文件",
    "Airport": "机场", "Save": "保存", "Cancel": "取消", "Close": "关闭", "Back": "返回",
    "Apply": "应用", "Delete": "删除", "Edit": "编辑", "Create": "创建", "Duplicate": "复制",
    "Import": "导入", "Export": "导出", "Import Error": "导入错误", "Export Error": "导出错误",
    "Loading...": "正在加载...", "Loading": "正在加载", "Error": "错误", "Warning": "警告", "Success": "成功",
    "Enabled": "已启用", "Disabled": "已禁用", "Enable": "启用", "Disable": "禁用", "On": "开", "Off": "关",
    "Automatic": "自动", "Manual": "手动", "Default": "默认", "Reset": "重置", "Sensitivity": "灵敏度",
    "Zoom": "缩放", "Zoom In": "放大", "Zoom Out": "缩小", "Pan": "平移", "Tilt": "俯仰",
    "Roll": "滚转", "Pitch": "俯仰", "Yaw": "偏航", "Shake": "抖动", "Smoothness": "平滑度",
    "Speed": "速度", "Transition": "过渡", "Transition Time": "过渡时间", "Keybindings": "按键绑定",
    "Keyboard": "键盘", "Mouse": "鼠标", "Search": "搜索", "Search...": "搜索...", "No results": "无结果",
    "No results found": "未找到结果", "New Profile": "新建配置文件", "Rename": "重命名", "Confirm": "确认",
    "Yes": "是", "No": "否", "Help": "帮助", "About": "关于", "Version": "版本", "Update": "更新"
  };
  var attributes = ["placeholder", "title", "aria-label", "data-tooltip"];

  function translate(value) {
    var normalized;
    if (typeof value !== "string") return value;
    normalized = value.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    return translations[normalized] || translations[value] || value;
  }
  function translateElement(element) {
    var index;
    if (!element || element.nodeType !== 1 || element.isContentEditable) return;
    for (index = 0; index < attributes.length; index += 1) {
      if (element.hasAttribute(attributes[index])) element.setAttribute(attributes[index], translate(element.getAttribute(attributes[index])));
    }
  }
  function translateTree(root) {
    var walker, node, elements, index;
    if (!root || root.nodeType === 3 && root.parentNode && /^(SCRIPT|STYLE|TEXTAREA)$/i.test(root.parentNode.nodeName)) return;
    if (root.nodeType === 1) translateElement(root);
    walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    while ((node = walker.nextNode())) {
      if (!node.parentNode || /^(SCRIPT|STYLE|TEXTAREA)$/i.test(node.parentNode.nodeName) || node.parentNode.isContentEditable) continue;
      node.nodeValue = translate(node.nodeValue);
    }
    if (!root.querySelectorAll) return;
    elements = root.querySelectorAll("*");
    for (index = 0; index < elements.length; index += 1) translateElement(elements[index]);
  }
  function start() {
    if (!document.body) return;
    translateTree(document.body);
    if (!window.MutationObserver) return;
    new MutationObserver(function (records) {
      var index, childIndex;
      for (index = 0; index < records.length; index += 1) {
        if (records[index].type === "characterData") translateTree(records[index].target);
        for (childIndex = 0; childIndex < records[index].addedNodes.length; childIndex += 1) translateTree(records[index].addedNodes[childIndex]);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (typeof module !== "undefined" && module.exports) module.exports = { translate: translate };
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
  }
}());
