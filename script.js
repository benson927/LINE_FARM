const staff = [
  { id: "#ADM-0822", name: "張偉勤", email: "zhang.wq@farm.com", role: "系統管理員", roleClass: "role-admin", last: "2026-05-21 14:22:05", status: "活躍中", statusClass: "status-active", action: "凍結", color: "#2fa0df" },
  { id: "#ADM-1205", name: "李曉梅", email: "li.xm@farm.com", role: "客服人員", roleClass: "role-support", last: "2026-05-21 09:15:44", status: "活躍中", statusClass: "status-active", action: "凍結", color: "#007f32" },
  { id: "#ADM-4412", name: "陳志明", email: "chen.zm@farm.com", role: "營運主管", roleClass: "role-lead", last: "2026-05-21 11:30:12", status: "活躍中", statusClass: "status-active", action: "凍結", color: "#ff9a45" },
  { id: "#ADM-2219", name: "林靜怡", email: "lin.jy@farm.com", role: "營運企劃", roleClass: "role-plan", last: "2026-05-20 16:15:00", status: "離線", statusClass: "status-offline", action: "凍結", color: "#9b4ce0" },
  { id: "#ADM-0007", name: "周杰倫", email: "zhou.jl@farm.com", role: "營運主管", roleClass: "role-lead", last: "2026-05-12 11:00:00", status: "已封禁", statusClass: "status-banned", action: "解封", color: "#ff9a45" },
  { id: "#ADM-9981", name: "黃健弘", email: "huang.jh@farm.com", role: "系統管理員", roleClass: "role-admin", last: "2026-05-19 10:18:08", status: "活躍中", statusClass: "status-active", action: "凍結", color: "#2fa0df" },
  { id: "#ADM-5523", name: "蔡淑芬", email: "tsai.sf@farm.com", role: "客服人員", roleClass: "role-support", last: "2026-05-18 15:44:20", status: "活躍中", statusClass: "status-active", action: "凍結", color: "#007f32" },
  { id: "#ADM-7761", name: "吳家豪", email: "wu.jh@farm.com", role: "營運企劃", roleClass: "role-plan", last: "2026-05-15 13:22:36", status: "離線", statusClass: "status-offline", action: "凍結", color: "#9b4ce0" }
];

const logs = [
  ["10:45:22 AM", "JB", "James Brown", "修改用戶鑽石餘額", "USR_882910", "成功", "ok"],
  ["10:42:01 AM", "SC", "Sally Cony", "發布活動", "EVT_SPRING_24", "成功", "ok"],
  ["10:38:55 AM", "ML", "Moon Leonard", "封鎖帳號：惡意腳本", "USR_221004", "成功", "ok"],
  ["10:35:12 AM", "JB", "James Brown", "推送通知廣播", "GLOBAL_PUSH_01", "處理中", "pending"]
];

const permissions = [
  ["權限安全", "", "員工帳號管理", "建立、停用後台管理帳號"],
  ["權限安全", "", "檢視審計日誌", "查閱所有管理員的操作歷史紀錄"],
  ["玩家管理", "module-player", "玩家資訊修改", "修正異常庫存與凍結違規帳號"],
  ["玩家管理", "module-player", "客訴虛寶補償", "針對單一玩家 UID 進行鑽石/金幣補發"],
  ["商城活動", "module-shop", "商城商品上架", "商城商品的檔期上架、下架與定價調整"],
  ["商城活動", "module-shop", "發送全服獎勵", "建立全服節慶活動與公告郵件批次派獎"],
  ["數據報表", "", "營收報表匯出", "查詢並下載 PDF 格式的商城營收統計"]
];

const rolePermissionStates = {
  系統管理員: [true, true, true, true, true, true, true],
  營運主管: [false, false, false, false, false, false, true],
  營運企劃: [false, false, false, false, true, true, false],
  客服人員: [false, false, true, true, false, false, false]
};

const auditLogs = [
  { id: "LOG-1017", time: "2026-05-25 14:22", operator: "#ADM-4412 陳志明", action: "權限安全", detail: "修改了 營運企劃 的【商城商品上架】權限。", ip: "10.24.18.45", result: "成功" },
  { id: "LOG-1016", time: "2026-05-24 09:15", operator: "#ADM-9981 黃健弘", action: "帳號管理", detail: "建立了新管理員帳號 #ADM-1205 (李曉梅)。", ip: "10.24.11.28", result: "成功" },
  { id: "LOG-1015", time: "2026-05-20 10:00", operator: "系統自動執行", action: "帳號管理", detail: "系統自動凍結逾期未登入帳號 #ADM-0007。", ip: "system", result: "成功" },
  { id: "LOG-1014", time: "2026-05-19 14:30", operator: "#ADM-3345 郭可欣", action: "權限安全", detail: "修改了 客服人員 的權限範圍。", ip: "10.24.33.41", result: "成功" },
  { id: "LOG-1013", time: "2026-05-18 16:45", operator: "#ADM-6678 徐志航", action: "數據報表", detail: "匯出了 Q1 營收報表 (PDF 格式)。", ip: "10.24.21.07", result: "成功" },
  { id: "LOG-1012", time: "2026-05-17 02:00", operator: "系統自動執行", action: "系統維護", detail: "系統自動備份資料庫完成。", ip: "system", result: "成功" },
  { id: "LOG-1011", time: "2026-05-16 18:20", operator: "#ADM-2219 林靜怡", action: "活動任務", detail: "更新了金秋豐收節活動任務獎勵。", ip: "10.24.19.82", result: "成功" },
  { id: "LOG-1010", time: "2026-05-15 11:32", operator: "#ADM-1205 李曉梅", action: "帳號管理", detail: "解除玩家客服追蹤標記 USR-552091。", ip: "10.24.11.65", result: "成功" },
  { id: "LOG-1009", time: "2026-05-14 20:05", operator: "#ADM-4412 陳志明", action: "數據報表", detail: "下載商城商品銷售明細 CSV。", ip: "10.24.18.45", result: "成功" }
];

const eventTasks = [
  { id: "Q-10024", name: "每日灌溉達人", reward: "ⓢ 500 金幣", rate: 92.4, status: "活躍" },
  { id: "Q-10089", name: "珍稀品種發現者", reward: "♢ 50 鑽石", rate: 14.8, status: "活躍" },
  { id: "Q-10112", name: "農場社區周報", reward: "ⓢ 1000 金幣", rate: 56.2, status: "待上線" }
];

const rewardItems = [
  { name: "鑽石", qty: 100, icon: "♢" },
  { name: "高級作物肥料", qty: 5, icon: "♻" }
];

const mailHistory = [
  { title: "端午節登入好禮", date: "已發送 2026-05-21", active: true },
  { title: "緊急維護補償", date: "已發送 2026-05-18", active: true },
  { title: "新版本預告信", date: "草稿 2026-05-15", active: false }
];

const players = [
  { uid: "USR-882910", name: "熊田小農", line: "brown_farmer88", email: "brown88@farm.com", level: 78, vip: 6, coins: 128940, diamonds: 820, stamina: 54, lastLogin: "2026-06-02 17:42", status: "正常", risk: "低", frozen: false },
  { uid: "USR-221004", name: "莓果研究員", line: "berry_lab", email: "berry@farm.com", level: 45, vip: 2, coins: 32120, diamonds: 140, stamina: 21, lastLogin: "2026-06-01 09:18", status: "觀察中", risk: "中", frozen: false },
  { uid: "USR-552091", name: "南瓜倉管", line: "pumpkin_keep", email: "pumpkin@farm.com", level: 63, vip: 4, coins: 87400, diamonds: 410, stamina: 39, lastLogin: "2026-05-31 22:10", status: "正常", risk: "低", frozen: false },
  { uid: "USR-770013", name: "腳本嫌疑戶", line: "auto_cropper", email: "risk@farm.com", level: 92, vip: 1, coins: 992340, diamonds: 12, stamina: 99, lastLogin: "2026-05-28 02:41", status: "凍結", risk: "高", frozen: true }
];

const playerInventories = {
  "USR-882910": [
    { category: "貨幣", name: "金幣", qty: 128940, source: "活動/商店", updated: "2026-06-02 17:40" },
    { category: "貨幣", name: "鑽石", qty: 820, source: "儲值/補償", updated: "2026-06-01 11:20" },
    { category: "作物", name: "南瓜", qty: 340, source: "農田收成", updated: "2026-06-02 16:10" },
    { category: "道具", name: "高級肥料", qty: 18, source: "活動獎勵", updated: "2026-05-30 12:00" }
  ],
  "USR-221004": [
    { category: "貨幣", name: "金幣", qty: 32120, source: "任務", updated: "2026-06-01 09:18" },
    { category: "素材", name: "基因樣本", qty: 7, source: "活動兌換", updated: "2026-05-29 18:32" },
    { category: "作物", name: "草莓", qty: 128, source: "農田收成", updated: "2026-06-01 08:15" }
  ],
  "USR-552091": [
    { category: "貨幣", name: "金幣", qty: 87400, source: "訂單", updated: "2026-05-31 21:20" },
    { category: "道具", name: "倉庫擴充券", qty: 3, source: "商城", updated: "2026-05-29 10:12" },
    { category: "素材", name: "木材", qty: 460, source: "生產", updated: "2026-05-31 22:10" }
  ],
  "USR-770013": [
    { category: "貨幣", name: "金幣", qty: 992340, source: "異常交易", updated: "2026-05-28 02:41" },
    { category: "作物", name: "小麥", qty: 12000, source: "高頻收成", updated: "2026-05-28 02:40" }
  ]
};

const compItems = [
  { name: "鑽石", type: "貨幣", qty: 50, icon: "♢" },
  { name: "金幣", type: "貨幣", qty: 1000, icon: "ⓢ" }
];

const compHistory = [
  { title: "USR-221004 活動獎勵未到帳", date: "已補償 50 鑽石" },
  { title: "USR-552091 商城購買異常", date: "已補償 1000 金幣" },
  { title: "USR-882910 維護補償", date: "已補償高級肥料 x 3" }
];

const notifications = [
  { icon: "ⓘ", title: "新功能上線：自動稽核報告", text: "系統現在支援每週自動生成安全稽核報告，您可以在「安全日誌」中設定接收對象。", time: "5 分鐘前", unread: true },
  { icon: "♢", title: "權限審核通過", text: "系統管理員 張偉勤 已核准您的【全服發送獎勵】操作申請。", time: "2 小時前", unread: true },
  { icon: "✓", title: "帳號匯入成功", text: "您上傳的「2024_Q2_新進員工名單.csv」已完成處理，共新增 48 個帳號。", time: "3 小時前", unread: false },
  { icon: "△", title: "密碼即將過期", text: "您的登入密碼將於 3 天後過期，請儘速前往「個人帳號設定」進行更新。", time: "5 小時前", unread: false, danger: true },
  { icon: "⊘", title: "登入地點異常提醒", text: "偵測到您的帳號從未見過的 IP 位置登入，若非本人操作請立即更改密碼。", time: "昨天 10:20", unread: false, danger: true }
];

