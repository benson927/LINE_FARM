# LINE 熊大農場管理系統

前端靜態展示版，用於 SA/FDD 討論與組員 Demo。專案不需要打包工具，直接以 GitHub Pages 或本機靜態伺服器開啟即可。

## 頁面範圍

- 登入頁
- 營運儀表板
- 玩家基本資料查詢
- 玩家背包與庫存查詢
- 單筆客訴虛寶補償
- 動植物生產參數設定
- 加工品合成配方管理
- 商城商品上架與排程
- 促銷定價與折扣設定
- 玩家訂單紀錄查詢
- 營收統計報表匯出
- 節慶活動與任務管理
- 全服信件與批次派獎
- 內部員工帳號管理
- 角色權限分級設定
- 系統操作稽核日誌
- 右上角通知中心與設定選單

## 系統分析文件

- [DFD、Diagram-0、Context Diagram](docs/dfd-diagrams.md)

## 本機預覽

```bash
python3 -m http.server 8062
```

開啟：

```text
http://127.0.0.1:8062/
```

登入頁目前為展示版，任意角色皆可直接登入。

## GitHub Pages 部署

1. 將此資料夾內容推上 GitHub repository。
2. 到 repository 的 `Settings`。
3. 進入 `Pages`。
4. `Build and deployment` 選擇 `Deploy from a branch`。
5. Branch 選擇 `main`，資料夾選擇 `/root`。
6. 儲存後等待 GitHub 產生 Pages 網址。

目前所有 CSS、JS 與圖片路徑皆為相對路徑，可直接部署在 GitHub Pages。

## 檔案結構

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── assets/
    ├── brown-farm.jpg
    ├── brown-farm-login-bg.jpg
    └── line-game-brown.png
```

## Demo 注意事項

- 目前資料為前端模擬資料，重新整理後會回到預設狀態。
- CSV 匯出、補償、商城排程、權限儲存等功能會在瀏覽器端模擬互動與下載。
- 若後續串接後端，建議先把 `script.js` 內的假資料抽成 API adapter。
