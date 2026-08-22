/* GSX Pro 4.0.17 Simplified Chinese patch v1.2.6. */
var GSX_ZH_CN = (function initGsxChinese(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.GSX_ZH_CN = api;
    if (root.document) api.installStaticDocument(root.document);
  }

  return api;
})(typeof window !== "undefined" ? window : this, function createGsxChinese() {
  "use strict";

  // The dictionary contains complete messages. Pattern entries below only
  // handle messages with variable airport, route, count, or service fields.
  const exactEntries = [
    ["GSX-MENU", "GSX 菜单"],
    ["GSX MAIN MENU", "GSX 主菜单"],
    ["GSX Menu", "GSX 菜单"],
    ["GSX Status", "GSX 状态"],
    ["GSX Settings", "GSX 设置"],
    ["GSX Remote Control", "GSX 远程控制"],
    ["GSX Tooltip", "GSX 提示"],
    ["Loading Prompt", "正在加载"],
    ["Page Prompt", "页面提示"],
    ["Outdated Msg", "版本提示"],
    ["Loading", "正在加载"],
    ["Done", "完成"],
    ["Loading addons", "正在加载插件"],
    ["Initializing audio", "正在初始化音频"],
    ["Validating airport addons", "正在验证机场插件"],
    ["Searching add-on packages", "正在搜索插件包"],
    ["Building gsx-pro models cache", "正在构建 GSX Pro 模型缓存"],
    ["Building gsx-world models cache", "正在构建 GSX World 模型缓存"],
    ["Loading Handling operators thumbs", "正在加载地勤服务商缩略图"],
    ["Loading Catering operators thumbs", "正在加载配餐服务商缩略图"],
    ["Loading AI", "正在加载 AI"],
    ["Loading Aircraft data", "正在加载飞机数据"],
    ["Loading GSX Menu, please wait...", "正在加载 GSX 菜单，请稍候..."],
    ["Loading GSX Menu...", "正在加载 GSX 菜单..."],
    ["Can't read the aircraft type", "无法读取飞机类型"],
    ["Save current position...", "保存当前位置..."],
    ["Save current position", "保存当前位置"],
    ["Checking Simbrief", "正在检查 SimBrief"],
    ["Checking SimBrief", "正在检查 SimBrief"],
    ["Initializing Couatl", "正在初始化 Couatl"],
    ["Restarting GSX, please wait...", "正在重启 GSX，请稍候..."],
    ["Restarting GSX...", "正在重启 GSX..."],
    ["GSX engine is not running...", "GSX 引擎未运行..."],
    ["GSX engine has stopped. Waiting for auto-restart...", "GSX 引擎已停止，正在等待自动重启..."],
    ["Failed to load GSX Menu. Please wait, it might appear later...", "GSX 菜单加载失败，请稍候，菜单可能稍后出现..."],
    ["Menu reload timed out. Please wait, it might appear later...", "GSX 菜单重新加载超时，请稍候，菜单可能稍后出现..."],
    ["GSX is under Remote Control, menu will close now...", "GSX 正由远程设备控制，菜单即将关闭..."],
    ["Remote control engaged - closing panel.", "远程控制已启用，正在关闭面板。"],
    ["Click to open the main menu", "点击打开主菜单"],
    ["Double-click to change the hotkey", "双击更改快捷键"],
    ["Press new hotkey...", "请按新的快捷键..."],
    ["press new hotkey...", "请按新的快捷键..."],
    ["Cancel", "取消"],
    ["OK", "确定"],
    ["Back", "返回"],
    ["Close", "关闭"],
    ["Next", "下一步"],
    ["Previous", "上一步"],
    ["Next Page", "下一页"],
    ["Previous Page", "上一页"],
    ["Open in browser", "在浏览器中打开"],
    ["View Log", "查看日志"],
    ["Customize Airport positions", "自定义机场停机位"],
    ["Customize Airport Positions", "自定义机场停机位"],
    ["Customize Airplane", "自定义飞机"],
    ["Customize Aircraft", "自定义飞机"],
    ["Customize this parking position", "自定义当前停机位"],
    ["Restart Couatl", "重启 Couatl"],
    ["Restart GSX", "重启 GSX"],
    ["Reload Simbrief", "重新载入 SimBrief"],
    ["Reload SimBrief", "重新载入 SimBrief"],
    ["Reloading SimBrief", "正在重新载入 SimBrief"],
    ["SimBrief OK", "SimBrief 正常"],
    ["Unknown SimBrief status.", "SimBrief 状态未知。"],
    ["Search parking...", "搜索停机位..."],
    ["Search parkings...", "搜索停机位..."],
    ["Select from Map", "从地图选择"],
    ["Activate Services at:", "在此停机位使用服务："],
    ["Activate Services", "使用地面服务"],
    ["Request Boarding", "请求登机服务"],
    ["Request Deboarding", "请求下客服务"],
    ["Request Catering", "请求配餐服务"],
    ["Request Catering Service", "请求配餐服务"],
    ["Request Refueling", "请求加油服务"],
    ["Request Pushback", "请求推出服务"],
    ["Request De-icing", "请求除冰服务"],
    ["Request Deicing", "请求除冰服务"],
    ["Request Follow Me", "请求引导车"],
    ["Request Follow-Me", "请求引导车"],
    ["Request FollowMe?", "请求引导车？"],
    ["Request Progressive Taxi", "请求渐进式滑行"],
    ["Show me this spot", "带我前往此处"],
    ["Just warp me there", "直接传送到此处"],
    ["Request Water Service", "请求补水服务"],
    ["Request Lavatory Service", "请求清污服务"],
    ["Request Ground Power Unit", "请求地面电源"],
    ["Prepare for Pushback and Departure", "准备推出和离场"],
    ["Operate Jetways", "操作廊桥"],
    ["Operate Jetway", "操作廊桥"],
    ["Operate Stairs", "操作客梯车"],
    ["Operate Passenger Stairs", "操作客梯车"],
    ["Stairs disabled", "客梯车已禁用"],
    ["Boarding", "登机"],
    ["Deboarding", "下客"],
    ["Catering", "配餐"],
    ["Refueling", "加油"],
    ["Pushback", "推出"],
    ["De-icing", "除冰"],
    ["Deicing", "除冰"],
    ["Follow Me", "引导车"],
    ["Follow-Me", "引导车"],
    ["Jetways", "廊桥"],
    ["Passenger Stairs", "客梯车"],
    ["Ground Power Unit", "地面电源"],
    ["Lavatory Service", "清污服务"],
    ["Water Service", "补水服务"],
    ["Abort Boarding", "中止登机"],
    ["Abort Deboarding", "中止下客"],
    ["Abort Pushback", "中止推出"],
    ["Stop Pushback", "停止推出"],
    ["Stop here", "在此停止"],
    ["Straight Pushback", "直线推出"],
    ["Pushback Left", "向左推出"],
    ["Pushback Right", "向右推出"],
    ["Tow forward", "向前牵引"],
    ["Quick Edit Pushback", "快速编辑推出路线"],
    ["QuickEdit Pushback", "快速编辑推出"],
    ["QuickEdit Pushback on Map", "在地图上快速编辑推出"],
    ["Interrupt pushback?", "中断推出？"],
    ["Return to parking", "返回停机位"],
    ["Stop here and complete pushback...", "在此停止并完成推出..."],
    ["Stop here and complete pushback procedure", "在此停止并完成推出流程"],
    ["Select pushback direction", "选择推出方向"],
    ["Facing NW on T14 (NL)", "面向西北，位于 T14（NL）"],
    ["Straight Pushback (manual stop, max 100 m)", "直线推出（手动停止，最长 100 米）"],
    ["Straight pushback (manual stop, max 100 m)", "直线推出（手动停止，最长 100 米）"],
    ["Straight Pull pushback (manual stop, max 100 m)", "直线拉出（手动停止，最长 100 米）"],
    ["Change parking or service", "更改停机位或服务"],
    ["Stop Progressive Taxi", "停止渐进式滑行"],
    ["Moving Map", "移动地图"],
    ["[GSX] In position, please set parking brakes", "[GSX] 已就位，请设置停留刹车"],
    ["Set parking brakes", "设置停留刹车"],
    ["Release parking brakes", "松开停留刹车"],
    ["Confirm good engine start", "确认发动机启动正常"],
    ["Disconnect tow truck", "断开牵引车"],
    ["Select parking facility", "选择停机设施"],
    ["Select parking position", "选择停机位"],
    ["Reposition Aircraft", "重新放置飞机"],
    ["Reposition here", "将飞机移至此处"],
    ["Reposition from Map", "\u4ece\u5730\u56fe\u91cd\u65b0\u5b9a\u4f4d"],
    ["Apply hotfix", "应用热修复"],
    ["Apply hotfix and restart GSX", "应用热修复并重启 GSX"],
    ["Applying hotfix, please wait...", "正在应用热修复，请稍候..."],
    ["Hotfix downloading...", "正在下载热修复..."],
    ["OK Hotfix ready - click here to apply", "热修复已就绪，点击应用"],
    ["Prepare for Push-back and Departure", "准备推出和离场"],
    ["No Jetways here", "此处没有廊桥"],
    ["Additional Services", "附加服务"],
    ["Request DeIce", "请求除冰服务"],
    ["Request Cleaning service", "请求清洁服务"],
    ["Cameras", "摄像机"],
    ["Spawn vehicle (debug)", "生成车辆（调试）"],
    ["Free this parking from AI", "清除当前停机位的 AI 飞机"],
    ["Administration", "管理"],
    ["Handler Script Editor", "地勤脚本编辑器"],
    ["View past invoices", "查看历史账单"],
    ["Clean up invoices", "清理账单"],
    ["Ground Handling", "地面服务"],
    ["Passenger Bus", "摆渡车"],
    ["Simulation", "模拟"],
    ["Services", "服务"],
    ["Timings", "时间"],
    ["Audio", "音频"],
    ["Network", "网络"],
    ["Diagnostic", "诊断"],
    ["UI", "界面"],
    ["Multiple trips", "允许多趟服务"],
    ["Loaders stay until departure", "装载设备停留至离场"],
    ["Ignore crew in boarding/deboarding", "登机/下客时忽略机组"],
    ["Airport walkers", "机场行人"],
    ["Seated passengers always visible", "始终显示就座乘客"],
    ["Progressive taxi AI rerouting", "渐进式滑行时重新规划 AI"],
    ["Assistance services Auto Mode", "辅助服务自动模式"],
    ["Auto Mode ignore doors", "自动模式忽略舱门"],
    ["Auto-select when single operator", "单一服务商时自动选择"],
    ["Automated reposition", "自动重新定位"],
    ["Always refuel progressively", "始终渐进式加油"],
    ["Detect custom aircraft system refueling", "检测飞机自定义加油系统"],
    ["Automated staircases", "客梯车自动化"],
    ["Disable rear staircases if jetway", "有廊桥时禁用后部客梯车"],
    ["Pushback speed", "推出速度"],
    ["Straight pushback distance", "直线推出距离"],
    ["Always ask for pushback", "始终询问是否推出"],
    ["Connect Pushback on Boarding", "登机时连接推出车"],
    ["Ignore icing condition in Pushback", "推出时忽略结冰条件"],
    ["Good engine start confirmation", "确认发动机启动正常"],
    ["Pushback Wingwalkers", "推出翼尖监护员"],
    ["FollowMe car speed", "引导车速度"],
    ["FollowMe disable flee", "禁用引导车逃离"],
    ["Keep AI airplanes away from your parking", "防止 AI 飞机占用当前停机位"],
    ["Keep AI away from this distance", "AI 避让距离"],
    ["Ignore wingspan when parking", "停机时忽略翼展限制"],
    ["Parking \"Slow Down\" speed", "停机“减速”速度"],
    ["Parking stop position tolerance", "停机停止位置容差"],
    ["Parking System Distance Readout", "停机引导系统距离读数"],
    ["Current controller hotkey", "当前控制器快捷键"],
    ["Assign", "分配"],
    ["Controller", "控制器"],
    ["Pinned menu / VR mode", "固定菜单 / VR 模式"],
    ["Auto (enable in VR)", "自动（VR 中启用）"],
    ["Select menu options with number keys", "使用数字键选择菜单项"],
    ["Disable GSX in cruise", "巡航时禁用 GSX"],
    ["Use classic menu style", "使用经典菜单样式"],
    ["Message verbosity", "消息详细程度"],
    ["Important only", "仅重要消息"],
    ["All messages", "全部消息"],
    ["Edit cursors", "编辑光标"],
    ["Camera (new)", "相机（新版）"],
    ["Object (legacy)", "对象（旧版）"],
    ["Profiles creator nickname", "配置文件作者昵称"],
    ["Your nickname", "你的昵称"],
    ["Menu timeout", "菜单超时时间"],
    ["Lasting time", "持续时间"],
    ["Interval between \"Waiting for your action\" messages", "“等待你的操作”消息间隔"],
    ["Boarding density", "登机密度"],
    ["Deboarding density", "下客密度"],
    ["Delay Pilots/Crew", "飞行员/机组延迟"],
    ["Delay Crew/Pax", "机组/乘客延迟"],
    ["Refueling minimum time", "最短加油时间"],
    ["Refueling time acceleration", "加油时间加速"],
    ["Speed up far vehicles", "加速远处车辆"],
    ["Master volume", "主音量"],
    ["Communications Audio Device", "通信音频设备"],
    ["Comms volume", "通信音量"],
    ["Cockpit Audio Device", "驾驶舱音频设备"],
    ["Cockpit volume", "驾驶舱音量"],
    ["Outside Audio Device", "外部音频设备"],
    ["Outside volume", "外部音量"],
    ["Beeps volume", "提示音音量"],
    ["Play audio warnings", "播放语音警告"],
    ["Play cash-register sound on invoice notifications", "账单通知时播放收银提示音"],
    ["SimBrief username", "SimBrief 用户名"],
    ["Ignore Simbrief time", "忽略 SimBrief 时间"],
    ["Trust Simbrief passengers number", "采用 SimBrief 乘客人数"],
    ["Invoice printing", "账单打印"],
    ["Invoice printer", "账单打印机"],
    ["Auto print new invoices", "自动打印新账单"],
    ["Detected paper size", "检测到的纸张尺寸"],
    ["Print test", "打印测试"],
    ["Enable diagnostic log", "启用诊断日志"],
    ["Log file location", "日志文件位置"],
    ["Diagnostic log", "诊断日志"],
    ["Open Log", "打开日志"],
    ["Panic log location", "崩溃日志位置"],
    ["Panic log", "崩溃日志"],
    ["Open Panic Log", "打开崩溃日志"],
    ["Disable hotfix notifications", "禁用热修复通知"],
    ["Audio status", "音频状态"],
    ["Audio diagnostics", "音频诊断"],
    ["Reset", "重置"],
    ["No", "否"],
    ["Yes", "是"],
    ["Auto", "自动"],
    ["None", "无"],
    ["Enabled", "启用"],
    ["Disabled", "禁用"],
    ["Silent", "静默"],
    ["Sparse", "稀疏"],
    ["Normal", "正常"],
    ["Dense", "密集"],
    ["Very dense", "非常密集"],
    ["Insane", "极高"],
    ["15 sec", "15 秒"],
    ["upon reaching the gate", "到达停机位时"],
    ["Mainland China (except ZK and ZM)", "中国大陆（ZK 和 ZM 除外）"],
    ["Our airplane is Parked", "本机已停稳"],
    ["Ramp GA Large", "大型通航机坪"]
  ];

  const settingsDescriptionEntries = [
    ["If this option is Enabled, services capable of multiple trips (Fuel and Passenger Bus), will go back and forth with a new vehicle, once their reached their maximum capacity. If Disabled, the complete service will be performed by a single Vehicle.", "启用后，加油车和摆渡车等有容量限制的服务会在满载后更换车辆往返多趟。禁用后，整个服务只使用一辆车完成。"],
    ["If Enabled, belt loaders will stay at the aircraft after boarding is complete, until departure. If Disabled, they will back off as soon as loading is done.", "启用后，传送带装载车会在登机完成后留在飞机旁直至离场；禁用后会在装载完成时立即撤离。"],
    ["If Enabled, boarding/deboarding of crew and pilots will always be skipped", "启用后，登机和下客流程始终跳过飞行员与机组人员。"],
    ["Some GSX profiles might have defined \"Airport Walkers\", which are Passengers walking around, not related to the Boarding/Deboaring procedure. By Disabling this option, you can reduce their impact on performances.", "部分 GSX 配置包含与登机/下客无关的机场行人。禁用此项可降低他们对性能的影响。"],
    ["Some GSX profiles might have defined \"Airport Walkers\", which are Passengers walking around, not related to the Boarding/Deboarding procedure. By Disabling this option, you can reduce their impact on performances.", "部分 GSX 配置包含与登机/下客无关的机场行人。禁用此项可降低他们对性能的影响。"],
    ["By default, seated Passengers are hidden when looking from the cockpit with the cockpit door closed, so you don't see the cabin through a shut door. If Enabled, the cockpit door status is ignored and they stay visible at all times. Useful on airplanes whose cockpit door state GSX cannot read, where they would otherwise never be visible from the flight deck.", "默认情况下，驾驶舱门关闭时，从驾驶舱视角不会显示已就座乘客。启用后将忽略舱门状态并始终显示乘客，适用于 GSX 无法读取驾驶舱门状态的飞机。"],
    ["If Enabled, progressive taxi reroutes when AI hinders", "启用后，渐进式滑行路线会在受到 AI 阻挡时重新规划。"],
    ["If Enabled, when Boarding or Deboarding is requested as the first service on gate, GSX will continue with Catering and Refueling, and will select the operator automatically, without interrupting with a menu.", "启用后，当登机或下客是停机位上的首个服务时，GSX 会继续执行配餐和加油，并自动选择服务商，不再弹出菜单。"],
    ["If the \"Assistance Services Auto Mode\" is Enabled, this option will activate, to allow GSX to always ignore the door open/close status, and perform the service without interrupting, if Enabled, even in case the airplane doesn't support Door Automation.", "辅助服务自动模式启用时，此选项允许 GSX 忽略舱门开关状态并连续执行服务，即使飞机不支持舱门自动控制。"],
    ["If Enabled, when there is only one operator available for a given service group (handling, catering, refueling), GSX will skip the operator picker and use it directly. Restores the behavior used before GSX 4.0.", "启用后，当地勤、配餐或加油只有一个可用服务商时，GSX 会跳过选择页面并直接使用该服务商。"],
    ["If Enabled, aircraft is automatically repositioned at default gate position when requesting assistance services", "启用后，请求辅助服务时会自动将飞机重新放置到停机位默认位置。"],
    ["If Enabled, the refueling speed will depend by the fuel truck pump, even on airplanes not using a Progressive refuel simulation. Affects only airplanes with a custom fuel system. The ones using a standard fuel system, which are actually refueled by GSX, will always be refueled Progressively.", "启用后，即使飞机未使用渐进式加油模拟，加油速度也由加油车泵速决定。仅影响自定义燃油系统；标准燃油系统始终由 GSX 渐进式加油。"],
    ["If Enabled, when the Airplane Fuel quantity increases, GSX will automatically call its own Fuel Truck, in order to not \"miss\" the event. The option is only required in very rare situations, like Airplanes starting refueling automaticallty as part of their own internal Turnaround simulation. It's Disabled by default, and we suggest not to use it, except for those fringe cases.", "启用后，当飞机燃油量增加时，GSX 会自动呼叫加油车以免错过加油事件。仅适用于飞机自身过站流程会自动开始加油的少数情况，通常建议保持禁用。"],
    ["If Enabled, staircases automatically operate (attach to/detach from airplane) in Boarding/Deboarding\n\nYou can also enable it partially: staircases will only approach and attach airplane automatically (detach and go away will be started only by user)\n\nIf Disabled, staircases will operate only by user command", "启用后，客梯车会在登机/下客时自动靠接和撤离。\n\n也可使用半自动模式：自动靠接，撤离仍由用户发起。\n\n禁用后，客梯车只响应用户命令。"],
    ["If Enabled, Rear Stairs will be always Disabled, on gates with a Jetway.", "启用后，在配有廊桥的停机位始终禁用后部客梯车。"],
    ["Controls the pushback tug speed.", "控制推出车速度。"],
    ["Sets the distance for a Straight Pushback (10 to 300 m).", "设置直线推出距离（10 至 300 米）。"],
    ["If Enabled, it will always ask if a Pushback is needed. If Disabled, it will only ask on parking spots where the Pushback preference has been set to \"None\".", "启用后始终询问是否需要推出；禁用后，仅在推出偏好设为“无”的停机位询问。"],
    ["If Enabled, Pushback will be connected when Boarding is started", "启用后，开始登机时会连接推出车。"],
    ["If Enabled, Pushback won't ask to wait to start engines until the end of pushback in icing conditions.", "启用后，即使存在结冰条件，推出流程也不会要求等到推出结束后再启动发动机。"],
    ["If this option is Enabled, you will be asked to Confirm a good Engine Start at the end of Pushback.", "启用后，推出结束时会要求确认发动机启动正常。"],
    ["If Enabled, Pushback will use two extra crew", "启用后，推出服务会增加两名翼尖监护员。"],
    ["Controls the Follow Me Car normal speed, on linear paths.", "控制引导车在直线路径上的正常速度。"],
    ["If you follow the Follow Me car from a too close distance (based on your acceleration towards the Car), it will \"Flee\" away, with a message saying it has been \"Aborted for Safety reasons\". Enabling this option will Disable this behiavior. The Follow Me car will still circle around you, if you are too close, but it won't \"Flee\" anymore.", "如果跟车过近，引导车通常会加速逃离并提示因安全原因中止。启用此项后禁用逃离行为；距离过近时引导车仍会绕行。"],
    ["If your are approaching a Parking System (Marshaller or VGDS) with a speed higher than this value, the Parking System will issue a \"SLOW DOWN\" gesture/message.", "接近引导员或 VGDS 时若速度高于此值，停机引导系统会发出“减速”手势或消息。"],
    ["Set parking stop position tolerance multiplier from x1 (default) to x2", "设置停机停止位置的容差倍率，范围为 x1（默认）至 x2。"],
    ["If Enabled, a numeric indication of the lateral/longitudinal distance from the selected Parking System (Marshaller or VGDS) will be shown on top of it.", "启用后，会在所选引导员或 VGDS 上方显示横向和纵向距离数值。"],
    ["If this option is Enabled, the \"Parking Too Small\" message when you select a parking spot will be suppressed. The parking spot will still listed as \"too small\" in the menu (which might still be useful to know), but GSX won't issue any other warnings about it.", "启用后，选择停机位时不再显示“停机位太小”警告。菜单仍会将该停机位标记为过小，但 GSX 不再发出其他提示。"],
    ["If Enabled, an AI airplane parked on the parking spot you selected will be removed automatically, so the sim can't take your spot while you are using it, and you don't have to use the \"Free this parking from AI\" menu option yourself. Only AI standing in the detection area of YOUR parking spot is removed, so AI parked on the stands next to yours is never touched.", "启用后，会自动移除占用所选停机位的 AI 飞机，无需手动使用清除菜单。只移除当前停机位检测范围内的 AI，不影响相邻停机位。"],
    ["How close you must be to your selected parking spot before AI airplanes standing on it are removed, so the spot is already clear while you are taxiing in. Don't set it higher than needed: if you are still far away, the simulator considers your parking spot free and simply sends another AI to it, which would be removed again.", "设置飞机距离所选停机位多近时清除占位 AI。不要设置得过大，否则模拟器可能在你仍较远时再次派入新的 AI 飞机。"],
    ["Pick the controller, click \"Assign\", then press the button you want. Select \"None\" to remove the controller hotkey. Works alongside the keyboard hotkey, not instead of it.", "选择控制器并点击“分配”，然后按下所需按键。选择“无”可移除控制器快捷键；它可与键盘快捷键同时使用。"],
    ["When enabled, GSX uses the classic numbered button stack instead of the modern T9 grid / row-list menus. Useful for low-resolution panels, simpler aesthetics, or users who prefer the legacy look. The invoice viewer / price-list document pages still appear in the read-only iframe above the menu — only the button layout changes.", "启用后，GSX 使用经典编号按钮列表替代现代 T9 网格或行列表。适合低分辨率面板或偏好旧版外观的用户；账单和价目表页面不受影响。"],
    ["When enabled, the 1-9 and 0 keys pick the matching GSX menu option. Disable this if the number keys are assigned to another application (camera presets, for example) and GSX menu choices get selected unintentionally. The GSX menu hotkey and clicking the menu are not affected.", "启用后，1-9 和 0 数字键可选择对应的 GSX 菜单项。若数字键已用于相机预设等功能并造成误选，请禁用此项。"],
    ["How the editing cursors move when you press the arrow keys. \"Camera (new)\" moves the cursor relative to your camera view. \"Object (legacy)\" moves it relative to the cursor's own orientation, like it did before and like MSFS 2020. Only affects MSFS 2024 (2020 is always object-relative).", "设置按方向键时编辑光标的移动基准。“相机（新版）”相对当前视角移动；“对象（旧版）”相对光标自身方向移动。仅影响 MSFS 2024。"],
    ["When enabled, the GSX menu panel stays visible after a menu closes, showing only the static buttons. Useful for VR controllers and pinned/floating menus. 'Auto' enables pinning only while in VR.", "启用后，菜单关闭时 GSX 面板仍显示静态按钮，适合 VR 控制器和固定/浮动菜单。“自动”仅在 VR 中固定。"],
    ["When enabled, GSX no longer writes service-completion receipts to disk and the panel banner / cash-register notification is suppressed. The Administration menu still lets you browse, view and clean up receipts you have already generated.", "启用后，GSX 不再将服务账单写入磁盘，也不显示面板横幅和收银提示音。管理菜单仍可浏览和清理已有账单。"],
    ["If Enabled, GSX will be not available while cruising (higher than 10000 ft, faster than 250 kts).\n\nThis might help fixing possible freezes or crashes due to issues with receiving Navdata during the flight.", "启用后，巡航阶段（高于 10000 英尺且速度超过 250 节）将停用 GSX。\n\n这可能缓解飞行中接收导航数据导致的卡顿或崩溃。"],
    ["The number of text messages displayed by GSX.", "设置 GSX 显示文本消息的详细程度。"],
    ["The name that will be displayed upon clicking the 'Details' button on the Airport Customization page.", "在机场自定义页面点击“详情”时显示的名称。"],
    ["How long the GSX menu stays open before timing out (seconds)", "GSX 菜单超时关闭前保持打开的时长（秒）。"],
    ["This setting controls the \"Show me this spot\" feature. Moving the slider sets pointer show duration, from 5 to 30 sec, or upon reaching the gate", "控制“显示此停机位”指示器的持续时间，可设为 5 至 30 秒或直到到达停机位。"],
    ["This setting controls the Density of Passengers Boarding the airplane, or Airport Walkers. Moving the slider towards the highest settings, will have a direct impact on Boarding times (more Density = quicker times), with some cost on FPS and to the overall number of Simobjects in the sim, since more Passengers will be visible at once.", "控制登机乘客和机场行人的密度。密度越高，登机越快，但会显示更多乘客并影响帧率。"],
    ["This setting controls the Density of Passengers Deboarding the airplane. Moving the slider towards the highest settings, will have a direct impact on Deboarding times (more Density = quicker times), with some cost on FPS and to the overall number of Simobjects in the sim, since more Passengers will be visible at once.", "控制下客乘客密度。密度越高，下客越快，但会显示更多乘客并影响帧率。"],
    ["This setting adds a delay of x minutes between pilots and crew boarding", "在飞行员与机组登机之间增加指定分钟的延迟。"],
    ["This setting adds a delay of x minutes between crew and passengers boarding", "在机组与乘客登机之间增加指定分钟的延迟。"],
    ["Controls the minimum time for the Refueling operation, when Refueling is not performed Progressively.", "控制非渐进式加油操作的最短时间。"],
    ["Accelerates the Progressive Refueling process. It only affects the simulated \"Fuel Pump\" speed, not the actual animation of the Fuel Truck and Crew.", "加快渐进式加油过程。只影响模拟燃油泵速度，不影响加油车和工作人员动画。"],
    ["If Enabled, far vehicles approaching your Parking spot will be accelerated in proportion to their distance from you, to reduce waiting times at big airports with parking spots of the \"Vehicle\" type not well spread around. If Disabled, their speed will always be normal.", "启用后，驶向当前停机位的远处车辆会按距离加速，以缩短大型机场的等待时间；禁用后始终以正常速度行驶。"],
    ["Master volume that scales all audio channels.", "控制所有音频通道的主音量。"],
    ["Volume for non-positional sounds, like warnings and menu beeps.", "控制警告和菜单提示音等非定位声音的音量。"],
    ["Volume for cockpit sounds, like passenger noise and boarding announcements heard from inside the aircraft.", "控制驾驶舱内听到的乘客声音和登机广播等声音音量。"],
    ["Volume for positional outside sounds, like ground vehicles, jet bridges, cargo loaders and other ground operations.", "控制地面车辆、廊桥、货物装载设备等外部定位声音的音量。"],
    ["Volume for GSX's notification beeps — warnings, errors, and the cash-register chime on invoice notifications. Plays through the Comms channel. Set to 0 to silence beeps entirely without disabling the aural warnings / cash-register toggles below.", "控制 GSX 警告、错误和账单收银提示音，通过通信通道播放。设为 0 可静音提示音，但不会关闭下方的语音警告或收银提示开关。"],
    ["If this option is Enabled, GSX will play several audio speech cues, in addition to Text messages, to be sure they are not missed, in case the Toolbar menu is not Active. In P3D, Text messages might not be displayed, if the \"Show Info\" option is Disabled in the Settings, so audio cues might also help in that case. Disabling this option will remove the speech cues.", "启用后，GSX 除文本消息外还会播放语音提示，避免工具栏菜单未打开时错过重要信息。禁用后不再播放这些语音提示。"],
    ["When enabled, GSX plays a short cash-register chime each time a service invoice is published (fuel, catering, ground handling). Disable if you'd prefer the silent panel banner + tooltip notification only.", "启用后，每次生成加油、配餐或地勤账单时播放短促收银提示音。若只需静默横幅和提示，请禁用。"],
    ["Insert your SimBrief \"Alias (Username)\" here. Not to be confused with the \"Pilot ID\", which is numeric, and it's not the one you need to use here.", "请输入 SimBrief 的“别名（用户名）”，不要填写纯数字的“飞行员 ID”。"],
    ["Normally, GSX will tell you are \"Too Late\", if the Departure time in the Simbrief flightplan has already passed. Enabling this option will remove this check, and will allow to accept a flightplan, even if the time in the simulator is past the departure time on the Flightplan.", "通常，若 SimBrief 计划离场时间已过，GSX 会提示“太晚”。启用后取消该检查，即使模拟器时间已超过计划离场时间也接受航班计划。"],
    ["When enabled, GSX always uses the number of passengers from the loaded Simbrief flightplan, ignoring any value an add-on aircraft may set through its own LVars. Leave disabled to let the airplane's own passenger count take precedence. Has no effect when no Simbrief flightplan is loaded.", "启用后始终采用已加载 SimBrief 航班计划中的乘客人数，忽略插件飞机通过 LVar 提供的数值。禁用时优先使用飞机自身人数；未加载 SimBrief 计划时无效。"],
    ["The thermal POS receipt printer used for printing GSX invoices (ESC/POS). Only printers reporting 58 mm or 80 mm roll paper are listed; \"Auto\" uses the first one found. Invoices are previewed in the GSX menu before printing. For printing on a regular full-size printer, use the invoice's \"Open in browser\" option and print from the browser instead.", "选择用于打印 GSX 账单的 ESC/POS 热敏打印机，仅显示使用 58 或 80 毫米卷纸的设备。“自动”使用检测到的第一台设备。普通打印机请从账单页面选择“在浏览器中打开”后打印。"],
    ["When enabled, every newly generated invoice is printed automatically on the receipt printer, with no preview or confirmation. Disabled by default. Manual printing from the invoice pages keeps working either way.", "启用后，新账单会直接由热敏打印机自动打印，不显示预览或确认。默认禁用；无论是否启用都可从账单页面手动打印。"],
    ["When Enabled, Couatl writes a full diagnostic log on next startup, even if no errors happen. The log helps diagnose issues but slightly impacts startup performance, so it's off by default. The log is overwritten on every Couatl run.", "启用后，Couatl 下次启动时即使没有错误也会写入完整诊断日志。日志有助于排查问题，但会略微影响启动性能，且每次运行都会覆盖。"],
    ["Opens Couatl.log so you can read it or attach it to a bug report. If the log isn't enabled yet, opens the folder where it would be written.", "打开 Couatl.log 以便查看或附加到错误报告；若尚未启用日志，则打开其目标文件夹。"],
    ["Opens Couatl.err (the crash log). The panic log is appended on every crash and never overwritten, so you may want to delete it manually if it grows large. Disabled when no crash log exists yet.", "打开崩溃日志 Couatl.err。每次崩溃都会追加内容且不会覆盖，文件过大时可手动删除；没有崩溃日志时此项不可用。"],
    ["If Enabled, GSX will not show the hotfix prompt or banner. Useful as a workaround when Cloudflare CDN replication delays cause a transient false hotfix notification.", "启用后不显示 GSX 热修复提示或横幅，可临时规避 Cloudflare CDN 同步延迟造成的错误热修复通知。"],
    ["Clears any remembered audio enumeration failure and the list of devices that previously failed to initialise. Take effect on the next Couatl restart.", "清除已记录的音频设备枚举失败和初始化失败设备列表，在下次重启 Couatl 后生效。"],
    ["Deboard", "下客"],
    ["Refuel", "加油"],
    ["Board", "登机"],
    ["Jetway", "廊桥"],
    ["Stairs", "客梯车"],
    ["GPU", "地面电源"],
    ["De-Ice", "除冰"],
    ["Lavatory", "清污"],
    ["Water", "补水"],
    ["Cleaning", "清洁"],
    ["Parking", "停机位"],
    ["Not set", "未设置"],
    ["★ Auto — no receipt printer found", "★ 自动 — 未找到热敏打印机"],
    ["No receipt printer found — GSX prints on thermal POS printers reporting 58 mm or 80 mm paper", "未找到热敏打印机 — GSX 仅支持报告 58 或 80 毫米纸宽的热敏 POS 打印机"],
    ["(disabled — toggle on to enable)", "（已禁用 — 打开开关以启用）"],
    ["The audio subsystem seems to be working properly. Live audio device switching is enabled — changes take effect immediately without restarting.", "音频子系统工作正常。已启用音频设备实时切换，更改会立即生效，无需重启。"]
  ];

  exactEntries.push(...settingsDescriptionEntries);

  const exact = new Map(exactEntries);
  const exactLower = new Map(exactEntries.map(([source, target]) => [source.toLowerCase(), target]));

  const phraseEntries = [
    ["Terminal", "航站楼"],
    ["Concourse", "指廊"],
    ["Concourses", "指廊"],
    ["Gate", "登机口"],
    ["Gates", "登机口"],
    ["Apron", "机坪"],
    ["Aprons", "机坪"],
    ["Parking", "停机位"],
    ["Parkings", "停机位"],
    ["Stands Not Edited", "未编辑的停机位"],
    ["Cargo Ramp", "货运机坪"],
    ["Cargo", "货运"],
    ["Passenger", "乘客"],
    ["Passengers", "乘客"],
    ["Baggage", "行李"],
    ["Jetway", "廊桥"],
    ["Jetways", "廊桥"],
    ["Passenger Stairs", "客梯车"],
    ["Stairs", "客梯车"],
    ["Ground Power Unit", "地面电源"],
    ["GPU", "地面电源"],
    ["DeIce", "除冰"],
    ["De-Ice", "除冰"],
    ["Lavatory", "清污"],
    ["Water", "补水"],
    ["Cleaning", "清洁"],
    ["Departure", "推出"],
    ["OperateJetways", "廊桥"],
    ["OperateStairs", "客梯车"],
    ["Boarding", "登机"],
    ["Deboarding", "下客"],
    ["Catering", "配餐"],
    ["Refueling", "加油"],
    ["Pushback", "推出"],
    ["De-icing", "除冰"],
    ["Deicing", "除冰"],
    ["Follow Me", "引导车"],
    ["Follow-Me", "引导车"],
    ["Marshaller", "引导员"],
    ["Airport", "机场"],
    ["Airports", "机场"],
    ["Airplane", "飞机"],
    ["Airplanes", "飞机"],
    ["Aircraft", "飞机"],
    ["Service", "服务"],
    ["Services", "服务"]
  ];

  const phrases = new Map(phraseEntries);
  const phrasesLower = new Map(phraseEntries.map(([source, target]) => [source.toLowerCase(), target]));

  function translatePhraseList(value) {
    const direct = phrases.get(value) || phrasesLower.get(value.toLowerCase());
    if (direct) return direct;
    return value.split(/(\s+|,\s*|\/)/).map((part) =>
      phrases.get(part) || phrasesLower.get(part.toLowerCase()) || part
    ).join("");
  }

  function normalizeLookupText(value) {
    return value
      .replace(/\u00a0/g, " ")
      .replace(/\u2026/g, "...")
      .replace(/[’]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/\.{4,}$/, "...");
  }

  function translateAirportLocation(value) {
    return value
      .replace(/\bTerminal\b/gi, "\u822a\u7ad9\u697c")
      .replace(/\bConcourse\b/gi, "\u6307\u5eca")
      .replace(/\bWest\b/gi, "\u897f\u533a")
      .replace(/\bEast\b/gi, "\u4e1c\u533a")
      .replace(/\bNorth\b/gi, "\u5317\u533a")
      .replace(/\bSouth\b/gi, "\u5357\u533a")
      .replace(/\bGate\b/gi, "\u767b\u673a\u53e3");
  }

  function isAirportLocationLabel(value) {
    return /^\s*(?:(?:Terminal|Concourse)\b.*\bGate\b|Gate\s+(?=[A-Z0-9-]*\d)[A-Z0-9-]+|(?:West|East|North|South)\s+Gate\b)/i.test(value);
  }

  function translateCore(value) {
    const normalized = normalizeLookupText(value);
    const direct = exact.get(value)
      || exactLower.get(value.toLowerCase())
      || exact.get(normalized)
      || exactLower.get(normalized.toLowerCase());
    if (direct) return direct;

    const repositionMatch = normalized.match(/^Reposition here(?:\s+\[(.+)\])?$/i);
    if (repositionMatch) {
      return "\u5c06\u98de\u673a\u79fb\u81f3\u6b64\u5904" + (repositionMatch[1] ? " [" + translateAirportLocation(repositionMatch[1]) + "]" : "");
    }

    if (isAirportLocationLabel(value)) {
      const airportLocation = translateAirportLocation(value);
      if (airportLocation !== value) return airportLocation;
    }

    if (/^loading\s+gsx\s+menu(?:,\s*please\s+wait)?(?:\.|\u2026)*$/i.test(normalized)) {
      return "正在加载 GSX 菜单，请稍候...";
    }

    if (/^reload\s+sim\s*brief(?:\.|\u2026)*$/i.test(normalized)) {
      return "重新载入 SimBrief";
    }

    if (/^can'?t\s+read\s+the\s+aircraft\s+type(?:\.|\u2026)*$/i.test(normalized)) {
      return "无法读取飞机类型";
    }

    if (/^save\s+current\s+position(?:\.|\u2026)*$/i.test(normalized)) {
      return "保存当前位置";
    }

    let match = value.match(/^([↑◀]\s*)(.+)$/);
    if (match) return match[1] + translateCore(match[2]);

    match = value.match(/^(.+?)(\s*▶)$/);
    if (match) return translateCore(match[1]) + match[2];

    if (/&(?:bull|middot);/i.test(value)) {
      return value.split(/(&(?:bull|middot);)/i).map((part) =>
        /^&(?:bull|middot);$/i.test(part) ? part : translateText(part)
      ).join("");
    }

    match = value.match(/^Activate Services at (.+)$/i);
    if (match) return `在 ${match[1]} 使用地面服务`;

    match = value.match(/^Select Position at (.+)$/i);
    if (match) return `选择停机位：${match[1]}`;

    match = value.match(/^(\d+\s*-\s*)Option\s+(\d+)$/i);
    if (match) return `${match[1]}选项 ${match[2]}`;

    match = value.match(/^([\s\S]*?)\s*\(\s*(\d+)\s+suitable\s+parkings?\s*\)$/i);
    if (match) return `${translatePhraseList(match[1])}（${match[2]} 个适用停机位）`;

    match = value.match(/^(\s*[^A-Za-z0-9]*\s*)Runway\s+(.+?)\s+Start(?:\s+\[PLANNED\])?$/i);
    if (match) {
      const planned = /\s+\[PLANNED\]$/i.test(value);
      return `${match[1]}跑道 ${match[2]} 起点${planned ? " [计划]" : ""}`;
    }

    match = value.match(/^Change Facility \[Runway\s+(.+?)\s+Start\]$/i);
    if (match) return `更改位置 [跑道 ${match[1]} 起点]`;

    match = value.match(/^Our (.+?) is Parked$/i);
    if (match) return `本机 ${match[1]} 已停稳`;

    match = value.match(/^(.+?) service can be requested$/i);
    if (match) return `可以请求${translatePhraseList(match[1])}服务`;

    match = value.match(/^max wingspan\s+([\d.]+)m$/i);
    if (match) return `最大翼展 ${match[1]} 米`;

    match = value.match(/^([\d.]+)\s*sec$/i);
    if (match) return `${match[1]} 秒`;

    match = value.match(/^Apron\s+(.+?)\|Gate\s+(.+)$/i);
    if (match) return `机坪 ${match[1]}|登机口 ${match[2]}`;

    match = value.match(/^Administration at (.+)$/i);
    if (match) return `${match[1]} 管理`;

    match = value.match(/^Price list at (.+)$/i);
    if (match) return `${match[1]} 价目表`;

    match = value.match(/^Refueling operators at (.+)$/i);
    if (match) return `${match[1]} 加油服务商`;

    match = value.match(/^Show (.+?) airport diagram( \[PLANNED\])?$/i);
    if (match) return `显示 ${match[1]} 机场图${match[2] ? " [计划中]" : ""}`;

    match = value.match(/^The loaded flight plan from (.*?) doesn't match the one on SimBrief, from (.+?) to (.+?)$/i);
    if (match) return `已加载的飞行计划（${match[1]}）与 SimBrief 中的计划（${match[2]} 至 ${match[3]}）不一致`;

    match = value.match(/^Invoice from (.+)$/i);
    if (match) return `来自 ${match[1]} 的账单`;

    match = value.match(/^GSX Pro outdated v(.+)$/i);
    if (match) return `GSX Pro 版本过旧：v${match[1]}`;

    match = value.match(/^Request (.+)$/i);
    if (match) return `请求${translatePhraseList(match[1])}`;

    match = value.match(/^Select (.+)$/i);
    if (match) return `选择${translatePhraseList(match[1])}`;

    match = value.match(/^Enable (.+)$/i);
    if (match) return `启用${translatePhraseList(match[1])}`;

    match = value.match(/^Disable (.+)$/i);
    if (match) return `禁用${translatePhraseList(match[1])}`;

    match = value.match(/^(.+) requested$/i);
    if (match) return `已请求${translatePhraseList(match[1])}`;

    match = value.match(/^(.+) in progress$/i);
    if (match) return `${translatePhraseList(match[1])}进行中`;

    match = value.match(/^(.+) completed$/i);
    if (match) return `${translatePhraseList(match[1])}已完成`;

    match = value.match(/^Waiting for (.+)$/i);
    if (match) return `正在等待${translatePhraseList(match[1])}`;

    return value;
  }

  function decodeLookupEntities(value) {
    return value
      .replace(/&(quot|#34|#x22);/gi, '"')
      .replace(/&(apos|#39|#x27);/gi, "'")
      .replace(/&nbsp;/gi, " ");
  }

  function translateText(value) {
    if (typeof value !== "string" || !value) return value;
    const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match || !match[2]) return value;
    const translated = translateCore(match[2]);
    if (translated !== match[2]) return match[1] + translated + match[3];
    const decoded = decodeLookupEntities(match[2]);
    if (decoded === match[2]) return value;
    const decodedTranslation = translateCore(decoded);
    return decodedTranslation === decoded ? value : match[1] + decodedTranslation + match[3];
  }

  function translateMenuPayload(value) {
    if (typeof value !== "string") return value;
    return value.split("\n").map(translateText).join("\n");
  }

  const translatedAttributes = new Set(["placeholder", "title", "aria-label", "data-button", "data-choices"]);

  function translateChoiceList(value) {
    return value.split("||").map(translateText).join("||");
  }

  function translateTagAttributes(tag) {
    return tag.replace(/\b(placeholder|title|aria-label|data-button|data-choices)=("([^"]*)"|'([^']*)')/gi,
      (full, name, quoted, doubleValue, singleValue) => {
        const value = doubleValue === undefined ? singleValue : doubleValue;
        const translated = name.toLowerCase() === "data-choices"
          ? translateChoiceList(value)
          : translateText(value);
        const quote = quoted[0];
        return `${name}=${quote}${translated}${quote}`;
      });
  }

  function translateHtmlPayload(value) {
    if (typeof value !== "string" || !value) return value;
    return value.replace(/<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<[^>]+>|[^<]+/gi,
      (token) => {
        if (/^<(script|style)\b/i.test(token)) return token;
        return token.startsWith("<") ? translateTagAttributes(token) : translateText(token);
      });
  }

  const settingsTextKeys = new Set(["label", "tooltip", "button", "placeholder"]);

  function translateSettingsSchema(value, parent = null) {
    if (Array.isArray(value)) {
      if (value.length === 2 && typeof value[1] === "string") {
        return [value[0], translateText(value[1])];
      }
      return value.map((item) => translateSettingsSchema(item, value));
    }
    if (!value || typeof value !== "object") return value;
    const translated = {};
    const keys = Object.keys(value);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const item = value[key];
      if (settingsTextKeys.has(key) && typeof item === "string") {
        translated[key] = translateText(item);
      } else if (key === "value" && value.type === "info" && typeof item === "string") {
        translated[key] = translateText(item);
      } else if (key === "choices" && Array.isArray(item)) {
        translated[key] = item.map((choice) => translateSettingsSchema(choice, item));
      } else {
        translated[key] = translateSettingsSchema(item, value);
      }
    }
    return translated;
  }

  function translateSurface(surface, data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) return data;
    const translated = surface === "settings" ? translateSettingsSchema(data) : Object.assign({}, data);
    if (surface === "menu") {
      if (typeof translated.text === "string") translated.text = translateMenuPayload(translated.text);
      if (typeof translated.subtitle === "string") translated.subtitle = translateText(translated.subtitle);
    } else if (surface === "tooltip") {
      if (typeof translated.text === "string") translated.text = translateText(translated.text);
    } else if (["status", "menu_live", "menu_document", "menu_buttons", "settings"].includes(surface)) {
      if (typeof translated.html === "string") translated.html = translateHtmlPayload(translated.html);
    }
    return translated;
  }

  function translateStaticDocument(documentRef) {
    if (!documentRef || !documentRef.documentElement) return;
    const skippedTags = new Set(["SCRIPT", "STYLE", "TEXTAREA"]);
    const walker = documentRef.createTreeWalker(documentRef.documentElement, 5);
    let node = walker.currentNode;
    while (node) {
      if (node.nodeType === 3 && node.parentElement && !skippedTags.has(node.parentElement.tagName)) {
        const translated = translateText(node.nodeValue);
        if (translated !== node.nodeValue) node.nodeValue = translated;
      } else if (node.nodeType === 1 && node.attributes) {
        for (const attribute of Array.from(node.attributes)) {
          if (!translatedAttributes.has(attribute.name.toLowerCase())) continue;
          const translated = attribute.name.toLowerCase() === "data-choices"
            ? translateChoiceList(attribute.value)
            : translateText(attribute.value);
          if (translated !== attribute.value) node.setAttribute(attribute.name, translated);
        }
      }
      node = walker.nextNode();
    }
  }

  function installStaticDocument(documentRef) {
    const install = () => {
      if (documentRef.__gsxChineseStaticInstalled) return;
      documentRef.__gsxChineseStaticInstalled = true;
      translateStaticDocument(documentRef);
    };
    if (documentRef.readyState === "loading") {
      documentRef.addEventListener("DOMContentLoaded", install, { once: true });
    } else {
      install();
    }
  }

  return {
    exactEntries,
    installStaticDocument,
    translateStaticDocument,
    translateHtmlPayload,
    translateMenuPayload,
    translateSurface,
    translateText
  };
});


// Polyfill for AbortController and AbortSignal if not available
if (typeof AbortController === 'undefined') {
  class AbortSignal {
    constructor() {
      this.aborted = false;
      this.reason = undefined;
      this._listeners = [];
    }

    get onabort() {
      return this._onabort || null;
    }

    set onabort(listener) {
      if (this._onabort) {
        this.removeEventListener('abort', this._onabort);
      }
      this._onabort = listener;
      if (typeof listener === 'function') {
        this.addEventListener('abort', listener);
      }
    }

    addEventListener(type, listener, options) {
      if (type === 'abort') {
        if (this.aborted) {
          // If already aborted, call listener immediately
          Promise.resolve().then(() => listener({ type: 'abort', target: this }));
          return;
        }
        this._listeners.push(listener);
      }
    }

    removeEventListener(type, listener, options) {
      if (type === 'abort') {
        this._listeners = this._listeners.filter(l => l !== listener);
      }
    }

    dispatchEvent(event) {
      if (event.type === 'abort') {
        this.aborted = true;
        this.reason = event.reason || this.reason; // Capture reason from dispatched event if provided
        // Call listeners in a microtask
        Promise.resolve().then(() => {
          this._listeners.forEach(listener => listener({ type: 'abort', target: this, reason: this.reason }));
        });
        return true;
      }
      return false;
    }
    
    _signalAbort(reason) {
      if (this.aborted) return;
      this.reason = reason;
      const event = { type: 'abort', target: this, reason: reason }; // Custom event-like object
      this.dispatchEvent(event);
    }

    static abort(reason) {
      const signal = new AbortSignal();
      signal._signalAbort(reason || 'Signal aborted by static AbortSignal.abort()');
      return signal;
    }

    static timeout(milliseconds) {
      const signal = new AbortSignal();
      const timeoutId = setTimeout(() => {
        signal._signalAbort(`Signal timed out after ${milliseconds}ms`);
      }, milliseconds);
      // Optional: Clear timeout if the signal is aborted by other means, though not strictly part of basic polyfill
      // signal.addEventListener('abort', () => clearTimeout(timeoutId)); 
      return signal;
    }
  }

  class AbortController {
    constructor() {
      this.signal = new AbortSignal();
    }

    abort(reason) {
      this.signal._signalAbort(reason || 'Controller aborted');
    }
  }

  // Expose to global scope if running in a browser-like environment without modules
  if (typeof window !== 'undefined') {
    window.AbortController = AbortController;
    window.AbortSignal = AbortSignal;
  } else if (typeof self !== 'undefined') {
    self.AbortController = AbortController;
    self.AbortSignal = AbortSignal;
  }
}
// End of Polyfill

// Global constants
const TIMEOUT_MS = 180000; // 180 seconds timeout for all operations
const RETRY_INTERVAL_MS = 100; // 0.1 seconds between retry attempts
const MAX_RETRY_ATTEMPTS = TIMEOUT_MS / RETRY_INTERVAL_MS; // Calculate max attempts based on timeout
const CONTINUOUS_CHECK_INTERVAL_MS = 1000; // 1 second between continuous checks
// Number of FSDT_GSX_COUATL_STARTED_{i}_PROGRESS LVars (mirrors
// STATUS_STEP_COUNT in common/__init__.py). Used when clearing all
// startup progress bars or scanning them for sign-of-life.
const STATUS_STEP_COUNT = 16;
const gradientStyleV = "linear-gradient(180deg, #3B72BF 0%, #254F8B 100%)";
const gradientStyleH = "linear-gradient(90deg, #3B72BF 0%, #254F8B 100%)";
const MS2024_MODE_POS_X_MULTIPLIER = 450;
const MS2024_MODE_POS_Y_MULTIPLIER = 10;
const MAX_MESSAGE_QUEUE_LENGTH = 8;
const CHOICE_CONTEXT_CLOSE_RESTART_ENGINE = 13; // Used in loadFileNoCache timeout
const CHOICE_SIMBRIEF_RELOAD = 14; // Used in closeWithChoice for SimBrief reload action
const CHOICE_SETTINGS = 12; // GSX Settings (button13) — kept named so closeWithChoice can skip hideMenu
const SIMBRIEF_LOADING_TEXT = "\u6b63\u5728\u91cd\u65b0\u8f7d\u5165 SimBrief";
const SIMBRIEF_RELOAD_TEXT = "\u91cd\u65b0\u8f7d\u5165 SimBrief";
const GSX_FALLBACK_VERSION = "4.0.17";
const DEFAULT_MENU_SUBTITLE_INDICATOR = "subtitle";
const EXTERNAL_SYSTEM_TOGGLE_RELOAD_MENU = 1;
const EXTERNAL_SYSTEM_TOGGLE_HIDE_MENU = 2;
const EXTERNAL_SYSTEM_TOGGLE_TIMEOUT = 3;
const EXTERNAL_SYSTEM_TOGGLE_FORCE_CLOSE = 4;
const EXTERNAL_SYSTEM_TOGGLE_RELOAD_STATUS = 5;
const EXTERNAL_SYSTEM_TOGGLE_SETTINGS_CHANGED = 6;
const EXTERNAL_SYSTEM_TOGGLE_SIMBRIEF_CHANGED = 7;
const EXTERNAL_SYSTEM_TOGGLE_INPUT_REQUEST = 8;
// Python quitAndRestartPy fires this to flip the panel to its
// loading-screen view before the engine actually exits — so the
// user gets "Restarting GSX, please wait..." straight away instead
// of staring at a stale active menu / pinned-idle status page
// while the old instance is in its wait(2000) / shutdown window.
// Keep in sync with the Python-side constant
// EXTERNAL_SYSTEM_TOGGLE_RESTARTING in GSX/__init__.py.
const EXTERNAL_SYSTEM_TOGGLE_RESTARTING = 9;
// Companion to RESTARTING — Couatl C++ Application::cleanup fires
// this when the cleanup is a FINAL quit (tray-bar Quit, sim quit,
// user-driven hard close — anything where the cleanup path won't
// spawn a replacement process). Panel reacts by clearing
// _restartingMenu and re-entering checkMenu; the polling loop in
// _continueCheckMenu observes ALIVE=0 and _updateLoadingText
// switches the displayed text to COUATL_NOT_RUNNING_MSG (no
// spinner) on its next tick — single code path for the idle
// "engine is not running" state regardless of how it was
// reached. Keep in sync with kExternalSystemToggleShutdown in
// couatlAlive.cpp.
const EXTERNAL_SYSTEM_TOGGLE_SHUTDOWN = 10;
// Live rich-menu refresh. Fired by `common/panelMenuLive.py` when
// the registered menu rebuilder produces HTML that differs from
// what's currently on screen — typically a service progressing
// (waiting → performed → completed), an operator binding, or a
// passenger / fuel counter ticking. Payload lives in
// ./menu_live.html (separate file from the canonical ./menu so
// 3rd-party automation tools that parse that file don't see
// constant churn between user actions). Handler swaps
// #menuButtonsHost.innerHTML only; the classic numbered button
// stack (#dynamicButtons) and the menu text file are untouched.
// Keep in sync with EXTERNAL_SYSTEM_TOGGLE_RELOAD_MENU_HTML in
// common/panelMenuLive.py.
const EXTERNAL_SYSTEM_TOGGLE_RELOAD_MENU_HTML = 11;

// Companion file for the live rich-menu refresh path. Same shape
// as `menu_buttons.html` (full rich-menu HTML fragment ready to
// drop into `#menuButtonsHost.innerHTML`), separate file so a
// live patch doesn't disturb the canonical menu transport. Read
// on every RELOAD_MENU_HTML K-event arrival via loadFileNoCache.
const MENU_LIVE_PATH = "./menu_live.html";

// Settings panel transport. Python's `GSX.settingsPanel.open(...)`
// writes the schema HTML to ./settings.html and fires
// EXTERNAL_SYSTEM_TOGGLE_OPEN_SETTINGS (12); this panel flips
// `body.settingsActive` on and re-fetches the file (same loadFile
// pattern as status / menu-live). CLOSE_SETTINGS (13) is fired
// from Python when emulateMenu_MSFS shows any other menu so the
// settings surface tears itself down cleanly even when the user
// returns to the main menu via a hotkey rather than the brand
// cell. Keep in sync with EXTERNAL_SYSTEM_TOGGLE_OPEN_SETTINGS /
// EXTERNAL_SYSTEM_TOGGLE_CLOSE_SETTINGS in common/panelSettingsLive.py.
const EXTERNAL_SYSTEM_TOGGLE_OPEN_SETTINGS = 12;
const EXTERNAL_SYSTEM_TOGGLE_CLOSE_SETTINGS = 13;
const SETTINGS_PATH = "./settings.html";

// Live gate-search transport (Python → JS). SEARCH_BEGIN tells the
// panel to reveal + focus its inline search box (#gsxMenuSearch) and
// start streaming keystrokes; SEARCH_END tears it back down. The
// current query rides the SEARCH LVar string slot and bumps
// L:FSDT_GSX_SEARCH_GEN on every keystroke; the matching parking
// list refreshes through the normal RELOAD_MENU_HTML (11) path —
// the search box stays put because it's a separate element from
// #menuButtonsHost. Keep in sync with
// EXTERNAL_SYSTEM_TOGGLE_SEARCH_BEGIN / _SEARCH_END in common/mpmenu.py
// and the SEARCH slot / FSDT_GSX_SEARCH_GEN in common/jsBridge.py.
const EXTERNAL_SYSTEM_TOGGLE_SEARCH_BEGIN = 14;
const EXTERNAL_SYSTEM_TOGGLE_SEARCH_END = 15;
const SIMVAR_SEARCH_GEN = "L:FSDT_GSX_SEARCH_GEN";

// Controller-button hotkey. Python (GSX) detects a bound joystick button
// (SimConnect input event) and fires this so the panel runs the exact same
// open/close toggle the keyboard hotkey does — see fireHotkey(). Keeping the
// toggle JS-side means it always reads the ACTUAL panel state, so a controller
// press stays in sync with a manual close. Keep in sync with the value GSX
// fires in GSX/__init__.py.
const EXTERNAL_SYSTEM_TOGGLE_FIRE_HOTKEY = 16;

// Panel-mirror file the menu-attached iframe loads when the active
// menu carries a document (price-list recap, invoice viewer, future
// contextual reports). Python writes it on every menu show via
// `panelDocument._writeMirror` — non-empty HTML means "show the
// iframe", empty means "no document, hide it". Kept in sync with
// the Python-side constant `_PANEL_MIRROR_NAME` in
// `common/panelDocument.py`.
const MENU_DOCUMENT_PATH = "./menu_document.html";

// Sync 0/1 indicator Python writes from `panelDocument._writeMirror`
// (companion of MENU_DOCUMENT_PATH): 1 = the next menu has an
// attached document, 0 = no document. Read by `_fetchMenuDocument`
// so it can skip the ~73 ms async `loadFileNoCache` round-trip when
// the bit is 0 — saves real per-transition latency on every menu
// that doesn't carry a document (the bulk of them). Kept in sync
// with the Python-side ddef in `common/panelDocument.py`.
const SIMVAR_MENU_DOC_PRESENT = "L:FSDT_GSX_MENU_DOC_PRESENT";

// Companion file used as the MENU_HTML overflow transport when the
// rendered rich-buttons HTML exceeds the LVar slot's ~3 KB capacity
// (rich operator pickers with embedded `data:image/png;base64,…`
// thumbnails routinely run 10-30 KB per row). Python writes the
// full payload to this file when the slot would silently truncate;
// `_fetchMenuHtml` tries the slot first and falls back to this
// file when the slot reads as empty. Comment-only placeholder when
// no overflow is in flight, matching the menu_document.html
// convention (non-empty disk file so Coherent's loader doesn't
// 404 on the size hint mismatch with the deployed layout.json).
const MENU_BUTTONS_PATH = "./menu_buttons.html";

// MENU_HTML LVar slot chunk count — companion of MENU_DOCUMENT_PATH
// but for the rich-interactive "menu replacement" slot. Python's
// `panelDocument._writeMenuHtml` packs the rendered HTML as
// chunked base64 over `L:FSDT_GSX_MENU_HTML_LEN` + `_B0..B(N-1)`
// (see common/jsBridge.py `_StringSlot` for the wire format); the
// panel reads it via `readStringSlot` on every menu reload and
// assigns the string to its `#menuButtonsHost` shadow root's
// innerHTML. Kept in sync with `_MENU_HTML_MAX_CHUNKS` in
// `common/panelDocument.py`.
const MENU_HTML_MAX_CHUNKS = 1000;

// MENU_TEXT LVar slot chunk count — carries the canonical menu text
// (pagePrompt + entries, newline-joined) so reloadMenu can read it
// sync at K-event arrival instead of paying a ~73 ms async
// loadFileNoCache("./menu") round-trip on every menu reload. Python
// still writes the ./menu file too (canonical source of truth for
// 3rd-party automation tools and for the C# auto-restarter's #BOOT#
// boot messages, which the slot is empty for — see reloadMenu below
// for the file-fallback path). Kept in sync with _MENU_TEXT_MAX_CHUNKS
// in `common/panelDocument.py`.
const MENU_TEXT_MAX_CHUNKS = 300;

// Chunk count of the L:FSDT_GSX_MENU_SUBTITLE_* slot — carries an
// optional smaller "second-line" string under the main pagePrompt
// (gate name, operator scope, ...). Empty/missing slot means the
// menu has no subtitle. Kept in sync with _MENU_SUBTITLE_MAX_CHUNKS
// in `common/panelDocument.py`.
const MENU_SUBTITLE_MAX_CHUNKS = 40;

// Loading-screen text shown when Couatl isn't running and the
// user has to start it themselves. This is the panel's IDLE
// RESTING STATE — whenever ALIVE=0, _updateLoadingText shows
// this string with no spinner, no timeout, no automatic
// recovery. The polling loop in _continueCheckMenu keeps a
// SimVar read going so the moment ALIVE flips to 1 we re-arm
// for the normal load flow.
//
// Surfaces through three paths:
//   * Cold panel attach with Couatl not running — checkMenu →
//     _continueCheckMenu → _updateLoadingText reads ALIVE=0 →
//     shows this.
//   * Clean tray-bar / sim quit — SHUTDOWN K-event handler
//     calls checkMenu(), same path.
//   * Crash-recovery 30 s no-sign-of-life fallback in
//     _startCrashRecoveryPoll — shows this when no heartbeat /
//     boot message / startup-progress signal is seen.
//
// Mentions the Start Menu shortcut rather than the tray icon:
// by the time the user sees this message Couatl is gone, so
// its tray icon is too.
const COUATL_NOT_RUNNING_MSG =
	"GSX engine is not running. Use 'Start Couatl for GSX MSFS' to start it.";
const MAX_MENU_BUTTON_ID = 15; // Max number for button IDs like "button1", "button15"
const MAX_DYNAMIC_MENU_BUTTONS = 10; // Number of menu buttons that are dynamically populated
const DEFAULT_TOOLTIP_POS_X = 40;
const DEFAULT_TOOLTIP_POS_Y = 40;
const TOOLTIP_DURATION_MS_PER_CHAR = 100;
const COUATL_START_FAILURE_MSG_DURATION_S = 5;
const HEARTBEAT_POLL_INTERVAL_MS = 5000; // Check heartbeat every 5s while menu is displayed
const MENU_RELOAD_TIMEOUT_MSG_DURATION_S = 4;
const REMOTE_CONTROL_ACTIVE_MSG_DURATION_S = 4;
const GSX_TOOLTIP_NAME = "GSX Tooltip";
const MENU_BUTTON_ID_PREFIX = "button";

// SimVar Names
const SIMVAR_MSFS2024_MODE = "L:FSDT_GSX_MSFS2024";
const SIMVAR_REMOTE_CONTROL = "L:FSDT_GSX_SET_REMOTECONTROL";
const SIMVAR_MENU_OPEN = "L:FSDT_GSX_MENU_OPEN";
const SIMVAR_MENU_CHOICE = "L:FSDT_GSX_MENU_CHOICE";
// Panel liveness heartbeat: bumped while the panel is open so Python can tell
// the panel is gone when the beats stop. The MSFS toolbar tears the panel JS
// down instantly with no close event, so there's no other way for Python to
// know the menu left the screen. Python only uses this to gate the remote
// menu-visible signal (Stream Deck menu key) — never to drive the menu.
const SIMVAR_PANEL_ALIVE = "L:FSDT_GSX_PANEL_ALIVE";
const PANEL_ALIVE_PULSE_MS = 200;
// Hotkey-rebind handshake with Couatl / Python. JS packs the new
// combo into a single LVar (keyCode in low byte, ctrl/alt/shift in
// bits 8/9/10) after a successful in-panel capture; Python watches
// this LVar with changed=True, decodes, rewrites hotkey.json, then
// sets the LVar back to 0 — value 0 is the "no pending change"
// sentinel so spurious initial reads or resets don't overwrite the
// file.
const SIMVAR_HOTKEY_NEW = "L:FSDT_GSX_HOTKEY_NEW";
// Python -> panel: the ACTIVE combo (same encoding as HOTKEY_NEW,
// opposite direction). Python publishes it at startup and after every
// rebind; the panel polls it so the caps display always matches what
// the engine actually bound — essential on WASM, where Python's
// persisted hotkey file lives in /work and this package can't read it.
const SIMVAR_HOTKEY_CUR = "L:FSDT_GSX_HOTKEY_CUR";
const SIMVAR_COUATL_STARTED = "L:FSDT_GSX_COUATL_STARTED";
const SIMVAR_COUATL_STARTED_EX = "L:FSDT_GSX_COUATL_STARTED_EX";
const SIMVAR_GSX_HEARTBEAT = "L:FSDT_GSX_HEARTBEAT";
// Proof-of-life flag written by Couatl C++ directly on
// SIMCONNECT_RECV_ID_OPEN (set to 1) and Application::cleanup() (set
// to 0). Mirrored in couatlAlive.h on the engine side. Used by the
// panel as the FAST "Couatl is reachable" gate — replaces the old
// FSDT_GSX_HEARTBEAT-based check, which only flipped much later
// (heartbeat tasklet doesn't start until deep inside GSX boot).
// HEARTBEAT is still polled, but only for crash detection
// (stale-after-start + never-starts-within-grace-period).
const SIMVAR_GSX_COUATL_ALIVE = "L:FSDT_GSX_COUATL_ALIVE";

// Grace period after COUATL_ALIVE=1 within which the engine must
// pulse HEARTBEAT at least once. If HEARTBEAT stays at 0 past
// this deadline, the engine is considered crashed even though
// ALIVE says it's there — covers the case where Couatl reaches
// SimConnect_Open but then crashes before GSX's watchdog tasklet
// starts pulsing HEARTBEAT. 90 s is generous enough to absorb a
// cold MSFS boot where the model-cache rebuild can take a while
// before HEARTBEAT begins; the user gets a clearer "engine
// stopped" UI on real failures, and no false positives on slow
// but progressing boots (the per-bar progress LVars also keep
// the loading screen visibly alive during this window).
const HEARTBEAT_START_GRACE_MS = 90000;
const BOOT_MSG_PREFIX = "#BOOT# ";
const SIMVAR_SIMBRIEF_SUCCESS = "L:FSDT_GSX_SIMBRIEF_SUCCESS";
// Slot size (chunks) for the JS-bridge `SIMBRIEF_ERR` slot — Python
// pushes the human-readable status / error text here whenever
// SIMBRIEF_SUCCESS is updated. Must match the value passed to
// _StringSlot("SIMBRIEF_ERR", N) in common/simBrief.py.
const SIMBRIEF_ERR_SLOT_CHUNKS = 32;
const SIMVAR_GSX_OUTDATED = "L:FSDT_GSX_OUTDATED";
const SIMVAR_GSX_HOTFIX_STATUS = "L:FSDT_GSX_HOTFIX_STATUS"; // 0=none, 1=downloading, 2=ready
// FSDT-42: a newer Python package (GSX.pyz / common.pyz) was downloaded
// from the online update channel and staged as <name>.pyz.new, but the
// running interpreter still holds the OLD archive — the download happens
// after boot has already selected and opened it. Set by GSX from
// Couatl.pendingAddOnUpdates(). Applying it is just "Restart Couatl":
// promotion runs at the top of couatl_main, so the restart the panel
// already offers IS the apply action — no sim restart involved. Unlike
// legacy there is no equivalent for Couatl.wasm itself; the marketplace
// / content library updates the WASM module on its own.
const SIMVAR_GSX_UPDATE_PENDING = "L:FSDT_GSX_UPDATE_PENDING";
// Pulsed to 1 by the panel when the user clicks the "Apply hotfix"
// banner. Python watches with changed=True at 1 Hz, runs
// _applyHotfix (which exits for the boot-side restarter to apply
// staged files), and clears back to 0. Replaces the old in-menu
// "Apply hotfix and restart GSX" entry — the banner is the only
// surface now so the opening menu isn't hijacked by an update prompt.
const SIMVAR_GSX_HOTFIX_APPLY = "L:FSDT_GSX_HOTFIX_APPLY";
// Pulsed to 1 by the panel when the user clicks the "Invoice ready"
// banner. Python watches via the same combined ddef as
// HOTKEY_NEW / HOTFIX_APPLY (1 Hz, changed=True), opens the
// disk-saved receipt in the user's default browser, then resets
// back to 0. Receipt notification itself is carried as a hidden
// data span inside status.html (see extractReceiptData() / Python
// panelStatus.setReceiptData) — no separate STATUS LVar needed.
const SIMVAR_GSX_RECEIPT_OPEN = "L:FSDT_GSX_RECEIPT_OPEN";
const SIMVAR_GSX_TESTVERSION = "L:FSDT_GSX_TESTVERSION";
const SIMVAR_GSX_VERSION_MAJOR = "L:FSDT_GSX_VERSION_MAJOR";
const SIMVAR_GSX_VERSION_MINOR = "L:FSDT_GSX_VERSION_MINOR";
const SIMVAR_GSX_VERSION_BUILD = "L:FSDT_GSX_VERSION_BUILD";
const SIMVAR_GSX_REMOTE_VERSION_MAJOR = "L:FSDT_GSX_REMOTE_VERSION_MAJOR";
const SIMVAR_GSX_REMOTE_VERSION_MINOR = "L:FSDT_GSX_REMOTE_VERSION_MINOR";
const SIMVAR_GSX_REMOTE_VERSION_BUILD = "L:FSDT_GSX_REMOTE_VERSION_BUILD";
const SIMVAR_IS_IN_VR = "E:IS IN VR";
const SIMVAR_MENU_PINNED_MODE = "L:FSDT_GSX_MENU_PINNED_MODE";
// Numeric-key menu selection (Settings > UI). 0 (LVar never written by an
// older GSX Python) or 1 → keys enabled (legacy behavior); 2 → disabled by
// the user (number keys bound in another app kept selecting GSX menu
// choices — on MSFS 2024 this panel keeps listening in the background).
const SIMVAR_MENU_NUMKEYS = "L:FSDT_GSX_SETTINGS_MENU_NUMKEYS";
const MENU_NUMKEYS_DISABLED = 2;

// Pinned-menu tri-state. 0 (LVar never written) or 1 (disabled) →
// classic behavior (panel closes after each menu). 2 → always pinned.
// 3 → pinned only in VR. Only the non-classic values are referenced
// in code; the disabled sentinel is handled implicitly by the default
// `return false` in isPinnedEffective().
const PINNED_MODE_ENABLED  = 2;
const PINNED_MODE_AUTO     = 3;

// Menu-choice sentinels written to FSDT_GSX_MENU_CHOICE. Positive
// values are normal menu-option choices (0-indexed), negative values
// are protocol signals to the Python side.
const CHOICE_IDLE           =  0; // no pending choice (reset state)
const CHOICE_CANCEL         = -1; // user dismissed / timeout
const CHOICE_REQUEST_MENU   = -2; // panel asks Python to rebuild the menu
const CHOICE_RESTART_CANCEL = -3; // menu was re-opened during a restart

// Delay between a user dynamic-button click and showing the status page,
// so fast menu→menu transitions never flash the "GSX Menu" button.
// Sub-menus typically arrive in under 200 ms; 500 ms gives healthy margin.
const PINNED_IDLE_DELAY_MS = 500;

// Per-menu bitmap of VR-disabled dynamic entries — bit i corresponds
// to button (i+1). Python writes it (alongside the menu file) for
// every menu refresh; we read it when parsing entries and tag each
// button's CSS class accordingly. Out-of-band by design so the menu
// file itself stays clean for third-party remote-control parsers.
// Paired with `vrDisabled()` / `_VRDisabledStr` in `common/mpmenu.py`.
const SIMVAR_MENU_VR_MASK = "L:FSDT_GSX_MENU_VR_MASK";

// Bottom-row fixed buttons that always open a wxPython dialog
// (Customize Airport positions / Customize Airplane). Python never
// marks these; they sit in the static HTML, so we mark them once on
// cache and they share the same VR styling / click-guard path as
// dynamic entries flagged by the mask above. button13 (GSX Settings)
// used to be here too, but the settings page now runs inside this
// panel via the schema-driven HTML/JS surface — fully VR-compatible
// — so it no longer needs the disable.
const FIXED_BUTTONS_VR_DISABLED = [11, 12];

// Panel-scaling reference geometry. The content stack is authored
// at 932 × ~1330 design px (title bar ~50 + page prompt ~100 +
// #dynamicArea 842 + #bottomBar ~330). The live scale source is
// the stylesheet's width-fit `--gsx-u` definition (1vw / 9.32 —
// one design px = 1/932 of the panel width); the JS scaler that
// used to re-derive the unit from the chrome height is retired —
// see the _applyPanelScale stub for the full post-mortem. These
// constants remain as the canonical design dimensions.
//
// DESIGN_HEIGHT carries headroom on top of the ~1326 regular
// stack: the notification banners (outdated / testversion
// warning, receipt, hotfix — 88 + 10 design px, sized in --gsx-u
// units like the rest of the panel) are normally hidden but mount
// ABOVE the menu when they fire, and without the reserve they
// pushed the bottom bar past the panel edge. Since the banners
// ride the same scale unit, the reserve covers them consistently
// at every panel size. 1400 was calibrated in-sim by the user
// against the doubled (88 design px) banner band — confirmed
// "just right", don't second-guess it from stack arithmetic.
// If the bottom still clips at the settled size, raise
// PANEL_DESIGN_HEIGHT; if there's always too much slack below
// the bottom bar (even while a banner is showing), lower it.
const PANEL_DESIGN_WIDTH = 932;
const PANEL_DESIGN_HEIGHT = 1400;

// Menu-document iframe (invoice / price-list window) height
// bounds, in design px. _sizeMenuDocumentIframe sizes the iframe
// to fill whatever is left of the pinned #dynamicArea after the
// menu buttons + brand band — clamped between these two values.
// THE MAX IS THE DIAL for "the invoice window is too tall": the
// CSS `#menuDocumentFrame { height: ... }` rule is only a pre-JS
// fallback, the inline height computed here always overrides it.
const MENU_DOC_IFRAME_MIN_DESIGN_PX = 80;
const MENU_DOC_IFRAME_MAX_DESIGN_PX = 600;
// Scaler-era wiring constants. The debounced resize listener and
// the slow watchdog still run, but they only invoke the inert
// _applyPanelScale janitor (inline-state cleanup; see its
// post-mortem comment — no sizing automation survives in-sim).
const PANEL_RESIZE_DEBOUNCE_MS = 500;
const PANEL_SCALE_WATCH_INTERVAL_MS = 1000;

class NotificationManager {
    constructor(initialMs2024Mode, panel = null) {
        this.ms2024Mode = initialMs2024Mode;
        this.panel = panel;  // IngamePanelGSX, used for pinned-mode routing
        this.messageQueue = [];
        this.isShowingMessage = false;
        this.isShowingCriticalMessage = false; // Internal state for critical messages
        this._currentTimeoutId = null;
    }

    // Tooltips are rerouted into the pinned-panel status area only
    // when the status page itself is what the user is looking at —
    // i.e. pinned mode is effective AND we're in IDLE_PINNED (menu
    // hidden). During ACTIVE_MENU the user sees the actual menu
    // buttons in the panel; tooltips keep using the native Coherent
    // overlay so they appear in their usual position. Native tooltips
    // are buggy in VR, but during an active menu the user is already
    // interacting with the panel, so the routing matters most at rest.
    //
    // The isPinnedEffective() gate is load-bearing: the inline
    // text-input prompt (Save / Rename Location) forces the status
    // page visible even when pinning is off, so visibility alone is
    // an unreliable signal. Without the pinned-mode check, the
    // confirmation tooltip Python emits right after OK gets routed
    // into panel.statusTooltip — and the cleanup() that fires on the
    // same tick hides the whole panel via hideMenu(), taking the
    // tooltip with it. With the gate, that path correctly falls back
    // to the Coherent screen overlay.
    _useStatusTooltip() {
        return this.panel
            && this.panel.statusTooltip
            && this.panel.isPinnedEffective
            && this.panel.isPinnedEffective()
            && this.panel._isStatusPageVisible
            && this.panel._isStatusPageVisible();
    }

    showTooltip(msg, posXRel = DEFAULT_TOOLTIP_POS_X, posYRel = DEFAULT_TOOLTIP_POS_Y) {
        console.log("NotificationManager.showTooltip()");
        const localizedMessage = GSX_ZH_CN.translateText(msg);
        if (this._useStatusTooltip()) {
            this.panel.statusTooltip.textContent = localizedMessage;
            this.panel.statusTooltip.classList.add("active");
        } else {
            Coherent.trigger("SHOW_TOOLTIP", GSX_TOOLTIP_NAME, localizedMessage, posXRel + (this.ms2024Mode * MS2024_MODE_POS_X_MULTIPLIER), posYRel + (this.ms2024Mode * MS2024_MODE_POS_Y_MULTIPLIER), localizedMessage.length * TOOLTIP_DURATION_MS_PER_CHAR);
        }
    }

    removeTooltip() {
        console.log("NotificationManager.removeTooltip()");
        // Clear both paths unconditionally. The pinned-mode check at
        // show time may not match at remove time (VR toggled, panel
        // hidden, setting changed), so defensively clear either
        // representation that might be on screen.
        Coherent.trigger("HIDE_TOOLTIP", GSX_TOOLTIP_NAME);
        if (this.panel && this.panel.statusTooltip) {
            this.panel.statusTooltip.textContent = "";
            this.panel.statusTooltip.classList.remove("active");
        }
    }

    cancelCurrentMessage() {
        console.log("NotificationManager.cancelCurrentMessage()");
        if (this._currentTimeoutId !== null) {
            clearTimeout(this._currentTimeoutId);
            this._currentTimeoutId = null;
        }
        this.removeTooltip();
        this.isShowingMessage = false;
        this.messageQueue = [];
    }

    showCriticalMessageAndWait(msg, timeout, posXRel = DEFAULT_TOOLTIP_POS_X, posYRel = DEFAULT_TOOLTIP_POS_Y) {
        return new Promise((resolve) => {
            this.isShowingCriticalMessage = true;
            // Cancel any pending regular message timeout
            if (this._currentTimeoutId !== null) {
                clearTimeout(this._currentTimeoutId);
                this._currentTimeoutId = null;
            }
            // Clear regular message queue if a critical one appears
            this.messageQueue = [];
            this.isShowingMessage = false;
            this.showTooltip(msg, posXRel, posYRel);

            setTimeout(() => {
                this.removeTooltip(); // Remove the critical tooltip
                this.isShowingCriticalMessage = false;
                console.log("Critical message duration complete (NotificationManager)");
                // After critical message, try to show next from queue if any were added meanwhile (unlikely but possible)
                this.showNextMessage();
                resolve();
            }, timeout * 1000);
        });
    }

    showText(msg, timeout, posXRel = DEFAULT_TOOLTIP_POS_X, posYRel = DEFAULT_TOOLTIP_POS_Y) {
        if (this.isShowingCriticalMessage) {
            console.log("Attempt to show text while critical message is active. Ignored (NotificationManager).");
            return;
        }

        // Atomic-as-possible in-place replace when a message is already showing:
        // kill the pending auto-remove timer, clear the queue, then HIDE + SHOW
        // the tooltip so the sim picks up the new text. Coherent.trigger(
        // "SHOW_TOOLTIP", same_name, ...) silently ignores the call when a
        // tooltip with that name is already visible, so without an explicit
        // HIDE first the text never refreshes — both events dispatch in the
        // same JS tick (one Coherent round-trip), keeping the visible gap to
        // sub-frame. This makes live-update callers (camera editor coord
        // refreshes, etc.) reliably replace the on-screen tooltip without
        // queuing behind the previous message's timeout.
        if (this.isShowingMessage) {
            if (this._currentTimeoutId !== null) {
                clearTimeout(this._currentTimeoutId);
                this._currentTimeoutId = null;
            }
            this.messageQueue = [];
            this.removeTooltip();
            this.showTooltip(msg, posXRel, posYRel);
            if (timeout > 0) {
                this._currentTimeoutId = setTimeout(() => {
                    this._currentTimeoutId = null;
                    if (this.isShowingMessage && !this.isShowingCriticalMessage) {
                        this.removeTooltip();
                    }
                    this.showNextMessage();
                }, timeout * 1000);
            }
            return;
        }

        this.messageQueue.push({ msg, timeout, posXRel, posYRel });

        if (!this.isShowingMessage) {
            this.showNextMessage();
        }
    }

    showNextMessage() {
        if (this.isShowingCriticalMessage || this.messageQueue.length === 0) {
            this.isShowingMessage = false;
            return;
        }

        this.isShowingMessage = true;
        const { msg, timeout, posXRel, posYRel } = this.messageQueue.shift();

        this.showTooltip(msg, posXRel, posYRel);

        if (timeout > 0) {
            this._currentTimeoutId = setTimeout(() => {
                this._currentTimeoutId = null;
                // Only remove tooltip if this message is still the one showing AND no critical message has appeared
                if (this.isShowingMessage && !this.isShowingCriticalMessage) {
                     // Check if the current tooltip content matches msg to avoid removing a newer one.
                     // This is hard without reading tooltip content. Assume for now it's the correct one.
                    this.removeTooltip();
                }
                this.showNextMessage(); // Process next in queue
            }, timeout * 1000);
        } else {
            // For timeout <= 0, message stays until replaced by next message in queue or critical.
            // We still call showNextMessage to allow immediate processing of next item if queue was > 1
            this.showNextMessage();
        }

        // Limit queue length
        if (this.messageQueue.length > MAX_MESSAGE_QUEUE_LENGTH) {
            console.warn("Message queue exceeded max length. Clearing queue. (NotificationManager)");
            this.messageQueue = []; // Clear the queue
            // If a message was showing from the now-cleared queue, and it wasn't critical, remove its tooltip.
            if (this.isShowingMessage && !this.isShowingCriticalMessage) {
                this.removeTooltip();
            }
            this.isShowingMessage = false; // Reset flag
        }
    }
    
    updateMs2024Mode(newMode) {
        this.ms2024Mode = newMode;
    }
}



async function loadFileNoCache(file, callbackSuccess, value, context, callbackFailure) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
        console.log(`Request for ${file} timed out. Aborting request.`);
        controller.abort(); // This will cause the fetch to throw an AbortError

        // FSDT-82: in bus mode the files legitimately don't exist
        // (retail MSFS2024 PC / Xbox) — a fetch that can never succeed
        // must NEVER escalate to an engine restart.
        if (context && context._busMode) return;
        // A caller that supplied a failure handler owns its failure
        // path (boot/crash polls) — advance it instead of restarting
        // the engine. Covers the Xbox-unknown "fetch hangs instead of
        // fast-404" case: without this, a cold boot (pre-bus-mode)
        // would stall 180 s per check AND trigger an engine restart.
        if (typeof callbackFailure === "function") { callbackFailure(value); return; }
        if (context && typeof context.closeWithChoice === "function") {
            context.closeWithChoice(CHOICE_CONTEXT_CLOSE_RESTART_ENGINE);
        } else {
            console.error("Context is not defined or closeWithChoice is not a function for timeout handling.");
        }
    }, TIMEOUT_MS);

    try {
        const response = await fetch(file + '?' + new Date().getTime(), {
            cache: 'no-store', // Ensures the file is not served from cache
            signal: controller.signal // Links the request to the AbortController
        });

        clearTimeout(timeoutId); // Clear the timeout as the request completed (successfully or not)

        if (response.ok) { // status in the range 200-299
            const text = await response.text();
            callbackSuccess(text, value);
        } else {
            console.error(`Request for ${file} failed with status: ${response.status} ${response.statusText}`);
            // FSDT-82: give callers a way to advance on "file missing"
            // (the steady state on retail MSFS2024 / Xbox) instead of
            // stalling forever — the boot/crash-recovery checks pass
            // this to treat a 404 as "no boot message".
            if (typeof callbackFailure === "function") callbackFailure(value);
        }
    } catch (error) {
        clearTimeout(timeoutId); // Ensure timeout is cleared on error as well

        if (error.name === 'AbortError') {
            // This error is expected if the timeout occurs and controller.abort() is called.
            // The timeout logic itself already handles console logging and context.closeWithChoice.
            console.log(`Request for ${file} was aborted (likely due to timeout).`);
        } else {
            // For other network errors (e.g., DNS issues, server unreachable)
            console.error(`Network error occurred while fetching ${file}:`, error);
            if (typeof callbackFailure === "function") callbackFailure(value);
        }
    }
}

class IngamePanelGSX extends TemplateElement
{
	constructor()
	{
		super(...arguments);
		this.ingameUi = null;
		this.close_icon = null;
		this.detach_icon = null;
		this.reduce_icon = null;
		this.notificationManager = null; // Initialize NotificationManager instance

		// Initialize properties for cached DOM elements
		this.action_list = null;
		this.loadingImage = null;
		this.remoteImage = null;
		this.loadingPrompt = null;
		this.pagePrompt = null;
		this.simBriefBtn = null;
		this.outdatedMsg = null;
		this.menuButtons = []; // Array to store button1 to button15

		// Keycap SVG string cache. Keyed by `${label}|${textSize}|${textY}`.
		// The 10 menu-option digits and the hotkey-cap glyphs are rendered
		// on every menu refresh with identical args, and the SVG string is
		// ~500 bytes each — cache hits skip the concat + escape work.
		this._keycapCache = Object.create(null);

		// Cached bound btnOption handler — reused for all 15 menu-button
		// onclick slots so each refresh doesn't create fresh closures.
		// Initialized in connectedCallback once the instance is live.
		this._btnOptionBound = null;

		// Status-page dirty flag. showPinnedIdle() only refetches
		// status.html when dirty — Python already calls reloadStatus()
		// directly via EXTERNAL_SYSTEM_TOGGLE=5 whenever the status
		// content changes, so after the first successful fetch the
		// content is always in sync and the extra close-time fetch is
		// pure round-trip overhead. Initial state is dirty so the first
		// close (or any pre-pinned open) does populate the page.
		this._statusDirty = true;

		// Heartbeat and retry state. ALIVE is the fast "Couatl is
		// up" signal (from C++ on SimConnect_Open); HEARTBEAT is
		// the slow per-second pulse that proves the engine is
		// still actually running (vs. ALIVE-but-crashed). See the
		// SIMVAR_GSX_COUATL_ALIVE / HEARTBEAT_START_GRACE_MS
		// comments at the top of the file for the contract.
		this._fileRetryTimeout = null;
		this._reloadTimeout = null;
		this.reloadAttempts = 0;
		this._crashRetry = null;
		this._crashLastHb = undefined;
		this._bootMessageReceived = false;
		this._heartbeatPoll = null;
		this._lastDisplayedHb = undefined;
		// Wall-clock timestamp set the FIRST time the heartbeat poll
		// observes COUATL_ALIVE flipping to 1 within this session.
		// HEARTBEAT_START_GRACE_MS later, if HEARTBEAT hasn't pulsed
		// at least once, the engine is treated as crashed even though
		// ALIVE still says it's there (covers crashes that happen
		// between SimConnect_Open and the GSX watchdog tasklet
		// starting). Cleared back to undefined whenever ALIVE drops
		// to 0 (genuine restart / shutdown).
		this._heartbeatGraceStartedAt = undefined;
		this._loadingImageTimeout = null;
		this._pinnedIdleTimeout = null; // Delay before IDLE_PINNED after user click (see closeWithChoice)

		// PMS50-style resize scaler state (see _applyPanelScale).
		this._resizeDebounceTimeout = null;
		this._onPanelResizeBound = null;
		this._lastAppliedScale = 0;
		this._lastApplyExtern = false;
		// Image-refresh tracking — see _applyPanelScale: when the
		// view size changes, _imgRefreshN counts down the stable
		// passes until the single menu-host rebuild (Coherent blanks
		// graphics on view-surface resizes, sometimes with a delay —
		// hence the wait before the one refresh).
		this._imgLastW = 0;
		this._imgLastH = 0;
		this._imgRefreshN = 0;
		this._scaleWatchInterval = null;
	}


	disconnectedCallback() {
		// Clear our own intervals BEFORE the super teardown. Coherent
		// destroys the SimVar JS context inside super.disconnectedCallback,
		// so any of our setInterval callbacks that survive past that point
		// hit "Accessing a property on a destroyed object" when they
		// call SimVar.GetSimVarValue. Standard web-component teardown
		// order: clean up own resources, then delegate.
		if (this._onPanelResizeBound) {
			window.removeEventListener("resize", this._onPanelResizeBound);
			this._onPanelResizeBound = null;
		}
		if (this._resizeDebounceTimeout) {
			clearTimeout(this._resizeDebounceTimeout);
			this._resizeDebounceTimeout = null;
		}
		this._stopScaleWatch();
		this._stopAllPolling();
		super.disconnectedCallback();
	}

	// Debounced entry point for window resize events — runs the
	// janitor + image-refresh countdown after the burst settles.
	// (No direct refresh call here: the countdown in
	// _applyPanelScale is the SINGLE source of menu-host rebuilds,
	// so a resize produces exactly one flash.)
	_onPanelResize() {
		if (this._resizeDebounceTimeout)
			clearTimeout(this._resizeDebounceTimeout);
		this._resizeDebounceTimeout = setTimeout(() => {
			this._resizeDebounceTimeout = null;
			this._applyPanelScale();
		}, PANEL_RESIZE_DEBOUNCE_MS);
	}

	// Coherent loses rasterized graphics when the panel's view
	// surface is resized — a known engine bug (the PMS50 GTN750
	// ships a "resize counter" redraw workaround: "redraw some svg
	// image elements after a resize (bug in MSFS)"). In practice
	// only the rich-menu host's graphics blank (the T9 grid icons),
	// and node-level nudges (src swaps, svg clone-replace) restored
	// them only sometimes: the corruption can sit at the RENDER
	// LAYER level, where rebuilt child nodes stay invisible inside
	// the corrupted layer. The one action that always restores them
	// in-sim is a toolbar hide/unhide — so this mirrors it on the
	// host alone: re-create the whole grid content (innerHTML
	// reassign; safe — clicks are delegated on the host, and the
	// live search input deliberately lives OUTSIDE the host) and
	// toggle the host's display for one frame to force the layer
	// itself to be rebuilt.
	_refreshPanelImages() {
		const host = this.menuButtonsHost ||
			document.getElementById("menuButtonsHost");
		if (!host || host.hidden)
			return;
		host.innerHTML = host.innerHTML;
		host.style.display = "none";
		requestAnimationFrame(() => {
			host.style.display = "";
		});
		console.log("GSX panel: rebuilt menu host after view resize");
	}

	// Slow safety poll behind the event path — re-runs the (cheap,
	// idempotent) janitor. Started on panelActive, stopped when the
	// toolbar hides the panel and on disconnect.
	_startScaleWatch() {
		this._stopScaleWatch();
		this._scaleWatchInterval = setInterval(() => {
			if (this._resizeDebounceTimeout)
				return;
			this._applyPanelScale();
		}, PANEL_SCALE_WATCH_INTERVAL_MS);
	}

	_stopScaleWatch() {
		if (this._scaleWatchInterval) {
			clearInterval(this._scaleWatchInterval);
			this._scaleWatchInterval = null;
		}
	}

	// INLINE-STATE JANITOR (and the consolidated post-mortem of
	// every panel-sizing automation tried in-sim). Called by the
	// debounced resize listener + the 1 Hz watchdog; performs
	// cleanup only. Scaling is pure CSS (the width-fit --gsx-u
	// unit); BOTH window dimensions belong to the user's native
	// edge gestures — NO automatic sizing, by design (see below).
	//
	// POST-MORTEM of the height-master JS scaler (content-fit off,
	// height-master: scale = available height / PANEL_DESIGN_HEIGHT
	// published inline as --gsx-u, chrome width snapped to
	// 932 × scale with inline !important): it is the one panel
	// design this platform cannot drag correctly. The game drags
	// its WINDOW and keeps the window fully on screen; the window
	// width can NOT be changed from JS (UPDATE_PANEL_HEIGHT is the
	// only size channel — no width equivalent; UPDATE_PANEL_RECT is
	// ignored for both sizing and drag clamping); and the game
	// stores the window width RELATIVE TO THE SIM WINDOW, so the
	// mismatch grew with wider sim aspect ratios. The width snap
	// therefore left an invisible strip of window beside the
	// visible chrome, and drags stopped short of the screen edge by
	// exactly that strip — the smaller the panel, the earlier. GSX
	// was the only panel whose visible surface differed from its
	// window, hence the only panel in the sim with the bug.
	//
	// FAILED FIX ATTEMPTS — ALL TESTED IN-SIM, DO NOT RETRY:
	//  * viewport-clamped sendRect → no effect on the drag clamp;
	//  * auto-requesting the aspect height on width-only window
	//    changes → blew the window up to ~fullscreen when widening
	//    past the screen's aspect limit (and the game persists the
	//    oversized window across sessions) → random drag walls;
	//  * right-anchoring the chrome inside the window → with a wide
	//    window all slack lands left, panel stuck mid-screen;
	//  * width-master scaling with min-fit / grant-ceiling caps →
	//    horizontal letterbox margins, rejected by the user three
	//    times;
	//  * UPDATE_PANEL_HEIGHT alone (both content-fit values, element
	//    height pinned, bounded retries) → flatly ignored.
	//
	//  * a STANDING height pin + model fitting (ratio, affine) or a
	//    standing-pin closed-loop controller: the only thing that
	//    ever moved the window is the element's LAYOUT HEIGHT under
	//    content-fit="true" — the game natively measures the
	//    document's rendered size ON ITS OWN SCHEDULE and wraps the
	//    window around it (no JS message; this is also why the
	//    legacy "JS can't see panel resizes" lore exists). But a pin
	//    left PERMANENTLY on the chrome gives that wrap machinery
	//    something to iterate on forever, and the iteration is not
	//    a clean function of the pin (a ratio fit one width, an
	//    affine fit only the mid-range) and feeds back into the
	//    measured geometry — the standing-pin controller coupled
	//    with it into positive feedback and RECURSIVELY SHRANK THE
	//    PANEL by itself, no user input.
	//
	//  * EVERY JS-computed height value, in every scheme above —
	//    the grand unifying root cause, found last: heights derived
	//    from clientWidth / innerHeight are in the view's LOGICAL
	//    px, while the content renders from vw resolved at PAINT
	//    time. The two coincide only where the view's logical size
	//    equals its rendered size (the mid-range / native size) and
	//    drift progressively apart outside it — which is why every
	//    JS-number-based scheme (triggers, calibrations,
	//    controllers, constant px pins) was "precise only in the
	//    mid-range of widths", regardless of mechanism.
	//
	// CURRENT DESIGN — NO JS GEOMETRY AT ALL. The chrome WRAPS a
	// fixed design-aspect content box defined entirely in the
	// paint-time unit (FSDT_GSX_Panel.css): #gsxScaleBox is
	// 932u × 1400u (u = 1vw / 9.32), the template wrappers and the
	// chrome are height:auto around it, so the visible panel is
	// exactly the design aspect at EVERY width by construction —
	// box and content share one unit and cannot disagree. The game
	// window's height is cosmetic slack behind the panel (inert
	// zone below if taller, clipped bottom if shorter — both
	// trimmed any time with a bottom-edge drag, a pure window
	// gesture the chrome ignores; the window also re-syncs on
	// panel reopen). This method is only the inline-state janitor
	// for builds that crossed the automation eras.
	_applyPanelScale() {
		if (!this.ingameUi)
			return;
		// Clean up inline state a previous (automation-era) build
		// may have left behind across a live-reload: the published
		// unit override on <body> and the chrome width/height/
		// min-height pins. With them gone the stylesheet owns the
		// layout. Idempotent and cheap.
		if (document.body)
			document.body.style.removeProperty("--gsx-u");
		this.ingameUi.style.removeProperty("width");
		this.ingameUi.style.removeProperty("height");
		this.ingameUi.style.removeProperty("min-height");
		// Image-refresh trigger. Resize EVENTS don't reach this
		// document reliably under content-fit="true", so the
		// detection rides this method (the 1 Hz watchdog calls it
		// regardless of events): when the view size changes, wait
		// ONE stable pass (the engine's asynchronous surface
		// re-creation re-blanks graphics refreshed at settle time —
		// refreshing on the immediately following pass proved the
		// minimum safe delay), then rebuild the menu host ONCE.
		// Single flash, ~0.5-1.5 s after the resize settles.
		const w = document.body ? document.body.clientWidth : 0;
		const h = window.innerHeight;
		if (w !== this._imgLastW || h !== this._imgLastH) {
			this._imgLastW = w;
			this._imgLastH = h;
			this._imgRefreshN = 1;
			return;
		}
		if (this._imgRefreshN > 0 && --this._imgRefreshN === 0)
			this._refreshPanelImages();
	}

	connectedCallback()
	{
		console.log("connectedCallback");
		super.connectedCallback();
		// Suppress fs-base-ui's tabmenu-item `console.warn("on validate")`.
		// The base TabMenuItemElement.onValidate fires that warn
		// unconditionally before checking the eventOnValidate
		// attribute — every click on a settings page tab / sub-tab
		// throws one to the console. The settings page doesn't use
		// eventOnValidate (tab switching is handled internally by
		// the <tab-menu> via the `target` attribute), so patching
		// onValidate to drop the warn while preserving the
		// Coherent.trigger fallback for anything that DOES set
		// eventOnValidate keeps the original semantics for other
		// callers and quiets our console. Idempotent guard via
		// `_gsxOnValidatePatched` so the patch only lands once even
		// if connectedCallback fires multiple times during a panel
		// lifecycle.
		customElements.whenDefined('tabmenu-item').then(() => {
			const TabMenuItem = customElements.get('tabmenu-item');
			if (!TabMenuItem || TabMenuItem.prototype._gsxOnValidatePatched) return;
			TabMenuItem.prototype.onValidate = function() {
				const eventName = this.getAttribute('eventOnValidate');
				if (eventName && eventName.length > 0) {
					Coherent.trigger(eventName);
				}
			};
			TabMenuItem.prototype._gsxOnValidatePatched = true;
		}).catch(() => {});
		this.ingameUi = this.querySelector('ingame-ui');

		// Janitor wiring (scaler-era plumbing, kept inert): the
		// debounced listener + watchdog only run _applyPanelScale's
		// inline-state cleanup. Scaling is pure CSS (the width-fit
		// --gsx-u unit in FSDT_GSX_Panel.css rescales the panel live
		// while a side edge is dragged); the window height is the
		// user's, adjusted natively with the bottom edge. See the
		// post-mortem in _applyPanelScale for why no automation
		// survives here.
		if (!this._onPanelResizeBound) {
			this._onPanelResizeBound = this._onPanelResize.bind(this);
			window.addEventListener("resize", this._onPanelResizeBound);
		}

		this.nEntries = 0;
		this.panelActive = false;
		this.isLoading = false; // New flag to indicate loading state
		this.reloadAttempts = 0;
		this.simBriefLoadingInterval = null; // For animated dots
		// Bind btnOption once — updateMenuItems reuses this reference so
		// the 15 menu-button onclick slots don't need fresh .bind(this)
		// closures on every refresh.
		this._btnOptionBound = this.btnOption.bind(this);

		// Wipe every startup-status LVar at panel-attach time. The
		// LVars persist across Couatl restarts; without this the panel
		// reads leftover percentages from the previous run before any
		// new Python writes land.
		//
		// Deferred + retried because connectedCallback can fire before
		// simvar.js finishes wiring its internal `simvar` binding.
		// The worker probes that binding with `typeof simvar` (safe on
		// an undeclared identifier) before touching SetSimVarValue;
		// without the probe, the 15-iteration clear loop spams 15 ×
		// "Can't find variable: simvar" warnings because simvar.js
		// catches the ReferenceError internally and our try/catch
		// can't see it. Reproduces reliably on F5 reload (cache
		// preserved) inside a VR session. Worst case we give up
		// silently — stale progress bars are overwritten the moment
		// Python resumes writing anyway.
		setTimeout(() => this._clearAllStartupProgressWhenReady(0), 0);

		// False until L:FSDT_GSX_HOTKEY_CUR has been read as > 0 — i.e. until
		// the ENGINE has told us the combo actually in force. Everything before
		// that is the packaged hotkey.js, which any update rewrites back to the
		// stock Ctrl+Shift+F12. See _hotkeyIsStockDefault for what this gates.
		this._hotkeyConfirmed = false;

		try
		{
			this.hotkey = hotkey;
		}
		catch (error)
		{
			console.log("Error parsing hotkey.js file, using defaults");
			this.hotkey = {
				"keyCode": 123,
				"ctrlKey": true,
				"shiftKey": true,
				"altKey": false
			};
		}
		// Override the shipped default with the engine's ACTIVE combo
		// RIGHT NOW when Couatl is already up (the normal case for a
		// panel [re]open mid-session). Without this synchronous read
		// the first caps render showed the default for up to one
		// HOTKEY_CUR poll period before snapping to the real combo.
		try
		{
			const v = SimVar.GetSimVarValue(SIMVAR_HOTKEY_CUR, "number") | 0;
			if (v > 0)
			{
				this._lastHotkeyCur = v;
				this._hotkeyConfirmed = true;
				this.hotkey = {
					keyCode: v & 0xff,
					ctrlKey: !!(v & 0x100),
					altKey: !!(v & 0x200),
					shiftKey: !!(v & 0x400)
				};
			}
		}
		catch (error) { /* SimVar not ready — poll corrects later */ }

		// No polling interval for the SimBrief button: Python fires
		// `EXTERNAL_SYSTEM_TOGGLE_SIMBRIEF_CHANGED` (=7) every time it
		// writes FSDT_GSX_SIMBRIEF_SUCCESS, onKeyIntercepted dispatches
		// it straight to updateSimBriefButton. The reload-click path
		// (closeWithChoice / CHOICE_SIMBRIEF_RELOAD) already paints
		// the loading state synchronously, so there's no need for a
		// 500 ms poll to catch the transition.

		window.addEventListener("keydown", (e) =>
		{
			if (this.remoteControl)
				return;
			// Hotkey-rebind mode owns keyboard exclusively: the
			// capture-phase listener in `startHotkeyCapture` also
			// calls stopImmediatePropagation, but guarding here too
			// makes it bullet-proof against any engine quirk that
			// might let an event slip past to this bubble handler.
			if (this.capturingHotkey)
				return;
			// Inline text-input mode: while the Save / Rename Location
			// prompt is open we mustn't fire the GSX hotkey or treat
			// 1-9/0 keystrokes as menu choices. We also fold Enter / Escape
			// handling into this same listener so there's a single source
			// of truth for input-mode key routing — see _handleInputModeKey
			// for the routing logic and the matching keypress companion
			// registered just below this listener (Enter is stripped from
			// keydown by MSFS's in-game-panel C++ pump and only survives
			// as the legacy `keypress` event).
			if (this.capturingInput) {
				this._handleInputModeKey(e);
				return;
			}

			let choice = -1;

			// Take the engine's published combo before comparing: every other
			// adopt point only runs once the menu has been opened at least
			// once, so until then this.hotkey is the packaged default rather
			// than the user's. See _adoptPublishedHotkeyOnce.
			this._adoptPublishedHotkeyOnce();

			if (e.keyCode == this.hotkey.keyCode && e.ctrlKey == this.hotkey.ctrlKey && e.shiftKey == this.hotkey.shiftKey && e.altKey == this.hotkey.altKey)
			{
				// MSFS 2020: the panel owns the keyboard hotkey toggle.
				// MSFS 2024: GSX (Python) registers the SAME combo as a SimConnect
				// input event and routes it through fireMenuHotkey, so it works
				// even when this panel is fully closed; firing here too would
				// double-toggle. The rebind UI that writes hotkey.json is
				// unchanged — only this keydown ACTION is suppressed on 2024.
				// Re-poll rather than trusting the latched value. Same cold-
				// start race _applyMs2024Gradient documents and already guards
				// against: Python writes L:FSDT_GSX_MSFS2024 during its init,
				// but GSX starts ~2 min into a session, so on a fresh boot this
				// panel reads 0 and `this.ms2024Mode` LATCHES there. The theme
				// got the re-poll; this gate never did — so on 2024 the panel
				// fired the hotkey itself during that window, on top of Python's
				// SimConnect binding. Worse, the combo it fired was whatever the
				// package hotkey.js held, which after an update is the stock
				// Ctrl+Shift+F12 — reported as "F12 opens the menu on a cold
				// start, then it stops and the real hotkey works".
				// ...and never act on a combo the engine has not confirmed, when
				// that combo is the stock one an update just wrote back over the
				// user's. Reported after the fix above: with the menu hidden by
				// TIMEOUT or the X icon, the stock combo started opening it again.
				// Closing with the user's own hotkey never showed it — that path
				// needs a keydown, and the keydown is what runs the adopt, so it
				// can only happen when the adopt has already succeeded. The two
				// silent paths force no adopt, so a panel whose HOTKEY_CUR read
				// came back 0 keeps answering the stock combo indefinitely.
				// Suppressing it costs nothing real: a rebind writes hotkey.js
				// with the user's own combo, which is not the stock one and still
				// fires unconfirmed.
				if (!this._ms2024ModeNow() && !(this._hotkeyIsStockDefault() && !this._hotkeyConfirmed))
					this.fireHotkey();
			}

			// `_menuTakesNumKeys()` is what keeps a digit from selecting into a
			// menu that is no longer on screen — nEntries alone does not, it
			// outlives hideMenu(). Without it, typing numbers in the sim window
			// with the menu closed calls ground services.
			if (e.ctrlKey == false && e.altKey == false && e.shiftKey == false
				&& this._menuTakesNumKeys()
				&& SimVar.GetSimVarValue(SIMVAR_MENU_NUMKEYS, "number") != MENU_NUMKEYS_DISABLED)
			{
				if ((e.keyCode >= 49) && (e.keyCode <= 57))
				{
					choice = e.keyCode - 49;
				}
				else if (e.keyCode == 48)
				{
					choice = 9;
				}
			}

			if ((choice < this.nEntries - 1) && (choice >= 0))
			{
				console.log("[GSX Menu] You selected " + choice);
				this.closeWithChoice(choice);
			}
		}, true);

		// Companion keypress listener for the input-mode handler above.
		// Enter (kc=13) is stripped from keydown by MSFS's in-game-panel
		// C++ pump and only survives as keypress (e.key arrives as
		// undefined; e.keyCode is populated). All other input-mode keys
		// reach us via the keydown listener above; this one exists
		// solely to deliver Enter when we're in capturing-input mode.
		window.addEventListener("keypress", (e) => {
			if (this.capturingInput) this._handleInputModeKey(e);
		}, true);

		if (this.ingameUi)
		{
			this.ingameUi.addEventListener("panelActive", (e) =>
			{
				if (this.panelActive == false)
				{
					this.panelActive = true;
					console.log('panelActive');
					
					// Get ms2024Mode and initialize/update NotificationManager
					this.ms2024Mode = SimVar.GetSimVarValue(SIMVAR_MSFS2024_MODE, "number");
					console.log('ms2024Mode = ', this.ms2024Mode);

					if (!this.notificationManager) {
						this.notificationManager = new NotificationManager(this.ms2024Mode, this);
					} else {
						this.notificationManager.updateMs2024Mode(this.ms2024Mode);
						// Defensive reset: NotificationManager survives
						// panel close/reopen cycles, so flags / queue /
						// pending-timeout state from a prior session
						// could otherwise resurface here. The close
						// paths above already cancel everything; this
						// is belt-and-braces in case some future close
						// path forgets, or the panel is reopened after
						// a partial-init failure.
						this.notificationManager.cancelCurrentMessage();
					}

					// Cache DOM elements
					this.action_list = this.ingameUi.querySelector(".action-list");
					this.close_icon = this.ingameUi.querySelector(".Close.nodrag");
					this.detach_icon = this.ingameUi.querySelector(".Extern.nodrag");
					this.reduce_icon = this.ingameUi.querySelector(".Reduce.nodrag");
					
					this.loadingImage = document.getElementById("loadingImage");
					this.remoteImage = document.getElementById("remoteImage");
					this.loadingPrompt = document.getElementById("loadingPrompt");
					this.pagePrompt = document.getElementById("pagePrompt");
					this.outdatedMsg = document.getElementById("outdatedMsg");
					this.dynamicArea = document.getElementById("dynamicArea");
					this.dynamicButtons = document.getElementById("dynamicButtons");
					this.statusPage = document.getElementById("statusPage");
					this.statusContent = document.getElementById("statusContent");
					this.statusTooltip = document.getElementById("statusTooltip");
					this.bottomBar = document.getElementById("bottomBar");
					this.menuDocumentFrame = document.getElementById("menuDocumentFrame");
					// Rich-button host: a plain div whose innerHTML
					// receives the rendered menu cells on every
					// menu show. The HTML arrives via the MENU_HTML
					// LVar chunk slot (see _fetchMenuHtml); the
					// styling lives in FSDT_GSX_Panel.css under
					// the `#menuButtonsHost` scope prefix, so the
					// payload stays small (just cells, no inline
					// CSS) and fits in SimConnect's per-packet
					// budget without splitting. Plain innerHTML is
					// the fastest DOM patch for this surface — no
					// iframe construction, no shadow root attach.
					this.menuButtonsHost = document.getElementById("menuButtonsHost");
					if (this.menuButtonsHost && !this.menuButtonsHost._clickBound) {
						// Click delegate on the host element itself.
						// Cells carry data-c="N" (minified). VR-disabled
						// cells (.vr-disabled class) are blocked by
						// the panel-wide pointer-events:none rule
						// inside .in-vr — no JS-side check needed.
						// Routes through closeWithChoice — the SAME
						// path the classic numbered button stack
						// uses (see btnOption / the keydown handler
						// at the top of connectedCallback). Setting
						// MENU_CHOICE alone isn't enough: clicks
						// must also drop the panel to pinned-idle /
						// hide the menu so the panel visually
						// dismisses while Python processes the
						// action. Skipping that step left the menu
						// visible but inert after wx-dialog actions
						// returned, because no new menu loop was
						// waiting on the channel.
						this.menuButtonsHost.addEventListener("click", (e) => {
							// Brand cell (`.tb` / `.tb-full` with
							// `data-home="1"`) is a Home button: clicking
							// it pulses MENU_OPEN, which Python's menuOpen
							// handler answers by cancelling the active
							// menu chain and re-opening the top-level GSX
							// menu — same path the hotkey takes. Routed
							// here BEFORE the standard `data-c` check so
							// the regular numeric range gate doesn't have
							// to learn about it.
							const homeBtn = e.target.closest("[data-home]");
							if (homeBtn) {
								this._pulseMenuOpen();
								return;
							}
							const btn = e.target.closest("[data-c]");
							if (!btn) return;
							const choice = parseInt(btn.dataset.c, 10);
							if (isNaN(choice)) return;
							if (choice < 0 || choice > 9) return;
							this.closeWithChoice(choice);
						});
						this.menuButtonsHost._clickBound = true;
					}
					// Live gate-search input bar (sibling above the rich
					// host). Cached + bound once: the `input` event streams
					// the current query back to Python on every keystroke
					// via the SEARCH slot + a bumped generation counter so
					// Python can cheaply poll for changes before decoding.
					// Visibility / focus is driven by _showMenuSearch /
					// _hideMenuSearch off the SEARCH_BEGIN/END K-events.
					this.menuSearch = document.getElementById("gsxMenuSearch");
					this.menuSearchInput = document.getElementById("gsxMenuSearchInput");
					if (this.menuSearchInput && !this.menuSearchInput._gsxBound) {
						this.menuSearchInput.addEventListener("input", () => {
							this.writeStringSlot("SEARCH", this.menuSearchInput.value || "",
								IngamePanelGSX.RES_MAX_CHUNKS);
							this._searchGen = (this._searchGen || 0) + 1;
							SimVar.SetSimVarValue(SIMVAR_SEARCH_GEN, "Number", this._searchGen);
						});
						// stopPropagation so typed characters don't bubble to
						// any sim-binding handler. Enter / Escape are routed by
						// the window-level keydown listener through
						// _handleInputModeKey to the _inputOK / _inputCancel
						// callbacks _showMenuSearch installs — same single
						// source of truth the Save/Rename prompt uses.
						this.menuSearchInput.addEventListener("keydown", (e) => {
							e.stopPropagation();
						});
						this.menuSearchInput._gsxBound = true;
					}
					// Whole-panel font + dimension scaling rides the
					// `--gsx-u` design-px unit (`calc(N * var(--gsx-u))`
					// — see the unit block at the top of
					// FSDT_GSX_Panel.css). The unit resolves from the
					// stylesheet's width-fit definition (1vw / 9.32)
					// — the single scale source now that the JS
					// scaler is retired (see _applyPanelScale). NOTE the
					// historical "JS can't see panel resizes" finding
					// (no resize events, stale clientWidth during
					// drags) was observed under content-fit="true",
					// where the content drives the chrome; with
					// content-fit="false" (current HTML) the chrome
					// resizes the document and resize events +
					// getBoundingClientRect work — same contract the
					// PMS50 GTN750 panel relies on in both sims.
					//
					// Unified static brand cell. #brandCell lives at the
					// bottom of #dynamicArea (last child, anchored via
					// `margin-top: auto`) so it's visible in every menu
					// mode — rich T9 / row-list / classic stack / status
					// page. Carries three roles in one element:
					//   1. Visual brand band (GSX logo + version overlay).
					//   2. Hotkey display + rebind editor — renderHotkeyButton
					//      fills the innerHTML with `<span class="hotkey-edit">…
					//      caps…</span><span class="menu-logo"></span>`, and
					//      rewireHotkeyEditor adds the dblclick=rebind
					//      handler on the .hotkey-edit child. Previously
					//      this was only reachable inside #statusOpenMenuBtn
					//      on the status page (which itself was gated by a
					//      pref many users never enabled).
					//   3. Top-level menu open / "return to home" affordance
					//      — single click anywhere pulses MENU_OPEN, same
					//      path the GSX-Menu hotkey takes. .hotkey-edit
					//      swallows clicks on itself so the caps area can
					//      host its dblclick without firing this handler.
					this.statusOpenMenuBtn = document.getElementById("brandCell");
					if (this.statusOpenMenuBtn && !this.statusOpenMenuBtn._clickBound) {
						this.statusOpenMenuBtn.addEventListener("click", () => {
							this._pulseMenuOpen();
						});
						this.statusOpenMenuBtn._clickBound = true;
						this.renderHotkeyButton();
					}
					// Python -> panel hotkey sync. Python owns the
					// persisted combo (on WASM its file lives in /work,
					// unreachable from this package — the shipped
					// hotkey.js here is only the pre-boot default) and
					// publishes the ACTIVE combo on HOTKEY_CUR using
					// HOTKEY_NEW's encoding (keyCode low byte,
					// ctrl/alt/shift bits 8/9/10). Poll + re-render so
					// the caps always show what the engine actually
					// bound; 0 = Couatl not up yet, keep the default.
					if (!this._hotkeyCurTimer) {
						// Keep a value the synchronous init read may
						// already have applied — resetting to 0 would
						// make the first poll re-apply it needlessly.
						this._lastHotkeyCur = this._lastHotkeyCur | 0;
						this._hotkeyCurTimer = setInterval(() => {
							const v = SimVar.GetSimVarValue(SIMVAR_HOTKEY_CUR, "number") | 0;
							if (v > 0) this._hotkeyConfirmed = true;
							if (v > 0 && v !== this._lastHotkeyCur) {
								this._lastHotkeyCur = v;
								this.hotkey = {
									keyCode: v & 0xff,
									ctrlKey: !!(v & 0x100),
									altKey: !!(v & 0x200),
									shiftKey: !!(v & 0x400)
								};
								this.renderHotkeyButton();
							}
						}, 2000);
					}
					// Start hidden — shown only when entering IDLE_PINNED.
					if (this.statusPage) this.statusPage.style.display = "none";

					// Repopulate _receiptData from the persisted status file
					// on every panel reattach. Python's panelStatus only
					// writes status.html when content CHANGES, so closing
					// the toolbar after a receipt was published and
					// reopening it doesn't push a fresh RELOAD_STATUS
					// K-event — the file still holds the receipt-data
					// span, but this JS instance starts with
					// _receiptData=undefined and showMenu()'s warning-
					// banner refresh would miss the persisted receipt.
					// An explicit reload here covers both views: active
					// menu (which never calls reloadStatus on its own)
					// and pinned-idle (which only does so when dirty).
					this.reloadStatus();

					// Cache all menu buttons
					for (let i = 1; i <= MAX_MENU_BUTTON_ID; i++) {
						this.menuButtons[i] = document.getElementById(MENU_BUTTON_ID_PREFIX + i.toString());
					}
					this.simBriefBtn = this.menuButtons[MAX_MENU_BUTTON_ID]; // Specific alias for button15
					// Label span inside the SimBrief button (the new
					// icon+text layout has a `.bottom-btn-label`
					// child). Updates to this span keep the icon
					// intact; writing `simBriefBtn.textContent` directly
					// would wipe the icon since textContent replaces
					// ALL child nodes.
					this.simBriefBtnLabel = this.simBriefBtn
						? this.simBriefBtn.querySelector(".bottom-btn-label")
						: null;
					// Status detail span — third column of the SimBrief
					// button row. Renders the error text / flight-plan
					// summary that used to live in a separate
					// #simBrief div beneath the button. The helper
					// `_setSimBriefStatus` writes the text and
					// toggles the button's `title` attribute when the
					// content overflows the clamped span, so the CSS
					// hover-tooltip pseudo surfaces the full string.
					this.simBriefStatusSpan = this.simBriefBtn
						? this.simBriefBtn.querySelector(".simbrief-status")
						: null;

					// Bottom-row buttons 11/12 are wx dialogs
					// (Customize Airport / Customize Airplane). Tag
					// them permanently with `.vr-disabled` so the
					// panel-wide `.in-vr .vr-disabled` rule greys them
					// when running in VR. (button13 GSX Settings was
					// here too; it's now the in-panel HTML settings
					// page and runs fine in VR, so it's been removed
					// from `FIXED_BUTTONS_VR_DISABLED`.) Append a
					// (VR) marker icon to
					// the existing `.bottom-btn-row` flex container the
					// HTML already lays out — the row's `align-items:
					// center` + `margin-left: auto` on the marker pin
					// it to the right edge of the button row.
					//
					// IMPORTANT: the prior implementation wiped the
					// button's whole content via `b.textContent = ""`
					// and rebuilt it from scratch, but that throws out
					// the icon+label span structure the HTML now ships
					// (icon left, multi-line label right). The current
					// code only ADDS the marker to the existing row.
					for (const i of FIXED_BUTTONS_VR_DISABLED) {
						const b = this.menuButtons[i];
						if (b) {
							b.classList.add("vr-disabled");
							const row = b.querySelector(".bottom-btn-row");
							if (row && !row.querySelector(".vr-marker")) {
								const marker = document.createElement("span");
								marker.className = "vr-marker";
								// Icon instead of " (VR)" text — much
								// shorter, so it fits next to the row's
								// existing icon + 2-line label. White-
								// filled SVG; `alt` gives a graceful
								// text fallback if the file 404s.
								marker.innerHTML = '<img src="coui://html_ui/InGamePanels/FSDT_GSX_Panel/icons/vr-headset.svg" alt="VR" />';
								row.appendChild(marker);
							}
						}
					}

					// Apply hover effect + no-focus-white attributes for
					// fullWidth.small buttons when ms2024Mode is true. The
					// method is idempotent and re-callable so that a late-
					// arriving L:FSDT_GSX_MSFS2024 (Python sets it during
					// GSX init — which can finish AFTER panelActive fires
					// on a cold sim start) still applies the theme via
					// `_applyMs2024Gradient`'s re-poll path.
					this._applyMsfs2024ButtonTheme();

					if (this.close_icon) this.close_icon.classList.remove("hide");

					this._applyMs2024Gradient();

					// Close-icon handler. Decision is made at click time so
					// runtime VR enter/exit (Auto mode) applies without
					// reopening the panel.
					//   - non-VR: classic hide — cancel any pending
					//     menu, hide the UI, leave the panel marked
					//     "active" on the toolbar so the user can bring
					//     it back via hotkey / toolbar toggle.
					//   - VR: drop to pinned-idle so the panel stays
					//     visible as a minimal status page with a "GSX
					//     Menu" button to re-engage. Hiding the panel
					//     in VR doesn't work sensibly; fully closing it
					//     (the old behavior) just duplicated what the
					//     toolbar button already does.
					// No remote-control branch: the heartbeat poll
					// closes the panel automatically the moment remote
					// control is detected, so this handler is
					// unreachable in that state.
					this.close_icon.Validate = () =>
					{};
					this.close_icon.addEventListener("click", (e) =>
					{
						console.log("close_icon.click()");
						if (SimVar.GetSimVarValue(SIMVAR_IS_IN_VR, "boolean"))
							this.showPinnedIdle();
						else
							this._classicHide();
					});
					this.hideMenu();
					this.checkMenu();

					// Initial scale pass + watchdog start. The chrome
					// geometry is reliable shortly after panelActive
					// (it's mid-layout on the very first frame, hence
					// the small delay — PMS50 waits out the same
					// window before its first setSize). Until this
					// fires, the stylesheet's vw-based width-fit unit
					// keeps the panel at the historical look.
					setTimeout(() => {
						this._applyPanelScale();
						this._startScaleWatch();
					}, 1000);
				}
			});
		}

		this.toolbarListener = RegisterToolBarListener(() =>
		{
			this.toolbarListener.on('local_ingameui_visibility', (panelID, visible) =>
			{
				if (!visible && this.panelActive)
				{
					this._stopScaleWatch();
					this._stopAllPolling();
					// Full clear (visible tooltip + pending setTimeout +
					// queue + isShowingMessage flag), not just the
					// visible-bits removeTooltip(). Without the queue/
					// timeout reset, a tooltip in flight when the user
					// closes the toolbar would fire its delayed
					// removeTooltip after panel close, advance to the
					// next queued message, and Coherent.trigger a
					// sim-level SHOW_TOOLTIP that paints over the sim
					// even though the panel is gone.
					this._cancelNotification();
					this.panelActive = false;
				}
			});
		});

		this.keyListener = RegisterViewListener('JS_LISTENER_KEYEVENT', () =>
		{
			Coherent.call('INTERCEPT_KEY_EVENT', 'EXTERNAL_SYSTEM_SET', 1);
			Coherent.call('INTERCEPT_KEY_EVENT', 'EXTERNAL_SYSTEM_TOGGLE', 1);
			Coherent.on('keyIntercepted', this.onKeyIntercepted.bind(this));
		});

		// FSDT-82: CommBus surface transport — the production menu
		// channel on MSFS2024 WASM (PC + Xbox), where this panel
		// cannot fetch the files Python writes into the couatlwasm
		// package's /work dir. See _initCommBus below.
		this._initCommBus();
	}

	onKeyIntercepted(keyEventName, index, value)
	{
		this.remoteControl = SimVar.GetSimVarValue(SIMVAR_REMOTE_CONTROL, "number");
		console.log("keyIntercepted " + keyEventName + " " + index + " " + value);
		switch (keyEventName)
		{
			case 'EXTERNAL_SYSTEM_SET':
				if (this.remoteControl != 0) {
					this._removeTooltip();
				} else if (value <= 0) {
					this._cancelNotification();
				} else {
					this.reloadTooltip(value);
				}
				break;
			case 'EXTERNAL_SYSTEM_TOGGLE':
				switch (value)
				{
					case EXTERNAL_SYSTEM_TOGGLE_RELOAD_MENU:
						console.log("EXTERNAL_SYSTEM_TOGGLE = RELOAD_MENU received.");
						// Defensive teardown: a regular menu always
						// supersedes the settings page, so flip out of
						// settings mode before processing the new menu.
						// emulateMenu_MSFS also pulses K-event 13 to
						// the same effect, but doing it on RELOAD_MENU
						// guarantees the visual transition even if the
						// CLOSE_SETTINGS pulse races the RELOAD_MENU
						// dispatch order.
						if (document.body.classList.contains("settingsActive")) {
							this.closeSettings();
						}
						// Python writes the menu file then fires this
						// K-event, so we can fetch immediately —
						// no race with a stale file. The previous
						// "skip if checkMenu already loaded" branch
						// existed because checkMenu used to arm a
						// 500 ms blind fallback reloadMenu; that
						// fallback (and the _loadingFromCheckMenu
						// flag that gated it) is gone, so the skip
						// is gone too.
						if (this._fileRetryTimeout) {
							clearTimeout(this._fileRetryTimeout);
							this._fileRetryTimeout = null;
						}
						// Deferred loading screen: most menu→menu
						// transitions complete in well under a frame
						// now that the rich HTML rides the slot
						// (synchronous, no file fetch), so flashing
						// the "Loading GSX Menu..." spinner for
						// ~20-40ms reads as a hiccup the user can
						// just barely see in slow-motion video.
						// Arm a short timer here and let fileLoaded
						// cancel it when the new menu arrives in time
						// — only slow loads (engine busy, file system
						// stall, etc.) actually surface the spinner.
						// On a stale-from-prior pulse the timer is
						// also cleared so we don't show the loading
						// screen for a transition that already
						// completed before this K-event arrived.
						if (this._pendingLoadingScreen) {
							clearTimeout(this._pendingLoadingScreen);
						}
						this._pendingLoadingScreen = setTimeout(() => {
							this._pendingLoadingScreen = null;
							this.showLoadingMenu("Loading GSX Menu, please wait...");
						}, 120);
						this.reloadMenu();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_HIDE_MENU:
						// If the panel is already hidden (user explicitly
						// closed via X), don't re-show it. Python's
						// HIDE_MENU is "the menu became inactive" — if no
						// menu was visible to begin with, there's nothing
						// to do.
						if (this.ingameUi && this.ingameUi.style.display === "none")
							break;
						if (this.isPinnedEffective())
							this.showPinnedIdle();
						else
							this.hideMenu();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_TIMEOUT:
						console.log("[GSX Menu] Timeout");
						// Same as HIDE_MENU: if the user already closed the
						// panel, don't bring it back on a timeout from a
						// menu they aren't watching.
						if (this.ingameUi && this.ingameUi.style.display === "none")
							break;
						if (this.isPinnedEffective())
						{
							// Python already timed out on its side. Mirror the
							// MENU_CHOICE=-1 that closeWithChoice(-1) would
							// have emitted (kept so 3rd-party observers see
							// the same cancel signal they expect) and drop
							// to the status page instead of hiding.
							this.setMenuChoiceVar(CHOICE_CANCEL);
							this.showPinnedIdle();
						}
						else
						{
							this.closeWithChoice(CHOICE_CANCEL);
						}
						break;
					case EXTERNAL_SYSTEM_TOGGLE_FORCE_CLOSE:
						console.log("[GSX Menu] Force close");
						this.closePanel();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_RELOAD_STATUS:
						this.reloadStatus();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_FIRE_HOTKEY:
						// Controller button pressed (Python detected the bound
						// joystick button and fired this). Run the same toggle
						// the keyboard hotkey uses.
						this.fireHotkey();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_RELOAD_MENU_HTML:
						// Python's `panelMenuLive.tick` detected that
						// the registered menu rebuilder produced HTML
						// that differs from what's on screen — service
						// state colour cue moved, operator name bound,
						// billing detail ticked, etc. Refresh only the
						// rich-menu host; the classic stack and the
						// canonical ./menu file stay frozen so 3rd-
						// party automation tooling that reads them
						// sees no churn between user actions.
						this.reloadMenuLive();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_OPEN_SETTINGS:
						// Python wrote ./settings.html and wants the
						// settings page surfaced (or refreshed if it's
						// already up). reloadSettings flips
						// body.settingsActive on, parses the HTML
						// fragment, and instantiates the field
						// controls. Same flow on first open and on
						// later refreshes — dedup is Python-side.
						this.reloadSettings();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_CLOSE_SETTINGS:
						// Python explicitly closing settings — fired
						// by emulateMenu_MSFS when any other menu is
						// about to show, so the settings surface tears
						// down even when the user returns to the main
						// menu via hotkey rather than the brand cell.
						this.closeSettings();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_SETTINGS_CHANGED:
						this.refreshPinnedState();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_SIMBRIEF_CHANGED:
						// Python wrote FSDT_GSX_SIMBRIEF_SUCCESS —
						// refresh the button state on demand instead
						// of polling. Gating mirrors the prior
						// interval's gate so a change arriving during
						// a menu transition or critical notification
						// doesn't yank the UI out from under the user.
						if (this.panelActive && !this.isLoading && this.ingameUi && this.ingameUi.style.display !== "none"
							&& (!this.notificationManager || !this.notificationManager.isShowingCriticalMessage)) {
							this.updateSimBriefButton();
						}
						break;
					case EXTERNAL_SYSTEM_TOGGLE_INPUT_REQUEST:
						// Python filled the INPUT_REQ LVar slot and
						// is polling FSDT_GSX_INPUT_STATE for the
						// answer — see common/jsBridge.py.
						this.handleInputRequest();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_SEARCH_BEGIN:
						// Python's SearchGatesMenuEntry opened the live
						// gate-search menu — reveal + focus the inline
						// search box and start streaming keystrokes.
						this._showMenuSearch();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_SEARCH_END:
						// Search menu closed (Back / pick / Home unwind) —
						// drop the search box and release input capture.
						this._hideMenuSearch();
						break;
					case EXTERNAL_SYSTEM_TOGGLE_RESTARTING:
						// Python is about to restart the engine
						// (quitAndRestartPy). Flip to the loading
						// screen now, while the old instance is
						// still alive in its wait(2000) window —
						// whatever the panel was previously showing
						// (active menu, pinned-idle status page)
						// gets replaced by the standard
						// "Restarting GSX..." view, and
						// _enterRestartingState's watchdog will
						// auto-re-enter checkMenu once
						// COUATL_STARTED drops to 0 (proof the old
						// engine is gone) so the cold-start retry
						// loop reattaches to the fresh process. The
						// re-entry guard inside
						// _enterRestartingState makes the duplicate
						// notification from a JS-initiated restart
						// (closeWithChoice path) a no-op.
						console.log("[GSX Menu] Restart starting");
						this._enterRestartingState("Restarting GSX, please wait...");
						break;
					case EXTERNAL_SYSTEM_TOGGLE_SHUTDOWN:
						// Couatl is exiting for good — tray-bar Quit
						// or sim quit, anything that hit
						// Application::cleanup with the `restarting`
						// global == false. Re-enter checkMenu: its
						// _continueCheckMenu polling will observe
						// COUATL_ALIVE=0 on the next tick and the
						// _updateLoadingText helper switches the
						// display to COUATL_NOT_RUNNING_MSG (no
						// spinner) automatically. From there the
						// panel sits in its idle resting state
						// until the user starts Couatl again.
						// Clear _restartingMenu in case it was set
						// from a prior RESTARTING K-event that this
						// SHUTDOWN now supersedes.
						console.log("[GSX Menu] Engine shutting down");
						this._restartingMenu = false;
						this._clearTimer('_restartingMenuTimeout');
						this.checkMenu();
						break;
				}
				break;
		}
	}

	// --- Shared helpers -------------------------------------------------
	// Compact form of the `if (this.X) { clearTimeout(this.X); this.X = null; }`
	// pattern the class ran dozens of times. Handle-or-null is assumed on
	// the named property; no-ops cleanly when already cleared.
	_clearTimer(name)
	{
		if (this[name]) { clearTimeout(this[name]); this[name] = null; }
	}

	_clearInterval(name)
	{
		if (this[name]) { clearInterval(this[name]); this[name] = null; }
	}

	// 0→1 pulse on FSDT_GSX_MENU_OPEN with a tracked off-window so
	// SimConnect's per-SIM_FRAME `changed=True` subscription on the
	// Python side definitely sees a transition, even when MENU_OPEN
	// was already 1 (e.g., from a prior session where the panel was
	// torn down without close-handling). The 150ms off-window covers
	// single-digit FPS during boot terrain/scenery flushes.
	//
	// The timer handle is stored on `this._menuOpenPulseTimer` so
	// concurrent call-sites can't overlap (each new pulse cancels
	// the prior pending "on" — otherwise a previous "on" firing
	// inside the next "off" window collapses the visible 0-window
	// to zero and the change goes unseen) and so panel teardown
	// (_stopAllPolling, closePanel, stopContinuousMenuCheck) can
	// cancel an in-flight pulse before its callback writes
	// MENU_OPEN=1 against an already-closed panel.
	_pulseMenuOpen()
	{
		this._clearTimer('_menuOpenPulseTimer');
		// Fast path: MENU_OPEN is already 0 (the common case — Python resets it
		// to 0 after handling every open), so Python's changed=True subscription
		// sees a clean 0->1 the instant we write 1. Skip the 150 ms off-window
		// entirely — it was the single biggest chunk of click-to-menu latency.
		if (!SimVar.GetSimVarValue(SIMVAR_MENU_OPEN, "number")) {
			this.setMenuOpenVar(1);
			this.setMenuChoiceVar(CHOICE_REQUEST_MENU);
			return;
		}
		// Stale path: MENU_OPEN is still 1 (panel torn down last time without
		// Python resetting it). Force an observable 0->1 transition — write 0,
		// wait an off-window long enough to survive single-digit boot FPS, then 1.
		this.setMenuOpenVar(0);
		this._menuOpenPulseTimer = setTimeout(() => {
			this._menuOpenPulseTimer = null;
			this.setMenuOpenVar(1);
			this.setMenuChoiceVar(CHOICE_REQUEST_MENU);
		}, 150);
	}

	// Zero every FSDT_GSX_COUATL_STARTED_{i}_PROGRESS LVar. Called on
	// panel attach, user-initiated restart, and crash detection so the
	// sign-of-life scan (`_anyStartupProgress`) isn't fooled by stale
	// values left behind by the previous Couatl run.
	_clearAllStartupProgress()
	{
		for (let i = 0; i < STATUS_STEP_COUNT; i++) {
			SimVar.SetSimVarValue(`L:FSDT_GSX_COUATL_STARTED_${i}_PROGRESS`, "number", 0);
		}
	}

	// Probe-then-clear variant for the connectedCallback path, where
	// simvar.js may not be fully initialised yet. Probes via `typeof`
	// on the module-global `simvar` identifier — that's the internal
	// binding whose absence makes SetSimVarValue throw "Can't find
	// variable: simvar" from simvar.js itself (which catches the error
	// and logs it, so an external try/catch is useless). `typeof` on
	// an undeclared / TDZ identifier is safe and returns "undefined".
	// F5 in the Coherent debugger (cache preserved) seems to leave
	// simvar.js in this half-loaded state for a short window; retry
	// every 50 ms up to ~3 s.
	_clearAllStartupProgressWhenReady(attempt)
	{
		let simvarReady = false;
		try {
			// typeof of an undeclared identifier returns "undefined"
			// without throwing; wrap in try/catch anyway in case the
			// engine evaluates it differently in VR or reload scenarios.
			// eslint-disable-next-line no-undef
			simvarReady = (typeof simvar !== "undefined")
				&& (typeof SimVar !== "undefined")
				&& SimVar
				&& typeof SimVar.SetSimVarValue === "function";
		} catch (e) {
			simvarReady = false;
		}
		if (!simvarReady) {
			if (attempt > 60) {
				console.log("[GSX] simvar.js never initialised — skipping startup-progress clear");
				return;
			}
			setTimeout(() => this._clearAllStartupProgressWhenReady(attempt + 1), 50);
			return;
		}
		for (let i = 0; i < STATUS_STEP_COUNT; i++) {
			SimVar.SetSimVarValue(`L:FSDT_GSX_COUATL_STARTED_${i}_PROGRESS`, "number", 0);
		}
	}

	// Route a transient message through the NotificationManager, falling
	// back to a console log when the manager isn't wired up yet (happens
	// in some connectedCallback paths before the <notification-panel>
	// custom element has materialized).
	_notify(msg, durationS)
	{
		if (this.notificationManager) this.notificationManager.showText(msg, durationS);
		else console.error("NotificationManager unavailable:", msg);
	}

	_notifyCritical(msg, durationS)
	{
		if (this.notificationManager) {
			return this.notificationManager.showCriticalMessageAndWait(msg, durationS);
		}
		console.error("NotificationManager unavailable (critical):", msg);
		return Promise.resolve();
	}

	_removeTooltip()
	{
		if (this.notificationManager) this.notificationManager.removeTooltip();
	}

	_cancelNotification()
	{
		if (this.notificationManager) this.notificationManager.cancelCurrentMessage();
	}

	// Reflect live VR state on the panel root as `.in-vr`. CSS keys all
	// VR-specific styling (greyed buttons, "(VR)" suffix) off this class
	// so a toggle just flips one class instead of re-rendering buttons.
	// Called from showMenu (per-render) and _heartbeatPoll (every 5 s)
	// so runtime VR enter/exit updates without needing a menu refresh.
	//
	// Diagnostic: `E:IS IN VR` reliability in Coherent panels isn't
	// officially documented, so log transitions (0↔1) to the GT debugger
	// console. `undefined` initial value ensures the first observed
	// value always logs, confirming the SimVar is readable at all.
	_refreshVrState()
	{
		if (!this.ingameUi) return;
		const inVr = !!SimVar.GetSimVarValue(SIMVAR_IS_IN_VR, "boolean");
		this.ingameUi.classList.toggle("in-vr", inVr);
		if (this._lastVrState !== inVr) {
			console.log("[GSX VR] IS IN VR -> " + inVr);
			this._lastVrState = inVr;
		}
	}

	// Set CSS `display` on a contiguous range of menuButtons entries
	// (inclusive bounds). Null slots are skipped so it's safe to call
	// before the DOM is fully wired.
	_setButtonRangeDisplay(lo, hi, display)
	{
		for (let i = lo; i <= hi; i++) {
			const btn = this.menuButtons[i];
			if (btn) btn.style.display = display;
		}
	}

	// Render the MSFS-2024 blue gradient on the page title bar + the
	// three chrome icons (close, detach, reduce). Called from both the
	// panel-active init (after DOM wiring) and from showMenu (after a
	// menu refresh that might have cleared the inline style).
	_adoptPublishedHotkeyOnce()
	{
		// Adopt HOTKEY_CUR if the engine has published it and we have never
		// adopted before. After that the 2 s poll and renderHotkeyButton keep
		// `this.hotkey` current, so this costs one SimVar read per keydown only
		// until the first successful adopt.
		//
		// Needed because every other adopt point is bootstrapped by the FIRST
		// MENU OPEN: renderHotkeyButton runs when the menu paints, and the poll
		// itself is created in the same menu-build block. Until then the panel
		// answers to whatever the packaged hotkey.js held — the stock
		// Ctrl+Shift+F12 after any update, since Python's restore cannot beat
		// the panel mount. On 2024 that let the stock combo open the menu once
		// (the open then adopted the real one, which is why it worked exactly
		// once). On 2020, where this panel OWNS the hotkey, it is worse: the
		// user's own key does nothing until they open the menu from the toolbar
		// to bootstrap the sync.
		if (this._lastHotkeyCur) return;
		try
		{
			const v = SimVar.GetSimVarValue(SIMVAR_HOTKEY_CUR, "number") | 0;
			if (v > 0)
			{
				this._lastHotkeyCur = v;
				this._hotkeyConfirmed = true;
				this.hotkey = {
					keyCode: v & 0xff,
					ctrlKey: !!(v & 0x100),
					altKey: !!(v & 0x200),
					shiftKey: !!(v & 0x400)
				};
			}
		}
		catch (error) { /* SimVar not ready — the poll corrects later */ }
	}

	_hotkeyIsStockDefault()
	{
		// The combo the packaged hotkey.js ships with, and the one every update
		// restores over a rebind. Holding it means either the user really did
		// pick Ctrl+Shift+F12, or we are reading a file that was just reset —
		// indistinguishable from here, which is why the keydown gate pairs this
		// with _hotkeyConfirmed rather than trusting it on its own.
		const h = this.hotkey;
		return !!h && h.keyCode === 123 && !!h.ctrlKey && !!h.shiftKey && !h.altKey;
	}

	_ms2024ModeNow()
	{
		// The LIVE value of L:FSDT_GSX_MSFS2024, latching `this.ms2024Mode`
		// forward as soon as Python publishes it. Callers that must not act on
		// a stale 0 (the keydown hotkey gate) use this instead of the field.
		// Read-only apart from that latch: the theme side-effects belong to
		// _applyMs2024Gradient, which keeps its own re-poll.
		try
		{
			const current = SimVar.GetSimVarValue(SIMVAR_MSFS2024_MODE, "number");
			if (current) this.ms2024Mode = current;
			// Latch FORWARD only. The re-poll exists for the cold-start 0 that
			// precedes Python's write, but a 0 read AFTER we have seen 2024 mode
			// is noise, not a downgrade — the sim cannot stop being MSFS 2024
			// mid-session. Returning the raw 0 there let the panel fire the
			// hotkey itself on top of Python's SimConnect binding.
			return current || this.ms2024Mode;
		}
		catch (error) { return this.ms2024Mode; }
	}

	_applyMs2024Gradient()
	{
		// Re-poll L:FSDT_GSX_MSFS2024 each call. The original cold-
		// start race: GSX Python writes the LVar during its init
		// (couatl-dev `GSX/__init__.py`, near `SimDataDefinition(...)`
		// then `setData([0, 1 if isMSFS2024() else 0])`), but on a
		// fresh sim boot Python may still be initialising when the
		// panel's `panelActive` event fires for the first time —
		// SimVar.GetSimVarValue then returns 0 (the LVar default),
		// `this.ms2024Mode` latches to 0, and the theme never applies
		// until the panel is reloaded (Coherent debugger refresh,
		// menu close+reopen of the panel chrome, etc.). Re-polling
		// here lets the theme catch up the moment Python's value
		// becomes visible — typically within the first few seconds.
		// `_applyMsfs2024ButtonTheme` is idempotent so the second-
		// time-around button styling doesn't double-apply.
		const current = SimVar.GetSimVarValue(SIMVAR_MSFS2024_MODE, "number");
		if (current !== this.ms2024Mode) {
			this.ms2024Mode = current;
			if (this.notificationManager) {
				this.notificationManager.updateMs2024Mode(current);
			}
			if (current) {
				this._applyMsfs2024ButtonTheme();
			}
		}
		if (!this.ms2024Mode) return;
		const icons = [this.close_icon, this.detach_icon, this.reduce_icon];
		if (this.pagePrompt) this.pagePrompt.style.background = gradientStyleH;
		icons.forEach(icon => { if (icon) icon.style.background = gradientStyleV; });
	}

	// One-shot MSFS-2024 button theme: hover gradient stylesheet +
	// `no-focus-white` attribute on every fullWidth.small button so
	// the shadow DOM doesn't fall back to a washed-out hover. Called
	// from the panel-active init AND from `_applyMs2024Gradient` when
	// the re-polled LVar transitions 0 -> 1 (cold-start race recovery).
	// Idempotent via `_msfs2024ButtonThemeApplied` so a late call
	// doesn't duplicate the `<style>` tag or re-set attributes.
	_applyMsfs2024ButtonTheme()
	{
		if (this._msfs2024ButtonThemeApplied) return;
		if (!this.ms2024Mode) return;
		this._msfs2024ButtonThemeApplied = true;
		// Body class toggle so plain CSS selectors can branch per sim
		// (`body.msfs2024 .gsx-set-shell { ... }`). Used by the
		// settings page chrome to swap in the MSFS-2024 frosted /
		// blue-accent palette while keeping the legacy MSFS-2020 look
		// as the default; lets future per-sim styling stay
		// declarative in CSS rather than per-component JS.
		document.body.classList.add('msfs2024');

		const style = document.createElement('style');
		// Also theme the rich-row variant (.r) — its base
		// CSS uses the MSFS-2020 #00B4FF hover so the surface stays
		// consistent in 2020-mode; in 2024-mode we paint the same
		// vertical blue gradient as the classic .fullWidth.small
		// hover so both control surfaces match. The active state
		// drops to a single darker shade (the gradient's bottom
		// stop) to mimic the 2024 "pressed" feel without animating
		// the gradient stops.
		style.textContent = `
			ingame-ui#fsdt-gsx-panel new-push-button.fullWidth.small:hover {
				background: ${gradientStyleV} !important;
				color: #FFFFFF !important;
			}
			ingame-ui#fsdt-gsx-panel #menuButtonsHost .r:hover {
				background: ${gradientStyleV} !important;
				color: #FFFFFF !important;
			}
			ingame-ui#fsdt-gsx-panel #menuButtonsHost .r:active {
				background: #254F8B !important;
				color: #FFFFFF !important;
			}
			ingame-ui#fsdt-gsx-panel .bottom-btn:hover {
				background: ${gradientStyleV} !important;
				color: #FFFFFF !important;
			}
			ingame-ui#fsdt-gsx-panel .bottom-btn:active {
				background: #254F8B !important;
				color: #FFFFFF !important;
			}
		`;
		document.head.appendChild(style);

		// no-focus-white prevents the new-push-button shadow DOM's
		// default white overlay on focused / hovered fullWidth.small
		// buttons. Bottom-bar buttons are plain <button> elements
		// (not custom-element) so they don't need this attribute —
		// only iterate the dynamic numbered buttons that ARE
		// new-push-button.
		for (let i = 1; i <= MAX_DYNAMIC_MENU_BUTTONS; i++) {
			const btn = this.menuButtons[i];
			if (btn && btn.classList.contains('fullWidth') && btn.classList.contains('small')) {
				btn.setAttribute('no-focus-white', '');
			}
		}
		// statusOpenMenuBtn shares the .fullWidth.small styling but
		// lives outside the menuButtons[] array, so the loop above
		// misses it. Handle separately.
		if (this.statusOpenMenuBtn
			&& this.statusOpenMenuBtn.classList.contains('fullWidth')
			&& this.statusOpenMenuBtn.classList.contains('small')) {
			this.statusOpenMenuBtn.setAttribute('no-focus-white', '');
		}
	}

	// Build and mount a top-of-panel warning banner (outdated-version
	// prompt, hotfix download status, test-version badge, …) into the
	// shared #outdatedMsg slot. Wipes any previous banner contents.
	// Optional `onClick` makes the banner act as a button — used by
	// the hotfix-ready banner so the user can apply without opening
	// the menu. When onClick is provided the outer element is a
	// <new-push-button> instead of a <div>: Coherent's MSFS skin
	// ignores cursor changes on plain elements (and even native
	// <button>), but the panel's custom <new-push-button> component
	// has shadow-DOM cursor handling that flips to pointer on hover.
	_showBanner(bannerClass, messageClass, text, faceEmoji, onClick, logoSrc)
	{
		if (!this.outdatedMsg) return;
		const banner = document.createElement(onClick ? 'new-push-button' : 'div');
		banner.className = bannerClass;
		if (onClick) banner.classList.add('gsx-banner-clickable');
		const container = document.createElement('div');
		container.className = 'gsx-outdated-warning-container';
		// Optional logo prefix — used by the receipt banner so it
		// reads as a message from the fuel operator, not a generic
		// system notification. Sized via .gsx-banner-logo CSS (kept
		// to a small inline-aligned thumbnail; full-resolution logo
		// is in the browser-rendered invoice itself).
		if (logoSrc) {
			const logo = document.createElement('img');
			logo.className = 'gsx-banner-logo';
			logo.src = logoSrc;
			logo.alt = '';
			container.appendChild(logo);
		}
		const message = document.createElement('span');
		message.className = messageClass;
		// Split on \n so callers can request a multi-line banner
		// (receipt banner uses this for "Invoice from X" / "Click
		// to view"). Each line wraps in its own .gsx-banner-line
		// span so CSS can apply per-line nowrap + text-overflow:
		// ellipsis — a plain <br>-separated text node would clip
		// or wrap a long operator name into a third visible line
		// instead of truncating cleanly. Single-line callers get
		// a single line span; behavior matches the prior layout.
		const lines = String(text).split('\n');
		lines.forEach((line) => {
			const span = document.createElement('span');
			span.className = 'gsx-banner-line';
			span.textContent = line;
			message.appendChild(span);
		});
		if (faceEmoji) {
			const face = document.createElement('span');
			face.className = 'gsx-outdated-warning-face';
			face.textContent = faceEmoji;
			message.appendChild(face);
		}
		container.appendChild(message);
		banner.appendChild(container);
		if (onClick) {
			banner.onclick = onClick;
		}
		this.outdatedMsg.innerHTML = '';
		this.outdatedMsg.appendChild(banner);
		this.outdatedMsg.style.display = "initial";
	}

	_clearBanner()
	{
		if (!this.outdatedMsg) return;
		this.outdatedMsg.innerHTML = '';
		this.outdatedMsg.style.display = "none";
	}

	_refreshWarningBanner()
	{
		if (!this.outdatedMsg) return;

		// Shared by active menu and pinned-idle; both show bottomBar,
		// so the banner must be rebuilt/cleared from current SimVars.
		this.gsxOutdated = SimVar.GetSimVarValue(SIMVAR_GSX_OUTDATED, "number");
		this.gsxTestVersion = SimVar.GetSimVarValue(SIMVAR_GSX_TESTVERSION, "number");
		const major       = SimVar.GetSimVarValue(SIMVAR_GSX_VERSION_MAJOR, "number");
		const minor       = SimVar.GetSimVarValue(SIMVAR_GSX_VERSION_MINOR, "number");
		const build       = SimVar.GetSimVarValue(SIMVAR_GSX_VERSION_BUILD, "number");
		const remoteMajor = SimVar.GetSimVarValue(SIMVAR_GSX_REMOTE_VERSION_MAJOR, "number");
		const remoteMinor = SimVar.GetSimVarValue(SIMVAR_GSX_REMOTE_VERSION_MINOR, "number");
		const remoteBuild = SimVar.GetSimVarValue(SIMVAR_GSX_REMOTE_VERSION_BUILD, "number");
		const hasRuntimeVersion = [major, minor, build].every(Number.isFinite)
			&& (major !== 0 || minor !== 0 || build !== 0);
		const hasRuntimeRemoteVersion = [remoteMajor, remoteMinor, remoteBuild].every(Number.isFinite)
			&& (remoteMajor !== 0 || remoteMinor !== 0 || remoteBuild !== 0);
		this.gsxVersionString = hasRuntimeVersion
			? `${major}.${minor}.${build}`
			: GSX_FALLBACK_VERSION;
		this.gsxRemoteVersionString = hasRuntimeRemoteVersion
			? `${remoteMajor}.${remoteMinor}.${remoteBuild}`
			: GSX_FALLBACK_VERSION;

		// Populate the static brand cell's version overlay (`.tv`
		// inside #brandCell) with the freshly-resolved installed
		// version. The element is in the panel HTML directly, so
		// the assignment is cheap (no DOM creation) and idempotent
		// — repeat refreshes just rewrite the same text.
		const brandVer = this.ingameUi && this.ingameUi.querySelector("#brandCell .tv");
		if (brandVer) brandVer.textContent = "v" + this.gsxVersionString;

		console.log("FSDT_GSX_OUTDATED = " + this.gsxOutdated);
		console.log("SIMVAR_GSX_TESTVERSION = " + this.gsxTestVersion);
		console.log("GSX Installed version = " + this.gsxVersionString );
		console.log("GSX Remote version = " + this.gsxRemoteVersionString );

		// Banner priority: receipt > update-pending > outdated/test >
		// hotfix. The FSDT-42 update sits above the version warnings
		// because it is the only one of them the user can resolve from
		// the panel itself — the outdated / test banners just report a
		// state that needs the Addon Manager. Once applied it stops
		// showing (the .pyz.new is gone after promotion) and whatever
		// was underneath reappears on the next refresh. Only one
		// banner can show in #outdatedMsg at a time, so the receipt
		// notification preempts the standing warnings — it's the most
		// time-relevant signal (user just paid for a service and
		// wants to see the bill). Once the user clicks the receipt,
		// it's cleared and the underlying warning (outdated / test /
		// hotfix) reappears naturally on the next refresh. The
		// disk-saved hotfix / receipt files are unaffected — both
		// remain available regardless of which one currently owns
		// the banner slot.
		if (this._receiptData) {
			this.showReceiptBanner();
		} else if (SimVar.GetSimVarValue(SIMVAR_GSX_UPDATE_PENDING, "number") != 0) {
			this.showAddOnUpdateBanner();
		} else if (this.gsxOutdated != 0) {
			this.showOutdatedWarning();
		} else if (this._hasHotfix()) {
			this.showHotfixStatus();
		} else {
			this._clearBanner();
		}
	}

	_hasHotfix()
	{
		// Mirrors showHotfixStatus's first SimVar check. Used by the
		// banner-priority decision above to know whether the hotfix
		// path will end up showing a banner before letting the
		// receipt take the slot.
		return SimVar.GetSimVarValue(SIMVAR_GSX_HOTFIX_STATUS, "number") != 0;
	}

	showReceiptBanner()
	{
		// Click-to-view notification for a completed receipt. The
		// rendered invoice lives in memory on the Python side
		// (billing._latestReceiptHtml); clicking pulses
		// FSDT_GSX_RECEIPT_OPEN=1 → Python opens a dedicated GSX
		// menu with the invoice attached to the in-menu iframe
		// (showChoiceMenu documentHtml=...). Banner is cleared by
		// Python as soon as the menu starts — once the user has
		// chosen to view it, the notification is consumed regardless
		// of how they dismiss the menu (Close, Esc, timeout).
		const data = this._receiptData;
		if (!data || !data.path) {
			this._clearBanner();
			return;
		}
		// Two lines: invoice source on top, click affordance below.
		// `\n` is converted to a <br> by _showBanner's two-line path.
		// Operator-aware first line — when Python supplies the
		// operator name we credit them ("Invoice from Menzies");
		// empty operator (jetway-only / custom-GPU-only Handling
		// invoice with no vehicle code to resolve) falls back to a
		// generic line.
		const operator = data.operator || "";
		const text = operator
			? `Invoice from ${operator}\nClick to view`
			: `Invoice available\nClick to view`;
		const onClick = () => {
			console.log("[GSX] receipt banner clicked — pulsing FSDT_GSX_RECEIPT_OPEN=1");
			SimVar.SetSimVarValue(SIMVAR_GSX_RECEIPT_OPEN, "number", 1);
		};
		this._showBanner(
			'gsx-receipt-banner',
			'gsx-receipt-message',
			text,
			null,
			onClick,
			data.logo);
	}

	_stopAllPolling()
	{
		this._clearInterval('_crashRetry');
		this._clearInterval('_heartbeatPoll');
		this._clearTimer('_fileRetryTimeout');
		this._clearTimer('_reloadTimeout');
		this._clearTimer('_loadingImageTimeout');
		this._clearTimer('_menuOpenPulseTimer');
		this._clearInterval('simBriefLoadingInterval');
		this._clearTimer('_pinnedIdleTimeout');
		this.stopContinuousMenuCheck();
		this._t9FontInstalled = false;
		// Tear down the in-menu document iframe so its src doesn't
		// keep a fetch alive against the just-closed panel.
		this._applyMenuDocument("");
		this._applyMenuHtml("");
		this._bootMessageReceived = false;
		this._lastDisplayedHb = undefined;
		this._heartbeatGraceStartedAt = undefined;
	}

	closePanel()
	{
		console.log("closePanel()");
		this._stopAllPolling();
		this.setMenuOpenVar(0);
		// Full notification clear (queue + timeout + visible) — same
		// reason as the toolbar-visibility path above: a tooltip in
		// flight at close would otherwise resume painting a sim-level
		// SHOW_TOOLTIP after the panel is gone via the still-running
		// setTimeout / showNextMessage chain.
		this._cancelNotification();
		Coherent.call("TOOLBAR_BUTTON_TOGGLE", "PANEL_FSDT_GSX_PANEL", false);
	}

	setMenuOpenVar(value)
	{
		console.log('setMenuOpenVar()' + value);
		SimVar.SetSimVarValue(SIMVAR_MENU_OPEN, "number", value);
	}

	setMenuChoiceVar(value)
	{
		console.log('setMenuChoiceVar()' + value);
		SimVar.SetSimVarValue(SIMVAR_MENU_CHOICE, "number", value);
	}

	// ─── Text-input bridge (counterpart to common/jsBridge.py) ──────
	// Strings cross the bridge as UTF-8 → base64 → 8-char chunks
	// packed as 48-bit integers (8 × 6 bits, comfortably under IEEE
	// 754's safe-integer limit) into a "string slot" of LVars:
	//   L:FSDT_GSX_<NAME>_LEN      number of base64 chars in payload
	//   L:FSDT_GSX_<NAME>_B0 …     8-char chunks
	// Plus a single L:FSDT_GSX_INPUT_STATE: 0=pending, 1=ready,
	// 2=cancel. Slot names, alphabet, chunk size MUST stay in sync
	// with the matching constants in common/jsBridge.py.

	static get B64_CHARS()    { return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; }
	// 4 base64 chars per chunk = 24 bits — fits in Float32 mantissa
	// so the chunk value round-trips through MSFS's LVar bridge
	// without precision loss. Must match common/jsBridge.py.
	static get CHARS_PER_CHUNK() { return 4; }
	static get REQ_MAX_CHUNKS()  { return 40; }
	static get RES_MAX_CHUNKS()  { return 22; }
	// Loading-progress-bar labels (Python → JS, write-once). Must
	// match common/jsBridge.py's _LOADING_LABELS_MAX_CHUNKS. The
	// labels themselves come from common/__init__.py STATUS_LABELS;
	// JS reads the slot lazily on first updateProgressBar and
	// caches the parsed array thereafter.
	static get LOADING_LABELS_MAX_CHUNKS() { return 145; }

	// Maximum UTF-8 byte budget for the user-typed result text.
	// base64 packs 3 raw bytes per 4 chars, so the slot's
	// (RES_MAX_CHUNKS * CHARS_PER_CHUNK) base64-char capacity
	// translates to 3/4 of that in raw UTF-8 bytes — 22*4*3/4 = 66.
	// Used by handleInputRequest to revert over-budget typing /
	// pastes before they can hit writeStringSlot's silent base64
	// truncation (which would otherwise leave a U+FFFD replacement
	// char on the Python side from a chopped multi-byte sequence).
	static get RES_MAX_BYTES()   { return IngamePanelGSX.RES_MAX_CHUNKS * IngamePanelGSX.CHARS_PER_CHUNK * 3 / 4; }
	static get INPUT_STATE_PENDING() { return 0; }
	static get INPUT_STATE_READY()   { return 1; }
	static get INPUT_STATE_CANCEL()  { return 2; }

	// UTF-8 byte length of a JS string. Uses the same
	// `unescape(encodeURIComponent(s))` byte-string trick that
	// writeStringSlot already uses for the wire encoding, so the
	// count exactly matches what the slot would store. TextEncoder
	// would also work in modern browsers, but Coherent's older
	// Chromium isn't guaranteed to have it; the encodeURIComponent
	// idiom has been valid since IE6 and is used elsewhere here.
	static utf8ByteLength(s)
	{
		// Optional catch binding (ES2019, `catch { ... }` without a
		// parameter) is rejected by Coherent's older Chromium with a
		// SyntaxError, so the unused parameter is required here.
		try        { return unescape(encodeURIComponent(String(s))).length; }
		catch (e)  { return String(s).length; }
	}

	// Read a string slot (LEN + chunks) → UTF-8 string.
	readStringSlot(name, maxChunks)
	{
		const length = Math.max(0, Math.min(
			SimVar.GetSimVarValue("L:FSDT_GSX_" + name + "_LEN", "Number") | 0,
			maxChunks * IngamePanelGSX.CHARS_PER_CHUNK));
		if (length === 0) return "";
		let chars = [];
		let remaining = length;
		for (let i = 0; i < maxChunks && remaining > 0; i++) {
			let value = SimVar.GetSimVarValue("L:FSDT_GSX_" + name + "_B" + i, "Number");
			const count = Math.min(remaining, IngamePanelGSX.CHARS_PER_CHUNK);
			for (let k = 0; k < count; k++) {
				// 6-bit slice (low char first). Use Math.floor + %
				// instead of bitwise so we don't truncate to 32 bits.
				const idx = Math.floor(value % 64);
				chars.push(IngamePanelGSX.B64_CHARS.charAt(idx));
				value = Math.floor(value / 64);
			}
			remaining -= count;
		}
		let b64 = chars.join("");
		while (b64.length % 4) b64 += "=";
		try {
			// base64 → binary string → UTF-8 (legacy escape/unescape
			// idiom; works without TextDecoder).
			return decodeURIComponent(escape(atob(b64)));
		} catch (e) {
			console.error("readStringSlot:", name, "decode failed:", e);
			return "";
		}
	}

	// Write UTF-8 string → base64 → chunks → LVars. Length set last
	// so a reader observing mid-write never sees garbage past LEN.
	writeStringSlot(name, text, maxChunks)
	{
		let b64;
		try {
			b64 = btoa(unescape(encodeURIComponent(text))).replace(/=+$/, "");
		} catch (e) {
			console.error("writeStringSlot:", name, "encode failed:", e);
			SimVar.SetSimVarValue("L:FSDT_GSX_" + name + "_LEN", "Number", 0);
			return;
		}
		const totalLen = Math.min(b64.length,
			maxChunks * IngamePanelGSX.CHARS_PER_CHUNK);
		for (let i = 0; i < maxChunks; i++) {
			let value = 0;
			for (let j = 0; j < IngamePanelGSX.CHARS_PER_CHUNK; j++) {
				const pos = i * IngamePanelGSX.CHARS_PER_CHUNK + j;
				if (pos >= totalLen) break;
				const idx = IngamePanelGSX.B64_CHARS.indexOf(b64.charAt(pos));
				if (idx < 0) continue;
				value += idx * Math.pow(64, j);
			}
			SimVar.SetSimVarValue("L:FSDT_GSX_" + name + "_B" + i, "Number", value);
		}
		SimVar.SetSimVarValue("L:FSDT_GSX_" + name + "_LEN", "Number", totalLen);
	}

	// Routes Enter / Escape to the active input prompt's OK / Cancel
	// callbacks while capturingInput is true. Called from both the main
	// keydown listener and its keypress companion (registered together
	// near the panelActive setup) — keypress because Enter is stripped
	// from keydown by MSFS's in-game-panel C++ pump, keydown because
	// the panel's existing hotkey/menu-choice handler already lives
	// there and folding in here keeps a single source of truth for
	// input-mode key routing. Callbacks are stashed on this instance
	// by handleInputRequest() and cleared by its cleanup() — when
	// they're absent we no-op so a stray event after cleanup doesn't
	// crash. cleanup() also flips capturingInput → false, so a duplicate
	// firing (keydown for Escape + keypress for Enter overlap) is
	// already gated by the listeners' if-checks.
	_handleInputModeKey(e)
	{
		const kc = e.keyCode;
		const key = e.key;
		if (kc === 13 || key === "Enter") {
			e.stopPropagation(); e.preventDefault();
			if (this._inputOK) this._inputOK();
		} else if (kc === 27 || key === "Escape") {
			e.stopPropagation(); e.preventDefault();
			if (this._inputCancel) this._inputCancel();
		}
	}

	_showMenuSearch()
	{
		// Reveal + focus the inline gate-search box. Reuses the same
		// input-capture machinery as the Save / Rename Location prompt:
		//   1. capturingInput=true gates the panel's window-level
		//      hotkey / 1-9 menu-choice handler so typed digits filter
		//      the list instead of selecting a menu option.
		//   2. FOCUS_INPUT_FIELD stops MSFS routing typed characters to
		//      sim key bindings (empty args so it doesn't pop the native
		//      input dialog — see handleInputRequest's note).
		//   3. _inputOK / _inputCancel give Enter / Escape meaning via
		//      _handleInputModeKey: Enter picks the top match, Escape
		//      cancels back to the gate menu.
		// The list below (#menuButtonsHost) refreshes live via
		// panelMenuLive; this box is a separate element so its focus /
		// caret / value survive every refresh.
		if (!this.menuSearch || !this.menuSearchInput) return;
		this.menuSearch.removeAttribute("hidden");
		this.menuSearchInput.value = "";
		// Reset the streaming channel so a stale query from a previous
		// search can't leak in before the first keystroke.
		this.writeStringSlot("SEARCH", "", IngamePanelGSX.RES_MAX_CHUNKS);
		this._searchGen = 0;
		SimVar.SetSimVarValue(SIMVAR_SEARCH_GEN, "Number", 0);
		this.capturingInput = true;
		this._inputOK = () => {
			// Enter selects the first match if there is one (data-c="0").
			const first = this.menuButtonsHost
				&& this.menuButtonsHost.querySelector('[data-c="0"]');
			if (first) this.closeWithChoice(0);
		};
		this._inputCancel = () => { this.closeWithChoice(CHOICE_CANCEL); };
		try {
			Coherent.trigger("FOCUS_INPUT_FIELD",
				"gsxMenuSearchInput", "", "", "", false /* isNumeric */);
		} catch (e) { /* not in scope */ }
		// Defer focus until after the box has painted.
		setTimeout(() => {
			try { this.menuSearchInput.focus(); this.menuSearchInput.select(); } catch (e) {}
		}, 0);
	}

	_hideMenuSearch()
	{
		// Tear down the gate-search box and release input capture.
		// Idempotent + guarded so the many close paths that call it
		// (SEARCH_END, closeWithChoice, hideMenu, showPinnedIdle) don't
		// clobber capturingInput when search wasn't the active surface.
		if (!this.menuSearch || this.menuSearch.hasAttribute("hidden")) return;
		this.menuSearch.setAttribute("hidden", "");
		this.menuSearchInput.value = "";
		// Wipe the query slot on close so the previous session's filter
		// can't leak into the next search before the box reopens and
		// clears it. Python also baselines the gen counter on reopen, so
		// this is belt-and-suspenders against the cross-process timing.
		this.writeStringSlot("SEARCH", "", IngamePanelGSX.RES_MAX_CHUNKS);
		this.capturingInput = false;
		this._inputOK = null;
		this._inputCancel = null;
		try {
			Coherent.trigger("UNFOCUS_INPUT_FIELD", "gsxMenuSearchInput");
		} catch (e) { /* not in scope */ }
	}

	handleInputRequest()
	{
		// Read the request from the INPUT_REQ slot. Wire format is a
		// newline-delimited record matching common/jsBridge.py:
		// title \n description \n defaultText \n maxLength
		const payload = this.readStringSlot("INPUT_REQ",
			IngamePanelGSX.REQ_MAX_CHUNKS) || "";
		const parts = payload.split('\n');
		const req = {
			title: parts[0] || "GSX",
			description: parts[1] || "",
			defaultText: parts[2] || "",
			maxLength: Math.max(1, Math.min(parseInt(parts[3] || "64", 10) || 64, 64)),
		};

		// Render the inline input section (lives inside #statusPage,
		// last child). The MSFS PopUp framework can't reach in-game-
		// panel iframes, so we render our own.
		const root  = document.getElementById("gsxInputSection");
		const title = document.getElementById("gsxInputTitle");
		const desc  = document.getElementById("gsxInputDesc");
		const input = document.getElementById("gsxInputText");
		const okBtn = document.getElementById("gsxInputOk");
		const cancelBtn = document.getElementById("gsxInputCancel");
		// `#brandCell` is the unified GSX-Menu / brand / hotkey-rebind
		// affordance (formerly #statusOpenMenuBtn inside #statusPage).
		// Hide it while the input prompt is active so the prompt has
		// the panel to itself.
		const menuBtn = document.getElementById("brandCell");
		// Other status-page children we hide while the input is up
		// so the prompt sits in a clean panel (airport / service cards
		// would just be visual noise during entry). #bottomBar holds
		// the static "Customize Airport / Settings / Restart Couatl /
		// Reload Simbrief" buttons + SimBrief / outdated banners —
		// also irrelevant while typing.
		const statusContent = document.getElementById("statusContent");
		const statusTooltip = document.getElementById("statusTooltip");
		const bottomBar    = document.getElementById("bottomBar");
		if (!root || !input) {
			console.error("handleInputRequest: input section elements missing in DOM");
			SimVar.SetSimVarValue("L:FSDT_GSX_INPUT_STATE", "Number",
				IngamePanelGSX.INPUT_STATE_CANCEL);
			return;
		}

		// In-menu document always loses against any other interaction
		// in this slot — the user has to respond to the input prompt
		// before continuing, and stacking the prompt on top of the
		// document iframe would leave both rendered awkwardly inside
		// the dynamic area. Dismiss the iframe cleanly so the input
		// section gets the page to itself.
		this._applyMenuDocument("");
		this._applyMenuHtml("");

		const reqTitle = GSX_ZH_CN.translateText(req.title);
		const reqDescription = GSX_ZH_CN.translateText(req.description);
		title.textContent = reqTitle;
		desc.textContent = reqDescription;
		input.maxLength = req.maxLength;
		input.value = req.defaultText;
		// Suppress the new-push-button shadow-DOM white-focus overlay
		// so the hover paints the deep blue gradient cleanly instead
		// of being washed out — same fix as #statusOpenMenuBtn (see
		// the comment block around line 686 above). Idempotent — a
		// no-op if the attribute is already set from a previous open.
		if (this.ms2024Mode) {
			okBtn.setAttribute("no-focus-white", "");
			cancelBtn.setAttribute("no-focus-white", "");
		}
		// Force the status page to be visible — the input section
		// lives inside #statusPage so it's only painted when that
		// view is active. In pinned mode this is the natural state;
		// when pinning is off we're temporarily showing the status
		// page just so the user has somewhere to type, and restore
		// the prior state in cleanup().
		const wasPinnedEffective = this.isPinnedEffective();
		this.showPinnedIdle();
		root.removeAttribute("hidden");
		// Hide the GSX Menu button while the input is active — its
		// slot is taken over by our OK / Cancel buttons.
		const menuBtnPrevDisplay = menuBtn ? menuBtn.style.display : null;
		if (menuBtn) menuBtn.style.display = "none";
		// Hide the airport-info header + service-progress cards too.
		// They keep updating in the background (Python keeps writing
		// the status file) but visually they'd just compete with the
		// input prompt for attention.
		const statusContentPrevDisplay = statusContent ? statusContent.style.display : null;
		const statusTooltipPrevDisplay = statusTooltip ? statusTooltip.style.display : null;
		const bottomBarPrevDisplay     = bottomBar    ? bottomBar.style.display    : null;
		if (statusContent) statusContent.style.display = "none";
		if (statusTooltip) statusTooltip.style.display = "none";
		if (bottomBar)     bottomBar.style.display     = "none";
		// Sentinel the global keydown handler checks before it acts
		// on the GSX hotkey or the 1-9/0 menu-choice keys — without
		// this, typing a digit in our input would also fire the
		// equivalent menu option from the previous menu page.
		this.capturingInput = true;
		// Tell MSFS we're in "input mode" so it stops firing sim key
		// bindings on typed characters. Match the pattern the SimBrief
		// dispatch toolbar panel uses (its FOCUS_EVENT handler):
		//
		//   Coherent.trigger("FOCUS_INPUT_FIELD", guid, "", "", "", false)
		//
		// Three things matter here:
		//   1. NO UINavigation calls (askGrabKeys / lockFocus /
		//      lockSearchButtonForDPad). Those belong to MSFS's bundled
		//      <ui-input> element (uiInput.js:30-43), which uses them
		//      to drive the native MSFS input dialog (the on-screen
		//      keyboard / value editor for controller users). That
		//      native dialog is what was stealing our arrow keys —
		//      arrows navigate inside *its* widget, not our DOM input.
		//   2. Empty strings for title / description / value. When you
		//      pass real strings, MSFS pops the native input dialog
		//      pre-filled with them. Empty strings = "just signal
		//      input mode, don't pop anything, leave my DOM input
		//      alone". SimBrief gets away with empty strings because
		//      the actual UI lives in an <iframe> with its own keyboard
		//      context; we don't have that luxury but the empty-args
		//      form is still what we want.
		//   3. capturingInput=true above already gates our panel's own
		//      hotkey / 1-9 handler, so we don't need askGrabKeys to
		//      protect against ourselves.
		try {
			Coherent.trigger("FOCUS_INPUT_FIELD",
				"gsxInputText", "", "", "", false /* isNumeric */);
		} catch (e) { /* not in scope */ }
		// Focus + select-all so the user can immediately overwrite the
		// pre-filled text. The setTimeout(0) defers until after the
		// browser has painted the section so .focus() works.
		setTimeout(() => { input.focus(); input.select(); }, 0);

		const cleanup = () => {
			this.capturingInput = false;
			// Drop the OK / Cancel callbacks the shared
			// _handleInputModeKey routes Enter / Escape into. After
			// cleanup any stray keypress / keydown event short-circuits
			// at the capturingInput gate, but null these too so a logic
			// bug elsewhere can't accidentally re-fire a stale callback.
			this._inputOK = null;
			this._inputCancel = null;
			root.setAttribute("hidden", "");
			if (menuBtn) menuBtn.style.display = menuBtnPrevDisplay || "";
			if (statusContent) statusContent.style.display = statusContentPrevDisplay || "";
			if (statusTooltip) statusTooltip.style.display = statusTooltipPrevDisplay || "";
			if (bottomBar)     bottomBar.style.display     = bottomBarPrevDisplay     || "";
			try {
				Coherent.trigger("UNFOCUS_INPUT_FIELD", "gsxInputText");
			} catch (e) { /* not in scope */ }
			okBtn.removeEventListener("click", onOK);
			cancelBtn.removeEventListener("click", onCancel);
			input.removeEventListener("keydown", onKey);
			input.removeEventListener("input", onInputBytes);
			// If we forced the status page on for the input but the
			// user normally has pinning disabled, hide the panel
			// again so the input doesn't leave a sticky status page
			// behind after submission/cancel.
			if (!wasPinnedEffective) this.hideMenu();
		};
		const onOK = () => {
			const text = input.value;
			cleanup();
			this.writeStringSlot("INPUT_RES", text != null ? String(text) : "",
				IngamePanelGSX.RES_MAX_CHUNKS);
			SimVar.SetSimVarValue("L:FSDT_GSX_INPUT_STATE", "Number",
				IngamePanelGSX.INPUT_STATE_READY);
		};
		const onCancel = () => {
			cleanup();
			SimVar.SetSimVarValue("L:FSDT_GSX_INPUT_STATE", "Number",
				IngamePanelGSX.INPUT_STATE_CANCEL);
		};
		const onKey = (e) => {
			// stopPropagation belt-and-braces so typed chars don't
			// bubble up to any sim-binding handler the panel might
			// install. Enter / Escape are routed by the shared
			// _handleInputModeKey via the panel's main keydown listener
			// (registered at construction time) and its keypress
			// companion — see the capturingInput branch in that handler.
			e.stopPropagation();
		};

		// Byte-budget guard. The slot can carry RES_MAX_BYTES (=66)
		// raw UTF-8 bytes; over that, writeStringSlot silently
		// truncates the base64 stream and the chopped UTF-8 sequence
		// decodes on the Python side as U+FFFD. The HTML maxLength
		// attribute alone is character-counted and so doesn't help
		// once the user types accented Latin (2 B/char), CJK (3) or
		// emoji (4) — 33 accented chars and they're already at the
		// budget. Revert to the last in-budget value on every input
		// event (covers typing, paste, IME composition, drag-drop)
		// so the user feels a hard stop at the boundary instead of
		// hitting OK and getting a silently-shortened name back.
		let lastValidValue = input.value;
		// Don't consult the just-pre-filled defaultText here — if it
		// somehow exceeds the budget (only possible if Python sent
		// pre-filled text > 66 B, which it never does today) the
		// user would otherwise be unable to edit at all. Trust the
		// initial paint; only enforce the budget on user changes.
		const onInputBytes = () => {
			if (IngamePanelGSX.utf8ByteLength(input.value) <= IngamePanelGSX.RES_MAX_BYTES) {
				lastValidValue = input.value;
				return;
			}
			// Snap back. Caret jumps to end of the restored value —
			// arrow-key cursor positioning isn't available in panel
			// inputs anyway (see NOTE below) so there's no better
			// place for it.
			input.value = lastValidValue;
		};
		// Hand the OK / Cancel callbacks off to the shared
		// _handleInputModeKey so the panel's existing window-level
		// keydown listener (and its keypress companion for Enter,
		// which MSFS strips from keydown) can trigger them when
		// capturingInput is true. Single source of truth for input-mode
		// key routing.
		this._inputOK = onOK;
		this._inputCancel = onCancel;
		// NOTE on arrow / Home / End keys: MSFS's C++ input pump
		// intercepts these at the OS message-pump level and never
		// dispatches them to the iframe's JS event loop — verified
		// with capture-phase listeners on both window AND document
		// that fire for typed chars but not for arrows. This is the
		// same reason MSFS's own <ui-input> (uiInput.js) doesn't
		// support arrow caret navigation either. There is no JS-level
		// fix. To re-position the caret the user must click into the
		// field at the desired offset; to edit existing text they can
		// backspace from the end. Enter / Escape and typed characters
		// all still work.
		okBtn.addEventListener("click", onOK);
		cancelBtn.addEventListener("click", onCancel);
		input.addEventListener("keydown", onKey);
		input.addEventListener("input", onInputBytes);
	}
	
	_setSimBriefStatus(text)
	{
		const localizedStatus = GSX_ZH_CN.translateText(text || "");
		// Single setter for the SimBrief status detail. Writes the
		// text into the in-button .simbrief-status span, then
		// schedules an overflow check next frame — when the span's
		// scrollHeight / scrollWidth exceeds its clamp the button
		// gets a `title` attribute so the CSS hover tooltip
		// surfaces the full text. The +1 px tolerance absorbs
		// Coherent's older Chromium sub-pixel rounding.
		const value = localizedStatus;
		if (this.simBriefStatusSpan) {
			this.simBriefStatusSpan.textContent = value;
		}
		if (!this.simBriefBtn || !this.simBriefStatusSpan) return;
		const btn = this.simBriefBtn;
		const span = this.simBriefStatusSpan;
		if (!value) {
			btn.removeAttribute("title");
			return;
		}
		requestAnimationFrame(() => {
			// Status span is now multi-line capped (2 lines via
			// max-height + overflow: hidden) — detect overflow on
			// EITHER axis: width overflow happens when a single
			// long un-breakable token exceeds the column,
			// height overflow happens when wrapped text exceeds
			// the 2-line cap. +1 px tolerance for sub-pixel
			// rounding in Coherent's older Chromium fork.
			const overflowed = span.scrollHeight > span.clientHeight + 1
							|| span.scrollWidth > span.clientWidth + 1;
			if (overflowed) {
				btn.setAttribute("title", value);
			} else {
				btn.removeAttribute("title");
			}
		});
	}

	startSimBriefLoadingAnimation()
	{
		// Clear any existing interval
		this.stopSimBriefLoadingAnimation();
		
		let dotCount = 1;
		this.simBriefLoadingInterval = setInterval(() => {
			if (this.simBriefBtnLabel && this.simBriefSuccess == 0) {
				const dots = '.'.repeat(dotCount);
				this.simBriefBtnLabel.textContent = SIMBRIEF_LOADING_TEXT + dots;
				dotCount = (dotCount % 3) + 1; // Cycle 1, 2, 3
			} else {
				// Stop animation if button is gone or status changed
				this.stopSimBriefLoadingAnimation();
			}
		}, 500); // Update every 500ms
	}
	
	stopSimBriefLoadingAnimation()
	{
		if (this.simBriefLoadingInterval) {
			clearInterval(this.simBriefLoadingInterval);
			this.simBriefLoadingInterval = null;
		}
	}

	// Common scaffolding for "Python is about to exit and a new
	// instance will start" UX: drop straight to a loading screen
	// with the supplied label, mark _restartingMenu so crash-UI
	// detection stays quiet, kill the heartbeat poll so it doesn't
	// surface "engine dead" before checkMenu takes over, then
	// watchdog the COUATL_STARTED transition to re-enter checkMenu
	// against the fresh process. Used by:
	//   - the in-menu "Restart GSX" choice (closeWithChoice path)
	//   - the hotfix banner click (out-of-menu path)
	// Both flows hit the same Python exit semantics (clean shutdown,
	// boot-side re-launch) so the JS reaction is identical.
	_enterRestartingState(loadingText)
	{
		// Re-entry guard. Two trigger paths converge here:
		//   1. JS-initiated restart via
		//      closeWithChoice(CHOICE_CONTEXT_CLOSE_RESTART_ENGINE)
		//      (file-load timeout). It calls us, sets MENU_CHOICE=13,
		//      and Python then runs quitAndRestartPy, which ALSO
		//      pulses EXTERNAL_SYSTEM_TOGGLE_RESTARTING.
		//   2. Python-initiated restart via the settings-dialog
		//      "Restart Couatl" button / RESTART_COUATL menu
		//      command — quitAndRestartPy fires the RESTARTING
		//      K-event before its wait(2000) so we hear about it
		//      while the old engine is still alive.
		// Without this guard, path 1 calls us once and path 2 fires
		// us again ~immediately, leaving TWO setInterval watchdogs
		// in flight and double-firing checkMenu() when
		// COUATL_STARTED finally drops. The state is idempotent
		// either way (showLoadingMenu just resets the same UI bits)
		// — early-return to avoid the extra watchdog.
		if (this._restartingMenu) {
			console.log("_enterRestartingState() skipped — already in restarting state");
			return;
		}
		// Wipe startup-progress LVars before the new Python instance
		// starts writing — mirrors the connectedCallback clear.
		this._clearAllStartupProgress();
		// Drop the cached progress-bar labels so the new instance's
		// STATUS_LABELS (which it republishes to the LOADING_LABELS
		// slot at jsBridge module load) gets re-read on the first
		// updateProgressBar of the new session. Without this, a
		// label-list change across a restart would be invisible
		// until the panel is fully reloaded.
		this._progressLabels = null;
		// Force MENU_OPEN to 0 now so the new Python instance sees a
		// 0→1 transition when checkMenu later sends setMenuOpenVar(1).
		// Python's menuOpen callback uses changed=True — if MENU_OPEN
		// was already 1 (which it can be when triggered from an open
		// menu), sending 1 again is a no-op and the new instance
		// never rebuilds its menu, leaving JS stuck on the single-
		// line placeholder written by clearMenuEntries.
		this.setMenuOpenVar(0);
		// Flag used by showLoadingMenu (overrides text on its own
		// restart messaging) and by the fileLoaded/heartbeat-poll
		// crash checks so the stale dying-engine heartbeat doesn't
		// surface crash UI during a deliberate restart. Cleared in
		// showMenu() when a real menu is finally on screen (covers
		// both fileLoaded.success and the continuous-check fallback
		// path). A 30s safety timer clears it anyway so a stuck
		// restart falls back to normal UX.
		this._restartingMenu = true;
		this._clearTimer('_restartingMenuTimeout');
		this._restartingMenuTimeout = setTimeout(() => {
			this._restartingMenuTimeout = null;
			this._restartingMenu = false;
		}, 30000);
		// Stop the menu's heartbeat poll immediately. Otherwise it
		// fires within HEARTBEAT_POLL_INTERVAL_MS, sees the dying
		// old engine's heartbeat as stuck, and surfaces the crash
		// UI before checkMenu's _stopAllPolling can take over.
		if (this._heartbeatPoll) {
			clearInterval(this._heartbeatPoll);
			this._heartbeatPoll = null;
		}
		this.showLoadingMenu(loadingText);
		// Watchdog: wait for COUATL_ALIVE to drop to 0 — proof
		// the old Couatl process has actually shut down (cleanup()
		// writes 0 right at the top, before SimConnect_Close).
		// Only THEN hand off to checkMenu, which will wait for
		// COUATL_ALIVE=1 from the new process. Without this gate,
		// checkMenu would observe the OLD process's ALIVE=1 and
		// immediately send MENU_REQUEST against an engine that's
		// about to die, racing the menu file write.
		//
		// 10 s safety cap — covers the edge case where cleanup()
		// crashes before the ALIVE=0 write lands (Couatl killed
		// hard via the watchdog) and we'd never observe the
		// transition. checkMenu's own wait-for-ALIVE=1 covers the
		// rest of the boot.
		let waited = 0;
		const watchdog = setInterval(() => {
			waited += 200;
			const alive = SimVar.GetSimVarValue(SIMVAR_GSX_COUATL_ALIVE, "number");
			if (alive === 0 || waited > 10000) {
				clearInterval(watchdog);
				this.checkMenu();
			}
		}, 200);
	}

	// `restartMessage` overrides the loading-screen text for the
	// CHOICE_CONTEXT_CLOSE_RESTART_ENGINE branch only. The restart itself is
	// identical; what differs is WHY the user asked for it, and "Restarting
	// GSX" tells someone who just clicked "apply the update" nothing about
	// whether their update is being applied. Optional so all twelve existing
	// callers keep the generic wording.
	closeWithChoice(choice, restartMessage)
	{
		// Any menu choice (result pick, Back, Escape-cancel) ends a live
		// gate search — drop the search box + release input capture
		// before processing the choice. No-op when search isn't open.
		this._hideMenuSearch();
		if (choice == CHOICE_CONTEXT_CLOSE_RESTART_ENGINE)
		{
			// GSX restart: don't transition to status page or hide the
			// menu. Send the choice (Python triggers quitAndRestartPy)
			// and keep the loading screen up. We can't simply call
			// checkMenu() right away — the old Python instance lingers
			// for ~2s in wait(2000) before exiting and would happily
			// answer our MENU_CHOICE=-2 with the existing menu, briefly
			// flashing options on top of the loading screen. Instead,
			// poll for COUATL_STARTED to drop to 0 (the dying engine
			// finally went away) and only THEN re-enter checkMenu, so
			// the cold-start retry loop reattaches to the fresh process.
			// A 10s safety cap proceeds anyway in case the simvar
			// transition is missed.
			this.setMenuChoiceVar(choice);
			this._enterRestartingState(restartMessage || "Restarting GSX, please wait...");
			return;
		}
		if (choice == CHOICE_SIMBRIEF_RELOAD)
		{
			// Clear the status FIRST, before any visual updates
			this.simBriefSuccess = 0;

			// Also set the SimVar to 0 immediately so it persists through menu reload
			SimVar.SetSimVarValue(SIMVAR_SIMBRIEF_SUCCESS, "number", 0);

			// Update button immediately to show loading state
			if (this.simBriefBtn) {
				this.simBriefBtn.style.background = "#505050"; // Dark grey
				this.simBriefBtn.style.color = "#FFFFFF";
				if (this.simBriefBtnLabel) {
					this.simBriefBtnLabel.textContent = SIMBRIEF_LOADING_TEXT + '.';
				}
				this._setSimBriefStatus("");
			}

			// Start the loading animation
			this.startSimBriefLoadingAnimation();

			// Send choice directly — don't set MENU_OPEN (which would cancel the
			// Python receiver via -3) and don't hide the menu. Python loops on ext
			// choices so the menu stays alive for the next service selection.
			this.setMenuChoiceVar(choice);
		}
		else if (choice == CHOICE_SETTINGS)
		{
			// GSX Settings (button13): Python responds with
			// EXTERNAL_SYSTEM_TOGGLE_OPEN_SETTINGS which flips
			// ``body.settingsActive`` on and renders the schema HTML
			// into #settingsPage. That worked in pinned mode (panel
			// stays visible there by default), but the non-pinned
			// classic path used to fall through to the final `else`
			// below and call hideMenu(), which sets
			// ``ingameUi.style.display = "none"``. reloadSettings
			// would then paint the settings surface into a
			// display:none host and the user saw nothing happen.
			// Keep the panel visible and let OPEN_SETTINGS drive
			// the surface switch — the ``body.settingsActive`` CSS
			// cascade hides every other #dynamicArea child, so the
			// open menu's buttons stay out of the way regardless
			// of pinned mode.
			this.setMenuChoiceVar(choice);
		}
		else if (this.isPinnedEffective())
		{
			// Pinned: emit the choice exactly as before (3rd-party
			// automations observing MENU_CHOICE see identical values).
			// Delay the drop to the status page — if Python writes a
			// follow-up menu (sub-menu / back-nav) within the delay,
			// showMenu() will cancel the timer and render the new menu
			// in-place, avoiding the "GSX Menu" button flash. The
			// dynamic-area CSS flex layout keeps the panel from
			// resizing during the wait.
			//
			// For positive choices (the user picked an option, so a
			// sub-menu response is expected) extend the fallback to
			// 1500 ms. Python's sub-menu generation occasionally
			// exceeds the 500 ms PINNED_IDLE_DELAY_MS budget on
			// heavier menus (operator picker, MARS-aware gate menu,
			// etc.), and the original timer fired showPinnedIdle in
			// that window — painting the status page on top of the
			// previous menu until the new K-event arrived. 1500 ms
			// covers the typical upper tail without pushing the
			// fallback so far out that a truly stuck Python feels
			// unresponsive. Negative choices (cancel/close) keep the
			// original 500 ms snappy close-to-status path.
			this.setMenuChoiceVar(choice);
			this._clearTimer('_pinnedIdleTimeout');
			const idleDelay = choice >= 0 ? 1500 : PINNED_IDLE_DELAY_MS;
			this._pinnedIdleTimeout = setTimeout(() => {
				this._pinnedIdleTimeout = null;
				this.showPinnedIdle();
			}, idleDelay);
		}
		else if (choice < 0)
		{
			this._classicHide();
		}
		else
		{
			this.setMenuChoiceVar(choice);
			this.hideMenu();
		}
	}

	updateProgressBar() {
		// Labels come from Python's STATUS_LABELS via the
		// LOADING_LABELS jsBridge slot (common/jsBridge.py writes it
		// once at module load). Pull lazily and cache — the slot
		// content is static for the whole session, so subsequent
		// updateProgressBar ticks pay nothing. readStringSlot bails
		// after a single SimVar read when LEN is 0, so the (rare)
		// case where Python hasn't yet written the slot just costs
		// one cheap read per tick until it lands.
		if (!this._progressLabels) {
			const raw = this.readStringSlot("LOADING_LABELS",
				IngamePanelGSX.LOADING_LABELS_MAX_CHUNKS);
			if (raw) this._progressLabels = raw.split("\n");
		}

		// Get-or-create the bars container — lazily, on the first
		// tick where any step has actually started. Without this,
		// entering the loading screen with no active step would
		// build an empty container; harmless but pointless. Start
		// the container hidden via the existing display:none on
		// loadingPrompt and reveal it as soon as we add a row.
		let container = this.loadingPrompt.querySelector(".progress-bars");

		// ALIVE guard: when no engine is running, any STATUS_*
		// LVars are stale data from a previous run — bars would
		// resurrect for an engine that no longer exists. Sweep
		// any leftover container out and bail. _updateLoadingText
		// already wipes loadingPrompt on the 1→0 transition via
		// showLoadingMenu, but on a tray-bar Quit the first
		// updateProgressBar tick can fire before _updateLoadingText
		// runs (and on every subsequent tick while ALIVE=0 the
		// stale LVars would re-create the bars unless we re-clear
		// them here every tick).
		const alive = SimVar.GetSimVarValue(SIMVAR_GSX_COUATL_ALIVE, "number");
		if (alive <= 0) {
			if (container) {
				this.loadingPrompt.innerHTML = "";
				this.loadingPrompt.classList.remove("has-progress");
				this.loadingPrompt.style.display = "none";
			}
			return;
		}

		// On-demand row creation: walk every status index, and
		// for each one with a non-zero LVar that doesn't yet have
		// a row, append a fresh row in index order at the bottom.
		// Steps that haven't been touched stay invisible; the bar
		// list grows naturally as Python's startup progresses
		// through the steps. The first non-zero write Python emits
		// for a step is guaranteed to be at least 1 (see
		// setCouatlStartedStatusVar's first-touch clamp), so
		// "step N starting" calls produce a 1 % bar instead of
		// staying invisible at LVar=0.
		for (let i = 1; i < STATUS_STEP_COUNT; i++) {
			const lvar = `L:FSDT_GSX_COUATL_STARTED_${i}_PROGRESS`;
			let progress = SimVar.GetSimVarValue(lvar, "number");
			progress = Math.min(Math.max(progress, 0), 100);

			let row = container && container.querySelector(
				`.progress-row[data-status-index="${i}"]`);

			if (!row) {
				// Skip indices that haven't reported progress yet —
				// no row appears for them until their LVar bumps.
				if (progress <= 0) continue;

				// First sign of life for this step — build the
				// container (if not yet) and the row.
				if (!container) {
					this.loadingPrompt.innerHTML = "";
					container = document.createElement("div");
					container.className = "progress-bars";
					this.loadingPrompt.appendChild(container);
					// Tell CSS the prompt hosts progress bars so it
					// can flex appropriately. Cleared when
					// showLoadingMenu overwrites loadingPrompt's
					// content for the next session.
					this.loadingPrompt.classList.add("has-progress");
					this.loadingPrompt.style.display = "initial";
					if (this.loadingImage) this.loadingImage.style.display = "none";
				}
				row = document.createElement("div");
				row.className = "progress-row";
				row.dataset.statusIndex = i;
				const label = document.createElement("div");
				label.className = "progress-label";
				// Prefer the Python-supplied label; fall back to a
				// generic placeholder if the slot hasn't been
				// received yet (won't happen in practice — Python
				// publishes the slot at jsBridge module load, well
				// before any progress LVar can be > 0 — but be
				// defensive).
				label.textContent = (this._progressLabels && this._progressLabels[i]) || "Loading";
				const track = document.createElement("div");
				track.className = "progress-track";
				const fill = document.createElement("div");
				fill.className = "progress-fill";
				track.appendChild(fill);
				const pct = document.createElement("div");
				pct.className = "progress-percent";
				pct.textContent = "0%";
				row.appendChild(label);
				row.appendChild(track);
				row.appendChild(pct);
				container.appendChild(row);
			}

			// Update fill / percent. Once a row reaches 100 it
			// locks: a later setCouatlStartedStatusVar(N) no-arg
			// call from a re-entered code path would write 0 — the
			// monotonic guard below (and the .done class) keeps
			// the bar from regressing visually.
			const fill = row.querySelector(".progress-fill");
			const pct = row.querySelector(".progress-percent");
			if (fill.classList.contains("done")) continue;
			const shown = parseFloat(row.dataset.shown || "0");
			if (progress < shown) continue;
			row.dataset.shown = progress;
			fill.style.width = progress + "%";
			if (progress >= 100) {
				fill.classList.add("done");
				pct.textContent = "Done";
			} else {
				pct.textContent = progress.toFixed(0) + "%";
			}
		}

		// Defensive: while bars are on screen, the spinner is
		// redundant — the bars themselves are the activity
		// indicator. The container-creation block above hides the
		// spinner once on first-row materialisation, but other
		// code paths can re-show it AFTER bars exist (e.g., the
		// 3 s lazy-show timer in _updateLoadingText firing right
		// as the first bar lands, or _updateLoadingText getting
		// re-entered for an ALIVE wobble while bars are visible).
		// Re-hide on every tick while bars exist. The gate on
		// `container` keeps us from flashing the spinner off
		// during the fresh-restart window between "engine boot,
		// no LVar yet" (container still null — restart messaging
		// expects spinner visible) and "first step starting".
		if (container && this.loadingImage
			&& this.loadingImage.style.display !== "none") {
			this.loadingImage.style.display = "none";
		}
	}

	_tryShowBootMessage(text)
	{
		let firstLine = (text || "").split("\n")[0].replace(/\r/g, "").trim();
		if (firstLine.startsWith(BOOT_MSG_PREFIX))
		{
			let msg = firstLine.substring(BOOT_MSG_PREFIX.length);
			this.showLoadingMenu(msg);
			// Messages ending with "..." indicate progress (show spinner).
			// Final messages (no "...") hide the spinner — nothing more will happen.
			if (this.loadingImage)
				this.loadingImage.style.display = msg.endsWith("...") ? "initial" : "none";
			this._bootMessageReceived = true;
			return true;
		}
		return false;
	}

	_showCrashMessage()
	{
		console.log("GSX heartbeat stale — checking engine status.");
		this._stopAllPolling();
		this.setMenuOpenVar(0);
		this.setMenuChoiceVar(CHOICE_IDLE);
		this.currentTextLines = null;
		this.nEntries = 0;
		this.reloadAttempts = 0;

		// Clear all startup-progress LVars so any value we read during the
		// recovery poll is fresh writes from the restarting engine — not
		// stale data from the previous run. Without this, a dead engine
		// would still read non-zero progress and fool the "sign of life"
		// check below.
		this._clearAllStartupProgress();

		// Check menu file first — the C# restarter may have already written
		// a specific message (e.g., "closed by user"). Only show generic crash
		// message if no boot message is found after a brief wait.
		let checksRemaining = 5; // Check every 1s for 5 seconds before showing crash msg
		const checkForBootFirst = () =>
		{
			// FSDT-82: shared advance for "file has no boot message"
			// AND "file unreadable" (the steady state on retail
			// MSFS2024 / Xbox, where ./menu is unreachable — without
			// the failure path this check would stall forever and the
			// generic crash message would never appear).
			const noBootMessage = () =>
			{
				checksRemaining--;
				if (checksRemaining > 0)
				{
					setTimeout(checkForBootFirst, 1000);
				}
				else
				{
					// No boot message after 5s — show generic crash message
					this.showLoadingMenu("GSX engine has stopped. Waiting for auto-restart...");
					this._startCrashRecoveryPoll();
				}
			};
			loadFileNoCache("./menu", (responseText) =>
			{
				if (this._tryShowBootMessage(responseText))
				{
					this._startCrashRecoveryPoll();
					return;
				}
				noBootMessage();
			}, undefined, this, noBootMessage);
		};
		checkForBootFirst();
	}

	_anyStartupProgress()
	{
		// True if any FSDT_GSX_COUATL_STARTED_N_PROGRESS is > 0. We zero
		// those on crash detection, so any positive reading here means
		// the restarted engine has written a progress step — proof it is
		// alive, even before the heartbeat starts pulsing (the watchdog
		// tasklet only spins up after GSX.onAppStart completes, and
		// model-cache rebuilds can delay that by minutes).
		for (let i = 0; i < STATUS_STEP_COUNT; i++) {
			const p = SimVar.GetSimVarValue(`L:FSDT_GSX_COUATL_STARTED_${i}_PROGRESS`, "number");
			if (p > 0) return true;
		}
		return false;
	}

	_startCrashRecoveryPoll()
	{
		this._clearInterval('_crashRetry');
		this._crashLastHb = undefined;
		let crashPollCount = 0;
		this._crashRetry = setInterval(() =>
		{
			crashPollCount++;
			// Surface startup-progress bars as soon as the restarting
			// engine starts writing its STATUS_* LVars. The watchdog
			// heartbeat only resumes after the full boot sequence, so
			// without this the user would stare at a blank "engine has
			// stopped" screen for the entire restart.
			const anyProgress = this._anyStartupProgress();
			if (anyProgress) this.updateProgressBar();

			let hb = SimVar.GetSimVarValue(SIMVAR_GSX_HEARTBEAT, "number");
			if (this._crashLastHb !== undefined && hb !== this._crashLastHb && hb > 0)
			{
				clearInterval(this._crashRetry);
				this._crashRetry = null;
				this._crashLastHb = undefined;
				console.log("GSX heartbeat resumed, re-entering checkMenu.");
				// Route through checkMenu (not reloadMenu) so the
				// wait-for-COUATL_STARTED + progress-bar pipeline runs
				// end-to-end. reloadMenu would immediately fetch a
				// not-yet-written menu and drop into its own retry
				// loop without surfacing the remaining startup phases.
				this.checkMenu();
				return;
			}
			this._crashLastHb = hb;
			// Only show "manually start Couatl" if we have no sign
			// of life after 30 s: no boot message, no heartbeat,
			// and no startup-status progress. A model-cache rebuild
			// (or any slow startup phase) writes the STATUS_* LVars
			// long before the heartbeat resumes — telling the user
			// to start Couatl while the restarter is actively
			// running would be wrong. FSDT-82: also runs on fetch
			// FAILURE — on retail MSFS2024 / Xbox ./menu is
			// unreachable, and without this the "start Couatl"
			// prompt could never appear.
			const noSignOfLife = () =>
			{
				if (crashPollCount >= 30 && !anyProgress)
				{
					this.showLoadingMenu(COUATL_NOT_RUNNING_MSG);
					if (this.loadingImage) this.loadingImage.style.display = "none";
				}
			};
			loadFileNoCache("./menu", (responseText) =>
			{
				if (this._tryShowBootMessage(responseText)) return;
				noSignOfLife();
			}, undefined, this, noSignOfLife);
		}, 1000);
	}

	checkMenu()
	{
		this._stopAllPolling();
		this.reloadAttempts = 0;
		this._crashLastHb = undefined;
		// Reset the menu-request gate so this fresh checkMenu cycle
		// re-sends MENU_OPEN=1 / MENU_CHOICE=REQUEST_MENU even if the
		// previous cycle's request didn't land (Python wasn't yet
		// subscribed, SimConnect write was racy, panel hotkey-toggle
		// flipped state and Python lost track). Without this reset,
		// _heartbeatGraceStartedAt stays set from a prior cycle and
		// the guard inside checkCouatlAlive would skip resending —
		// leaving the panel stuck on the loading-bars view forever.
		this._heartbeatGraceStartedAt = undefined;
		this._lastMenuPulseAt = undefined;
		this._continueCheckMenu();
	}

	// Pick the loading-screen text + spinner state from the current
	// ALIVE LVar / _restartingMenu flag. Called once on
	// _continueCheckMenu entry and again every time the polling
	// loop observes an ALIVE transition, so the panel's displayed
	// message tracks engine state in real time without anyone
	// needing to coordinate.
	//
	// Three states:
	//   * _restartingMenu=true  → "Restarting GSX, please wait..."
	//                             + spinner immediately. Survives
	//                             until showMenu() clears the flag.
	//   * ALIVE > 0             → "Loading GSX Menu, please wait..."
	//                             + spinner (lazy 3 s — most
	//                             panel-open cases finish faster
	//                             than that and a flash would
	//                             be visual noise).
	//   * ALIVE = 0             → COUATL_NOT_RUNNING_MSG, NO spinner.
	//                             This is now the resting / idle
	//                             state of the panel: if Couatl
	//                             isn't running, the panel tells
	//                             the user how to start it and
	//                             waits — no timeout, no critical
	//                             error fallback.
	_updateLoadingText()
	{
		this._clearTimer('_loadingImageTimeout');
		if (this._restartingMenu) {
			this.showLoadingMenu("Restarting GSX, please wait...");
			if (this.loadingImage) this.loadingImage.style.display = "initial";
			return;
		}
		const alive = SimVar.GetSimVarValue(SIMVAR_GSX_COUATL_ALIVE, "number");
		if (alive > 0) {
			this.showLoadingMenu("Loading GSX Menu, please wait...");
			// Lazy spinner-on after 3 s — fast loads finish before
			// the spinner ever shows, avoiding a visual flash.
			// If the first progress bar has already materialised by
			// the time the timer fires, the spinner stays hidden —
			// updateProgressBar adds .has-progress to loadingPrompt
			// the moment it creates the bars container, and from
			// that point onward the bars themselves are the visible
			// "we're working" indicator. Without this guard the
			// spinner would re-appear on top of the bars 3 s in.
			if (this.loadingImage) this.loadingImage.style.display = "none";
			this._loadingImageTimeout = setTimeout(() => {
				this._loadingImageTimeout = null;
				const barsShown = this.loadingPrompt
					&& this.loadingPrompt.classList.contains("has-progress");
				if (this.isLoading && this.loadingImage && !barsShown)
					this.loadingImage.style.display = "initial";
			}, 3000);
		} else {
			this.showLoadingMenu(COUATL_NOT_RUNNING_MSG);
			if (this.loadingImage) this.loadingImage.style.display = "none";
		}
	}

	_continueCheckMenu()
	{
		// Engine-driven flow with ALIVE-tracking displayed text:
		//
		//   ALIVE = 0  →  "GSX engine is not running..." (idle).
		//                 Panel sits here indefinitely waiting for
		//                 the user to start Couatl. No timeout —
		//                 this is the resting state, not a fault.
		//
		//   ALIVE = 1  →  "Loading GSX Menu, please wait..." +
		//                 spinner. Send MENU_REQUEST, wait for
		//                 RELOAD_MENU K-event from Python. Single
		//                 path triggers reloadMenu — no blind
		//                 fallback that could race onto a stale
		//                 menu file.
		//
		//   TIMEOUT_MS counts ONLY while ALIVE=1 — covers "engine
		//   alive but completely unresponsive" but never fires for
		//   the legitimate "Couatl just isn't running" idle case.
		//
		//   HEARTBEAT_START_GRACE_MS catches the orthogonal failure
		//   "ALIVE=1 but HEARTBEAT never pulses" (Couatl reached
		//   SimConnect_Open then crashed before its watchdog
		//   tasklet started). Crash UI surfaces from that branch.
		let elapsedTime = 0;
		const checkInterval = RETRY_INTERVAL_MS;
		this._lastAliveObserved = undefined;
		this._updateLoadingText();

		const sendMenuRequest = () =>
		{
			if (!this.isLoading) return;
			console.log("checkMenu: Couatl alive, sending MENU_REQUEST.");
			// Note: _completeAllProgressBars used to fire here as
			// a "everything done" snapshot before requesting the
			// menu, but (a) showMenu hides loadingPrompt outright
			// the moment the menu lands so the snapshot was never
			// actually visible, and (b) the 3 s TOCTOU re-pulse
			// below re-fires sendMenuRequest, so any row that
			// happened to have non-zero dataset.shown (e.g. the
			// eager init bar's JS-side ticker after a few seconds)
			// would get marked Done permanently — the per-tick
			// fill-update path skips rows with the .done class.
			// Use _pulseMenuOpen rather than a direct
			// setMenuOpenVar(1): MENU_OPEN may already be 1 from a
			// prior cycle's write (Python could have missed it
			// because its menuOpenCheck subscription wasn't
			// registered yet), and Python subscribes with
			// changed=True so a 1→1 no-op write is invisible to
			// it. The pulse forces a clean 0→150ms→1 transition
			// that Python's subscription is guaranteed to fire on
			// once GSX.onAppStart hits its requestDataPeriodic
			// registration. Also writes MENU_CHOICE=REQUEST_MENU
			// inside the same call.
			this._pulseMenuOpen();
			// No blind fallback reloadMenu — wait for Python's
			// RELOAD_MENU K-event, which guarantees the file is
			// ready. If it never arrives, the loading screen stays
			// up (with the progress bars + last-log-line readout,
			// so the user can see what's happening) until the
			// heartbeat-watchdog in checkCouatlAlive trips on the
			// "no heartbeat within grace period" branch and
			// surfaces the crash UI.
		};

		const checkCouatlAlive = () =>
		{
			if (!this.isLoading) return;

			const alive = SimVar.GetSimVarValue(SIMVAR_GSX_COUATL_ALIVE, "number");

			// Refresh the loading-screen text the moment ALIVE
			// changes state, so the panel switches between
			// "GSX engine is not running..." and "Loading GSX
			// Menu..." (with spinner) within one polling tick.
			// Runs BEFORE updateProgressBar so the showLoadingMenu
			// wipe inside _updateLoadingText doesn't erase the bar
			// container that updateProgressBar is about to create
			// — otherwise the eager "Initializing Couatl" row
			// flashes off for 100 ms on every ALIVE 0→1 edge.
			if (this._lastAliveObserved !== alive) {
				// Real 0→1 edge — engine just started up. Zero out
				// every STATUS_*_PROGRESS LVar so the eager init
				// row (and any other row pre-created from leftover
				// values) doesn't start at "Done"/100 % from the
				// previous run's terminal state. Gated on the
				// previous observation being literally 0 so the
				// initial-observation path (undefined → 1, panel
				// opened mid-boot with bars legitimately in
				// progress) doesn't wipe live data.
				if (this._lastAliveObserved === 0 && alive > 0) {
					this._clearAllStartupProgress();
				}
				this._lastAliveObserved = alive;
				this._updateLoadingText();
			}

			// Keep the progress bars live while we wait — they're
			// the user's diagnostic if boot stalls.
			// updateProgressBar bails cheaply when no progress
			// LVar has been written yet (on-demand row creation),
			// and the eager initializing row's JS-side wall-clock
			// ticker keeps moving even before Python's writes
			// start landing.
			this.updateProgressBar();

			if (alive > 0) {
				// First time we see ALIVE=1 in this cycle (or the
				// first time after a 1→0→1 wobble), arm the
				// heartbeat-grace timer AND send the menu request.
				// _heartbeatGraceStartedAt also serves as our
				// "first menu request already sent" flag —
				// clearing it in the else-branch below means a
				// later 0→1 transition will re-send cleanly.
				const now = Date.now();
				if (this._heartbeatGraceStartedAt === undefined) {
					this._heartbeatGraceStartedAt = now;
					this._lastMenuPulseAt = now;
					sendMenuRequest();
				} else if (now - this._lastMenuPulseAt > 3000) {
					// TOCTOU re-pulse. Python's GSX.onAppStart does:
					//   self.menuOpen(USER.requestData(ddefOpen))   # read NOW
					//   self.menuOpenCheck = USER.requestDataPeriodic(
					//       ddefOpen, ..., changed=True, callback=...)
					// If our first 0→150ms→1 pulse straddles those
					// two lines (Python reads 0, then subscribes,
					// then 1 arrives but the subscription's
					// changed=True doesn't fire on the initial-sync
					// frame), Python sits forever on MENU_OPEN=1
					// without firing menuOpen. Re-pulsing every
					// 3 s after the first attempt forces a fresh
					// 0→1 transition that the now-active
					// subscription cannot miss.
					this._lastMenuPulseAt = now;
					console.log("checkMenu: re-pulsing MENU_REQUEST "
						+ "(Python's subscription may have missed the first one).");
					sendMenuRequest();
				}

				// Crash detection during the post-ALIVE pre-menu
				// window: engine claims to be reachable but might
				// have crashed before GSX's watchdog tasklet
				// started pulsing HEARTBEAT. If HEARTBEAT stays at
				// 0 past HEARTBEAT_START_GRACE_MS, surface the
				// crash UI. (The "HEARTBEAT was ticking and
				// stopped" case is handled by the heartbeat-poll
				// started in showMenu.)
				const hb = SimVar.GetSimVarValue(SIMVAR_GSX_HEARTBEAT, "number");
				if (hb <= 0
					&& now - this._heartbeatGraceStartedAt > HEARTBEAT_START_GRACE_MS)
				{
					console.log("checkMenu: COUATL_ALIVE=1 but HEARTBEAT stayed at 0 for "
						+ HEARTBEAT_START_GRACE_MS + " ms — engine crashed.");
					this._showCrashMessage();
					return;
				}

				// TIMEOUT_MS only ticks while ALIVE=1 — covers the
				// "engine is up, heartbeat fine, but the menu file
				// never arrives" stuck case. ALIVE=0 is the idle
				// resting state and accumulates no timeout (the
				// branch below resets the counter so a subsequent
				// 0→1 transition starts fresh).
				elapsedTime += checkInterval;
				if (elapsedTime >= TIMEOUT_MS)
				{
					this.setMenuOpenVar(0);
					this.setMenuChoiceVar(CHOICE_IDLE);
					const criticalMsg = "Couatl Scripting Engine hasn't started within the expected time.";
					console.log(criticalMsg);
					this._notifyCritical(criticalMsg, COUATL_START_FAILURE_MSG_DURATION_S)
						.then(() => this.closePanel());
					return;
				}
			} else {
				// ALIVE=0 — Couatl not up. This is the resting
				// state; the panel sits here indefinitely with
				// "GSX engine is not running..." visible until the
				// user starts Couatl again. Clear grace + timeout
				// so the next 0→1 transition re-arms everything
				// cleanly.
				this._heartbeatGraceStartedAt = undefined;
				elapsedTime = 0;
			}

			setTimeout(checkCouatlAlive, checkInterval);
		};
		checkCouatlAlive();
	}

	isMenuContentDefault(textLines)
	{
		return textLines[0].trim().toLowerCase() === DEFAULT_MENU_SUBTITLE_INDICATOR
	}

	// ==== FSDT-82: CommBus surface transport (MSFS2024 WASM, PC + Xbox) ====
	//
	// On MSFS2024 the GSX engine (fsdreamteam-couatlwasm) and this panel
	// (fsdreamteam-gsx-pro) are separate packages: the menu/tooltip/
	// status/... files Python writes into couatlwasm's /work dir are
	// unreachable from this panel's fetch() on retail PCs (Marketplace
	// LocalCache) and on Xbox — the dev-only workaround was per-file
	// symlinks. Python therefore DUAL-PUBLISHES every file surface over
	// fsCommBus (common/panelBus.py): same bytes, one envelope event.
	//
	// Design: the K-event/LVar machinery stays the TRIGGER layer
	// (unchanged, Xbox-safe); the bus replaces only the CONTENT
	// channel. We enter "bus mode" on the first message we RECEIVE
	// (never on merely sending HELLO — an old engine that doesn't
	// publish must leave the file transport in charge). From then on
	// every reloadX() consults _busCache instead of fetching, and
	// pushed surfaces also apply directly (guarded by seq) so a K-vs-
	// bus delivery race can't pin stale content.
	//
	// Wire protocol (WASM -> JS, event FSDT_GSX_SURFACE):
	//   { v: 1, boot: <int>, seq: <int>, surface: "<name>", data: {...} }
	// boot = Python interpreter-run id — a new boot resets the seq
	// baseline (Restart Interpreter). seq = global monotonic per boot;
	// drop stale/duplicate deliveries (connectedCallback can register
	// twice; Python replays surfaces on resync).
	// JS -> WASM: FSDT_GSX_PANEL_HELLO (2 s retry until first receipt)
	// -> Python answers FSDT_GSX_PANEL_ACK and re-publishes its cached
	// resync-able surfaces (status/menu_live/menu_document/
	// menu_buttons), covering messages lost before this listener
	// registered (CommBus has no queue/replay). Ephemeral surfaces
	// (menu/tooltip/settings) are deliberately NOT replayed.

	_initCommBus()
	{
		// connectedCallback fires more than once — double registration
		// would double-apply every surface (observed in the Phase-0
		// spike as a duplicated echo).
		if (this._busInit) return;
		this._busInit = true;
		this._busMode = false;
		this._busBoot = 0;
		this._busLastSeq = {};
		this._busCache = {};
		// Raw JS_LISTENER_COMM_BUS registration — empirically proven
		// to receive cross-package (Phase-0 spike; same pattern as the
		// CodeMirror panel and html_ui/js/services/commbus.js).
		const listener = RegisterViewListener('JS_LISTENER_COMM_BUS', () => {
			console.log("CommBus transport: listener ready");
			this._busListener = listener;
			listener.on('FSDT_GSX_SURFACE', (d) => this._onBusSurface(d));
			listener.on('FSDT_GSX_PANEL_ACK', (d) => {
				console.log("CommBus transport: engine ACK");
				this._enterBusMode();
			});
			this._startBusHello();
		});
	}

	_startBusHello()
	{
		// Retry until the first received message flips _busMode — the
		// engine may register its HELLO listener seconds after this
		// panel loads (cold boot) or much later (manual start, engine
		// restart while the element persists). Cheap: one tiny string
		// every 2 s, self-cancelling on bus-mode entry. On legacy
		// (MSFS2020) nothing ever answers and the ticker just idles.
		this._clearInterval('_busHelloTimer');
		const hello = () => {
			if (this._busMode) { this._clearInterval('_busHelloTimer'); return; }
			this._busListener.call("COMM_BUS_WASM_CALLBACK", "FSDT_GSX_PANEL_HELLO",
				JSON.stringify({ v: 1, panel: "FSDT_GSX_Panel" }));
		};
		hello();
		this._busHelloTimer = setInterval(hello, 2000);
	}

	_enterBusMode()
	{
		if (this._busMode) return;
		this._busMode = true;
		console.log("CommBus transport: bus mode ACTIVE (file fetches disabled)");
		this._clearInterval('_busHelloTimer');
		// The file-fetch safety nets are dead weight now — a menu will
		// never arrive by file on this install.
		this._clearTimer('_reloadTimeout');
		this.stopContinuousMenuCheck();
	}

	_onBusSurface(raw)
	{
		let msg = raw;
		try {
			if (typeof raw === 'string')
				// The CommBus wire can append a trailing NUL (observed
				// in the Phase-0 spike: rxLength = sent + 1) — strip
				// it or JSON.parse throws.
				msg = JSON.parse(raw.replace(/\0+$/, ''));
		} catch (err) {
			console.error("CommBus transport: bad SURFACE payload:", err);
			return;
		}
		if (!msg || msg.v !== 1 || !msg.surface) return; // future protocol — ignore
		if (msg.boot !== this._busBoot) {
			// New interpreter run (Restart Interpreter / engine
			// restart): reset the staleness baseline.
			this._busBoot = msg.boot;
			this._busLastSeq = {};
		} else if (msg.seq <= (this._busLastSeq[msg.surface] || 0)) {
			return; // stale duplicate (double listener, resync replay)
		}
		this._busLastSeq[msg.surface] = msg.seq;
		const surface = msg.surface;
		const data = msg.data || {};
		const localizedData = GSX_ZH_CN.translateSurface(surface, data);
		this._busCache[surface] = localizedData;
		this._enterBusMode();
		// Contain per-surface render exceptions — one bad payload must
		// not kill the listener callback (and with it every subsequent
		// surface delivery).
		try {
			this._applyBusSurface(surface, localizedData);
		} catch (e) {
			console.error("CommBus transport: applying '" + msg.surface + "' threw:", e);
		}
	}

	_applyBusSurface(surface, data)
	{
		switch (surface)
		{
			case 'menu': {
				const text = (typeof data.text === 'string') ? data.text : "";
				const lines = text.split("\n");
				// A cleared menu ("\n" from clearMenuEntries) or a
				// placeholder is NOT rendered from here — hiding is
				// driven by the HIDE_MENU/FORCE_CLOSE K-events exactly
				// as on the file transport (where the cleared file is
				// never fetched). Feeding it to fileLoaded would enter
				// its not-ready retry loop and re-nudge MENU_OPEN.
				if (lines.length - 1 < 2 || this.isMenuContentDefault(lines)) break;
				// Same guard reloadMenu wraps around fileLoaded — a
				// thrown DOM op must not strand isLoading=true. The
				// retry is a re-apply of this same payload.
				this._clearTimer('_reloadTimeout');
				try {
					this.fileLoaded(text);
				} catch (err) {
					console.error("CommBus menu apply threw — retrying once:", err);
					this._clearTimer('_fileRetryTimeout');
					this._fileRetryTimeout = setTimeout(() => {
						this._fileRetryTimeout = null;
						try { this.fileLoaded(text); }
						catch (e2) { console.error("CommBus menu re-apply failed:", e2); }
					}, RETRY_INTERVAL_MS);
				}
				break;
			}
			case 'tooltip':
				// The EXTERNAL_SYSTEM_SET K-event still fires (its
				// remote-control and cancel semantics are untouched)
				// but its reloadTooltip fetch is gated in bus mode —
				// the payload arrives here with the timeout inline.
				this.remoteControl = SimVar.GetSimVarValue(SIMVAR_REMOTE_CONTROL, "number");
				if (this.remoteControl != 0) break;
				this.tooltipLoaded(data.text || "", data.timeout);
				break;
			case 'status':
				this._applyStatusHtml(data.html || "");
				break;
			case 'menu_live':
				this._applyMenuLiveHtml(data.html || "");
				break;
			case 'menu_document':
			case 'menu_buttons':
				// Cache-only: these always precede their menu (Python
				// publishes them BEFORE the menu text), and the menu
				// render consumes them from _busCache via
				// _fetchMenuDocument/_fetchMenuHtml. Applying here
				// would paint the NEXT menu's rich layout under the
				// CURRENT menu for a frame.
				break;
			case 'settings':
				this._applySettingsHtml(data.html || "");
				break;
			default:
				// Newer Python publishing a surface this panel doesn't
				// know — cached above, otherwise ignored.
				break;
		}
	}

	reloadMenu()
	{
		console.log("reloadMenu()");

		// Show loading message only if not already in loading state
		// (avoids overwriting C# restarter messages during retries)
		// AND only if the K-event handler hasn't already armed the
		// deferred-loading-screen timer — that path defers the
		// spinner by 120 ms so sub-frame menu transitions stay
		// flicker-free; firing showLoadingMenu directly here would
		// defeat that. Boot / retry callers of reloadMenu reach this
		// without arming the timer, so they still get the immediate
		// spinner they need.
		if (!this.isLoading && !this._pendingLoadingScreen)
			this.showLoadingMenu("Loading GSX Menu, please wait...");

		// FSDT-82: bus mode — the menu content lives in _busCache (the
		// push already applied it in most cases; this path serves the
		// K-event/retry callers). No fetch, no slot: the bus payload
		// is authoritative. With no cached menu yet (panel recreated
		// mid-session), leave the loading screen up — the engine's
		// menuOpen flow re-publishes in response to our MENU_OPEN
		// request and the push renders it.
		if (this._busMode) {
			const d = this._busCache['menu'];
			const text = (d && typeof d.text === 'string') ? d.text : "";
			const lines = text.split("\n");
			if (lines.length - 1 >= 2 && !this.isMenuContentDefault(lines)) {
				try { this.fileLoaded(text); }
				catch (err) { console.error("CommBus reloadMenu re-apply threw:", err); }
			}
			return;
		}

		// Fast path: MENU_TEXT slot. Python writes the same bytes the
		// ./menu file holds whenever it publishes a new menu, so when
		// the slot is non-empty we can skip the ~73 ms async fetch
		// entirely and feed fileLoaded directly. The slot is empty
		// in two windows:
		//   - Cold boot: GSX engine isn't running yet, only the C#
		//     auto-restarter is writing #BOOT# messages to the file.
		//   - First-ever panel open after a fresh install with no
		//     menu yet published.
		// Both cases drop through to the file-fetch fallback below
		// (which is also where the timeout safety net + retry loop
		// live, so the slow-startup path is unchanged).
		const slotText = this.readStringSlot("MENU_TEXT", MENU_TEXT_MAX_CHUNKS);
		if (slotText) {
			try {
				this.fileLoaded(slotText);
			} catch (err) {
				console.error("fileLoaded threw on slot path — scheduling retry:", err);
				this.reloadAttempts++;
				if (this.reloadAttempts < MAX_RETRY_ATTEMPTS) {
					this._clearTimer('_fileRetryTimeout');
					this._fileRetryTimeout = setTimeout(() => {
						this._fileRetryTimeout = null;
						this.reloadMenu();
					}, RETRY_INTERVAL_MS);
				} else {
					this.showLoadingMenu("Failed to load GSX Menu. Please wait, it might appear later...");
					this.setupContinuousMenuCheck();
				}
			}
			return;
		}

		this._clearTimer('_reloadTimeout');
		this._reloadTimeout = setTimeout(() =>
		{
			this._reloadTimeout = null;
			let timeoutMsg = "Menu reload timed out. Please wait, it might appear later...";
			console.log(timeoutMsg);
			this._notify(timeoutMsg, MENU_RELOAD_TIMEOUT_MSG_DURATION_S);
			this.setupContinuousMenuCheck(); // Set up continuous check instead of closing
		}, TIMEOUT_MS);

		loadFileNoCache("./menu", (responseText, value) =>
		{
			this._clearTimer('_reloadTimeout');
			// Wrap fileLoaded so a thrown exception inside the callback
			// chain (fileLoaded → updateMenuItems → showMenu) doesn't
			// get silently swallowed by loadFileNoCache's outer
			// try/catch (which logs as a "Network error" and never
			// retries). Without this guard, a single flaky DOM
			// op leaves isLoading=true with no recovery path —
			// historically the most likely cause of the random
			// "stuck on Loading GSX Menu" reports.
			try {
				this.fileLoaded(responseText);
			} catch (err) {
				console.error("fileLoaded threw — scheduling retry:", err);
				this.reloadAttempts++;
				if (this.reloadAttempts < MAX_RETRY_ATTEMPTS) {
					this._clearTimer('_fileRetryTimeout');
					this._fileRetryTimeout = setTimeout(() => {
						this._fileRetryTimeout = null;
						this.reloadMenu();
					}, RETRY_INTERVAL_MS);
				} else {
					this.showLoadingMenu("Failed to load GSX Menu. Please wait, it might appear later...");
					this.setupContinuousMenuCheck();
				}
			}
		}, undefined, this);
	}

	fileLoaded(text)
	{
		const textLines = text.split("\n");
		this.nEntries = textLines.length - 1;
		this.currentTextLines = textLines; // Store for showMenu to use
		console.log("fileLoaded() nEntries=" + this.nEntries + " first=" + JSON.stringify((textLines[0] || "").substring(0, 60)));

		if (this.nEntries < 2 || this.isMenuContentDefault(textLines))
		{
			// Check for C# auto-restarter messages (prefixed with #BOOT#)
			if (this._tryShowBootMessage(text))
			{
				// Restarter is handling things — don't increment retry counter,
				// just schedule another check at a reasonable rate
				this._clearTimer('_fileRetryTimeout');
				this._fileRetryTimeout = setTimeout(() => {
					this._fileRetryTimeout = null;
					this.reloadMenu();
				}, 1000);
				return;
			}
			else if (this._bootMessageReceived)
			{
				// Boot message was showing but file is now cleared — GSX is starting.
				// Restart the whole menu check flow.
				this.checkMenu();
				return;
			}

			// Crash detection during retries was REMOVED here. The check
			// produced false positives during boot — SimConnect's frame
			// thread coalesces/defers LVar writes while flushing terrain
			// and static-object load work, so the heartbeat can appear
			// frozen for several seconds at a stretch even though the
			// watchdog tasklet (truewait-driven, real-time) keeps pulsing
			// on the Python side. Increasing the stuck-sample threshold
			// (1, 2, ...) only delayed the false-fire without eliminating
			// it. heartbeatPoll (in showMenu) handles all post-display
			// crash detection at a 10 s threshold, which absorbs boot
			// flush stalls cleanly.
			//
			// The remaining edge case — engine genuinely hung at
			// heartbeat>0 *before* the menu has ever shown — is rare and
			// recoverable: the user sees "Loading GSX Menu..." stuck and
			// can manually restart from the Addon Manager. Surfacing
			// false-positive crash UI on every boot was strictly worse
			// than no detection in this niche case.

			console.log("fileLoaded() - Menu not ready yet, retrying " + this.reloadAttempts);
			this.reloadAttempts++;
	
			if (this.reloadAttempts < MAX_RETRY_ATTEMPTS)
			{ // Limit attempts based on global timeout
				this._clearTimer('_fileRetryTimeout');
				this._fileRetryTimeout = setTimeout(() =>
				{
					this._fileRetryTimeout = null;
					// Re-signal backend on early retries via an explicit
					// 0→1 pulse so Python's `changed=True` subscription
					// catches the transition even if it raced with subscribe-
					// time (notably during a restart, where the new instance
					// reads MENU_OPEN once at line 2731 before subscribing
					// at line 2732 — a value already at 1 would miss).
					//
					// Coalescing note: RETRY_INTERVAL_MS (100ms) is shorter
					// than the pulse off-window (150ms), so back-to-back
					// early retries' calls to _pulseMenuOpen cancel each
					// other's pending "on" and effectively produce a single
					// rate-limited 0→1 cycle once retries quiesce. That's
					// the desired behavior — one guaranteed transition is
					// enough for Python to fire the subscriber, and avoiding
					// extra flapping keeps cold-start traffic light. The
					// reloadAttempts <= 3 cap remains as a belt-and-braces
					// guard.
					if (this.reloadAttempts <= 3) {
						this._pulseMenuOpen();
					}
					this.reloadMenu();
				}, RETRY_INTERVAL_MS); // Use the global retry interval
			}
			else
			{
				let msg = "Failed to load GSX Menu. Please wait, it might appear later...";
				console.log(msg);
				this.showLoadingMenu(msg);
				this.setupContinuousMenuCheck();
			}
		}
		else
		{
			this.reloadAttempts = 0;
			// Menu loaded successfully — cancel the deferred
			// loading-screen arm from the K-event handler so the
			// spinner never flashes for sub-120 ms transitions.
			// The "not ready yet, retrying" branch above intentionally
			// leaves the timer alive: if the retry sequence drags on
			// past 120 ms the user still gets feedback. Only the
			// successful path here suppresses the spinner.
			if (this._pendingLoadingScreen) {
				clearTimeout(this._pendingLoadingScreen);
				this._pendingLoadingScreen = null;
			}
			// Menu loaded — engine is alive. The heartbeat-poll started
			// in showMenu handles ongoing crash detection (both
			// "heartbeat stopped after starting" and "heartbeat never
			// started within HEARTBEAT_START_GRACE_MS of ALIVE=1").
			// Always run updateMenuItems: the per-button `_lastHtml`
			// and `onclick` guards skip the expensive DOM writes when
			// nothing changed, but the title-refresh at the top of
			// updateMenuItems must run every time — showPinnedIdle
			// overrides pagePrompt to "GSX Status", and a byte-
			// identical menu text on re-open still needs the title
			// restored.
			this.updateMenuItems(this.currentTextLines);
			this.showMenu();
			// Pull both companion attachments Python publishes
			// alongside `menu` on every menu show:
			//   menu_document.html (file) → read-only iframe ABOVE
			//     the button stack (price-list, invoice viewer).
			//   MENU_HTML LVar slot → rich-interactive shadow-DOM
			//     surface that REPLACES the numbered buttons (T9
			//     service grid, operator thumbnails). Hides
			//     #dynamicButtons when populated.
			// Both are always overwritten by Python per menu show
			// (file or slot, respectively) so a previous menu's
			// content doesn't leak into one that didn't ask for it.
			this._fetchMenuDocument();
			this._fetchMenuHtml();
		}
	}

	_fetchMenuDocument()
	{
		// Fast-path sync check first: Python sets
		// L:FSDT_GSX_MENU_DOC_PRESENT to 0 whenever the menu has no
		// document attached (the bulk of menu transitions — the
		// document iframe is only used for receipts / price lists /
		// invoices). A 0 lets us skip the ~73 ms async
		// `loadFileNoCache` round-trip entirely and just call
		// _applyMenuDocument("") so any prior document is cleared.
		// The Python side still writes the placeholder file every
		// menu show (layout.json size constraint — see
		// _writeMirror docstring), but we don't need to fetch it
		// just to read "no content".
		if (!(SimVar.GetSimVarValue(SIMVAR_MENU_DOC_PRESENT, "Number") | 0))
		{
			this._applyMenuDocument("");
			return;
		}
		// FSDT-82: bus mode — the document HTML was pushed BEFORE the
		// menu that carries it (Python publishes menu_document ahead
		// of the menu text precisely so this cache read is current at
		// render time). Rendered via srcdoc: no file URL exists on
		// retail PC / Xbox.
		if (this._busMode) {
			const d = this._busCache['menu_document'];
			this._applyMenuDocument(d ? (d.html || "") : "", true);
			return;
		}
		// Python rewrites the mirror file (MENU_DOCUMENT_PATH) on
		// every menu show via YouControl.showChoiceMenu's
		// panelDocument._writeMirror call — non-empty HTML when the
		// menu carries an attached document, empty content otherwise.
		// We fetch once to peek at the size: empty body means "no
		// document, hide the iframe"; non-empty means "show the
		// iframe", and we point its src at the same file with a
		// cache-bust query so the iframe load picks up the fresh
		// content instead of a stale browser cache. The double
		// fetch (this peek + iframe load) is negligible against the
		// menu-reload cadence and lets us carry the show/hide
		// signal in the same file as the content, no separate
		// metadata side-file in the package layout.
		// loadFileNoCache only invokes the success callback on
		// response.ok, so a fetch failure here (panel loaded before
		// any menu has ever been shown, transient FS hiccup) leaves
		// the iframe's prior hidden state untouched — which is the
		// safe default since the element is hidden in the HTML.
		loadFileNoCache(MENU_DOCUMENT_PATH, (responseText) =>
		{
			this._applyMenuDocument(responseText || "");
		}, undefined, this);
	}

	_applyMenuDocument(content, viaBus)
	{
		content = GSX_ZH_CN.translateHtmlPayload(content);
		if (!this.menuDocumentFrame) return;
		// Full-page document mode: Python marks a document that should
		// own the whole panel (the WASM "View Log" page) with
		// GSX_DOC_FULLPAGE. body.docFullActive then blanks the menu
		// rows / bottom bar and lets the iframe fill #dynamicArea —
		// same shape as body.settingsActive. Marker lives inside the
		// HTML so it needs no transport change and can't desync from
		// the content it describes.
		const isFullPage = this._hasRenderableContent(content)
			&& content.indexOf("GSX_DOC_FULLPAGE") !== -1;
		document.body.classList.toggle("docFullActive", isFullPage);
		if (this._hasRenderableContent(content)) {
			if (viaBus) {
				// FSDT-82: bus payloads carry the document HTML itself —
				// there is no file URL to point src at on retail PC /
				// Xbox, so render inline via srcdoc. Caveat: srcdoc has
				// no location.hash, so the template's `#keepLogo` opt-
				// out (see the src path below) doesn't apply — the
				// legacy auto-hide-letterhead script may hide the logo
				// on overflowing invoices. Cosmetic; revisit by embedding
				// the opt-out in the template itself if it bothers.
				this.menuDocumentFrame.srcdoc = content;
				this.menuDocumentFrame.hidden = false;
				// Full-page mode sizes the iframe from the CSS flex
				// cascade; the content-measuring pass would overwrite
				// that with a fixed pixel height.
				if (!isFullPage) this._sizeMenuDocumentIframe();
				return;
			}
			// (Previously: hid the SimBrief bottom-bar button while
			// the document iframe was up, to free vertical real
			// estate. That fight for space is gone now — the iframe
			// height is computed by _sizeMenuDocumentIframe against
			// the pinned #dynamicArea, which doesn't reach into the
			// bottom-bar — so the SimBrief button can stay visible
			// across every menu state.)
			// (Previously: propagated --gsx-panel-scale into the iframe
			// document on load so its font-size calcs could read it.
			// Removed — the iframe CSS now uses vw-based arithmetic
			// directly (e.g. `calc(38vw / 9.32)`), which resolves
			// against the iframe's own viewport at paint time. No
			// JS handoff needed, and the iframe text scales LIVE as
			// the panel widens.)
			// Cache-bust the src so successive menus that update the
			// mirror file content (e.g. every price-list operator
			// switch rewrites it) actually reload the document
			// instead of showing the previous content.
			// `#keepLogo` opts out of the inline auto-hide-letterhead
			// script in common/billing/template.py — that script was
			// sized for the legacy fixed-320 px iframe and would hide
			// the operator logo whenever an invoice overflowed. The
			// iframe is now sized by _sizeMenuDocumentIframe against
			// the pinned #dynamicArea, so it's taller and the logo
			// has room to render; but for invoices that still spill
			// past the iframe height, hiding the logo reads as a
			// missing asset rather than a graceful degradation.
			// Keeping the logo visible matches the "Open in browser"
			// view and is what the user expects to see in the panel.
			// A previously-set srcdoc (bus path above) overrides src —
			// clear it so this file-URL assignment takes effect.
			this.menuDocumentFrame.removeAttribute("srcdoc");
			this.menuDocumentFrame.src = MENU_DOCUMENT_PATH + "?t=" + Date.now() + "#keepLogo";
			this.menuDocumentFrame.hidden = false;
			// Iframe height is computed by measuring whatever is
			// actually rendered below (rich menu #menuButtonsHost OR
			// classic #dynamicButtons — depending on the menu) so the
			// buttons sit flush above the brand band regardless of
			// their per-row height. See _sizeMenuDocumentIframe.
			this._sizeMenuDocumentIframe();
		} else {
			this.menuDocumentFrame.hidden = true;
			// srcdoc overrides src — remove it or the hidden iframe
			// keeps the old bus-delivered document alive (and the next
			// src assignment would silently not render).
			this.menuDocumentFrame.removeAttribute("srcdoc");
			this.menuDocumentFrame.src = "about:blank";
			this.menuDocumentFrame.style.height = "";
		}
	}

	_fetchMenuHtml()
	{
		// FSDT-82: bus mode — the rich-buttons HTML was pushed BEFORE
		// the menu that carries it; the bus cache is authoritative
		// (no 2800-byte slot threshold on this transport). Empty =
		// classic numbered stack, same as an empty slot.
		if (this._busMode) {
			const d = this._busCache['menu_buttons'];
			this._applyMenuHtml(d ? (d.html || "") : "");
			return;
		}
		// Try the LVar slot first — the synchronous SimVar read is
		// the fast path used by every menu whose rich layout fits
		// in the ~3 KB slot capacity (T9 service menu with stock-
		// folder icon URLs, simple row lists without embedded
		// images, etc.). readStringSlot bails on LEN=0 without
		// touching the chunks, so the empty-slot case is cheap.
		const slotContent = this.readStringSlot("MENU_HTML", MENU_HTML_MAX_CHUNKS) || "";
		if (this._hasRenderableContent(slotContent)) {
			this._applyMenuHtml(slotContent);
			return;
		}
		// Slot is empty / placeholder — Python may have routed a
		// large payload (rich operator picker with data-URI logos)
		// through the file transport instead. Fetch the companion
		// file; loadFileNoCache invokes the callback only on
		// response.ok, so a 404 (file missing in the package
		// layout, transient FS hiccup) leaves the panel in the
		// classic numbered-button stack — same degraded state as
		// an empty slot would produce.
		loadFileNoCache(MENU_BUTTONS_PATH, (responseText) =>
		{
			this._applyMenuHtml(responseText || "");
		}, undefined, this);
	}

	_sizeMenuDocumentIframe()
	{
		// Re-size the menu-document iframe so the visible buttons
		// below it sit flush above the brand band (no dead space
		// between buttons and brand, no panel overflow that would
		// push the brand and bottom-bar down). Measures the actual
		// rendered height of whichever container holds the buttons
		// for this menu — rich row-list (#menuButtonsHost) for menus
		// that emit menuHtml, classic stack (#dynamicButtons) for
		// the rest — so the formula stays correct even when row /
		// button heights don't match a hard-coded per-entry constant.
		// Call after each menu render (both _applyMenuDocument and
		// _applyMenuHtml) so the iframe re-fits when EITHER the
		// document content OR the buttons below change.
		const ifr = this.menuDocumentFrame;
		if (!ifr || ifr.hidden) return;
		const da = document.getElementById("dynamicArea");
		const br = document.getElementById("brandCell");
		if (!da || !br) return;
		// Defer one frame so freshly-mounted innerHTML in
		// menuButtonsHost / dynamicButtons has finished laying out
		// before we read offsetHeight.
		requestAnimationFrame(() => {
			if (!ifr || ifr.hidden) return;
			const mbh = this.menuButtonsHost;
			const db  = this.dynamicButtons;
			// `offsetParent !== null` filters out elements with
			// `display: none` (their height isn't real).
			const mbhH = mbh && mbh.offsetParent !== null ? mbh.offsetHeight : 0;
			const dbH  = db  && db.offsetParent  !== null ? db.offsetHeight  : 0;
			const buttonsH = mbhH + dbH;
			const brH      = br.offsetHeight;
			// The panel scale is width-fit (the CSS --gsx-u unit is
			// 1vw / 9.32), so body.clientWidth / 932 is exactly the
			// current design-px scale. _lastAppliedScale is dormant
			// (the JS scaler is retired and never publishes) but is
			// honored if a future build ever sets it, keeping the
			// two paths consistent.
			const scale = this._lastAppliedScale > 0
				? this._lastAppliedScale
				: ((document.body ? document.body.clientWidth : 0) / 932) || 0.5;
			// Matches the CSS #dynamicArea min-height formula
			// (842 design px). If that CSS pin is ever changed,
			// update here too.
			const pin = scale * 842;
			// Iframe footprint = its height + border (2) + margin-
			// bottom (6) = height + 8 px.
			const IFRAME_OVERHEAD_PX = 8;
			// Fill the leftover space in the pinned dynamic area —
			// but no further than the design-px cap: the old
			// fill-everything behavior stretched the document window
			// until the buttons + brand band sat flush against the
			// bottom with no breathing room. The leftover slack
			// (when the cap wins) lands between the buttons and the
			// bottom-anchored brand band.
			const target = pin - buttonsH - brH - IFRAME_OVERHEAD_PX;
			const clamped = Math.max(
				MENU_DOC_IFRAME_MIN_DESIGN_PX * scale,
				Math.min(target, MENU_DOC_IFRAME_MAX_DESIGN_PX * scale));
			ifr.style.height = Math.round(clamped) + "px";
		});
	}


	_applyMenuHtml(content)
	{
		content = GSX_ZH_CN.translateHtmlPayload(content);
		if (!this.menuButtonsHost || !this.dynamicButtons) return;
		if (this._hasRenderableContent(content)) {
			// Rich layout takes over the dynamic area: mount the
			// cell HTML onto the host and hide the classic
			// numbered button stack. One innerHTML write per menu
			// show — no iframe document parse, no shadow root.
			this.menuButtonsHost.innerHTML = content;
			// Fill in keycap placeholders with the same inline
			// SVG renderKeycapSvg produces for the GSX Menu
			// button's hotkey display — single rendering path,
			// single visual language for every keycap surface
			// in the panel. Python writes
			// `<span class="gk" data-k="N"></span>` (minified to keep
			// per cell; here we replace each one's innerHTML with
			// the SVG. renderKeycapSvg caches by (label, textSize,
			// textY) internally so 10 cells × digit labels hit its
			// cache for free.
			// Use the option-cap text proportions (textSize: 75,
			// textY: 82) rather than the default GSX-Menu hotkey
			// calibration (50, 74) — the T9 cell keycap is much
			// smaller than the GSX-Menu hotkey display, and at
			// that scale the default 50/116.7 text ratio reads as
			// too thin. Same option-cap calibration the panel's
			// own `optionCap` rendering already uses.
			// Numeric-key selection disabled in Settings > UI: leave the
			// keycap placeholders empty — the digit badges would promise a
			// key behavior the keydown handler (same LVar) no longer performs.
			const numKeysOff = SimVar.GetSimVarValue(SIMVAR_MENU_NUMKEYS, "number") == MENU_NUMKEYS_DISABLED;
			const caps = this.menuButtonsHost.querySelectorAll("[data-k]");
			const capOpts = { textSize: 75, textY: 82 };
			for (let i = 0; i < caps.length; i++) {
				const label = caps[i].getAttribute("data-k");
				caps[i].innerHTML = numKeysOff ? "" : this.renderKeycapSvg(label, capOpts);
			}
			this.menuButtonsHost.hidden = false;
			this.dynamicButtons.style.display = "none";
			// Strip the `title` attribute from buttons whose visible
			// label fits in the cell — otherwise the CSS hover
			// tooltip (`.gsx-btn[title]:hover::after`) would show a
			// duplicate of the already-visible text. Defer to next
			// frame so the browser has finished laying out the freshly
			// mounted innerHTML and scrollHeight/scrollWidth reflect
			// the real overflow state. The +1 tolerance absorbs the
			// sub-pixel rounding Coherent's older Chromium adds when
			// comparing scroll/client dimensions of inline-styled
			// flex children.
			requestAnimationFrame(() => {
				const buttons = this.menuButtonsHost.querySelectorAll(".gsx-btn[title]");
				for (let i = 0; i < buttons.length; i++) {
					const btn = buttons[i];
					const lbl = btn.querySelector(".gl");
					if (!lbl) continue;
					const overflowed = lbl.scrollHeight > lbl.clientHeight + 1
									|| lbl.scrollWidth > lbl.clientWidth + 1;
					if (!overflowed) {
						btn.removeAttribute("title");
					}
				}
			});
			// Rich menu height just changed — if a document iframe
			// is currently showing, re-fit it so the new menu
			// content sits flush above the brand. _sizeMenuDocumentIframe
			// is a no-op when no iframe is visible.
			this._sizeMenuDocumentIframe();
		} else {
			// Restore the classic layout — clear the host's
			// children and un-hide the button stack. Empty inline
			// display means "use CSS default" rather than forcing
			// any specific value.
			this.menuButtonsHost.hidden = true;
			this.menuButtonsHost.innerHTML = "";
			this.dynamicButtons.style.display = "";
			// Same re-fit as the rich-menu branch above — the
			// classic stack visibility just changed, so an active
			// iframe might need a new height to keep its bottom
			// flush against the buttons.
			this._sizeMenuDocumentIframe();
		}
	}

	_hasRenderableContent(text)
	{
		// Strip HTML comments + whitespace before checking for
		// emptiness so a comment-only stub file (the file's initial
		// state in the package, before any Python menu show has
		// overwritten it) reads as "no content" rather than briefly
		// flashing an empty iframe on first panel load. Shared by
		// both _applyMenuDocument and _applyMenuHtml since both
		// mirror files use the same comment-only stub convention.
		return (text || "").replace(/<!--[\s\S]*?-->/g, "").trim().length > 0;
	}

	setupContinuousMenuCheck() {
		// FSDT-82: bus mode — this poll only re-fetches the ./menu
		// file, which cannot deliver anything on this install; the
		// menu arrives by push. (MENU_OPEN re-nudging is handled by
		// fileLoaded's retry branch, which stays active.)
		if (this._busMode) return;
		console.log("Setting up continuous menu check");

		// Clear any existing interval and abort controller first
		this.stopContinuousMenuCheck();

		// Explicit 0→1 pulse via the managed helper so Python's
		// `changed=True` subscription definitely sees a transition
		// — a plain set-to-1 is a no-op for the subscriber if
		// MENU_OPEN was already 1 (e.g., from the previous failed
		// attempts that landed us in the give-up path). The helper
		// also tracks the pending-on timer so panel teardown can
		// cancel it before MENU_OPEN gets written against a closed
		// panel.
		this._pulseMenuOpen();

		this.continuousCheckInterval = setInterval(async () => {
			console.log("Continuously checking menu...");

			// Short delay before fetch to avoid hammering the file system
			await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL_MS));

			// If a check is already in progress from a previous interval tick (should be rare with the above await),
			// abort it to prevent multiple concurrent fetches.
			if (this.activeCheckAbortController) {
				console.log("Aborting previous continuous menu check fetch request (new interval starting).");
				this.activeCheckAbortController.abort();
			}

			this.activeCheckAbortController = new AbortController();
			// Capture the current controller for use in closures (like the timeout)
			// to ensure we're aborting the correct request if a new one starts quickly.
			const currentControllerForThisCheck = this.activeCheckAbortController;

			const checkTimeoutId = setTimeout(() => {
				// Check if this specific controller is still active and not already aborted
				if (currentControllerForThisCheck && !currentControllerForThisCheck.signal.aborted) {
					console.log("Continuous menu check request (fetch) timed out from its specific timer.");
					currentControllerForThisCheck.abort(); // Abort this specific fetch
				}
			}, TIMEOUT_MS / 2); // Shorter timeout for these continuous checks

			try {
				const response = await fetch("./menu" + '?' + new Date().getTime(), {
					cache: 'no-store',
					signal: currentControllerForThisCheck.signal // Use the signal from the controller for this specific check
				});

				clearTimeout(checkTimeoutId); // Fetch completed (or failed not due to abort), clear its specific timeout

				// Only process if this fetch wasn't aborted by a newer check starting
				// or by its own timeout that might have raced with completion.
				if (!currentControllerForThisCheck.signal.aborted) {
					if (response.ok) {
						const responseText = await response.text();
						const textLines = responseText.split("\n");

						if (textLines.length > 2 && !this.isMenuContentDefault(textLines)) {
							console.log("Menu finally loaded successfully via continuous check");
							this.stopContinuousMenuCheck(); // Crucial: stop further checks now that menu is loaded
							this.reloadAttempts = 0;
							// showMenu() owns button visibility and reads the
							// cached menu state, so keep it in sync here too.
							this.nEntries = textLines.length - 1;
							this.currentTextLines = textLines;
							this.updateMenuItems(textLines);
							this.showMenu();
						} else {
							console.log("setupContinuousMenuCheck() - Menu content not as expected, will check again in next interval.");
						}
					} else {
						console.error(`Continuous menu check request failed with status: ${response.status} ${response.statusText}`);
					}
				}
			} catch (error) {
				clearTimeout(checkTimeoutId); // Clear timeout on error too
				if (error.name === 'AbortError') {
					// This is expected if aborted by timeout, or by stopContinuousMenuCheck, or by a new check starting.
					console.log(`Continuous menu check fetch aborted for ${currentControllerForThisCheck.signal.reason || 'unknown reason'}.`);
				} else {
					// Other network errors
					console.error("Network error during continuous menu check:", error);
				}
			} finally {
				// If the controller for this specific check is still the globally active one,
				// it means no new check has started. We can clear it.
				// If a new check *has* started, this.activeCheckAbortController would be different.
				if (this.activeCheckAbortController === currentControllerForThisCheck) {
					this.activeCheckAbortController = null;
				}
			}
		}, CONTINUOUS_CHECK_INTERVAL_MS);
	}

	stopContinuousMenuCheck() {
		console.log("stopContinuousMenuCheck()");

		if (this.continuousCheckInterval) {
			clearInterval(this.continuousCheckInterval);
			this.continuousCheckInterval = null;
		}

		if (this.activeCheckAbortController) {
			console.log("Aborting active continuous menu check fetch request via stopContinuousMenuCheck.");
			this.activeCheckAbortController.abort("explicit stop"); // Provide a reason for debugging
			this.activeCheckAbortController = null;
		}

		// Cancel any in-flight 0→1 menu-open pulse so its delayed
		// "on" callback can't write MENU_OPEN=1 against the just-
		// stopped check (which would re-trigger a menu the user
		// no longer wants, or worse, race a fresh open).
		this._clearTimer('_menuOpenPulseTimer');
	}

	reloadTooltip(timeOut)
	{
		console.log("reloadTooltip()");
		// FSDT-82: bus mode — the tooltip arrives as a push with its
		// timeout inline (_applyBusSurface 'tooltip'); the K-event that
		// lands here is only a trigger with no fetchable content.
		if (this._busMode) return;
		loadFileNoCache("./tooltip", this.tooltipLoaded.bind(this), timeOut, this);

	}

	hideMenu()
	{
		console.log("hideMenu()");
		// Stop timers that only make sense while the menu is visible.
		// Previously only _classicHide stopped these, so the
		// EXTERNAL_SYSTEM_TOGGLE_HIDE_MENU path and the dynamic-button
		// path leaked a stale _heartbeatPoll interval that then fired
		// crash UI after the menu was hidden. Also clears the pending
		// "drop to status page" timer so a fast click→hide no longer
		// flashes the pinned-idle page after the UI is gone.
		this._clearInterval('_heartbeatPoll');
		this._clearInterval('_panelAlivePulse');   // stop the panel-liveness beat (menu no longer on screen)
		this._clearTimer('_pinnedIdleTimeout');
		this._hideMenuSearch();
		this.hideAllButtons();
		this.ingameUi.style.display = "none";
	}

	isPinnedEffective()
	{
		// Resolved live at each decision so runtime VR toggle (Auto mode)
		// and setting changes apply without reopening the panel.
		//
		// Remote control overrides pinned mode: the third-party app is
		// expected to recreate the full menu UI on its own surface, so
		// the in-sim panel must behave as classic (close when the menu
		// hides) and never drop into the pinned-idle status page. Any
		// caller that branches on this — HIDE_MENU / TIMEOUT handlers,
		// closeWithChoice's post-selection branch, refreshPinnedState —
		// then naturally falls through to the classic hide/close paths.
		if (SimVar.GetSimVarValue(SIMVAR_REMOTE_CONTROL, "number")) return false;
		const mode = SimVar.GetSimVarValue(SIMVAR_MENU_PINNED_MODE, "number");
		if (mode === PINNED_MODE_ENABLED) return true;
		if (mode === PINNED_MODE_AUTO)
			return !!SimVar.GetSimVarValue(SIMVAR_IS_IN_VR, "boolean");
		// PINNED_MODE_DISABLED (1) or 0 (LVar never written) → classic.
		return false;
	}

	// ─── Inline invoice viewer (status-page only) ──────────────────
	// On the status page (pinned-idle context), clicking the receipt
	// banner shows an iframe inside #statusPage that replaces
	// #statusContent until dismissed. The GSX Menu button at the
	// bottom of the status page stays visible so the user can
	// navigate back to the active menu without explicit close.
	// Outside the status page (active menu, loading, etc.) the
	// banner click falls through to the browser-open path —
	// inline rendering inside the active menu's button stack was
	// tested and felt cramped, so that mode keeps the original
	// "open in default browser" behavior.

	// True only while a NUMBERED menu is actually on screen and able to take
	// a selection.
	//
	// The keydown listener needs this because `nEntries` SURVIVES hideMenu():
	// it is the last menu's entry count, not a statement that a menu is
	// showing. On its own it will happily map a digit onto a menu the user
	// closed long ago and fire the service behind it. Reported 2026-07-31 —
	// number keys typed into the sim window with the GSX menu hidden called
	// ground services.
	//
	// Deliberately NOT fixed by zeroing nEntries in hideMenu(): the republish
	// paths guard on `this.currentTextLines && this.nEntries > 0` AFTER the
	// menu is hidden, and would silently stop working.
	_menuTakesNumKeys()
	{
		if (!(this.nEntries > 0)) return false;
		// hideMenu() sets this to "none" — the panel being on screen is a
		// precondition for any keyboard selection.
		if (!this.ingameUi || this.ingameUi.style.display === "none") return false;
		// Pinned mode keeps the panel up after a selection but shows the
		// status page instead of the numbered stack: nothing to pick.
		if (this._isOnStatusPage()) return false;
		// "Loading GSX Menu..." — the rows are placeholders, not choices.
		if (this.isLoading) return false;
		return true;
	}

	_isOnStatusPage()
	{
		// Mirror the same check used elsewhere (e.g., panel-active
		// status-tooltip gating): the status page is visible iff its
		// element has an explicit display that isn't "none". An empty
		// string means it's hidden by CSS / not yet shown.
		if (!this.statusPage) return false;
		const d = this.statusPage.style.display;
		return d !== "none" && d !== "";
	}

	showPinnedIdle()
	{
		// Post-menu resting state in pinned mode: panel stays visible,
		// dynamic buttons (1-10) hidden, static buttons (11-14) visible,
		// dedicated status page with its own "GSX Menu" button shown so
		// the user can re-trigger the container menu without closing.
		// SimBrief button (15) stays visible — it's a static feature.
		console.log("showPinnedIdle()");
		this.isLoading = false;
		this._removeTooltip();
		// Pinned-idle is the post-menu resting state — a live gate
		// search box must not linger over the status page.
		this._hideMenuSearch();
		// Tear down any in-menu document iframe — pinned-idle is
		// the post-menu resting state, so the active-menu's
		// embedded document (price-list recap, future contextual
		// reports) should not linger over the status page.
		this._applyMenuDocument("");
		this._applyMenuHtml("");

		if (this.loadingPrompt) this.loadingPrompt.style.display = "none";
		if (this.loadingImage) this.loadingImage.style.display = "none";
		if (this.remoteImage) this.remoteImage.style.display = "none";
		// Replace the last menu's title with a neutral "GSX Status" label —
		// it's stale once the menu is closed, and this makes the
		// pinned-idle state visually distinct from an active menu.
		if (this.pagePrompt) this.pagePrompt.textContent = "GSX Status";

		// Dynamic buttons (1-10): hide the whole group in one shot.
		// dynamicArea's fixed height preserves the slot, so the static
		// buttons below don't move.
		if (this.dynamicButtons) this.dynamicButtons.style.display = "none";
		// Static buttons (11-14): visible
		this._setButtonRangeDisplay(MAX_DYNAMIC_MENU_BUTTONS + 1, MAX_MENU_BUTTON_ID - 1, "initial");
		// SimBrief (15): visible, refresh its state
		if (this.simBriefBtn) this.simBriefBtn.style.display = "initial";
		this.updateSimBriefButton();
		this._refreshWarningBanner();

		// Show the dynamic area (now with statusPage content, dynamicButtons
		// hidden) and the bottom bar. Static buttons stay pinned at the
		// bottom of the panel via #bottomBar's margin-top: auto — they
		// don't move when the dynamic content swaps from buttons to the
		// (smaller) status page.
		if (this.dynamicArea) this.dynamicArea.style.display = "flex";
		if (this.statusPage) this.statusPage.style.display = "flex";
		if (this.bottomBar) this.bottomBar.style.display = "flex";
		if (this.ingameUi) this.ingameUi.style.display = "initial";

		// Only refetch when the status is dirty — Python calls
		// reloadStatus() directly via EXTERNAL_SYSTEM_TOGGLE=5 on
		// every change, so after the first successful fetch the
		// content is already in sync with backend state. Skipping
		// the redundant fetch on repeat closes turns the transition
		// into a pure visibility toggle (instant). The initial-dirty
		// state ensures a freshly-loaded panel that enters pinned
		// idle before any K-event still populates the page.
		if (this._statusDirty) this.reloadStatus();
	}

	formatHotkey()
	{
		// Renders this.hotkey (already loaded from hotkey.json in
		// connectedCallback) as a user-readable combo like "Ctrl+Shift+F12".
		// F-keys, letters and digits cover the realistic customisation set;
		// anything else falls back to the raw keyCode so the label still
		// communicates something.
		return this.hotkeyKeys().join("+");
	}

	hotkeyKeys()
	{
		// Shared decomposer: returns the hotkey combo as an array of
		// individual key labels (["Ctrl", "Shift", "F12"]). Used by
		// both `formatHotkey` (text concatenation) and the inline-SVG
		// keycap renderer below.
		const parts = [];
		if (this.hotkey.ctrlKey)  parts.push("Ctrl");
		if (this.hotkey.altKey)   parts.push("Alt");
		if (this.hotkey.shiftKey) parts.push("Shift");
		parts.push(this.keyCodeToName(this.hotkey.keyCode));
		return parts;
	}

	keyCodeToName(kc)
	{
		// Same mapping as `hotkeyKeys` but reusable from the live-
		// capture preview (see `_renderCapturePreview`).
		if (kc >= 112 && kc <= 123)     return "F" + (kc - 111);       // F1..F12
		else if (kc >= 48 && kc <= 57)  return String.fromCharCode(kc); // 0..9
		else if (kc >= 65 && kc <= 90)  return String.fromCharCode(kc); // A..Z
		else                            return "Key" + kc;
	}

	renderKeycapSvg(label, opts)
	{
		// Generates an inline SVG keycap from `icons/key_template.svg`:
		//   viewBox 0 0 W 116.7
		//   outer rounded rect 6.7/6.7, width=W-13.4, rx=10, #cdcccb fill, #020202 stroke
		//   inner rounded rect 8.9/8.9, width=W-17.8, rx=10, #fdfeff fill
		//   centered bold text
		// Width scales with label length so single-char keys ("1", "F")
		// stay square while multi-char keys ("Ctrl", "Shift", "F12")
		// become pill-shaped. Height is constant; CSS (.keycap-icon)
		// anchors display size to the surrounding text.
		//
		// Optional `opts` lets a specific call punch the text proportion
		// higher when the cap is rendered small (menu-option caps at
		// 1.5em, where the default 50/116.7 text ratio becomes hard to
		// read). `opts.textSize` / `opts.textY` default to the values
		// tuned for the GSX-Menu hotkey caps.
		opts = opts || {};
		const textSize = opts.textSize != null ? opts.textSize : 50;
		const textY    = opts.textY    != null ? opts.textY    : 74;
		// Memoize: identical (label, textSize, textY) always produces the
		// same SVG string, and the same tuple recurs on every menu refresh.
		const cacheKey = label + '|' + textSize + '|' + textY;
		const cached = this._keycapCache[cacheKey];
		if (cached) return cached;

		const len = label.length;
		// Horizontal size scales with label length. Minimum width is
		// clamped to the viewBox height (116.7) so a 1-char cap
		// renders exactly square at the rendered `height`. Multi-
		// char caps widen beyond that as the label grows.
		const W = Math.max(116.7, 20 + len * 34);
		// Encode label text — letters/digits only come out of
		// hotkeyKeys(), but &<> escaping is cheap insurance.
		const safe = String(label)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;");
		const svg = '<svg class="keycap-icon" viewBox="0 0 ' + W + ' 116.7" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">' +
			'<rect x="6.7" y="6.7" width="' + (W - 13.4) + '" height="103.3" rx="10" ry="10" fill="#5a5a5a" stroke="#2a2a2a" stroke-width="2"/>' +
			'<rect x="8.9" y="8.9" width="' + (W - 17.8) + '" height="94.4" rx="10" ry="10" fill="#3a3a3a"/>' +
			// No font-family override — inherits whatever the MSFS
			// default stack resolves to (Roboto-Regular, Arial, etc.
			// from /SCSS/common.css). `font-weight="bold"` lets the
			// renderer synthesize bold from the regular face when a
			// dedicated bold variant isn't shipped.
			// `text-rendering="optimizeLegibility"` keeps hinting +
			// kerning active; the earlier `geometricPrecision` hint
			// explicitly disabled hinting, which made strokes fall
			// on subpixel boundaries and look fuzzy vs native HTML
			// text.
			'<text x="' + (W / 2) + '" y="' + textY + '" text-anchor="middle" font-size="' + textSize + '" font-weight="bold" fill="#fdfeff" text-rendering="optimizeLegibility">' + safe + '</text>' +
			'</svg>';
		this._keycapCache[cacheKey] = svg;
		return svg;
	}

	renderKeycapsFor(keys)
	{
		// Given a list of key labels, produce the inline-SVG keycap
		// HTML joined by "+" separators. Used both for the current
		// hotkey and for the live preview that updates as the user
		// presses keys during capture mode.
		return keys
			.map(k => this.renderKeycapSvg(k))
			.join('<span class="keycap-sep">+</span>');
	}

	renderHotkeyCaps()
	{
		// Current hotkey rendered as a hover-activated editable span.
		// Wrapped in `.hotkey-edit` so CSS can add the hover cue and
		// tooltip, and so the dblclick listener (wired in
		// `rewireHotkeyEditor`) has a stable container to bind to.
		return '<span class="hotkey-edit" data-hotkey-tip="Double-click to change the hotkey">' +
			this.renderKeycapsFor(this.hotkeyKeys()) +
			'</span>';
	}

	rewireHotkeyEditor()
	{
		// Called after every re-render of the GSX Menu button (initial
		// setup + post-rebind refresh). Finds the `.hotkey-edit` span
		// inside the button and attaches click + dblclick listeners:
		// single clicks are swallowed so they don't open the menu via
		// the parent button's onclick; a double-click enters capture
		// mode.
		if (!this.statusOpenMenuBtn) return;
		const editSpan = this.statusOpenMenuBtn.querySelector(".hotkey-edit");
		if (!editSpan) return;
		editSpan.addEventListener("click", (e) => {
			// Prevent the caps area from behaving as a "GSX Menu"
			// click target — it's configuration, not an action.
			e.stopPropagation();
			e.preventDefault();
		});
		editSpan.addEventListener("dblclick", (e) => {
			e.stopPropagation();
			e.preventDefault();
			this.startHotkeyCapture();
		});
	}

	startHotkeyCapture()
	{
		// Enter hotkey-rebind mode: swap the caps for a "press new
		// hotkey…" placeholder and install keydown + keyup listeners
		// in capture phase (so we get events before the normal window
		// keydown that matches the CURRENT hotkey).
		//
		// Commit semantics — all keys behave identically, no special
		// "trigger" vs "modifier" distinction at the capture layer:
		//   - Preview always shows whatever keys are currently held.
		//   - On every keydown, the held set is snapshotted as the
		//     candidate combo.
		//   - When all keys come back up, a 2 s grace timer arms.
		//     Any new keydown within that window cancels the timer
		//     and the press resets the snapshot — so the user can
		//     re-enter the combo if they weren't happy. If 2 s
		//     elapse without a new press the snapshot commits.
		//
		// 20 s safety timeout plus Esc-cancel on top.
		if (this.capturingHotkey) return;
		this.capturingHotkey = true;
		this._capturedHeld = new Set();
		this._capturedSnapshot = null;
		this._hotkeyCommitTimer = null;
		const editSpan = this.statusOpenMenuBtn.querySelector(".hotkey-edit");
		if (editSpan) {
			// Pin the span's pre-capture dimensions so the button
			// doesn't visibly shrink when the fixed-size keycaps are
			// replaced by the shorter "Press new hotkey…" text. On
			// stop/cancel the renderHotkeyButton rebuild replaces the
			// span entirely and clears the inline style.
			const rect = editSpan.getBoundingClientRect();
			editSpan.style.minWidth  = rect.width  + "px";
			editSpan.style.minHeight = rect.height + "px";
			editSpan.classList.add("capturing");
			editSpan.classList.add("empty");
			editSpan.textContent = "Press new hotkey…";
		}
		this._hotkeyCaptureKeydown = (e) => {
			const kc = e.keyCode;
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			if (kc === 27 /* Escape */) {
				this.cancelHotkeyCapture();
				return;
			}
			// If a commit timer is pending (user had released all
			// keys, now pressing again within the 2 s grace), cancel
			// it so the new press restarts the capture attempt.
			if (this._hotkeyCommitTimer) {
				clearTimeout(this._hotkeyCommitTimer);
				this._hotkeyCommitTimer = null;
			}
			this._capturedHeld.add(kc);
			// Snapshot is always the current live held set — so
			// releasing everything and pressing a different combo
			// during the grace window replaces the stored candidate.
			this._capturedSnapshot = new Set(this._capturedHeld);
			this._renderCapturePreview();
		};
		this._hotkeyCaptureKeyup = (e) => {
			const kc = e.keyCode;
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			this._capturedHeld.delete(kc);
			this._renderCapturePreview();
			if (this._capturedHeld.size === 0 && this._capturedSnapshot && this._capturedSnapshot.size > 0) {
				// Arm the 2 s commit delay. `_renderCapturePreview`
				// above has already switched to showing the snapshot
				// (held is empty), and added the `.committing`
				// class for the CSS confirm-animation cue.
				this._hotkeyCommitTimer = setTimeout(() => {
					this._hotkeyCommitTimer = null;
					this.hotkey = this._comboFromHeldSet(this._capturedSnapshot);
					this._capturedSnapshot = null;
					this.stopHotkeyCapture();
					this.renderHotkeyButton();
					this._persistHotkeyToPython();
				}, 2000);
			}
		};
		window.addEventListener("keydown", this._hotkeyCaptureKeydown, true /* capture */);
		window.addEventListener("keyup",   this._hotkeyCaptureKeyup,   true);
		this._hotkeyCaptureTimeout = setTimeout(() => this.cancelHotkeyCapture(), 20000);
	}

	_persistHotkeyToPython()
	{
		// Encode the current this.hotkey into a single LVar so
		// Couatl's Python side can pick it up and rewrite
		// hotkey.json. Encoding:
		//   bits 0-7  keyCode (0-255)
		//   bit 8     ctrlKey
		//   bit 9     altKey
		//   bit 10    shiftKey
		// Value 0 is reserved as "no pending change" sentinel —
		// Python resets the LVar to 0 after consuming, so back-to-
		// back rebinds still trigger.
		const hk = this.hotkey || {};
		const encoded =
			((hk.keyCode || 0)  & 0xff) |
			((hk.ctrlKey  ? 1 : 0) << 8) |
			((hk.altKey   ? 1 : 0) << 9) |
			((hk.shiftKey ? 1 : 0) << 10);
		// Bump any 0-valued combo into a non-zero sentinel so we
		// don't get confused with "idle". An all-zero hotkey
		// (keyCode 0, no modifiers) isn't a realistic user input
		// anyway.
		const payload = encoded === 0 ? 1 : encoded;
		try {
			SimVar.SetSimVarValue(SIMVAR_HOTKEY_NEW, "number", payload);
		} catch (e) {
			console.log("[GSX] failed to publish hotkey to Python: " + e);
		}
	}

	_comboFromHeldSet(heldSet)
	{
		// Turn a Set of held keyCodes into the panel's hotkey struct.
		// Modifiers go into the flag fields; the last non-modifier
		// encountered (Set iteration is insertion-ordered in JS) is
		// used as the trigger keyCode. Returns `{…, keyCode: null}`
		// when the set contains only modifiers.
		let ctrl = false, alt = false, shift = false;
		let trigger = null;
		for (const kc of heldSet) {
			if      (kc === 17) ctrl  = true;
			else if (kc === 18) alt   = true;
			else if (kc === 16) shift = true;
			else                trigger = kc;
		}
		return { ctrlKey: ctrl, altKey: alt, shiftKey: shift, keyCode: trigger };
	}

	_renderCapturePreview()
	{
		// Preview source:
		//   1. If any keys are currently held: show those (live).
		//   2. Else if a snapshot exists: we're in the 2 s commit
		//      grace window — show the snapshot (what's about to
		//      be saved) and toggle the `.committing` class for the
		//      CSS confirm cue.
		//   3. Else: no keys and no snapshot — placeholder.
		// Render order is canonical (Ctrl / Alt / Shift / non-mods)
		// so the preview reads naturally regardless of press order.
		const editSpan = this.statusOpenMenuBtn && this.statusOpenMenuBtn.querySelector(".hotkey-edit");
		if (!editSpan) return;
		const live = this._capturedHeld.size > 0;
		const showSet = live ? this._capturedHeld
		                     : (this._capturedSnapshot || new Set());
		editSpan.classList.toggle("committing", !live && showSet.size > 0);
		const keys = [];
		if (showSet.has(17)) keys.push("Ctrl");
		if (showSet.has(18)) keys.push("Alt");
		if (showSet.has(16)) keys.push("Shift");
		for (const kc of showSet) {
			if (!this._isModifierKeyCode(kc)) {
				keys.push(this.keyCodeToName(kc));
			}
		}
		if (keys.length === 0) {
			editSpan.classList.add("empty");
			editSpan.textContent = "Press new hotkey…";
		} else {
			editSpan.classList.remove("empty");
			editSpan.innerHTML = this.renderKeycapsFor(keys);
		}
	}

	_isModifierKeyCode(kc)
	{
		return kc === 16 /* Shift */ ||
		       kc === 17 /* Ctrl  */ ||
		       kc === 18 /* Alt   */ ||
		       kc === 91 /* LMeta */ ||
		       kc === 92 /* RMeta */ ||
		       kc === 93 /* Menu  */;
	}


	stopHotkeyCapture()
	{
		if (!this.capturingHotkey) return;
		this.capturingHotkey = false;
		if (this._hotkeyCaptureKeydown) {
			window.removeEventListener("keydown", this._hotkeyCaptureKeydown, true);
			this._hotkeyCaptureKeydown = null;
		}
		if (this._hotkeyCaptureKeyup) {
			window.removeEventListener("keyup", this._hotkeyCaptureKeyup, true);
			this._hotkeyCaptureKeyup = null;
		}
		if (this._hotkeyCaptureTimeout) {
			clearTimeout(this._hotkeyCaptureTimeout);
			this._hotkeyCaptureTimeout = null;
		}
		if (this._hotkeyCommitTimer) {
			clearTimeout(this._hotkeyCommitTimer);
			this._hotkeyCommitTimer = null;
		}
	}

	cancelHotkeyCapture()
	{
		// Cancel: same teardown as stop, but re-render with the
		// existing hotkey so the "press new hotkey…" placeholder
		// reverts to the old caps.
		this.stopHotkeyCapture();
		this.renderHotkeyButton();
	}

	renderHotkeyButton()
	{
		// Truth-check first: if the engine has published its ACTIVE
		// combo (HOTKEY_CUR), adopt it before painting — this closes
		// the "shipped default flashes until the poll corrects it"
		// window regardless of when this render runs relative to the
		// SimVar listener becoming ready (an early GetSimVarValue can
		// return 0; by render time it's reliable).
		try
		{
			const v = SimVar.GetSimVarValue(SIMVAR_HOTKEY_CUR, "number") | 0;
			if (v > 0 && v !== this._lastHotkeyCur)
			{
				this._lastHotkeyCur = v;
				this.hotkey = {
					keyCode: v & 0xff,
					ctrlKey: !!(v & 0x100),
					altKey: !!(v & 0x200),
					shiftKey: !!(v & 0x400)
				};
			}
		}
		catch (error) { /* SimVar not ready — poll corrects later */ }
		// Rebuilds the GSX Menu button label: keycaps (with their
		// dblclick-to-rebind editor) on the left, GSX logo
		// right-aligned so its position stays constant regardless of
		// how many keycaps are showing (the CSS rule on `.menu-logo`
		// uses `margin-left: auto` inside the flex row to push it
		// against the right edge). Logo is painted via
		// background-image (NOT an inner <img>) for the same reason
		// the T9 brand cell uses background-image: Coherent's older
		// Chromium softens SVG-in-img bilinear scaling; backgrounds
		// rasterise at the painted size, keeping thin strokes
		// crisp. Rewires the dblclick handler because innerHTML
		// replaces all children — only the keycap span is the rebind
		// target, NOT the logo span.
		if (!this.statusOpenMenuBtn) return;
		// `.tv` is the version overlay (anchored to the band's lower-
		// right corner via CSS). Populated separately when the
		// FSDT_GSX_VERSION_* LVars resolve (see the
		// `brandCell .tv` write a few sections up); we just emit
		// the empty span here so the element exists at first paint.
		// If gsxVersionString has already been read, pre-seed it so a
		// re-render after a hotkey rebind doesn't blank the version.
		const ver = this.gsxVersionString ? "v" + this.gsxVersionString : "";
		this.statusOpenMenuBtn.innerHTML =
			this.renderHotkeyCaps()
			+ '<span class="menu-logo" aria-label="GSX Menu" data-logo-tip="Click to open the main menu"></span>'
			+ '<span class="tv">' + ver + '</span>';
		this.rewireHotkeyEditor();
	}

	reloadStatus()
	{
		// Fetches the Python-produced ./status HTML fragment and updates
		// #statusContent. Python writes this via panelStatus and fires
		// EXTERNAL_SYSTEM_TOGGLE=5 on change. Called also on
		// showPinnedIdle entry so a freshly-pinned panel picks up the
		// current status without waiting for the next K-event.
		if (!this.statusContent) return;
		// FSDT-82: bus mode — the push already applied the current
		// status; this path serves the K=5 trigger and showPinnedIdle,
		// which re-apply from the bus cache (identity-compare makes
		// the common case a no-op).
		if (this._busMode) {
			const d = this._busCache['status'];
			if (d) this._applyStatusHtml(d.html || "");
			return;
		}
		loadFileNoCache("./status.html", (text) => {
			this._applyStatusHtml(text || "");
		}, undefined, this);
	}

	_applyStatusHtml(html)
	{
		html = GSX_ZH_CN.translateHtmlPayload(html);
		// Shared applier — fed by the file fetch (legacy/dev) and the
		// CommBus push (MSFS2024 production). Body unchanged from the
		// original reloadStatus fetch callback.
		if (!this.statusContent) return;
		// Mark synced before the identity-compare early-return, so
		// a no-op refresh still flips the dirty bit and later close
		// transitions can short-circuit.
		this._statusDirty = false;
		// Extract the receipt-data span (if Python has attached
		// one) BEFORE the identity-compare early-return, so the
		// receipt banner state stays in sync even when the rest
		// of the status content didn't change.
		this._extractReceiptData(html);
		if (this.statusContent.innerHTML === html) return;
		// Incremental DOM update instead of a wholesale
		// innerHTML reset. Reason: the status page refreshes
		// every tick that any dynamic field changes (bill,
		// fuel counter, etc.), and a full innerHTML reset
		// destroys + recreates every child — including the
		// service lines' icon backgrounds — which produces a
		// visible flash each second. Diffing lets elements
		// that didn't structurally change stay mounted, so
		// only actual text/attribute deltas hit the DOM.
		this._diffStatus(this.statusContent, html);
	}

	_extractReceiptData(html)
	{
		// Pulls the hidden <span class="gsx-receipt-data" data-...>
		// metadata that Python's panelStatus.setReceiptData() embeds
		// in the status payload. When present, captures the operator
		// name and base64 logo for showReceiptBanner; when absent,
		// clears the captured state so a previously-displayed banner
		// goes away on the next refresh. Refreshes the warning-
		// banner stack only on transitions (present↔absent or data
		// change) to avoid rebuilding it every status tick.
		const re = /<span class="gsx-receipt-data"[^>]*>/i;
		const m = html.match(re);
		const prev = this._receiptData || null;
		let next = null;
		if (m) {
			const tag = m[0];
			const get = (name) => {
				const a = tag.match(new RegExp(`data-${name}="([^"]*)"`, 'i'));
				return a ? this._decodeHtmlEntities(a[1]) : "";
			};
			next = {
				operator: get('operator'),
				logo:     get('logo'),
				path:     get('path'),
			};
		}
		const sameAsPrev = prev && next
			&& prev.operator === next.operator
			&& prev.logo     === next.logo
			&& prev.path     === next.path;
		if (!prev && !next) return;
		if (sameAsPrev) return;
		this._receiptData = next;
		// The banner stack picks up receipt state on its next
		// refresh — call it now so the appearance is immediate.
		this._refreshWarningBanner();
	}

	_decodeHtmlEntities(s)
	{
		// Minimal entity decode — the data we embed only goes
		// through Python's html.escape (& < > " '). The base64 logo
		// data and Windows file path are otherwise plain ASCII.
		return (s || "")
			.replace(/&quot;/g, '"')
			.replace(/&#x27;/g, "'")
			.replace(/&#39;/g, "'")
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&amp;/g, '&');
	}

	reloadMenuLive()
	{
		// Companion to reloadStatus, fired by Python's
		// `panelMenuLive.tick` (EXTERNAL_SYSTEM_TOGGLE=11) when the
		// active menu's registered rebuilder produces HTML that
		// differs from what's currently on screen — service state
		// colour cue moved, operator name bound, etc. Fetches the
		// standalone menu_live.html mirror Python wrote and runs
		// the same DOM-diff path the status surface uses so <img>
		// children don't reload-flash on every patch.
		if (!this.menuButtonsHost) return;
		// Bail when the rich-menu surface isn't currently the
		// visible button stack. Either no menu is showing or the
		// user is in classic-menu mode — in both cases the host's
		// inner DOM is stale data from a prior rich menu and
		// patching it would resurrect that content under the
		// classic stack. Python's dedup baseline gets re-seeded on
		// the next rich menu's register() call, so missing patches
		// here costs nothing.
		if (this.menuButtonsHost.hidden) return;
		// FSDT-82: bus mode — the push already applied this patch; the
		// K=11 trigger re-applies from cache (diff no-ops when equal).
		if (this._busMode) {
			const d = this._busCache['menu_live'];
			if (d) this._applyMenuLiveHtml(d.html || "");
			return;
		}
		loadFileNoCache(MENU_LIVE_PATH, (text) => {
			this._applyMenuLiveHtml(text || "");
		}, undefined, this);
	}

	_applyMenuLiveHtml(html)
	{
		html = GSX_ZH_CN.translateHtmlPayload(html);
		// Shared applier — fed by the file fetch (legacy/dev) and the
		// CommBus push (MSFS2024 production). Body unchanged from the
		// original reloadMenuLive fetch callback.
		if (!this.menuButtonsHost || this.menuButtonsHost.hidden) return;
		// Empty / comment-only content means the rebuilder
		// produced no content this tick (renderer error,
		// transient state). Leave the existing rich menu in
		// place rather than blanking the host.
		if (!this._hasRenderableContent(html)) return;
		// Same diff helper the status surface uses — preserves
		// DOM identity for unchanged subtrees (no <img>
		// reload flash) and only mutates the nodes that
		// actually differ.
		this._diffStatus(this.menuButtonsHost, html);
		// The Python renderer emits empty `<span class="gk"
		// data-k="N"></span>` keycap placeholders; the diff
		// just wiped any previously-rendered SVG inside.
		// Re-fill them with the same option-cap calibration
		// _applyMenuHtml uses on initial mount. renderKeycapSvg
		// caches by (label, opts) so this is effectively free.
		// Numeric-key selection disabled in Settings > UI: leave the
		// keycap placeholders empty — the digit badges would promise a
		// key behavior the keydown handler (same LVar) no longer performs.
		const numKeysOff = SimVar.GetSimVarValue(SIMVAR_MENU_NUMKEYS, "number") == MENU_NUMKEYS_DISABLED;
		const caps = this.menuButtonsHost.querySelectorAll("[data-k]");
		const capOpts = { textSize: 75, textY: 82 };
		for (let i = 0; i < caps.length; i++) {
			const label = caps[i].getAttribute("data-k");
			caps[i].innerHTML = numKeysOff ? "" : this.renderKeycapSvg(label, capOpts);
		}
		// Title-attribute stripping — same overflow check
		// _applyMenuHtml does so newly-fitting labels lose
		// their hover-tooltip duplicate (and newly-overflowing
		// ones keep theirs from the Python-emitted attribute).
		// Deferred one frame so layout reflects the patched DOM.
		requestAnimationFrame(() => {
			const buttons = this.menuButtonsHost.querySelectorAll(".gsx-btn[title]");
			for (let i = 0; i < buttons.length; i++) {
				const btn = buttons[i];
				const lbl = btn.querySelector(".gl");
				if (!lbl) continue;
				const overflowed = lbl.scrollHeight > lbl.clientHeight + 1
								|| lbl.scrollWidth > lbl.clientWidth + 1;
				if (!overflowed) btn.removeAttribute("title");
			}
		});
	}

	reloadSettings()
	{
		// Open or refresh the settings page. Python wrote the schema
		// fragment to ./settings.html and pulsed K-event 12; we fetch
		// the file, flip body.settingsActive on so the cascade hides
		// every other #dynamicArea child, and replace #settingsPage
		// contents with the freshly-parsed schema. Field controls are
		// instantiated below in _bindSettingsField for each `.gsx-set-
		// field` row — plain HTML inputs for step (a), MSFS web
		// components in a later step. Live commits write to
		// L:FSDT_GSX_SET_<KEY> mirror LVars that Python polls every
		// 100 ms (see GSX/settingsPanel.py).
		// FSDT-82: bus mode — the push already mounted the current
		// settings page, and K=12 ALWAYS follows a publish (Python
		// publishes then pulses the K-event), so re-applying here
		// would remount the innerHTML ~60 ms after the first mount,
		// wiping the field bindings mid-initialization (observed as
		// a uiscroll.js TypeError burst + settings clicks committing
		// nothing). The push is the single apply; this trigger is a
		// no-op on the bus transport.
		if (this._busMode) return;
		loadFileNoCache(SETTINGS_PATH, (text) => {
			this._applySettingsHtml(text || "");
		}, undefined, this);
	}

	_applySettingsHtml(html)
	{
		html = GSX_ZH_CN.translateHtmlPayload(html);
		// Shared applier — fed by the file fetch (legacy/dev) and the
		// CommBus push (MSFS2024 production). Body unchanged from the
		// original reloadSettings fetch callback, including the tab-
		// selection capture that must run against the OLD mount just
		// before the re-mount below.
		const host = document.getElementById("settingsPage");
		if (!host || !host.isConnected) return;
		if (!this._hasRenderableContent(html)) return;
		// Capture currently-selected tab(s) before the re-mount.
		// Python re-publishes settings.html on live state changes
		// (audio default-device switch, etc.), and the fs-base-ui
		// `<tab-menu>` defaults to selectedIndex=0 on every mount —
		// without this preservation, every refresh would snap the
		// user back to the Simulation tab regardless of where they
		// were. `target` attribute survives across re-mounts because
		// it's encoded in the schema HTML; collect it for every
		// selected tabmenu-item (outer tab + any subtab in nested
		// layouts).
		const selectedTargets = [];
		const selectedItems = host.querySelectorAll("tabmenu-item.selected");
		for (let i = 0; i < selectedItems.length; i++) {
			const target = selectedItems[i].getAttribute("target");
			if (target) selectedTargets.push(target);
		}
		{
			host.innerHTML = html;
			host.hidden = false;
			document.body.classList.add("settingsActive");
			const fields = host.querySelectorAll(".gsx-set-field");
			for (let i = 0; i < fields.length; i++) {
				this._bindSettingsField(fields[i]);
			}
			// Restore tab selection. Defer one frame so the
			// fs-base-ui tab-menu's connectedCallback finishes wiring
			// (and applies its own default selectedIndex=0 first)
			// before we click on the previously-selected items.
			// Outer-to-inner order is the document order returned by
			// querySelectorAll, which matches the order tab-menu
			// expects — restoring the parent tab before the nested
			// one means the subtab tabmenu-item is visible when its
			// click fires. The `.selected` guard skips items that
			// were already at index 0 (would no-op anyway).
			if (selectedTargets.length > 0) {
				requestAnimationFrame(() => {
					for (let i = 0; i < selectedTargets.length; i++) {
						const sel = 'tabmenu-item[target="' +
							selectedTargets[i] + '"]';
						const item = host.querySelector(sel);
						if (item && !item.classList.contains("selected")) {
							item.click();
						}
					}
				});
			}
		}
	}

	closeSettings()
	{
		// Tear settings down. Python fires K-event 13 from
		// emulateMenu_MSFS so any incoming menu (even one opened via
		// hotkey rather than the brand cell) cleanly removes the
		// settings overlay. Idempotent — safe to call when settings
		// isn't currently up.
		// Release any active text-input capture before clearing the
		// DOM. WebKit usually fires `blur` when a focused element is
		// removed (which our text inputs' blur handler hooks to call
		// UNFOCUS_INPUT_FIELD), but that's not strictly guaranteed
		// when innerHTML is overwritten in one shot — explicitly
		// signalling here means sim key routing can't get stuck in
		// the "focused" state if the user closes the panel
		// mid-edit.
		if (this.capturingInput) {
			this.capturingInput = false;
			try {
				Coherent.trigger("UNFOCUS_INPUT_FIELD", "gsxSetText");
			} catch (e) { /* not in scope */ }
		}
		document.body.classList.remove("settingsActive");
		const host = document.getElementById("settingsPage");
		if (host) {
			host.hidden = true;
			host.innerHTML = "";
		}
	}

	_bindSettingsField(row)
	{
		// Build the input control for one schema row, write its initial
		// value into the row's readout, and wire a change handler that
		// publishes the new value to the L:FSDT_GSX_SET_<KEY> mirror.
		// Plain HTML controls for step (a); the MSFS web components
		// (toggle-button, drop-down, new-range-element) land in step
		// (b) once the round-trip is proven end-to-end.
		const key      = row.getAttribute("data-key");
		const type     = row.getAttribute("data-type");
		const valueStr = row.getAttribute("data-value") || "0";
		const ctrl     = row.querySelector(".gsx-set-ctrl");
		// Right-aligned action buttons hosted on a row that isn't itself an
		// action field (e.g. the controller-hotkey Assign/Clear on the status
		// info row). Each carries data-action-key → its own pulse LVar. Wired
		// here, before the key/ctrl early-out below, since info rows have
		// neither a data-key nor a .gsx-set-ctrl.
		const hostedBtns = row.querySelectorAll(".gsx-set-action-btn[data-action-key]");
		for (let i = 0; i < hostedBtns.length; i++) {
			const b = hostedBtns[i];
			if (b.getAttribute("data-disabled") === "1") {
				b.disabled = true;
				continue;
			}
			const aLvar = "L:FSDT_GSX_SET_" + b.getAttribute("data-action-key").toUpperCase();
			b.addEventListener("click", () => {
				SimVar.SetSimVarValue(aLvar, "number", 1);
			});
		}
		if (!key || !ctrl) return;
		const lvarName = "L:FSDT_GSX_SET_" + key.toUpperCase();
		ctrl.innerHTML = "";

		if (type === "toggle") {
			// MSFS web component — native <input type=checkbox> swallows
			// clicks under Coherent's CSS reset, and its change event
			// fires unreliably inside an InGamePanel context. Toggle-
			// button exposes a `.toggled` boolean we read after the
			// click bubbles, and it ships with gamepad / screen-reader
			// support for free.
			const tb = document.createElement("toggle-button");
			tb.setAttribute("ElemActiv", "On");
			tb.setAttribute("ElemInactiv", "Off");
			const initial = (parseInt(valueStr, 10) !== 0);
			ctrl.appendChild(tb);
			// Defer the initial value / handler binding by a frame so
			// the custom element finishes `connectedCallback` (which
			// is what wires up `.toggleWrapper`, `.titleElem`, etc.)
			// before we call setValue on it — calling setValue too
			// early throws because the inner template isn't attached.
			requestAnimationFrame(() => {
				if (typeof tb.setValue === "function") tb.setValue(initial);
				tb.addEventListener("click", () => {
					// The toggle-button flips its internal `toggled`
					// synchronously inside its own validate handler,
					// which runs on the same click — but the visual
					// class swap happens after that. Read on the next
					// frame so the value reflects the post-click state.
					requestAnimationFrame(() => {
						const val = tb.toggled ? 1 : 0;
						SimVar.SetSimVarValue(lvarName, "number", val);
					});
				});
			});
			return;
		}
		if (type === "range") {
			const min  = parseFloat(row.getAttribute("data-min")  || "0");
			const max  = parseFloat(row.getAttribute("data-max")  || "100");
			const step = parseFloat(row.getAttribute("data-step") || "1");
			const unit = row.getAttribute("data-unit") || "";
			const input = document.createElement("input");
			input.type = "range";
			input.min  = String(min);
			input.max  = String(max);
			input.step = String(step);
			input.value = valueStr;
			const readout = document.createElement("span");
			readout.className = "gsx-set-readout";
			const setReadout = (v) => { readout.textContent = unit ? `${v}${unit}` : `${v}`; };
			setReadout(valueStr);
			// Paint the rail to the left of the thumb in
			// `--gsx-slider-fill` and the remainder in
			// `--gsx-slider-rail` by computing the value as a
			// percentage of the [min..max] range and writing it
			// into `--gsx-slider-progress` on the input element.
			// CSS gradient in the track rule reads the variable;
			// WebKit has no native ::-webkit-slider-progress
			// pseudo-element so this JS-synced trick is the
			// standard way to get a split-colour range track.
			const updateFill = () => {
				const span = max - min;
				const pct = span > 0
					? ((parseFloat(input.value) - min) / span) * 100
					: 0;
				input.style.setProperty("--gsx-slider-progress", pct + "%");
			};
			updateFill();
			// Audio-check preview wiring — only the five volume
			// sliders carry a non-zero `audioCheckId`; other range
			// fields (FollowMe speed, refueling time, etc.) keep
			// the simple input-only handler.
			//
			// Trigger semantics: a "stopped" flag in JS gates the
			// `input` handler so the preview loops while the user
			// is dragging and shuts off cleanly on release.
			//   * mousedown / pointerdown -> clear `stopped` so the
			//     next input event can arm the preview. Coherent
			//     doesn't always fire `pointerdown` on native
			//     `<input type=range>`, but `mousedown` is solid
			//     in practice, so both are wired as belt-and-braces.
			//   * input -> write the slider value (always) AND the
			//     channel ID to the preview LVar (only when
			//     `stopped` is false). Writing the channel ID on
			//     input rather than the *down events is the actual
			//     start trigger so it fires even if both down events
			//     are eaten somehow.
			//   * mouseup / pointerup / pointercancel / blur /
			//     change -> set `stopped` and write 0. Multiple
			//     stop triggers because Coherent's coverage of
			//     these events for native range inputs is uneven
			//     (`change` in particular doesn't always fire when
			//     `step != 1`). Idempotent — writes of 0 to an
			//     already-zero LVar are no-ops.
			//
			// The preview's gain tracks the drag in real time via
			// the Python-side `_syncAudioCheckGain` hook in
			// `_applyChange`; this JS layer only owns start/stop.
			const audioCheckIds = {
				"audioVolume":         1,
				"audioVolume_Comms":   2,
				"audioVolume_Cockpit": 3,
				"audioVolume_Outside": 4,
				"ui_volume":           5,
			};
			const audioCheckId = audioCheckIds[key] || 0;
			let previewStopped = true;
			input.addEventListener("input", () => {
				setReadout(input.value);
				updateFill();
				SimVar.SetSimVarValue(lvarName, "number", parseFloat(input.value));
				if (audioCheckId && !previewStopped) {
					SimVar.SetSimVarValue("L:FSDT_GSX_AUDIO_CHECK", "number", audioCheckId);
				}
			});
			if (audioCheckId) {
				const armPreview = () => { previewStopped = false; };
				const stopPreview = () => {
					if (previewStopped) return;
					previewStopped = true;
					SimVar.SetSimVarValue("L:FSDT_GSX_AUDIO_CHECK", "number", 0);
				};
				input.addEventListener("mousedown",     armPreview);
				input.addEventListener("pointerdown",   armPreview);
				input.addEventListener("mouseup",       stopPreview);
				input.addEventListener("pointerup",     stopPreview);
				input.addEventListener("pointercancel", stopPreview);
				input.addEventListener("change",        stopPreview);
				input.addEventListener("blur",          stopPreview);
			}
			ctrl.appendChild(input);
			ctrl.appendChild(readout);
			return;
		}
		if (type === "choice") {
			// MSFS <drop-down> web component — native <select> has no
			// popup under Coherent (no browser-process to host the
			// overlay), so the menu would render closed forever. The
			// MSFS component draws its own in-DOM list overlay, which
			// works inside an InGamePanel.
			const choicesStr = row.getAttribute("data-choices") || "";
			const parts = choicesStr.split("||");
			const data = [];
			const initialId = parseFloat(valueStr);
			for (let i = 0; i < parts.length; i++) {
				const kv = parts[i].split("|");
				if (kv.length < 2) continue;
				// Numeric IDs so the LVar mirror stays a single
				// number per field. setData uses `==` for id matching
				// so consistent numeric typing matters.
				data.push({ ID: parseFloat(kv[0]), name: kv[1] });
			}
			const dd = document.createElement("drop-down");
			ctrl.appendChild(dd);
			// Wire data + handler after the custom element's
			// connectedCallback runs and attaches the inner virtual
			// list / scroller; setData against a half-initialised
			// instance silently no-ops.
			requestAnimationFrame(() => {
				if (typeof dd.setData === "function") dd.setData(data, initialId);
				dd.addEventListener("select", () => {
					const sel = dd.selectedValue;
					if (!sel) return;
					SimVar.SetSimVarValue(lvarName, "number", parseFloat(sel.ID));
				});
			});
			return;
		}
		if (type === "text") {
			// Native <input type="text"> works inside Coherent (text
			// input has no popup requirement). Commit on `change`
			// (blur or Enter-then-blur) rather than per-keystroke so
			// we're not encoding + writing 16 chunks for every
			// character the user types — Python applies the new
			// value once the user is done editing.
			//
			// Key capture: when focus enters the input, we have to
			// stop MSFS from routing typed characters to the sim
			// (otherwise letters would trigger flight bindings — L
			// toggling landing lights while the user types their
			// nickname, etc.). The triple guard mirrors the inline
			// input prompt's flow at #gsxInputText:
			//   1. `capturingInput` flag — gates the panel's own
			//      window-level hotkey / 1-9 handler.
			//   2. `FOCUS_INPUT_FIELD` Coherent trigger — tells MSFS
			//      the sim should stop receiving key events. Empty
			//      strings for title/description/value so MSFS
			//      doesn't pop its native input dialog (a known
			//      gotcha — see the comment block on the existing
			//      inline input path).
			//   3. keydown stopPropagation — belt-and-braces so any
			//      typed key doesn't bubble to a sim-binding
			//      handler installed inside the panel.
			// All three reversed on blur.
			const maxLen   = parseInt(row.getAttribute("data-maxlength") || "48", 10);
			const placeholder = row.getAttribute("data-placeholder") || "";
			// Slot name MUST match the Python side's `_StringSlot`
			// instantiation in GSX/settingsPanel.py — `SET_S_<KEY>`.
			// `writeStringSlot` builds the full LVar name as
			// `L:FSDT_GSX_<slot>_LEN` / `_B<i>`, so we pass only the
			// slot portion. 16 chunks matches the Python-side
			// capacity (16 × 4 chars = 64 base64 chars ≈ 48 raw
			// UTF-8 bytes, comfortably over the field's maxLen).
			const slotName   = "SET_S_" + key.toUpperCase();
			const slotChunks = 16;
			const input = document.createElement("input");
			input.type = "text";
			input.id = "gsxSetText-" + key;
			input.maxLength = maxLen;
			input.placeholder = placeholder;
			input.value = valueStr;
			input.addEventListener("focus", () => {
				this.capturingInput = true;
				try {
					Coherent.trigger("FOCUS_INPUT_FIELD",
						"gsxSetText", "", "", "", false /* isNumeric */);
				} catch (e) { /* not in scope */ }
			});
			input.addEventListener("blur", () => {
				this.capturingInput = false;
				try {
					Coherent.trigger("UNFOCUS_INPUT_FIELD", "gsxSetText");
				} catch (e) { /* not in scope */ }
			});
			input.addEventListener("keydown", (e) => {
				// stopPropagation BEFORE the window-level keydown
				// handler at the panel's top sees the event — that
				// handler routes everything past the `capturingInput`
				// gate to `_handleInputModeKey`, which is for the
				// inline OK/Cancel prompt and would consume Enter /
				// Escape without committing this input's value.
				e.stopPropagation();
				if (e.keyCode === 13 || e.key === "Enter" ||
				    e.keyCode === 27 || e.key === "Escape") {
					// Blur the input — fires `change`, which
					// writes the new value to the slot. Escape
					// commits the current value too (rather than
					// reverting); per-field undo would mean
					// stashing a baseline at focus time and
					// re-writing it on Escape, which adds complexity
					// we don't need for a live-commit form.
					e.preventDefault();
					input.blur();
				}
			});
			input.addEventListener("change", () => {
				this.writeStringSlot(slotName, input.value || "", slotChunks);
			});
			ctrl.appendChild(input);
			return;
		}
		if (type === "action") {
			// One-shot pulse button. JS writes 1 to the mirror LVar
			// on click; Python's watcher sees the rising edge, runs
			// the schema's `action` callback (open log folder, etc.),
			// then writes 0 back through a per-action
			// SimDataDefinition so a subsequent click re-arms the
			// edge. Plain <button> rather than the MSFS web component
			// new-push-button to keep the chrome consistent with
			// our own .gsx-set-action styling — and because the row
			// already provides label + tooltip, so we don't need the
			// new-push-button's internal label / icon slots.
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "gsx-set-action-btn";
			btn.textContent = row.getAttribute("data-button") || "Open";
			if (row.getAttribute("data-disabled") === "1") {
				// Inert action (e.g. "Clear" with nothing assigned). The row
				// carries gsx-set-field--disabled for the greyed styling; we
				// just suppress the click so no pulse is written.
				btn.disabled = true;
			} else {
				btn.addEventListener("click", () => {
					SimVar.SetSimVarValue(lvarName, "number", 1);
				});
			}
			ctrl.appendChild(btn);
			return;
		}
		if (type === "info") {
			// No binding — the row's value is baked into the HTML
			// at render time. Nothing to wire up here.
			return;
		}
	}

	_diffStatus(target, html)
	{
		// Parse the incoming HTML into a disposable scratch container,
		// then reconcile children against `target` in place. Structural
		// changes (different tag/class, add/remove) fall through to a
		// cloneNode replacement; stable elements get their attributes
		// synced and their subtrees recursed. Text nodes update only
		// when their content actually differs.
		const scratch = document.createElement('div');
		scratch.innerHTML = html;
		this._diffChildren(target, scratch);
	}

	_diffChildren(oldParent, newParent)
	{
		const oldNodes = Array.from(oldParent.childNodes);
		const newNodes = Array.from(newParent.childNodes);
		const maxLen = Math.max(oldNodes.length, newNodes.length);
		for (let i = 0; i < maxLen; i++) {
			const oldN = oldNodes[i];
			const newN = newNodes[i];
			if (!oldN && newN) {
				oldParent.appendChild(newN.cloneNode(true));
				continue;
			}
			if (oldN && !newN) {
				oldParent.removeChild(oldN);
				continue;
			}
			if (oldN.nodeType !== newN.nodeType) {
				oldParent.replaceChild(newN.cloneNode(true), oldN);
				continue;
			}
			if (oldN.nodeType === Node.TEXT_NODE) {
				if (oldN.nodeValue !== newN.nodeValue) {
					oldN.nodeValue = newN.nodeValue;
				}
				continue;
			}
			if (oldN.nodeType === Node.ELEMENT_NODE) {
				// Replace when the element class/tag changes — a
				// different service taking a slot, or a .has-icon
				// line replacing a plain one — so pseudo-element
				// state resets cleanly.
				if (oldN.tagName !== newN.tagName ||
					oldN.className !== newN.className) {
					oldParent.replaceChild(newN.cloneNode(true), oldN);
					continue;
				}
				this._syncAttributes(oldN, newN);
				this._diffChildren(oldN, newN);
			}
		}
	}

	_syncAttributes(oldEl, newEl)
	{
		// Drop attrs present on old but absent on new.
		for (const a of Array.from(oldEl.attributes)) {
			if (!newEl.hasAttribute(a.name)) oldEl.removeAttribute(a.name);
		}
		// Set/update the rest.
		for (const a of Array.from(newEl.attributes)) {
			if (oldEl.getAttribute(a.name) !== a.value) {
				oldEl.setAttribute(a.name, a.value);
			}
		}
	}

	// True when the status page is the visible face of the panel
	// (IDLE_PINNED). Used by the hotkey handler, tooltip rerouting,
	// and the settings-change refresh. Elements' `.style.display`
	// is `""` when never set (CSS default applies) and `"none"` when
	// hidden; anything else means actively shown.
	//
	// Also gates on the enclosing `ingameUi` being visible — the
	// status page keeps its own `display` value when the user closes
	// the toolbar panel, so without this guard tooltips would keep
	// being rerouted into an invisible status page (missed
	// high-altitude cruise warnings etc. during flight).
	_isStatusPageVisible()
	{
		if (!this.ingameUi || this.ingameUi.style.display === "none")
			return false;
		return this.statusPage
			&& this.statusPage.style.display !== "none"
			&& this.statusPage.style.display !== "";
	}

	// Classic desktop "hide" of the menu UI: cancel any pending
	// Python receive, hide the ingame-ui, stop polling, reset
	// MENU_OPEN. Panel remains marked active on the toolbar. Same
	// sequence the pre-pinned-mode code did for closeWithChoice(-1).
	_classicHide()
	{
		this.setMenuChoiceVar(CHOICE_CANCEL);
		this.hideMenu();
		this._stopAllPolling();
		this.setMenuOpenVar(0);
	}

	refreshPinnedState()
	{
		// Called when Python signals that settings may have changed
		// (EXTERNAL_SYSTEM_TOGGLE=6). Reconciles the panel's current
		// display state with the current `pinnedEffective` resolution:
		//   - Now pinned + panel was hidden (classic) → show the
		//     pinned-idle state so the user sees the status page.
		//   - No longer pinned + currently in pinned-idle → classic
		//     hide, matching what the X icon does in non-VR.
		//   - Active menu or no panel change needed → no-op (Python
		//     will resume the natural flow on the next interaction).
		const pinned = this.isPinnedEffective();
		const panelHidden = this.ingameUi && this.ingameUi.style.display === "none";

		if (pinned && panelHidden)
		{
			this.showPinnedIdle();
		}
		else if (!pinned && this._isStatusPageVisible())
		{
			this._classicHide();
		}
	}

	onStatusOpenMenu(event)
	{
		// Re-engage the Python container menu. MENU_OPEN is pulse-like
		// on the Python side: menuOpen() reacts to 0→1 and resets to 0.
		// If a menu is already active (unlikely from this state), Python
		// sends -3 on the channel (cancel) and the user gets the
		// container again on the next click. Matches the close-and-reopen
		// flow from classic mode.
		console.log("[GSX Menu] status page GSX Menu button clicked");
		this.setMenuOpenVar(1);
		this.setMenuChoiceVar(CHOICE_REQUEST_MENU);
	}

	fireHotkey()
	{
		// The GSX-menu hotkey toggle, shared by the keyboard keydown handler
		// and the controller button (FIRE_HOTKEY K-event from Python). Reads
		// the ACTUAL panel state every time, so it stays correct no matter how
		// the menu was last opened/closed (hotkey, click, X button, timeout).
		if (this.ingameUi.style.display == "none")
			this.checkMenu();                 // hidden -> open
		else if (this._isStatusPageVisible())
			this.onStatusOpenMenu();          // pinned-idle -> re-engage menu
		else if (this.isPinnedEffective())
			this.showPinnedIdle();            // menu up, pinned -> status page
		else
			this._classicHide();              // menu up, classic -> hide panel
	}

	showLoadingMenu(text = "")
	{
		this.isLoading = true; // Set loading flag
		this._removeTooltip();

		// A load is starting — cancel any pending "drop to status page"
		// timer left over from a prior click.
		this._clearTimer('_pinnedIdleTimeout');
		// Tear down any in-menu document iframe — a stale document
		// from a prior menu must not bleed into the loading state's
		// chrome. _fetchMenuDocument will refire when the next menu
		// file lands and re-shows the iframe if Python attached a
		// document to that menu.
		this._applyMenuDocument("");
		this._applyMenuHtml("");

		// Keep pagePrompt visible during loading and use it as the
		// loading title — hiding it adds visual noise, but leaving
		// stale text from the previous menu / pinned-idle state is
		// confusing too. CSS `order: -1` on #pagePrompt renders it
		// above loadingPrompt despite the HTML source order.
		if (this.pagePrompt) {
			const localizedValue = GSX_ZH_CN.translateText(text || "Loading GSX Menu, please wait...");
			this.pagePrompt.textContent = localizedValue;
			// Drop the MSFS-2024 blue gradient that gets applied as
			// inline style on showMenu — for the loading title we want
			// the default h3 dark backdrop, not the menu-active styling.
			this.pagePrompt.style.background = "";
			this.pagePrompt.style.display = "initial";
		}
		if (this.statusPage) this.statusPage.style.display = "none";
		// Collapse dynamicArea and bottomBar during loading so the
		// loading image/prompt centers naturally via justify-content:
		// center on the panel (bottomBar's margin-top:auto otherwise
		// consumes all vertical space and pushes everything to the top).
		if (this.dynamicArea) this.dynamicArea.style.display = "none";
		if (this.bottomBar) this.bottomBar.style.display = "none";
		if (this.loadingPrompt)
		{
			// pagePrompt now carries the loading text; loadingPrompt
			// is just a host for the progress-bars container. Stay
			// hidden until updateProgressBar wakes it up to show
			// bars — avoids an empty h3 box appearing during text-
			// only loading states.
			this.loadingPrompt.classList.remove("has-progress");
			this.loadingPrompt.textContent = "";
			this.loadingPrompt.style.display = "none";
		}

		if (this.loadingImage) this.loadingImage.style.display = "initial";
		if (this.remoteImage) this.remoteImage.style.display = "none";

		// Hide all buttons using cached elements
		this._setButtonRangeDisplay(1, MAX_MENU_BUTTON_ID, "none");

		console.log("showLoadingMenu()");
		if (this.ingameUi) this.ingameUi.style.display = "initial";
	}

	showMenu()
	{
		console.log("showMenu()");
		this.stopContinuousMenuCheck();
		this.isLoading = false;

		// Panel-liveness heartbeat — runs while a menu is on screen so Python
		// can tell the menu left the screen even when it has no other way to
		// know (the MSFS toolbar kills this JS instantly, with no close event).
		// Stopped in hideMenu; on a toolbar kill the interval just dies with the
		// JS and Python sees the beats stop. Clear-and-restart (rather than a
		// live-pulse guard) so a stale interval ref left by a prior kill/reopen
		// can't block it. Python uses this ONLY to gate the remote menu-visible
		// signal — never to drive the menu loop.
		this._clearInterval('_panelAlivePulse');
		const beat = () => {
			this._panelAliveCtr = ((this._panelAliveCtr || 0) + 1) & 0x3fffffff;
			SimVar.SetSimVarValue(SIMVAR_PANEL_ALIVE, "number", this._panelAliveCtr);
		};
		beat();
		this._panelAlivePulse = setInterval(beat, PANEL_ALIVE_PULSE_MS);
		// Same reasoning as showLoadingMenu — tear down any in-menu
		// document iframe so a stale document from a prior menu
		// doesn't bleed in. Belt-and-braces in case the active-menu
		// transition skipped the loading stage (e.g., direct showMenu
		// from a cached menu file). _fetchMenuDocument re-shows it
		// if the new menu has a document attached.
		this._applyMenuDocument("");
		this._applyMenuHtml("");

		// Refresh VR-root class before the menu paints so the first
		// frame already reflects the live VR state (no brief flash of
		// non-disabled buttons if the user opens the menu while in VR).
		this._refreshVrState();

		// Restart is fully complete once a real menu is on screen —
		// from either fileLoaded's success branch or the continuous-
		// check fallback. Clear the flag and cancel the safety timer
		// so future loading messages use their requested text.
		if (this._restartingMenu) {
			this._restartingMenu = false;
			if (this._restartingMenuTimeout) {
				clearTimeout(this._restartingMenuTimeout);
				this._restartingMenuTimeout = null;
			}
		}

		// New menu arrived — cancel any pending "drop to status page"
		// timer from a prior dynamic-button click, and hide the status
		// page in case we were already in IDLE_PINNED.
		this._clearTimer('_pinnedIdleTimeout');
		if (this.statusPage) this.statusPage.style.display = "none";
		// Re-enable dynamicArea, its button group, and the bottom bar
		// (showLoadingMenu / showPinnedIdle may have collapsed them).
		if (this.dynamicArea) this.dynamicArea.style.display = "flex";
		if (this.dynamicButtons) this.dynamicButtons.style.display = "flex";
		if (this.bottomBar) this.bottomBar.style.display = "flex";

		// Start heartbeat monitoring while menu is displayed — detect
		// crash even when the user is just looking at the menu. The
		// engine-shutdown case (user menu restart, tray-bar restart,
		// sim quit) is push-based: Couatl fires the RESTARTING
		// K-event from Application::cleanup which the
		// onKeyIntercepted handler routes to _enterRestartingState,
		// no polling needed here.
		this._clearInterval('_heartbeatPoll');
		this._lastDisplayedHb = SimVar.GetSimVarValue(SIMVAR_GSX_HEARTBEAT, "number");
		// Require two consecutive stuck-heartbeat samples before declaring
		// a crash. A single 5s window can legitimately stall (modal
		// dialogs, slow disk IO, simulator scenery loads) without the
		// engine actually being dead — those false positives produced a
		// brief "GSX engine has stopped" flash followed by immediate
		// recovery. Tracking a small consecutive-miss counter avoids that.
		this._heartbeatStuckCount = 0;
		this._heartbeatPoll = setInterval(() =>
		{
			// Skip the whole tick if simvar.js's internal `simvar`
			// binding is transiently undefined — happens during an
			// MSFS VR scene swap where the Coherent view is destroyed
			// and recreated underneath our live interval. Any SimVar
			// read during the gap logs "Accessing a property on a
			// destroyed object" (simvar.js catches internally, so
			// try/catch here can't see it). `typeof` is safe on an
			// undeclared/TDZ identifier and never triggers the warning.
			let simvarReady = false;
			try {
				// eslint-disable-next-line no-undef
				simvarReady = (typeof simvar !== "undefined");
			} catch (e) {}
			if (!simvarReady) return;

			// Live remote-control check. The third-party app is the
			// authoritative UI under remote control, so any visible
			// in-sim panel surface (active menu or pinned-idle status
			// page) must close as soon as we notice the transition —
			// we can't rely on the user clicking something to trigger
			// the showMenu remote-control branch. closePanel()
			// implicitly stops this interval via _stopAllPolling.
			if (SimVar.GetSimVarValue(SIMVAR_REMOTE_CONTROL, "number"))
			{
				console.log("Remote control engaged — closing panel.");
				this.closePanel();
				return;
			}

			// Reflect runtime VR enter/exit onto the panel root so the
			// VR-disabled styling tracks without needing a menu refresh.
			this._refreshVrState();

			// Skip during a deliberate restart — the dying old engine
			// reads as stuck for several seconds and we don't want to
			// surface the crash UI for a user-initiated restart.
			if (this._restartingMenu) return;
			let hb = SimVar.GetSimVarValue(SIMVAR_GSX_HEARTBEAT, "number");
			if (this._lastDisplayedHb !== undefined && hb === this._lastDisplayedHb && hb > 0)
			{
				this._heartbeatStuckCount++;
				if (this._heartbeatStuckCount >= 2) {
					clearInterval(this._heartbeatPoll);
					this._heartbeatPoll = null;
					this._showCrashMessage();
					return;
				}
			} else {
				this._heartbeatStuckCount = 0;
			}
			this._lastDisplayedHb = hb;
		}, HEARTBEAT_POLL_INTERVAL_MS);
	
		// Hide loading indicators FIRST
		if (this.loadingPrompt) this.loadingPrompt.style.display = "none";
		if (this.loadingImage) this.loadingImage.style.display = "none";
	
		// Now, make the correct menu items visible. dynamicArea's
		// explicit min-height (10 × button slot) keeps the overall
		// slot the same height whether the menu shows 3 or 10 entries,
		// so hidden buttons can freely use display:none without
		// shrinking the panel.
		if (this.currentTextLines && this.nEntries > 0) {
			for (let i = 1; i <= MAX_DYNAMIC_MENU_BUTTONS; i++) {
				const btn = this.menuButtons[i];
				if (btn) {
					if (i <= this.nEntries && this.currentTextLines[i] && this.currentTextLines[i].trim() !== '') {
						btn.style.display = "initial";
					} else {
						btn.style.display = "none";
					}
				}
			}
			// Fixed menu buttons (11-14 — exclude SimBrief button 15)
			this._setButtonRangeDisplay(MAX_DYNAMIC_MENU_BUTTONS + 1, MAX_MENU_BUTTON_ID - 1, "initial");
		} else {
			// No menu content — all buttons collapsed (exclude SimBrief).
			this._setButtonRangeDisplay(1, MAX_MENU_BUTTON_ID - 1, "none");
		}
	
		this.remoteControl = SimVar.GetSimVarValue(SIMVAR_REMOTE_CONTROL, "number");
		this.simBriefSuccess = SimVar.GetSimVarValue(SIMVAR_SIMBRIEF_SUCCESS, "number");
	
		if (this.remoteControl == 0)
		{
			if (this.remoteImage) this.remoteImage.style.display = "none";
			if (this.pagePrompt)
			{
				this.pagePrompt.style.display = "initial";
				this._applyMs2024Gradient();
			}


			if (this.simBriefBtn)
			{
				this.simBriefBtn.style.display = "initial";
				this.updateSimBriefButton();
			}

			this._refreshWarningBanner();
		}
		else
		{
			let remoteMsg = "GSX is under Remote Control, menu will close now...";
			this._notify(remoteMsg, REMOTE_CONTROL_ACTIVE_MSG_DURATION_S);
			console.log(remoteMsg);
	
			this.hideAllButtons();
			if (this.remoteImage) this.remoteImage.style.display = "initial";
			if (this.loadingPrompt)
			{
				this.loadingPrompt.style.display = "initial";
				this.loadingPrompt.textContent = "GSX Remote Control";
			}
			setTimeout(() =>
			{
				this.closePanel();
			}, CONTINUOUS_CHECK_INTERVAL_MS);
		}
	
		if (this.ingameUi) this.ingameUi.style.display = "initial";
	}

	showOutdatedWarning() {
		if (this.gsxTestVersion) {
			this._showBanner(
				'gsx-testversion-warning-banner',
				'gsx-testversion-warning-message',
				'GSX Pro Test v' + this.gsxVersionString,
				'☺'); // happy face
		} else {
			this._showBanner(
				'gsx-outdated-warning-banner',
				'gsx-outdated-warning-message',
				'GSX Pro outdated v' + this.gsxVersionString + ', latest is v' + this.gsxRemoteVersionString,
				'☹'); // sad face
		}
	}

	showHotfixStatus() {
		const hotfixStatus = SimVar.GetSimVarValue(SIMVAR_GSX_HOTFIX_STATUS, "number");
		if (hotfixStatus == 0) {
			this._clearBanner();
			return;
		}
		let msgText = "";
		let onClick = null;
		if (hotfixStatus == 1) {
			msgText = "Hotfix downloading...";
		} else if (hotfixStatus == 2) {
			// Banner is the only entry point for applying a hotfix
			// now — the old in-menu "Apply hotfix and restart GSX"
			// choice was removed because users found it too invasive
			// (it hijacked the opening menu every session). Click
			// pulses FSDT_GSX_HOTFIX_APPLY=1 → Python's combined
			// hotkey/hotfix periodic callback runs _applyHotfix
			// which os._exit(0)s the process for the boot-side
			// restarter to apply staged files and relaunch. We
			// drop straight into the same restarting-state loading
			// page used by the in-menu "Restart GSX" choice so the
			// stale menu doesn't linger until heartbeat-poll
			// declares the engine dead.
			msgText = "OK Hotfix ready - click here to apply";
			onClick = () => {
				console.log("[GSX] hotfix banner clicked — pulsing FSDT_GSX_HOTFIX_APPLY=1");
				SimVar.SetSimVarValue(SIMVAR_GSX_HOTFIX_APPLY, "number", 1);
				this._enterRestartingState("Applying hotfix, please wait...");
			};
		} else {
			console.log("Unexpected GSX hotfix status: " + hotfixStatus);
			this._clearBanner();
			return;
		}
		this._showBanner(
			'gsx-testversion-warning-banner',
			'gsx-testversion-warning-message',
			msgText,
			null,
			onClick);
	}

	// FSDT-42. Same shape as the hotfix-ready banner: something was
	// downloaded in the background and one click applies it. The click
	// goes through the very same path as the bottom bar's "Restart
	// Couatl" button (button14 → closeWithChoice(13)) rather than a new
	// mechanism — that path already handles the awkward part, namely
	// keeping the loading screen up while the dying engine lingers for
	// ~2s before COUATL_STARTED drops.
	//
	// Deliberately NOT auto-applied: a restart mid-turnaround would
	// abort whatever service is running. The user picks the moment.
	showAddOnUpdateBanner()
	{
		// Kept to ONE line, and therefore kept short — same length as the
		// outdated banner's text, which is the proven fit at this font
		// size. The original wording ("...click here to restart and
		// apply") wrapped, and a wrapped message also grows the solid
		// plate to the full banner width, swallowing the striped margin
		// on the left. See .gsx-update-banner in the CSS.
		this._showBanner(
			'gsx-testversion-warning-banner gsx-update-banner',
			'gsx-testversion-warning-message',
			"GSX update downloaded - click to restart and apply",
			null,
			() => {
				console.log("[GSX] update banner clicked — restarting Couatl to apply");
				// Mirrors the hotfix banner's "Applying hotfix, please wait...":
				// the restart IS the apply step (promotion runs at the top of
				// couatl_main), so the wait should name that, not the mechanism.
				this.closeWithChoice(CHOICE_CONTEXT_CLOSE_RESTART_ENGINE,
					"Applying update, please wait...");
			});
	}

	updateSimBriefButton()
	{
		if (this.isLoading || this.remoteControl)
		{
			return; // Don't update if still loading or outdated
		}
	
		this.simBriefSuccess = SimVar.GetSimVarValue(SIMVAR_SIMBRIEF_SUCCESS, "number");
		// this.simBriefBtn is already cached in connectedCallback

		if (this.simBriefBtn)
		{
			if (this.simBriefSuccess == 0)
			{
				// Loading state (0 means we just clicked reload)
				this.simBriefBtn.style.background = "#505050"; // Dark grey
				this.simBriefBtn.style.color = "#FFFFFF";
				// Don't update text here - let the animation handle it
				this._setSimBriefStatus("");

				// Start animation if not already running
				if (!this.simBriefLoadingInterval) {
					if (this.simBriefBtnLabel) {
						this.simBriefBtnLabel.textContent = SIMBRIEF_LOADING_TEXT + '.';
					}
					this.startSimBriefLoadingAnimation();
				}
			}
			else if (this.simBriefSuccess == 1)
			{
				// Stop animation when we get a response
				this.stopSimBriefLoadingAnimation();

				this.simBriefBtn.style.background = "#008000"; // Green for success
				this.simBriefBtn.style.color = "#FFFFFF";
				if (this.simBriefBtnLabel) {
					this.simBriefBtnLabel.textContent = "SimBrief OK";
				}
				this._setSimBriefStatus("");
			}
			else
			{
				// Stop animation when we get a response
				this.stopSimBriefLoadingAnimation();

				// Read the actual status / error text Python pushed
				// into the JS-bridge SIMBRIEF_ERR slot. Replaces the
				// old code → message map: Python is now the single
				// source of truth, JS just renders whatever's there.
				const errMsg = this.readStringSlot("SIMBRIEF_ERR", SIMBRIEF_ERR_SLOT_CHUNKS);

				this.simBriefBtn.style.background = "#F02020"; // Red for error/issue
				this.simBriefBtn.style.color = "#FFFFFF";
				if (this.simBriefBtnLabel) {
					this.simBriefBtnLabel.textContent = SIMBRIEF_RELOAD_TEXT;
				}
				this._setSimBriefStatus(errMsg || "Unknown SimBrief status.");
			}
			// Don't force display here — visibility is managed by
			// showMenu() / showLoadingMenu() / hideMenu() to avoid
			// the button flashing during menu transitions.
		}
	}

	tooltipLoaded(text, timeOut)
	{
		if (text != '' && timeOut > 0)
		{
			this._notify(text, timeOut);
			console.log(text + " " + timeOut);
		}
		else
		{
			this._cancelNotification();
		}
	}

	hideAllButtons()
	{
		for (let i = 1; i <= MAX_MENU_BUTTON_ID; i++)
		{
			const btn = this.menuButtons[i];
			if( btn )
			{
				if( i <= MAX_DYNAMIC_MENU_BUTTONS ) // Only clear text for dynamic buttons
				{
					btn.textContent = "";
					// Also drop the updateMenuItems short-circuit cache —
					// otherwise reopening the panel with the same menu
					// content sees `_lastHtml === newHtml` and skips the
					// innerHTML re-write, leaving the cleared buttons blank.
					btn._lastHtml = undefined;
				}
				btn.style.display = "none";
			}
		}
		if (this.loadingImage) this.loadingImage.style.display = "none";
		if (this.remoteImage) this.remoteImage.style.display = "none";
		if (this.loadingPrompt) this.loadingPrompt.style.display = "none";
		if (this.pagePrompt) this.pagePrompt.style.display = "none";
		if (this.outdatedMsg) this.outdatedMsg.style.display = "none";
		if (this.statusPage) this.statusPage.style.display = "none";
		if (this.dynamicArea) this.dynamicArea.style.display = "none";
		if (this.bottomBar) this.bottomBar.style.display = "none";
	}

	updateMenuItems(textLines)
	{
		// Hide loading menu elements
		if (this.loadingPrompt) this.loadingPrompt.style.display = "none";
		if (this.loadingImage) this.loadingImage.style.display = "none";

		const localizeMenuText = (value) => {
			const sourceText = value == null ? "" : String(value);
			if (!window.GSX_ZH_CN || typeof window.GSX_ZH_CN.translateText !== "function") return sourceText;
			return window.GSX_ZH_CN.translateText(sourceText);
		};
		const localizedTextLines = textLines.map(localizeMenuText);
	
		// Update page prompt. The main title comes from textLines[0]
		// (mirror of the canonical ./menu file). An optional subtitle
		// rides a separate SimConnect slot — never touches the menu
		// file, so 3rd-party automation tools that parse ./menu still
		// see only the canonical single-line title. Always emit the
		// title in a <span class="title-main"> child of #pagePrompt
		// (NOT a bare text node) so the flex-column layout in CSS
		// gives the title bar a consistent height whether the
		// subtitle is present or not — inline text nodes interact
		// badly with the flex item's line-box height math and let
		// the bar resize when transitioning between with/without-
		// subtitle menus. When present, the subtitle is a sibling
		// <span class="subtitle"> rendered on a second row in a
		// smaller font (fixed-header + variable-subject layout,
		// e.g. "Activate Services at:" + "<gate name>"). Uses
		// createTextNode / createElement rather than innerHTML so
		// the text is never parsed as HTML.
		if (this.pagePrompt) {
			const title = localizedTextLines[0] || "";
			const subtitle = localizeMenuText(this.readStringSlot("MENU_SUBTITLE", MENU_SUBTITLE_MAX_CHUNKS) || "");
			this.pagePrompt.innerHTML = "";
			const main = document.createElement("span");
			main.className = "title-main";
			main.appendChild(document.createTextNode(title));
			this.pagePrompt.appendChild(main);
			if (subtitle) {
				const sub = document.createElement("span");
				sub.className = "subtitle";
				sub.appendChild(document.createTextNode(subtitle));
				this.pagePrompt.appendChild(sub);
			}
		}
	
		// VR-disabled bitmap for dynamic entries — Python writes it
		// alongside the menu file; bit (i-1) tags button i as a
		// wx-dialog option. Read once per refresh and apply the
		// `vr-disabled` class below; the styling and click-swallow
		// activate only when `.in-vr` is live on the panel root
		// (refreshed by the heartbeat poll / showMenu on VR toggle).
		const vrMask = SimVar.GetSimVarValue(SIMVAR_MENU_VR_MASK, "number") | 0;

		// Update variable menu buttons (1-10) - Set text and click handlers ONLY
		for (let i = 1; i <= MAX_DYNAMIC_MENU_BUTTONS; i++)
		{
			const btn = this.menuButtons[i];
			if (btn)
			{
				btn.classList.toggle("vr-disabled", (vrMask & (1 << (i - 1))) !== 0);
				if (i <= this.nEntries && localizedTextLines[i] && localizedTextLines[i].trim() !== '')
				{
					var optionN = (i == MAX_DYNAMIC_MENU_BUTTONS) ? 0 : i; // Button 10 maps to choice 0
					// Render the digit as a small inline-SVG keycap
					// (same template as the GSX-Menu hotkey caps)
					// instead of the old "1  -  " plain-text prefix.
					// Wrapped in `.option-keycap` so CSS can scale it
					// smaller than the hotkey keycaps and keep the
					// button's line height unchanged.
					const labelSafe = String(localizedTextLines[i])
						.replace(/&/g, "&amp;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;");
					// Punch the glyph larger inside the viewBox since
					// the option cap renders at a smaller CSS height
					// than the hotkey caps — default 50/116.7 text
					// ratio would read tiny here.
					const optionCap = this.renderKeycapSvg(optionN.toString(), { textSize: 75, textY: 82 });
					// Wrap the three child spans in a `<div
					// class="option-row">` flex container we
					// fully control — Coherent's new-push-button
					// shadow-DOM slot doesn't make slotted children
					// flex items of the host element (slot lives
					// inside the shadow tree, which is its own
					// layout context). Putting the spans inside
					// OUR flex div restores a predictable
					// containing block: the label gets
					// `flex: 1 1 0; min-width: 0` against this
					// wrapper, and `text-overflow: ellipsis`
					// truncates correctly when the label runs out
					// of room.
					const newHtml =
						'<div class="option-row">' +
						'<span class="option-keycap">' + optionCap + '</span>' +
						'<span class="option-label">' + labelSafe + '</span>' +
						'<span class="vr-marker"><img src="coui://html_ui/InGamePanels/FSDT_GSX_Panel/icons/vr-headset.svg" alt="VR" /></span>' +
						'</div>';
					// Skip `innerHTML =` when the content hasn't changed:
					// Coherent reparses the full SVG subtree on every
					// assignment even for byte-identical strings, which
					// becomes the dominant cost when a menu refresh fires
					// with the same options. Tagging the last-set HTML on
					// the button element side-steps the reparse entirely.
					if (btn._lastHtml !== newHtml) {
						btn.innerHTML = newHtml;
						btn._lastHtml = newHtml;
						console.log("Update menu item " + i + " content: " + localizedTextLines[i]);
						// Visual-only hover tooltip: carries the
						// full un-clamped label text via the `title`
						// attribute, picked up by the CSS pseudo-
						// element rule. The DOM attribute lives only
						// on this rendered button — the underlying
						// `menu` text file is untouched.
						// Defer the overflow check to next frame so
						// layout is finalised; strip the title from
						// labels that fit (no duplicate tooltip).
						btn.setAttribute("title", localizedTextLines[i]);
						requestAnimationFrame(() => {
							const lbl = btn.querySelector(".option-label");
							if (!lbl) return;
							const overflowed = lbl.scrollHeight > lbl.clientHeight + 1
											|| lbl.scrollWidth > lbl.clientWidth + 1;
							if (!overflowed) {
								btn.removeAttribute("title");
							}
						});
					}
					// DO NOT set btn.style.display here. Visibility is handled by showMenu().
					// Assign the shared bound handler; skip when already set
					// so repeat refreshes don't churn the onclick slot.
					if (btn.onclick !== this._btnOptionBound) {
						btn.onclick = this._btnOptionBound;
					}
				}
				else
				{
					// If no content, ensure it's cleared and will remain hidden by showMenu()
					if (btn._lastHtml !== "") {
						btn.innerHTML = "";
						btn._lastHtml = "";
						btn.removeAttribute("title");
					}
				}
			}
		}
	
		// Update fixed menu buttons (11-15) - Set click handlers ONLY if they are meant to be generic
		// Visibility for these is also handled by showMenu()
		for (let i = MAX_DYNAMIC_MENU_BUTTONS + 1; i <= MAX_MENU_BUTTON_ID; i++)
		{
			const btn = this.menuButtons[i];
			if (btn)
			{
				// DO NOT set btn.style.display here.
				// Assign the shared bound handler; skip when already set
				// to keep the 2nd/Nth open work-free.
				if (btn.onclick !== this._btnOptionBound) {
					btn.onclick = this._btnOptionBound;
					console.log("Set onclick for fixed menu item " + i);
				}
				// Text content for fixed buttons (11-14) is usually static in HTML or set elsewhere if needed
			}
		}
	}

	btnOption(event)
	{
		// Use currentTarget (the button the listener is bound to), not
		// target — clicks on the inner .option-keycap / .option-label
		// spans land on those children, which have no id, and target.id
		// would be empty. currentTarget is always the buttonN element.
		const btn = event.currentTarget || event.target;
		// VR-incompatible entry (would open a wxPython dialog) —
		// swallow the click silently. CSS already signals the disabled
		// state visually with greyed text + "(VR)" suffix; no channel
		// message is sent to Python, so the menu stays open.
		if (this.ingameUi && this.ingameUi.classList.contains("in-vr")
			&& btn.classList && btn.classList.contains("vr-disabled"))
		{
			console.log("[GSX Menu] VR-disabled entry click ignored: " + btn.id);
			return;
		}
		let btnStr = btn.id.split(MENU_BUTTON_ID_PREFIX)[1];
		if (btnStr)
		{
			let btnNum = parseInt(btnStr) - 1;
			console.log("[GSX Menu] You clicked " + btnNum);
			this.closeWithChoice(Number(btnNum));
		}
	}
}

window.customElements.define("ingamepanel-fsdt-gsx", IngamePanelGSX);
checkAutoload();