const shopSchedules = [
  { name: "超級農場禮盒", status: "進行中", start: "2026-05-18 00:00", end: "2026-05-21 23:59", price: "$98.00 / 980💎", old: "$280.00" },
  { name: "金幣包(1000枚)", status: "待發布", start: "2026-05-21 12:00", end: "2026-05-23 20:00", price: "500💎", old: "" },
  { name: "自動收割機(30天)", status: "待發布", start: "2026-05-29 12:00", end: "2026-06-02 23:59", price: "¥15.00 / 30天", old: "" },
  { name: "新手首充包", status: "已結束", start: "2026-05-11 00:00", end: "2026-05-13 23:59", price: "¥6.00", old: "" },
  { name: "高級化肥組合包", status: "已結束", start: "2026-05-11 00:00", end: "2026-05-13 23:59", price: "1215💎", old: "" }
];

const promotionProducts = [
  { id: "PRD-0042", name: "高級小麥種子", oldPrice: 50, cost: 27.5, icon: "▣" },
  { id: "PRD-0108", name: "超級農場禮盒", oldPrice: 34.99, cost: 16.2, icon: "◈" },
  { id: "PRD-0211", name: "金幣包(1000枚)", oldPrice: 5, cost: 1.4, icon: "ⓢ" },
  { id: "PRD-0305", name: "高級化肥組合包", oldPrice: 12.15, cost: 4.8, icon: "♻" },
  { id: "PRD-0440", name: "限定皮膚包", oldPrice: 19.99, cost: 7.2, icon: "◇" }
];

const promotionState = {
  selectedProductIds: ["PRD-0042"],
  discountType: "percent",
  discountValue: 20,
  start: "",
  end: "",
  audiences: ["all"]
};

const promotions = [
  { id: "PROMO-1001", name: "高級小麥種子限時折扣", discount: "20%", product: "高級小麥種子", period: "2026-06-05 - 2026-06-12", status: "草稿" },
  { id: "PROMO-1002", name: "秋季限定促銷", discount: "30%", product: "超級農場禮盒", period: "2026-05-18 - 2026-05-21", status: "進行中" },
  { id: "PROMO-1003", name: "VIP 鑽石回饋", discount: "10%", product: "金幣包(1000枚)", period: "2026-06-01 - 2026-06-15", status: "待發布" }
];

const shopOrders = [
  ["ORD-8821", "USR-882910", "超級農場禮盒", "$19.99", "2026-05-18 10:22", "已付款"],
  ["ORD-8822", "USR-221004", "金幣包(1000枚)", "500💎", "2026-05-21 12:40", "已付款"],
  ["ORD-8823", "USR-552091", "自動收割機(30天)", "¥15.00", "2026-05-29 13:15", "退款中"],
  ["ORD-8824", "USR-770013", "高級化肥組合包", "1215💎", "2026-05-12 09:05", "已退款"]
];

const revenueRows = [
  ["超級農場禮盒", "4,201", "$83,920", "12.8%"],
  ["金幣包(1000枚)", "2,840", "$28,400", "9.4%"],
  ["自動收割機(30天)", "1,020", "$15,300", "6.1%"],
  ["新手首充包", "850", "$5,100", "18.2%"]
];

const defaultProductionItems = [
  { id: "CROP-WHEAT", name: "小麥", type: "作物", unlock: 1, minutes: 2, output: "小麥", yield: 2, price: 7, enabled: true, note: "基礎作物，用於麵包與多數早期配方。" },
  { id: "CROP-CORN", name: "玉米", type: "作物", unlock: 3, minutes: 5, output: "玉米", yield: 2, price: 12, enabled: true, note: "常用於飼料與玉米麵包。" },
  { id: "CROP-SOY", name: "大豆", type: "作物", unlock: 7, minutes: 12, output: "大豆", yield: 2, price: 22, enabled: true, note: "中期加工材料，建議避免過量掉落。" },
  { id: "CROP-CARROT", name: "胡蘿蔔", type: "作物", unlock: 9, minutes: 18, output: "胡蘿蔔", yield: 2, price: 31, enabled: true, note: "任務與訂單消耗頻率高。" },
  { id: "CROP-RICE", name: "稻米", type: "作物", unlock: 12, minutes: 30, output: "稻米", yield: 2, price: 46, enabled: true, note: "用於飯糰與亞洲主題活動。" },
  { id: "CROP-TOMATO", name: "番茄", type: "作物", unlock: 15, minutes: 45, output: "番茄", yield: 2, price: 61, enabled: true, note: "用於果汁與漢堡配方。" },
  { id: "CROP-STRAWBERRY", name: "草莓", type: "作物", unlock: 21, minutes: 90, output: "草莓", yield: 2, price: 98, enabled: true, note: "高價值作物，常作活動兌換材料。" },
  { id: "ANIMAL-CHICKEN", name: "母雞", type: "動物", unlock: 2, minutes: 4, output: "雞蛋", yield: 1, price: 15, enabled: true, note: "早期畜產，配方依賴高。" },
  { id: "ANIMAL-COW", name: "乳牛", type: "動物", unlock: 6, minutes: 20, output: "牛奶", yield: 1, price: 38, enabled: true, note: "蛋糕、咖啡與甜點常用。" },
  { id: "ANIMAL-PIG", name: "豬", type: "動物", unlock: 14, minutes: 35, output: "豬肉", yield: 1, price: 65, enabled: true, note: "漢堡類配方核心材料。" },
  { id: "ANIMAL-BEE", name: "蜜蜂箱", type: "動物", unlock: 19, minutes: 60, output: "蜂蜜", yield: 1, price: 88, enabled: false, note: "活動檔期限定，預設停用。" }
];

let productionItems = defaultProductionItems.map((item) => ({ ...item }));

const recipeFacilities = ["麵包店", "果汁店", "蛋糕店", "咖啡廳", "漢堡店"];

const recipes = [
  { id: "REC-BREAD", name: "麵包", facility: "麵包店", minutes: 5, price: 24, enabled: true, note: "早期訂單與任務基礎加工品。", ingredients: [{ name: "小麥", qty: 2 }] },
  { id: "REC-CORNBREAD", name: "玉米麵包", facility: "麵包店", minutes: 12, price: 42, enabled: true, note: "新手活動常用消耗品。", ingredients: [{ name: "小麥", qty: 1 }, { name: "玉米", qty: 2 }] },
  { id: "REC-TOMATO-JUICE", name: "番茄汁", facility: "果汁店", minutes: 18, price: 58, enabled: true, note: "可作為每日任務回收口。", ingredients: [{ name: "番茄", qty: 3 }] },
  { id: "REC-STRAWBERRY-CAKE", name: "草莓蛋糕", facility: "蛋糕店", minutes: 45, price: 138, enabled: true, note: "高價值加工品，適合限時任務。", ingredients: [{ name: "草莓", qty: 2 }, { name: "牛奶", qty: 1 }, { name: "雞蛋", qty: 1 }] },
  { id: "REC-LATTE", name: "蜂蜜拿鐵", facility: "咖啡廳", minutes: 35, price: 116, enabled: false, note: "蜜蜂箱停用時應同步下架。", ingredients: [{ name: "牛奶", qty: 2 }, { name: "蜂蜜", qty: 1 }] },
  { id: "REC-BURGER", name: "農場漢堡", facility: "漢堡店", minutes: 50, price: 160, enabled: true, note: "中後期訂單高收益品。", ingredients: [{ name: "麵包", qty: 1 }, { name: "豬肉", qty: 1 }, { name: "番茄", qty: 1 }] }
];

const settingsState = {
  language: "繁體中文",
  fontSize: "標準",
  idleTime: "15 分鐘"
};

const settingOptions = {
  language: [
    { label: "繁體中文 (Taiwan)", sub: "Traditional Chinese", value: "繁體中文", icon: "🇹🇼" },
    { label: "English (US)", sub: "美國英語", value: "English", icon: "🇺🇸" },
    { label: "日本語", sub: "Japanese", value: "日本語", icon: "🇯🇵" },
    { label: "한국어", sub: "Korean", value: "한국어", icon: "🇰🇷" }
  ],
  fontSize: [
    { label: "超大", value: "超大", icon: "Tt" },
    { label: "大", value: "大", icon: "Tt" },
    { label: "標準", value: "標準", icon: "Tt" },
    { label: "小", value: "小", icon: "Tt" }
  ],
  idleTime: [
    { label: "5 分鐘", value: "5 分鐘", icon: "◷" },
    { label: "10 分鐘", value: "10 分鐘", icon: "◷" },
    { label: "15 分鐘", value: "15 分鐘", icon: "◷" },
    { label: "30 分鐘", value: "30 分鐘", icon: "◷" },
    { label: "1 小時", value: "1 小時", icon: "◷" },
    { label: "永久 (不建議)", value: "永久", icon: "△", warning: true }
  ]
};

const pages = {
  dashboard: "dashboardPage",
  staff: "staffPage",
  permissions: "permissionsPage",
  audit: "auditLogPage",
  eventTasks: "eventTasksPage",
  mailRewards: "mailRewardsPage",
  shopSchedule: "shopSchedulePage",
  shopCreate: "shopCreatePage",
  shopPromotions: "shopPromotionsPage",
  shopOrders: "shopOrdersPage",
  shopRevenue: "shopRevenuePage",
  playerBasic: "playerBasicPage",
  playerInventory: "playerInventoryPage",
  playerCompensation: "playerCompensationPage",
  productionConfig: "productionConfigPage",
  recipeConfig: "recipeConfigPage"
};

const loginView = document.querySelector("#loginView");
const appView = document.querySelector("#appView");
const overlay = document.querySelector("#overlay");
const toast = document.querySelector("#toast");
let activePermissionRole = "系統管理員";
let editingStaffIndex = null;
let editingTaskIndex = null;
let deletingTaskIndex = null;
let selectedPlayerUid = players[0].uid;
let pendingPlayerStatusUid = null;
let selectedProductionId = productionItems[0].id;
let selectedRecipeId = recipes[0].id;
let auditPage = 1;
let auditSortDesc = true;
let auditDateRange = ["2026-05-07", "2026-06-02"];
const auditPageSize = 6;
const currentOperator = "#ADM-0822 張偉勤";
const currentIp = "10.24.18.88";
const demoToday = "2026-06-02";
let auditSequence = Math.max(...auditLogs.map((log) => Number(log.id.replace("LOG-", ""))));

function showApp() {
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");
}

function openModal(id) {
  overlay.classList.remove("hidden");
  document.querySelector(id).classList.remove("hidden");
}

function closeModals() {
  overlay.classList.add("hidden");
  document.querySelectorAll(".modal").forEach((modal) => modal.classList.add("hidden"));
}

function closeTopDropdowns(except = null) {
  ["#notificationMenu", "#settingsMenu", "#userMenu"].forEach((selector) => {
    if (selector !== except) document.querySelector(selector).classList.add("hidden");
  });
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 1800);
}

function renderLogs() {
  const body = document.querySelector("#recentLogs");
  body.innerHTML = logs
    .map(([time, initials, admin, action, target, status, className]) => `
      <tr>
        <td>${time}</td>
        <td><span class="admin-cell"><span class="initial">${initials}</span><strong>${admin}</strong></span></td>
        <td>${action}</td>
        <td>${target}</td>
        <td><span class="status-pill ${className}">${status}</span></td>
      </tr>
    `)
    .join("");
}

function renderStaff() {
  const body = document.querySelector("#staffRows");
  body.innerHTML = staff
    .slice(0, 5)
    .map((person, index) => `
      <tr>
        <td>${person.id}</td>
        <td>
          <span class="staff-person">
            <span class="initial" style="background:${person.color}; color:#fff">${person.name[0]}</span>
            <span>
              <button type="button" data-staff-index="${index}">${person.name}</button>
              <small>${person.email}</small>
            </span>
          </span>
        </td>
        <td><span class="role-tag ${person.roleClass}">${person.role}</span></td>
        <td>${person.last}</td>
        <td><span class="${person.statusClass}">● ${person.status}</span></td>
        <td><button class="text-action" type="button" data-staff-action="${index}">${person.action}</button></td>
      </tr>
    `)
    .join("");
}

function renderPermissions() {
  const body = document.querySelector("#permissionRows");
  const roleStates = rolePermissionStates[activePermissionRole];
  body.innerHTML = permissions
    .map(([module, moduleClass, title, desc], index) => `
      <div class="permission-row">
        <span class="module-pill ${moduleClass}">${module}</span>
        <p>${title}<small>${desc}</small></p>
        <button class="toggle ${roleStates[index] ? "" : "off"}" type="button" aria-label="切換 ${title}"></button>
      </div>
    `)
    .join("");
}

function getFilteredAuditLogs() {
  const keyword = document.querySelector("#auditSearchInput")?.value.trim().toLowerCase() || "";
  const action = document.querySelector("#auditActionFilter")?.value || "all";
  return auditLogs
    .filter((log) => action === "all" || log.action === action)
    .filter((log) => !keyword || `${log.id} ${log.time} ${log.operator} ${log.action} ${log.detail}`.toLowerCase().includes(keyword))
    .filter((log) => log.time.slice(0, 10) >= auditDateRange[0] && log.time.slice(0, 10) <= auditDateRange[1])
    .sort((a, b) => auditSortDesc ? b.time.localeCompare(a.time) : a.time.localeCompare(b.time));
}

function renderAuditLogs() {
  const body = document.querySelector("#auditRows");
  const filtered = getFilteredAuditLogs();
  const pageCount = Math.max(1, Math.ceil(filtered.length / auditPageSize));
  auditPage = Math.min(auditPage, pageCount);
  const pageRows = filtered.slice((auditPage - 1) * auditPageSize, auditPage * auditPageSize);
  body.innerHTML = pageRows
    .map((log) => `
      <tr>
        <td><button class="log-id-button" type="button" data-audit-id="${log.id}">${log.id}</button></td>
        <td>${log.time}</td>
        <td>${log.operator}</td>
        <td>${log.action}</td>
        <td>${log.detail}</td>
      </tr>
    `)
    .join("");
  document.querySelector("#auditResultCount").textContent = `目前顯示 ${filtered.length} 筆`;
  document.querySelector("#auditPageLabel").textContent = `第 ${auditPage} / ${pageCount} 頁`;
  document.querySelector("#prevAuditPage").disabled = auditPage <= 1;
  document.querySelector("#nextAuditPage").disabled = auditPage >= pageCount;
  document.querySelector("#sortAuditTime").textContent = auditSortDesc ? "依時間排序 ↓" : "依時間排序 ↑";
}

function renderTasks(filter = "") {
  const keyword = filter.trim().toLowerCase();
  const body = document.querySelector("#taskRows");
  body.innerHTML = eventTasks
    .map((task, index) => ({ task, index }))
    .filter(({ task }) => !keyword || task.id.toLowerCase().includes(keyword) || task.name.toLowerCase().includes(keyword))
    .map(({ task, index }) => `
      <tr>
        <td>${task.id}</td>
        <td><strong>${task.name}</strong></td>
        <td>${task.reward}</td>
        <td><span class="task-progress"><i style="width:${task.rate}%"></i></span>${task.rate}%</td>
        <td><span class="status-pill ${task.status === "活躍" ? "ok" : "neutral"}">${task.status}</span></td>
        <td>
          <span class="row-actions">
            <button type="button" data-task-edit="${index}" aria-label="編輯任務">✎</button>
            <button type="button" data-task-delete="${index}" aria-label="刪除任務">▢</button>
          </span>
        </td>
      </tr>
    `)
    .join("");
}

function renderRewards() {
  const wrap = document.querySelector("#rewardItems");
  wrap.innerHTML = rewardItems
    .map((item, index) => `
      <article class="reward-item">
        <span class="reward-icon">${item.icon}</span>
        <strong>${item.name}<small>x ${item.qty}</small></strong>
        <button type="button" data-remove-reward="${index}" aria-label="移除獎勵">×</button>
      </article>
    `)
    .join("");
}

function renderMailHistory() {
  const list = document.querySelector("#mailHistory");
  list.innerHTML = mailHistory
    .map((item) => `<li class="${item.active ? "" : "inactive"}">${item.title}<small>⊙ ${item.date}</small></li>`)
    .join("");
}

function getFilteredPlayers() {
  const keyword = document.querySelector("#playerSearchInput")?.value.trim().toLowerCase() || "";
  const status = document.querySelector("#playerStatusFilter")?.value || "all";
  return players.filter((player) => {
    const haystack = `${player.uid} ${player.name} ${player.line} ${player.email}`.toLowerCase();
    return (!keyword || haystack.includes(keyword)) && (status === "all" || player.status === status);
  });
}

function renderPlayerRows() {
  const body = document.querySelector("#playerRows");
  const filtered = getFilteredPlayers();
  document.querySelector("#playerResultCount").textContent = `${filtered.length} 筆玩家`;
  body.innerHTML = filtered
    .map((player) => `
      <tr>
        <td>${player.uid}</td>
        <td><span class="player-name-cell"><strong>${player.name}</strong><small>LINE: ${player.line}</small></span></td>
        <td>Lv.${player.level}</td>
        <td>VIP ${player.vip}</td>
        <td>${player.lastLogin}</td>
        <td><span class="status-pill ${player.status === "凍結" ? "pending" : "ok"}">${player.status}</span></td>
        <td>
          <span class="row-actions">
            <button type="button" data-player-detail="${player.uid}" aria-label="查看玩家詳情">◎</button>
            <button type="button" data-player-status="${player.uid}" aria-label="凍結或解凍玩家">${player.frozen ? "解" : "凍"}</button>
          </span>
        </td>
      </tr>
    `)
    .join("");
  renderPlayerProfile(filtered[0] || players[0]);
}

function renderPlayerProfile(player) {
  selectedPlayerUid = player.uid;
  document.querySelector("#playerProfileCard").innerHTML = `
    <h3>${player.name}</h3>
    <p>${player.uid}</p>
    <div class="profile-meta">
      <p><span>Email</span><strong>${player.email}</strong></p>
      <p><span>LINE ID</span><strong>${player.line}</strong></p>
      <p><span>等級 / VIP</span><strong>Lv.${player.level} / VIP ${player.vip}</strong></p>
      <p><span>風險標記</span><strong>${player.risk}</strong></p>
      <p><span>金幣</span><strong>${player.coins.toLocaleString()}</strong></p>
      <p><span>鑽石</span><strong>${player.diamonds.toLocaleString()}</strong></p>
    </div>
    <div class="profile-actions">
      <button class="primary-button compact" type="button" data-profile-inventory="${player.uid}">查看背包庫存</button>
      <button class="outline-button" type="button" data-profile-comp="${player.uid}">建立補償單</button>
    </div>
  `;
}

function openPlayerDetail(uid) {
  const player = players.find((item) => item.uid === uid);
  if (!player) return;
  selectedPlayerUid = uid;
  document.querySelector("#playerDetailSubtitle").textContent = uid;
  document.querySelector("#playerDetailBody").innerHTML = `
    <p><span>玩家暱稱</span><strong>${player.name}</strong></p>
    <p><span>Email</span><strong>${player.email}</strong></p>
    <p><span>LINE ID</span><strong>${player.line}</strong></p>
    <p><span>等級 / VIP</span><strong>Lv.${player.level} / VIP ${player.vip}</strong></p>
    <p><span>最後登入</span><strong>${player.lastLogin}</strong></p>
    <p><span>帳號狀態</span><strong>${player.status}</strong></p>
    <p><span>風險標記</span><strong>${player.risk}</strong></p>
  `;
  openModal("#playerDetailModal");
}

function getFilteredInventory() {
  const playerKeyword = document.querySelector("#inventoryPlayerSearch")?.value.trim().toLowerCase() || "";
  const category = document.querySelector("#inventoryCategoryFilter")?.value || "all";
  const selectedPlayer = players.find((player) => player.uid === selectedPlayerUid) || players[0];
  const matchingPlayers = players.filter((player) => !playerKeyword || `${player.uid} ${player.name}`.toLowerCase().includes(playerKeyword));
  if (!matchingPlayers.some((player) => player.uid === selectedPlayerUid)) selectedPlayerUid = matchingPlayers[0]?.uid || selectedPlayer.uid;
  const inventory = playerInventories[selectedPlayerUid] || [];
  return inventory.filter((item) => category === "all" || item.category === category);
}

function renderInventoryPlayers() {
  const keyword = document.querySelector("#inventoryPlayerSearch")?.value.trim().toLowerCase() || "";
  const list = document.querySelector("#inventoryPlayerList");
  list.innerHTML = players
    .filter((player) => !keyword || `${player.uid} ${player.name}`.toLowerCase().includes(keyword))
    .map((player) => `
      <button class="inventory-player-button ${player.uid === selectedPlayerUid ? "active" : ""}" type="button" data-inventory-player="${player.uid}">
        <strong>${player.name}</strong>
        <small>${player.uid} · ${player.status}</small>
      </button>
    `)
    .join("");
}

function renderInventory() {
  const player = players.find((item) => item.uid === selectedPlayerUid) || players[0];
  const rows = getFilteredInventory();
  document.querySelector("#inventoryTitle").textContent = `${player.name} 的背包與庫存`;
  document.querySelector("#currencySummary").innerHTML = `
    <article><p>金幣</p><strong>${player.coins.toLocaleString()}</strong></article>
    <article><p>鑽石</p><strong>${player.diamonds.toLocaleString()}</strong></article>
    <article><p>體力</p><strong>${player.stamina}</strong></article>
  `;
  document.querySelector("#inventoryRows").innerHTML = rows
    .map((item) => `<tr><td>${item.category}</td><td><strong>${item.name}</strong></td><td>${item.qty.toLocaleString()}</td><td>${item.source}</td><td>${item.updated}</td></tr>`)
    .join("");
  renderInventoryPlayers();
}

function renderCompItems() {
  document.querySelector("#compItems").innerHTML = compItems
    .map((item, index) => `
      <article class="reward-item">
        <span class="reward-icon">${item.icon}</span>
        <strong>${item.name}<small>${item.type} x ${item.qty}</small></strong>
        <button type="button" data-remove-comp="${index}" aria-label="移除補償">×</button>
      </article>
    `)
    .join("");
}

function renderCompHistory() {
  document.querySelector("#compHistory").innerHTML = compHistory
    .map((item) => `<li>${item.title}<small>⊙ ${item.date}</small></li>`)
    .join("");
}

function renderShopSchedules() {
  document.querySelector("#shopScheduleRows").innerHTML = shopSchedules
    .map((item, index) => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><span class="status-pill ${item.status === "進行中" ? "ok" : "neutral"}">${item.status}</span></td>
        <td>${item.start}<br />至 ${item.end}</td>
        <td><strong>${item.price}</strong></td>
        <td><span class="row-actions"><button type="button" data-shop-detail="${index}">✎</button><button type="button" data-shop-detail="${index}">◎</button></span></td>
      </tr>
    `)
    .join("");
  document.querySelector("#shopRecentLogs").innerHTML = `
    <li><strong>管理員更新了 超級農場禮盒 的上架時間</strong><small>2 小時前</small></li>
    <li>系統自動結束了 新手首充包 的促銷活動<small>5 小時前</small></li>
  `;
}

function renderShopCalendar() {
  const labels = ["日", "一", "二", "三", "四", "五", "六"];
  const chips = {
    1: ["勞動節道具大賞"],
    5: ["立夏種子禮包"],
    12: ["營運日例同步中"],
    18: ["週末閃購：高級肥料"],
    19: ["作物成長加速週"],
    20: ["作物成長加速週"],
    21: ["作物成長加速週"],
    25: ["作物成長加速週"],
    26: ["農場俱樂部特刊"]
  };
  document.querySelector("#shopCalendarGrid").innerHTML = labels.map((day) => `<strong class="shop-day">${day}</strong>`).join("") +
    Array.from({ length: 35 }, (_, i) => {
      const day = i - 3;
      const validDay = day > 0 && day <= 30;
      const dayChips = chips[day] || [];
      return `<div class="shop-day ${day === 12 ? "today" : ""}"><small>${validDay ? day : ""}</small>${dayChips.map((chip) => `<span class="shop-chip ${chip.includes("農場") ? "warn" : ""}">${chip}</span>`).join("")}</div>`;
    }).join("");
}

function renderPromotions() {
  document.querySelector("#promotionRows").innerHTML = promotions
    .map((promo) => `
      <tr>
        <td><strong>${promo.name}</strong><small>${promo.id}</small></td>
        <td>${promo.discount}</td>
        <td>${promo.product}</td>
        <td>${promo.period}</td>
        <td><span class="status-pill ${promo.status === "進行中" ? "ok" : "neutral"}">${promo.status}</span></td>
        <td><span class="row-actions"><button type="button" data-promo-edit="${promo.id}">✎</button><button type="button" data-promo-delete="${promo.id}">⌫</button></span></td>
      </tr>
    `)
    .join("");
}

function getSelectedPromoProduct() {
  return promotionProducts.find((product) => product.id === promotionState.selectedProductIds[0]) || promotionProducts[0];
}

function getPromoDiscountMeta() {
  const meta = {
    percent: { label: "折扣詳情", unit: "%", max: 95, badge: (value) => `SALE -${value}%`, text: (value) => `${value}%` },
    fixed: { label: "分級定價", unit: "¥", max: 999, badge: (value) => `VIP ¥${value}`, text: (value) => `¥${value}` },
    bundle: { label: "買 X 送 Y", unit: "組", max: 20, badge: (value) => `BUY ${value} GET 1`, text: (value) => `買 ${value} 送 1` },
    wallet: { label: "固定金額減免", unit: "¥", max: 999, badge: (value) => `-¥${value}`, text: (value) => `減免 ¥${value}` }
  };
  return meta[promotionState.discountType];
}

function calculatePromotionPrice(product) {
  const value = Number(promotionState.discountValue) || 0;
  if (promotionState.discountType === "percent") return Math.max(0, product.oldPrice * (1 - value / 100));
  if (promotionState.discountType === "fixed") return Math.max(0, value);
  if (promotionState.discountType === "wallet") return Math.max(0, product.oldPrice - value);
  return product.oldPrice;
}

function renderPromotionSelectedProducts() {
  const selected = promotionState.selectedProductIds.map((id) => promotionProducts.find((product) => product.id === id)).filter(Boolean);
  document.querySelector("#promoSelectedProducts").innerHTML = selected.map((product) => `
    <article class="promo-product-chip">
      <span>${product.icon}</span>
      <div><strong>${product.name}</strong><small>ID: ${product.id}</small></div>
      <button type="button" data-remove-promo-product="${product.id}" aria-label="移除商品">×</button>
    </article>
  `).join("") + `
    <button id="promoAddProduct" class="promo-add-product" type="button">＋ 添加更多產品</button>
  `;
}

function renderPromotionPreview() {
  const product = getSelectedPromoProduct();
  const meta = getPromoDiscountMeta();
  const price = calculatePromotionPrice(product);
  const grossMargin = Math.round(((product.oldPrice - product.cost) / product.oldPrice) * 100);
  const discountMargin = price > 0 ? Math.round(((price - product.cost) / price) * 100) : 0;
  const value = Number(promotionState.discountValue) || 0;
  const lift = promotionState.discountType === "percent" ? 60 + value * 7 : promotionState.discountType === "bundle" ? 118 : 92 + Math.round(value * 2.2);

  document.querySelector("#promoDiscountLabel").textContent = meta.label;
  document.querySelector("#promoDiscountUnit").textContent = meta.unit;
  document.querySelector("#promoDiscountValue").max = String(meta.max);
  document.querySelector("#promoBadge").textContent = meta.badge(value);
  document.querySelector("#promoPreviewName").textContent = product.name;
  document.querySelector("#promoPreviewOld").textContent = `¥${product.oldPrice.toFixed(2)}`;
  document.querySelector("#promoPreviewPrice").textContent = `¥${price.toFixed(2)}`;
  document.querySelector("#promoGrossMargin").textContent = `${grossMargin}%`;
  document.querySelector("#promoDiscountMargin").textContent = `${discountMargin}%`;
  document.querySelector("#promoDiscountMargin").classList.toggle("danger-text", discountMargin < 35);
  document.querySelector("#promoRevenueLift").textContent = `+${lift}%`;
  document.querySelector("#promoInsight").textContent = `${product.name} 在目前折扣下預估可提升轉換率，折扣後毛利${discountMargin < 35 ? "偏低，建議縮短有效期或限 VIP" : "維持在安全範圍"}。`;
  document.querySelectorAll(".discount-type").forEach((button) => button.classList.toggle("active", button.dataset.discountType === promotionState.discountType));
  renderPromotionSelectedProducts();
}

function renderOrders() {
  const keyword = document.querySelector("#orderSearch")?.value.trim().toLowerCase() || "";
  const status = document.querySelector("#orderStatusFilter")?.value || "all";
  document.querySelector("#orderRows").innerHTML = shopOrders
    .filter((row) => (!keyword || row.join(" ").toLowerCase().includes(keyword)) && (status === "all" || row[5] === status))
    .map((row, index) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}<td><button class="text-action" data-order-detail="${index}" type="button">查看</button></td></tr>`)
    .join("");
}

function renderRevenue() {
  document.querySelector("#revenueRows").innerHTML = revenueRows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
}

function addAuditRecord(action, detail) {
  auditSequence += 1;
  const time = `${demoToday} ${new Date().toLocaleTimeString("zh-TW", { hour12: false, hour: "2-digit", minute: "2-digit" })}`;
  const log = { id: `LOG-${auditSequence}`, time, operator: currentOperator, action, detail, ip: currentIp, result: "成功" };
  auditLogs.unshift(log);
  logs.unshift([time.slice(11), "ZW", "張偉勤", action, log.id, "成功", "ok"]);
  if (logs.length > 6) logs.pop();
  if (demoToday > auditDateRange[1]) auditDateRange[1] = demoToday;
  if (demoToday < auditDateRange[0]) auditDateRange[0] = demoToday;
  const dateButton = document.querySelector("#dateRangeButton");
  if (dateButton) dateButton.textContent = `▣ ${auditDateRange[0]} - ${auditDateRange[1]}`;
  const auditSearch = document.querySelector("#auditSearchInput");
  const auditFilter = document.querySelector("#auditActionFilter");
  if (auditSearch) auditSearch.value = "";
  if (auditFilter) auditFilter.value = "all";
  auditPage = 1;
  renderLogs();
  renderAuditLogs();
  return log;
}

function formatMinutes(minutes) {
  if (minutes < 60) return `${minutes} 分`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} 小時 ${rest} 分` : `${hours} 小時`;
}

function getProductionMaterials() {
  return new Set(productionItems.flatMap((item) => [item.name, item.output]));
}

function renderProductionItems() {
  const keyword = document.querySelector("#productionSearch")?.value.trim().toLowerCase() || "";
  const type = document.querySelector("#productionTypeFilter")?.value || "all";
  const filtered = productionItems.filter((item) => {
    const haystack = `${item.name} ${item.type} ${item.output} ${item.note}`.toLowerCase();
    return (!keyword || haystack.includes(keyword)) && (type === "all" || item.type === type);
  });

  document.querySelector("#productionRows").innerHTML = filtered
    .map((item) => `
      <tr class="${selectedProductionId === item.id ? "selected-row" : ""}">
        <td><strong>${item.name}</strong><small>${item.id}</small></td>
        <td><span class="status-pill neutral">${item.type}</span></td>
        <td>Lv.${item.unlock}</td>
        <td>${formatMinutes(item.minutes)}</td>
        <td>${item.output} x ${item.yield}</td>
        <td>${item.price} 金幣</td>
        <td><button class="toggle ${item.enabled ? "" : "off"}" type="button" data-prod-toggle="${item.id}" aria-label="切換狀態"></button></td>
        <td><button class="text-action" type="button" data-prod-edit="${item.id}">編輯</button></td>
      </tr>
    `)
    .join("");

  document.querySelector("#productionSummary").textContent = `${filtered.length} / ${productionItems.length} 個項目`;
  document.querySelector("#productionFastCount").textContent = productionItems.filter((item) => item.minutes < 5 && item.enabled).length;
  document.querySelector("#productionDisabledCount").textContent = productionItems.filter((item) => !item.enabled).length;
  renderProductionEditor();
}

function renderProductionEditor() {
  const item = productionItems.find((entry) => entry.id === selectedProductionId) || productionItems[0];
  if (!item) return;
  selectedProductionId = item.id;
  document.querySelector("#productionEditorBadge").textContent = item.type;
  document.querySelector("#prodName").value = item.name;
  document.querySelector("#prodOutput").value = item.output;
  document.querySelector("#prodUnlock").value = item.unlock;
  document.querySelector("#prodPrice").value = item.price;
  document.querySelector("#prodMinutes").value = item.minutes;
  document.querySelector("#prodYield").value = item.yield;
  document.querySelector("#prodNote").value = item.note;
  document.querySelector("#prodEnabled").checked = item.enabled;
}

function applyProductionEditor() {
  const item = productionItems.find((entry) => entry.id === selectedProductionId);
  if (!item) return;
  item.name = document.querySelector("#prodName").value.trim() || item.name;
  item.output = document.querySelector("#prodOutput").value.trim() || item.output;
  item.unlock = Number(document.querySelector("#prodUnlock").value) || item.unlock;
  item.price = Number(document.querySelector("#prodPrice").value) || 0;
  item.minutes = Number(document.querySelector("#prodMinutes").value) || item.minutes;
  item.yield = Number(document.querySelector("#prodYield").value) || item.yield;
  item.note = document.querySelector("#prodNote").value.trim();
  item.enabled = document.querySelector("#prodEnabled").checked;
  renderProductionItems();
  addAuditRecord("遊戲配置", `套用生產參數：${item.name}，時間 ${item.minutes} 分，售價 ${item.price}。`);
  showToast(`${item.name} 參數已套用`);
}

function renderRecipes() {
  const keyword = document.querySelector("#recipeSearch")?.value.trim().toLowerCase() || "";
  const facility = document.querySelector("#recipeFacilityFilter")?.value || "all";
  const materials = getProductionMaterials();
  const filtered = recipes.filter((recipe) => {
    const ingredientText = recipe.ingredients.map((item) => `${item.name} ${item.qty}`).join(" ");
    const haystack = `${recipe.name} ${recipe.facility} ${ingredientText} ${recipe.note}`.toLowerCase();
    return (!keyword || haystack.includes(keyword)) && (facility === "all" || recipe.facility === facility);
  });

  document.querySelector("#recipeCards").innerHTML = filtered
    .map((recipe) => {
      const missing = recipe.ingredients.some((item) => !materials.has(item.name));
      return `
        <article class="recipe-card ${selectedRecipeId === recipe.id ? "active" : ""}">
          <div>
            <h3>${recipe.name}</h3>
            <p>${recipe.facility} · ${formatMinutes(recipe.minutes)} · ${recipe.price} 金幣</p>
          </div>
          <div class="recipe-ingredients">
            ${recipe.ingredients.map((item) => `<span>${item.name} x ${item.qty}</span>`).join("")}
          </div>
          <footer>
            <span class="status-pill ${recipe.enabled && !missing ? "ok" : "pending"}">${missing ? "缺材料" : recipe.enabled ? "啟用" : "停用"}</span>
            <button class="text-action" type="button" data-recipe-edit="${recipe.id}">編輯</button>
          </footer>
        </article>
      `;
    })
    .join("");

  const activeRecipes = recipes.filter((recipe) => recipe.enabled);
  const avg = activeRecipes.length ? Math.round(activeRecipes.reduce((sum, recipe) => sum + recipe.minutes, 0) / activeRecipes.length) : 0;
  document.querySelector("#recipeSummary").textContent = `${filtered.length} / ${recipes.length} 個配方`;
  document.querySelector("#recipeAverageTime").textContent = `${avg} 分`;
  document.querySelector("#recipeRiskCount").textContent = recipes.filter((recipe) => !recipe.enabled || recipe.ingredients.some((item) => !materials.has(item.name))).length;
  renderRecipeEditor();
}

function renderRecipeEditor() {
  const recipe = recipes.find((entry) => entry.id === selectedRecipeId) || recipes[0];
  if (!recipe) return;
  selectedRecipeId = recipe.id;
  document.querySelector("#recipeEditorBadge").textContent = recipe.facility;
  document.querySelector("#recipeName").value = recipe.name;
  document.querySelector("#recipeFacility").innerHTML = recipeFacilities.map((facility) => `<option ${facility === recipe.facility ? "selected" : ""}>${facility}</option>`).join("");
  document.querySelector("#recipeMinutes").value = recipe.minutes;
  document.querySelector("#recipePrice").value = recipe.price;
  document.querySelector("#recipeNote").value = recipe.note;
  document.querySelector("#recipeEnabled").checked = recipe.enabled;
  renderRecipeIngredients();
}

function renderRecipeIngredients() {
  const recipe = recipes.find((entry) => entry.id === selectedRecipeId);
  if (!recipe) return;
  document.querySelector("#recipeIngredientList").innerHTML = recipe.ingredients
    .map((item, index) => `
      <span class="ingredient-chip">
        ${item.name} x ${item.qty}
        <button type="button" data-remove-ingredient="${index}" aria-label="移除材料">×</button>
      </span>
    `)
    .join("");
}

function applyRecipeEditor() {
  const recipe = recipes.find((entry) => entry.id === selectedRecipeId);
  if (!recipe) return;
  recipe.name = document.querySelector("#recipeName").value.trim() || recipe.name;
  recipe.facility = document.querySelector("#recipeFacility").value;
  recipe.minutes = Number(document.querySelector("#recipeMinutes").value) || recipe.minutes;
  recipe.price = Number(document.querySelector("#recipePrice").value) || 0;
  recipe.note = document.querySelector("#recipeNote").value.trim();
  recipe.enabled = document.querySelector("#recipeEnabled").checked;
  renderRecipes();
  addAuditRecord("遊戲配置", `套用加工配方：${recipe.name}，設施 ${recipe.facility}，時間 ${recipe.minutes} 分。`);
  showToast(`${recipe.name} 配方已套用`);
}

function openShopDetail(index) {
  const item = shopSchedules[index];
  document.querySelector("#shopDetailSubtitle").textContent = item.name;
  document.querySelector("#shopDetailBody").innerHTML = `
    <p><span>狀態</span><strong>${item.status}</strong></p>
    <p><span>開始時間</span><strong>${item.start}</strong></p>
    <p><span>結束時間</span><strong>${item.end}</strong></p>
    <p><span>售價</span><strong>${item.price}</strong></p>
    <p><span>原價</span><strong>${item.old || "無"}</strong></p>
  `;
  openModal("#shopDetailModal");
}

function renderNotifications() {
  document.querySelector("#notificationList").innerHTML = notifications
    .map((item) => `
      <article class="notification-item ${item.unread ? "unread" : ""} ${item.danger ? "danger" : ""}">
        <span>${item.icon}</span>
        <div><h4>${item.title}</h4><p>${item.text}</p></div>
        <time class="notification-time">${item.time}</time>
      </article>
    `)
    .join("");
  document.querySelector("#notificationButton").classList.toggle("has-dot", notifications.some((item) => item.unread));
}

function renderSettingChoices(type) {
  const target = document.querySelector(`#${type}Choices`);
  target.innerHTML = settingOptions[type]
    .map((option) => `
      <label class="choice-row ${settingsState[type] === option.value ? "active" : ""} ${option.warning ? "warning-choice" : ""}">
        <span class="setting-icon">${option.icon}</span>
        <span><strong>${option.label}</strong>${option.sub ? `<small>${option.sub}</small>` : ""}</span>
        <input class="hidden" type="radio" name="${type}" value="${option.value}" ${settingsState[type] === option.value ? "checked" : ""} />
        <i class="choice-dot"></i>
      </label>
    `)
    .join("");
}

function openSettingModal(type) {
  closeTopDropdowns();
  renderSettingChoices(type);
  const modalMap = {
    language: "#languageModal",
    fontSize: "#fontSizeModal",
    idleTime: "#idleTimeModal"
  };
  openModal(modalMap[type]);
}

function saveSetting(type) {
  const checked = document.querySelector(`input[name="${type}"]:checked`);
  if (checked) settingsState[type] = checked.value;
  document.querySelector("#currentLanguageLabel").textContent = settingsState.language;
  document.querySelector("#currentFontSizeLabel").textContent = settingsState.fontSize;
  document.querySelector("#currentIdleLabel").textContent = settingsState.idleTime;
  addAuditRecord("系統維護", `更新個人設定：${type} = ${settingsState[type]}。`);
  closeModals();
  openModal("#settingsSavedModal");
}

function setGroupOpen(group, isOpen) {
  group.classList.toggle("open", isOpen);
  const head = group.querySelector(".nav-group-head");
  if (head) head.setAttribute("aria-expanded", String(isOpen));
}

function syncSidebar(selectedNav) {
  const activeGroup = selectedNav?.closest(".nav-group") || null;
  document.querySelectorAll(".nav-group").forEach((group) => {
    setGroupOpen(group, group === activeGroup);
  });
}

function switchPage(pageName, activeButton) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active-page"));
  const targetPage = document.querySelector(`#${pages[pageName]}`);
  if (!targetPage) {
    showToast("此頁面尚未設定");
    return;
  }
  targetPage.classList.add("active-page");

  document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
  const selectedNav = activeButton?.classList.contains("nav-link") ? activeButton : document.querySelector(`.nav-link[data-page="${pageName}"]`);
  if (selectedNav) selectedNav.classList.add("active");
  syncSidebar(selectedNav);

  if (pageName === "permissions") {
    document.querySelector("#permissionsPage .page-heading h2").textContent = "角色權限分級設定";
    document.querySelector("#permissionsPage .page-heading p").textContent = "設定系統內各組織職位之操作功能與資料存取範圍";
  }
}

function openStaffModal(index) {
  const person = staff[index];
  editingStaffIndex = index;
  document.querySelector("#staffProfile").innerHTML = `
    <article class="profile-card">
      <div class="profile-avatar" style="background:${person.color}">${person.name[0]}</div>
      <h3>${person.name}</h3>
      <small>加入日期: Jan 12, 2024</small>
      <strong>${person.id}</strong>
    </article>
  `;
  document.querySelector("#modalName").value = person.name;
  document.querySelector("#modalId").value = person.id;
  document.querySelector("#modalEmail").value = person.email;
  openModal("#staffModal");
}

function downloadRows(rows, filenameBase, format = "csv") {
  const extension = format === "xlsx" ? "xlsx" : format === "pdf" ? "pdf" : "csv";
  const mime = format === "pdf" ? "application/pdf" : "text/csv;charset=utf-8";
  const content = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([content], { type: mime });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filenameBase}.${extension}`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadCsvFile() {
  const rows = [
    ["ID", "Name", "Email", "Role", "LastLogin", "Status"],
    ...staff.map((person) => [person.id, person.name, person.email, person.role, person.last, person.status])
  ];
  downloadRows(rows, "line-brown-farm-staff", "csv");
}

function downloadAuditReport(format = "csv") {
  const rows = [
    ["LogID", "Time", "Operator", "Action", "Detail", "IP", "Result"],
    ...getFilteredAuditLogs().map((log) => [log.id, log.time, log.operator, log.action, log.detail, log.ip, log.result])
  ];
  downloadRows(rows, "line-brown-farm-audit-log", format);
}

function openTaskEditor(index) {
  editingTaskIndex = index;
  const task = eventTasks[index];
  document.querySelector("#editTaskName").value = task.name;
  document.querySelector("#editTaskReward").value = task.reward;
  document.querySelector("#editTaskStatus").value = task.status;
  openModal("#taskEditModal");
}

function openAuditDetail(logId) {
  const log = auditLogs.find((item) => item.id === logId);
  if (!log) return;
  document.querySelector("#auditDetailId").textContent = log.id;
  document.querySelector("#auditDetailBody").innerHTML = `
    <p><span>操作時間</span><strong>${log.time}</strong></p>
    <p><span>操作人員</span><strong>${log.operator}</strong></p>
    <p><span>動作類型</span><strong>${log.action}</strong></p>
    <p><span>執行動作</span><strong>${log.detail}</strong></p>
    <p><span>來源 IP</span><strong>${log.ip}</strong></p>
    <p><span>處理結果</span><strong>${log.result}</strong></p>
  `;
  openModal("#auditDetailModal");
}

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#currentRole").textContent = document.querySelector("#roleSelect").value;
  showApp();
  addAuditRecord("系統維護", `登入系統，角色：${document.querySelector("#roleSelect").value}。`);
});

document.querySelector("#togglePassword").addEventListener("click", () => {
  const input = document.querySelector("#passwordInput");
  input.type = input.type === "password" ? "text" : "password";
});

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => switchPage(button.dataset.page, button));
});

document.querySelectorAll(".nav-group-head").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".nav-group");
    const shouldOpen = !group.classList.contains("open");
    document.querySelectorAll(".nav-group").forEach((item) => setGroupOpen(item, false));
    setGroupOpen(group, shouldOpen);
  });
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

document.querySelectorAll("[data-page-shortcut]").forEach((button) => {
  button.addEventListener("click", () => switchPage(button.dataset.pageShortcut));
});

document.querySelector("#userMenuButton").addEventListener("click", () => {
  closeTopDropdowns("#userMenu");
  document.querySelector("#userMenu").classList.toggle("hidden");
});

document.querySelector("#notificationButton").addEventListener("click", () => {
  closeTopDropdowns("#notificationMenu");
  document.querySelector("#notificationMenu").classList.toggle("hidden");
});

document.querySelector("#settingsButton").addEventListener("click", () => {
  closeTopDropdowns("#settingsMenu");
  document.querySelector("#settingsMenu").classList.toggle("hidden");
});

document.querySelector("#markAllRead").addEventListener("click", () => {
  notifications.forEach((item) => {
    item.unread = false;
  });
  renderNotifications();
  addAuditRecord("系統維護", "將通知中心全部標示為已讀。");
});

document.querySelectorAll("[data-setting-panel]").forEach((button) => {
  button.addEventListener("click", () => openSettingModal(button.dataset.settingPanel));
});

["language", "fontSize", "idleTime"].forEach((type) => {
  document.querySelector(`#${type}Choices`).addEventListener("change", () => {
    document.querySelectorAll(`#${type}Choices .choice-row`).forEach((row) => row.classList.remove("active"));
    const checked = document.querySelector(`input[name="${type}"]:checked`);
    checked.closest(".choice-row").classList.add("active");
  });
});

document.querySelector("#saveLanguage").addEventListener("click", () => saveSetting("language"));
document.querySelector("#saveFontSize").addEventListener("click", () => saveSetting("fontSize"));
document.querySelector("#saveIdleTime").addEventListener("click", () => saveSetting("idleTime"));

document.querySelector("#logoutButton").addEventListener("click", () => {
  document.querySelector("#userMenu").classList.add("hidden");
  openModal("#logoutModal");
});

document.querySelector("#cancelLogout").addEventListener("click", closeModals);

document.querySelector("#confirmLogout").addEventListener("click", () => {
  addAuditRecord("系統維護", "登出系統。");
  closeModals();
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
});

document.querySelector("#openExport").addEventListener("click", () => openModal("#exportModal"));
document.querySelector("#openExportSmall").addEventListener("click", () => openModal("#exportModal"));
document.querySelector("#goPermissions").addEventListener("click", () => switchPage("permissions"));
document.querySelector("#goAuditLog").addEventListener("click", () => switchPage("audit"));
document.querySelector("#openLogExport").addEventListener("click", () => openModal("#logExportModal"));
document.querySelector("#dateRangeButton").addEventListener("click", () => openModal("#dateRangeModal"));
document.querySelector("#auditSearchInput").addEventListener("input", () => {
  auditPage = 1;
  renderAuditLogs();
});
document.querySelector("#auditActionFilter").addEventListener("change", () => {
  auditPage = 1;
  renderAuditLogs();
});
document.querySelector("#resetAuditFilters").addEventListener("click", () => {
  document.querySelector("#auditSearchInput").value = "";
  document.querySelector("#auditActionFilter").value = "all";
  auditDateRange = ["2026-05-07", demoToday];
  document.querySelector("#dateRangeButton").textContent = `▣ 2026-05-07 - ${demoToday}`;
  auditPage = 1;
  auditSortDesc = true;
  renderAuditLogs();
});
document.querySelector("#sortAuditTime").addEventListener("click", () => {
  auditSortDesc = !auditSortDesc;
  renderAuditLogs();
});
document.querySelector("#prevAuditPage").addEventListener("click", () => {
  auditPage = Math.max(1, auditPage - 1);
  renderAuditLogs();
});
document.querySelector("#nextAuditPage").addEventListener("click", () => {
  auditPage += 1;
  renderAuditLogs();
});
document.querySelector("#auditRows").addEventListener("click", (event) => {
  const button = event.target.closest("[data-audit-id]");
  if (button) openAuditDetail(button.dataset.auditId);
});
document.querySelector("#copyAuditDetail").addEventListener("click", async () => {
  const text = document.querySelector("#auditDetailBody").innerText;
  try {
    await navigator.clipboard.writeText(text);
    showToast("日誌詳情已複製");
  } catch {
    showToast("已選取日誌詳情");
  }
});
document.querySelectorAll(".audit-range-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".audit-range-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const [start, end] = button.dataset.range.split(" - ");
    document.querySelector("#auditStartDate").value = start;
    document.querySelector("#auditEndDate").value = end;
  });
});
document.querySelector("#applyAuditDateRange").addEventListener("click", () => {
  auditDateRange = [document.querySelector("#auditStartDate").value, document.querySelector("#auditEndDate").value];
  document.querySelector("#dateRangeButton").textContent = `▣ ${auditDateRange[0]} - ${auditDateRange[1]}`;
  auditPage = 1;
  closeModals();
  renderAuditLogs();
});

document.querySelector("#playerSearchInput").addEventListener("input", renderPlayerRows);
document.querySelector("#playerStatusFilter").addEventListener("change", renderPlayerRows);
document.querySelector("#resetPlayerSearch").addEventListener("click", () => {
  document.querySelector("#playerSearchInput").value = "";
  document.querySelector("#playerStatusFilter").value = "all";
  renderPlayerRows();
});
document.querySelector("#playerRows").addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-player-detail]");
  const statusButton = event.target.closest("[data-player-status]");
  if (detailButton) openPlayerDetail(detailButton.dataset.playerDetail);
  if (statusButton) {
    pendingPlayerStatusUid = statusButton.dataset.playerStatus;
    const player = players.find((item) => item.uid === pendingPlayerStatusUid);
    document.querySelector("#playerStatusTitle").textContent = player.frozen ? "確認解凍玩家？" : "確認凍結玩家？";
    document.querySelector("#playerStatusText").textContent = `${player.name} (${player.uid}) 的狀態將變更，並寫入系統稽核日誌。`;
    openModal("#playerStatusModal");
  }
});
document.querySelector("#playerProfileCard").addEventListener("click", (event) => {
  const inventoryButton = event.target.closest("[data-profile-inventory]");
  const compButton = event.target.closest("[data-profile-comp]");
  if (inventoryButton) {
    selectedPlayerUid = inventoryButton.dataset.profileInventory;
    switchPage("playerInventory");
    renderInventory();
  }
  if (compButton) {
    document.querySelector("#compUid").value = compButton.dataset.profileComp;
    switchPage("playerCompensation");
  }
});
document.querySelector("#jumpInventoryFromDetail").addEventListener("click", () => {
  closeModals();
  switchPage("playerInventory");
  renderInventory();
});
document.querySelector("#confirmPlayerStatus").addEventListener("click", () => {
  const player = players.find((item) => item.uid === pendingPlayerStatusUid);
  if (player) {
    player.frozen = !player.frozen;
    player.status = player.frozen ? "凍結" : "正常";
    addAuditRecord("玩家管理", `${player.frozen ? "凍結" : "解凍"}玩家 ${player.uid} (${player.name})。`);
    renderPlayerRows();
    renderInventory();
  }
  closeModals();
});

document.querySelector("#inventoryPlayerSearch").addEventListener("input", () => {
  renderInventoryPlayers();
  renderInventory();
});
document.querySelector("#inventoryCategoryFilter").addEventListener("change", renderInventory);
document.querySelector("#resetInventoryFilter").addEventListener("click", () => {
  document.querySelector("#inventoryPlayerSearch").value = "";
  document.querySelector("#inventoryCategoryFilter").value = "all";
  selectedPlayerUid = players[0].uid;
  renderInventory();
});
document.querySelector("#inventoryPlayerList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-inventory-player]");
  if (!button) return;
  selectedPlayerUid = button.dataset.inventoryPlayer;
  renderInventory();
});
document.querySelector("#flagInventory").addEventListener("click", () => {
  const player = players.find((item) => item.uid === selectedPlayerUid);
  addAuditRecord("玩家管理", `標記玩家 ${selectedPlayerUid} (${player?.name || "未知"}) 庫存供風控複查。`);
  showToast("已標記此玩家庫存供風控複查");
});

document.querySelector("#addCompItem").addEventListener("click", () => openModal("#compItemModal"));
document.querySelector("#confirmAddCompItem").addEventListener("click", () => {
  const name = document.querySelector("#compItemName").value.trim() || "鑽石";
  const type = document.querySelector("#compItemType").value;
  const qty = Number(document.querySelector("#compItemQty").value) || 1;
  compItems.push({ name, type, qty, icon: type === "貨幣" ? "♢" : "▣" });
  renderCompItems();
  addAuditRecord("帳號管理", `新增客訴補償項目：${name} x ${qty}。`);
  closeModals();
});
document.querySelector("#compItems").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-comp]");
  if (!removeButton) return;
  const [removed] = compItems.splice(Number(removeButton.dataset.removeComp), 1);
  renderCompItems();
  if (removed) addAuditRecord("帳號管理", `移除客訴補償項目：${removed.name}。`);
});
document.querySelector("#previewComp").addEventListener("click", () => {
  const uid = document.querySelector("#compUid").value.trim() || "未填 UID";
  showToast(`${uid} 補償預覽：${compItems.length} 個項目`);
});
document.querySelector("#submitComp").addEventListener("click", () => {
  const uid = document.querySelector("#compUid").value.trim() || selectedPlayerUid;
  document.querySelector("#compConfirmText").textContent = `${uid} 將收到 ${compItems.length} 個補償項目。`;
  openModal("#compConfirmModal");
});
document.querySelector("#confirmSubmitComp").addEventListener("click", () => {
  const uid = document.querySelector("#compUid").value.trim() || selectedPlayerUid;
  const ticket = document.querySelector("#ticketId").value.trim() || "未填客訴單";
  compHistory.unshift({ title: `${uid} ${document.querySelector("#compReason").value}`, date: `已補償 ${compItems.length} 個項目 · ${ticket}` });
  document.querySelector("#compCount").textContent = String(Number(document.querySelector("#compCount").textContent) + 1);
  addAuditRecord("帳號管理", `針對 ${uid} 建立客訴補償 ${ticket}，共 ${compItems.length} 個項目。`);
  renderCompHistory();
  closeModals();
  document.querySelector("#successTitle").textContent = "補償已送出";
  openModal("#successModal");
});

document.querySelector("#openShopCreate").addEventListener("click", () => switchPage("shopCreate"));
document.querySelectorAll("[data-shop-recommend]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#shopProductName").value = button.dataset.shopRecommend;
    showToast(`${button.dataset.shopRecommend} 已填入商品欄位`);
  });
});
document.querySelector("#cancelShopCreate").addEventListener("click", () => openModal("#cancelShopModal"));
document.querySelector("#discardShopCreate").addEventListener("click", () => {
  closeModals();
  switchPage("shopSchedule");
});
document.querySelector("#saveShopSchedule").addEventListener("click", () => {
  const name = document.querySelector("#shopProductName").value.trim() || "超級農場禮盒";
  shopSchedules.unshift({
    name,
    status: "待發布",
    start: document.querySelector("#shopStartDate").value || "2026-06-03 10:00",
    end: document.querySelector("#shopEndDate").value || "2026-06-10 23:59",
    price: "$19.99",
    old: "$34.99"
  });
  renderShopSchedules();
  renderShopCalendar();
  addAuditRecord("商城活動", `新增商品排程：${name}，期間 ${shopSchedules[0].start} 至 ${shopSchedules[0].end}。`);
  switchPage("shopSchedule");
  openModal("#shopSuccessModal");
});
document.querySelector("#showShopCalendar").addEventListener("click", () => {
  document.querySelector("#showShopCalendar").classList.add("active");
  document.querySelector("#showShopList").classList.remove("active");
  document.querySelector("#shopCalendarView").classList.remove("hidden");
  document.querySelector("#shopListView").classList.add("hidden");
});
document.querySelector("#showShopList").addEventListener("click", () => {
  document.querySelector("#showShopList").classList.add("active");
  document.querySelector("#showShopCalendar").classList.remove("active");
  document.querySelector("#shopListView").classList.remove("hidden");
  document.querySelector("#shopCalendarView").classList.add("hidden");
});
document.querySelector("#shopScheduleRows").addEventListener("click", (event) => {
  const button = event.target.closest("[data-shop-detail]");
  if (button) openShopDetail(Number(button.dataset.shopDetail));
});
document.querySelector("#promoProductSearch").addEventListener("input", (event) => {
  const keyword = event.target.value.trim().toLowerCase();
  if (!keyword) return;
  const matched = promotionProducts.find((product) => `${product.name} ${product.id}`.toLowerCase().includes(keyword));
  if (matched && !promotionState.selectedProductIds.includes(matched.id)) {
    promotionState.selectedProductIds = [matched.id];
    renderPromotionPreview();
  }
});
document.querySelector("#promoSelectedProducts").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-promo-product]");
  const addButton = event.target.closest("#promoAddProduct");
  if (removeButton) {
    promotionState.selectedProductIds = promotionState.selectedProductIds.filter((id) => id !== removeButton.dataset.removePromoProduct);
    if (!promotionState.selectedProductIds.length) promotionState.selectedProductIds = [promotionProducts[0].id];
    renderPromotionPreview();
  }
  if (addButton) {
    const next = promotionProducts.find((product) => !promotionState.selectedProductIds.includes(product.id));
    if (next) {
      promotionState.selectedProductIds.push(next.id);
      renderPromotionPreview();
      showToast(`${next.name} 已加入促銷產品`);
    }
  }
});
document.querySelectorAll(".discount-type").forEach((button) => {
  button.addEventListener("click", () => {
    promotionState.discountType = button.dataset.discountType;
    if (promotionState.discountType === "percent") promotionState.discountValue = 20;
    if (promotionState.discountType === "fixed") promotionState.discountValue = 40;
    if (promotionState.discountType === "bundle") promotionState.discountValue = 2;
    if (promotionState.discountType === "wallet") promotionState.discountValue = 10;
    document.querySelector("#promoDiscountValue").value = promotionState.discountValue;
    renderPromotionPreview();
  });
});
document.querySelector("#promoDiscountValue").addEventListener("input", (event) => {
  promotionState.discountValue = Number(event.target.value) || 0;
  renderPromotionPreview();
});
document.querySelector("#promoStartDate").addEventListener("input", (event) => {
  promotionState.start = event.target.value;
});
document.querySelector("#promoEndDate").addEventListener("input", (event) => {
  promotionState.end = event.target.value;
});
document.querySelectorAll(".promo-audience").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    promotionState.audiences = [...document.querySelectorAll(".promo-audience:checked")].map((item) => item.value);
    if (!promotionState.audiences.length) {
      checkbox.checked = true;
      promotionState.audiences = [checkbox.value];
    }
    renderPromotionPreview();
  });
});
document.querySelector("#resetPromotionForm").addEventListener("click", () => {
  promotionState.selectedProductIds = ["PRD-0042"];
  promotionState.discountType = "percent";
  promotionState.discountValue = 20;
  promotionState.start = "";
  promotionState.end = "";
  promotionState.audiences = ["all"];
  document.querySelector("#promoProductSearch").value = "";
  document.querySelector("#promoDiscountValue").value = "20";
  document.querySelector("#promoStartDate").value = "";
  document.querySelector("#promoEndDate").value = "";
  document.querySelectorAll(".promo-audience").forEach((item) => {
    item.checked = item.value === "all";
  });
  renderPromotionPreview();
  showToast("促銷表單已重置");
});
function upsertPromotion(status) {
  const product = getSelectedPromoProduct();
  const meta = getPromoDiscountMeta();
  const discountText = meta.text(Number(promotionState.discountValue) || 0);
  const period = `${document.querySelector("#promoStartDate").value || "2026-06-05"} - ${document.querySelector("#promoEndDate").value || "2026-06-12"}`;
  promotions.unshift({
    id: `PROMO-${1100 + promotions.length}`,
    name: `${product.name}${status === "草稿" ? "草稿" : "限時促銷"}`,
    discount: discountText,
    product: product.name,
    period,
    status
  });
  renderPromotions();
  addAuditRecord("商城活動", `${status === "草稿" ? "儲存" : "發布"}促銷方案：${product.name} ${discountText}。`);
}
document.querySelector("#savePromotionDraft").addEventListener("click", () => {
  upsertPromotion("草稿");
  showToast("促銷草稿已儲存");
});
document.querySelector("#publishPromotion").addEventListener("click", () => {
  upsertPromotion("待發布");
  document.querySelector("#successTitle").textContent = "促銷已建立";
  openModal("#successModal");
});
document.querySelector("#promotionRows").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-promo-edit]");
  const deleteButton = event.target.closest("[data-promo-delete]");
  if (editButton) {
    const promo = promotions.find((item) => item.id === editButton.dataset.promoEdit);
    const product = promotionProducts.find((item) => item.name === promo?.product) || promotionProducts[0];
    promotionState.selectedProductIds = [product.id];
    const discountNumber = Number(String(promo?.discount || "20").match(/\d+/)?.[0]) || 20;
    promotionState.discountType = promo?.discount.includes("¥") ? "wallet" : promo?.discount.includes("買") ? "bundle" : "percent";
    promotionState.discountValue = discountNumber;
    document.querySelector("#promoDiscountValue").value = String(discountNumber);
    renderPromotionPreview();
    showToast(`${promo.name} 已載入編輯器`);
  }
  if (deleteButton) {
    const index = promotions.findIndex((item) => item.id === deleteButton.dataset.promoDelete);
    if (index >= 0) {
      promotions.splice(index, 1);
      renderPromotions();
      addAuditRecord("商城活動", `刪除促銷方案：${deleteButton.dataset.promoDelete}。`);
      showToast("促銷方案已刪除");
    }
  }
});
document.querySelector("#orderSearch").addEventListener("input", renderOrders);
document.querySelector("#orderStatusFilter").addEventListener("change", renderOrders);
document.querySelector("#resetOrderSearch").addEventListener("click", () => {
  document.querySelector("#orderSearch").value = "";
  document.querySelector("#orderStatusFilter").value = "all";
  renderOrders();
});
document.querySelector("#orderRows").addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-detail]");
  if (!button) return;
  const row = shopOrders[Number(button.dataset.orderDetail)];
  document.querySelector("#shopDetailSubtitle").textContent = row[0];
  document.querySelector("#shopDetailBody").innerHTML = `
    <p><span>玩家 UID</span><strong>${row[1]}</strong></p>
    <p><span>商品</span><strong>${row[2]}</strong></p>
    <p><span>金額</span><strong>${row[3]}</strong></p>
    <p><span>付款時間</span><strong>${row[4]}</strong></p>
    <p><span>狀態</span><strong>${row[5]}</strong></p>
  `;
  openModal("#shopDetailModal");
});
document.querySelector("#exportRevenue").addEventListener("click", () => openModal("#revenueExportModal"));
document.querySelector("#confirmRevenueExport").addEventListener("click", () => {
  const format = document.querySelector('input[name="revenue-format"]:checked')?.value || "csv";
  const rows = [["Product", "Sold", "Revenue", "Conversion"], ...revenueRows];
  addAuditRecord("數據報表", `匯出商城營收報表 ${format.toUpperCase()}。`);
  downloadRows(rows, "brown-farm-revenue", format);
  closeModals();
  document.querySelector("#successTitle").textContent = "匯出成功";
  openModal("#successModal");
});

document.querySelector("#openEventPlan").addEventListener("click", () => openModal("#eventPlanModal"));
document.querySelector("#openEventDetail").addEventListener("click", () => openModal("#eventDetailModal"));
document.querySelector("#openEventAnalytics").addEventListener("click", () => openModal("#eventAnalyticsModal"));
document.querySelector("#editPreviewEvent").addEventListener("click", () => {
  document.querySelector("#eventName").value = "未來科技周：基因改良";
  document.querySelector("#eventStatus").value = "預告中";
  document.querySelector("#eventStart").value = "2026-11-15";
  document.querySelector("#eventEnd").value = "2026-11-22";
  openModal("#eventPlanModal");
});

document.querySelector("#downloadCsv").addEventListener("click", () => {
  downloadCsvFile();
  document.querySelector("#exportModal").classList.add("hidden");
  document.querySelector("#successTitle").textContent = "下載成功";
  addAuditRecord("帳號管理", "匯出內部員工帳號清單 CSV。");
  openModal("#successModal");
});

document.querySelector("#confirmLogExport").addEventListener("click", () => {
  const format = document.querySelector('input[name="log-format"]:checked')?.value || "csv";
  addAuditRecord("數據報表", `匯出系統操作稽核日誌報表 ${format.toUpperCase()}。`);
  downloadAuditReport(format);
  document.querySelector("#logExportModal").classList.add("hidden");
  document.querySelector("#successTitle").textContent = "匯出成功";
  openModal("#successModal");
});

document.querySelector("#createEventPlan").addEventListener("click", () => {
  const name = document.querySelector("#eventName").value.trim() || "新活動方案";
  closeModals();
  addAuditRecord("活動任務", `建立活動方案：${name}。`);
  showToast(`${name} 已建立`);
});

document.querySelector("#saveEventDetail").addEventListener("click", () => {
  closeModals();
  addAuditRecord("活動任務", "儲存金秋豐收節 2024 活動細節與進度設定。");
  showToast("活動細節已儲存");
});

document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModals));
overlay.addEventListener("click", closeModals);

document.querySelector("#staffRows").addEventListener("click", (event) => {
  const button = event.target.closest("[data-staff-index]");
  const actionButton = event.target.closest("[data-staff-action]");
  if (button) openStaffModal(Number(button.dataset.staffIndex));
  if (actionButton) {
    const person = staff[Number(actionButton.dataset.staffAction)];
    const willFreeze = person.status !== "已封禁";
    person.status = willFreeze ? "已封禁" : "活躍中";
    person.statusClass = willFreeze ? "status-banned" : "status-active";
    person.action = willFreeze ? "解封" : "凍結";
    renderStaff();
    addAuditRecord("帳號管理", `${willFreeze ? "凍結" : "解封"}內部員工帳號 ${person.id} (${person.name})。`);
  }
});

document.querySelector("#saveStaffChanges").addEventListener("click", () => {
  const person = staff[editingStaffIndex];
  if (!person) return;
  person.name = document.querySelector("#modalName").value.trim() || person.name;
  person.email = document.querySelector("#modalEmail").value.trim() || person.email;
  person.last = `${demoToday} ${new Date().toLocaleTimeString("zh-TW", { hour12: false, hour: "2-digit", minute: "2-digit" })}`;
  renderStaff();
  addAuditRecord("帳號管理", `更新內部員工帳號 ${person.id} (${person.name}) 的基本資料。`);
  closeModals();
  showToast("員工資料已儲存");
});

document.querySelector("#permissionRows").addEventListener("click", (event) => {
  const toggle = event.target.closest(".toggle");
  if (toggle) {
    toggle.classList.toggle("off");
    addAuditRecord("權限安全", `調整 ${activePermissionRole} 的權限切換。`);
  }
});

document.querySelector("#taskSearch").addEventListener("input", (event) => renderTasks(event.target.value));

document.querySelector("#taskRows").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-task-edit]");
  const deleteButton = event.target.closest("[data-task-delete]");
  if (editButton) openTaskEditor(Number(editButton.dataset.taskEdit));
  if (deleteButton) {
    deletingTaskIndex = Number(deleteButton.dataset.taskDelete);
    openModal("#deleteTaskModal");
  }
});

document.querySelector("#saveTaskEdit").addEventListener("click", () => {
  if (editingTaskIndex !== null) {
    eventTasks[editingTaskIndex].name = document.querySelector("#editTaskName").value.trim() || eventTasks[editingTaskIndex].name;
    eventTasks[editingTaskIndex].reward = document.querySelector("#editTaskReward").value.trim() || eventTasks[editingTaskIndex].reward;
    eventTasks[editingTaskIndex].status = document.querySelector("#editTaskStatus").value;
    renderTasks(document.querySelector("#taskSearch").value);
  }
  closeModals();
  addAuditRecord("活動任務", `儲存活動任務：${eventTasks[editingTaskIndex]?.id || "未知任務"}。`);
  showToast("任務已儲存");
});

document.querySelector("#confirmDeleteTask").addEventListener("click", () => {
  if (deletingTaskIndex !== null) {
    const [removed] = eventTasks.splice(deletingTaskIndex, 1);
    renderTasks(document.querySelector("#taskSearch").value);
    if (removed) addAuditRecord("活動任務", `刪除活動任務：${removed.id} ${removed.name}。`);
  }
  closeModals();
  showToast("任務已刪除");
});

document.querySelectorAll(".role-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    activePermissionRole = button.dataset.role;
    document.querySelectorAll(".role-tabs button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#editingRole").textContent = `編輯中：${activePermissionRole}權限`;
    renderPermissions();
  });
});

document.querySelector("#savePermissions").addEventListener("click", () => {
  addAuditRecord("權限安全", `儲存 ${activePermissionRole} 權限分級設定。`);
  openModal("#permissionSuccessModal");
});
document.querySelector("#cancelPermissionChanges").addEventListener("click", () => openModal("#cancelChangesModal"));
document.querySelector("#discardPermissionChanges").addEventListener("click", () => {
  closeModals();
  renderPermissions();
});

document.querySelector("#openAddRole").addEventListener("click", () => openModal("#addRoleModal"));
document.querySelector("#createRole").addEventListener("click", () => {
  document.querySelector("#addRoleModal").classList.add("hidden");
  openModal("#confirmAddRoleModal");
});
document.querySelector("#confirmCreateRole").addEventListener("click", () => {
  const roleName = document.querySelector("#newRoleName").value.trim() || "自訂角色";
  rolePermissionStates[roleName] = [false, false, false, false, false, false, false];
  addAuditRecord("權限安全", `新增自訂角色：${roleName}。`);
  closeModals();
  openModal("#roleSuccessModal");
});

document.querySelector("#addRewardItem").addEventListener("click", () => openModal("#rewardModal"));
document.querySelector("#confirmAddReward").addEventListener("click", () => {
  const name = document.querySelector("#rewardName").value.trim() || "金幣";
  const qty = Number(document.querySelector("#rewardQty").value) || 1;
  rewardItems.push({ name, qty, icon: name.includes("鑽") ? "♢" : "ⓢ" });
  renderRewards();
  addAuditRecord("活動任務", `新增信件獎勵道具：${name} x ${qty}。`);
  closeModals();
});

document.querySelector("#rewardItems").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-reward]");
  if (!removeButton) return;
  const [removed] = rewardItems.splice(Number(removeButton.dataset.removeReward), 1);
  renderRewards();
  if (removed) addAuditRecord("活動任務", `移除信件獎勵道具：${removed.name}。`);
});

document.querySelector("#saveMailDraft").addEventListener("click", () => {
  const draftCount = document.querySelector("#draftCount");
  draftCount.textContent = String(Number(draftCount.textContent) + 1);
  addAuditRecord("活動任務", `儲存全服信件草稿：${document.querySelector("#mailTitle").value.trim() || "未命名草稿"}。`);
  showToast("信件已儲存為草稿");
});

document.querySelector("#sendMailNow").addEventListener("click", () => openModal("#sendMailConfirmModal"));
document.querySelector("#confirmSendMail").addEventListener("click", () => {
  const title = document.querySelector("#mailTitle").value.trim() || "全服營運通知";
  mailHistory.unshift({ title, date: "已發送 2026-06-02", active: true });
  renderMailHistory();
  addAuditRecord("活動任務", `發送全服信件：${title}。`);
  closeModals();
  openModal("#mailSuccessModal");
});

document.querySelector("#productionSearch").addEventListener("input", renderProductionItems);
document.querySelector("#productionTypeFilter").addEventListener("change", renderProductionItems);
document.querySelector("#productionRows").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-prod-edit]");
  const toggleButton = event.target.closest("[data-prod-toggle]");
  if (editButton) {
    selectedProductionId = editButton.dataset.prodEdit;
    renderProductionItems();
  }
  if (toggleButton) {
    const item = productionItems.find((entry) => entry.id === toggleButton.dataset.prodToggle);
    if (!item) return;
    item.enabled = !item.enabled;
    selectedProductionId = item.id;
    renderProductionItems();
    addAuditRecord("遊戲配置", `${item.enabled ? "啟用" : "停用"}生產項目：${item.name}。`);
    showToast(`${item.name} 已${item.enabled ? "啟用" : "停用"}`);
  }
});
document.querySelector("#applyProductionEdit").addEventListener("click", applyProductionEditor);
document.querySelector("#resetProductionParams").addEventListener("click", () => {
  productionItems = defaultProductionItems.map((item) => ({ ...item }));
  selectedProductionId = productionItems[0].id;
  renderProductionItems();
  renderRecipes();
  addAuditRecord("遊戲配置", "還原動植物生產參數為預設值。");
  showToast("生產參數已還原預設");
});
document.querySelector("#saveProductionParams").addEventListener("click", () => {
  addAuditRecord("遊戲配置", "儲存了動植物生產參數設定。");
  document.querySelector("#configSavedTitle").textContent = "生產參數已成功儲存";
  openModal("#configSavedModal");
});

document.querySelector("#recipeSearch").addEventListener("input", renderRecipes);
document.querySelector("#recipeFacilityFilter").addEventListener("change", renderRecipes);
document.querySelector("#recipeCards").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-recipe-edit]");
  if (!editButton) return;
  selectedRecipeId = editButton.dataset.recipeEdit;
  renderRecipes();
});
document.querySelector("#applyRecipeEdit").addEventListener("click", applyRecipeEditor);
document.querySelector("#saveRecipeParams").addEventListener("click", () => {
  addAuditRecord("遊戲配置", "儲存了加工品合成配方管理設定。");
  document.querySelector("#configSavedTitle").textContent = "配方設定已成功儲存";
  openModal("#configSavedModal");
});
document.querySelector("#addRecipe").addEventListener("click", () => {
  const recipe = {
    id: `REC-CUSTOM-${recipes.length + 1}`,
    name: "新加工品",
    facility: "麵包店",
    minutes: 10,
    price: 30,
    enabled: false,
    note: "請補齊材料與營運備註。",
    ingredients: [{ name: "小麥", qty: 1 }]
  };
  recipes.unshift(recipe);
  selectedRecipeId = recipe.id;
  renderRecipes();
  addAuditRecord("遊戲配置", `新增加工配方草稿：${recipe.name}。`);
  showToast("已新增配方草稿");
});
document.querySelector("#openIngredientModal").addEventListener("click", () => {
  document.querySelector("#ingredientName").value = "";
  document.querySelector("#ingredientQty").value = "1";
  openModal("#ingredientModal");
});
document.querySelector("#confirmAddIngredient").addEventListener("click", () => {
  const recipe = recipes.find((entry) => entry.id === selectedRecipeId);
  if (!recipe) return;
  const name = document.querySelector("#ingredientName").value.trim();
  const qty = Number(document.querySelector("#ingredientQty").value) || 1;
  if (!name) {
    showToast("請輸入材料名稱");
    return;
  }
  const existing = recipe.ingredients.find((item) => item.name === name);
  if (existing) existing.qty += qty;
  else recipe.ingredients.push({ name, qty });
  closeModals();
  renderRecipes();
  addAuditRecord("遊戲配置", `新增配方材料：${recipe.name} 加入 ${name} x ${qty}。`);
});
document.querySelector("#recipeIngredientList").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-ingredient]");
  if (!removeButton) return;
  const recipe = recipes.find((entry) => entry.id === selectedRecipeId);
  if (!recipe) return;
  const [removed] = recipe.ingredients.splice(Number(removeButton.dataset.removeIngredient), 1);
  renderRecipes();
  if (removed) addAuditRecord("遊戲配置", `移除配方材料：${recipe.name} 移除 ${removed.name}。`);
});

renderLogs();
renderStaff();
renderPermissions();
renderAuditLogs();
renderTasks();
renderRewards();
renderMailHistory();
renderPlayerRows();
renderInventory();
renderCompItems();
renderCompHistory();
renderNotifications();
renderShopSchedules();
renderShopCalendar();
renderPromotions();
renderPromotionPreview();
renderOrders();
renderRevenue();
renderProductionItems();
renderRecipes();
