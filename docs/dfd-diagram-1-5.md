# LINE 熊大農場管理系統 Diagram 1-5

本文件依照 Diagram-0 的五個主要處理程序，展開 Diagram 1、2、3、4、5。資料儲存區代號沿用總圖：D1 員工權限資料庫、D2 玩家資料庫、D3 遊戲物品資料庫、D4 信件活動資料庫、D5 遊戲經濟資料庫、D6 系統操作日誌庫。

## Diagram 1：管理帳號與權限

```mermaid
flowchart LR
  Admin[系統管理員]
  Staff[管理人員]

  subgraph P1[1 管理帳號與權限]
    direction TB
    P11([1.1 驗證管理員登入])
    P12([1.2 維護管理員帳號])
    P13([1.3 設定角色權限])
    P14([1.4 登錄權限異動])
  end

  D1[[D1 員工權限資料庫]]
  D6[[D6 系統操作日誌庫]]

  Staff -->|帳號、密碼、角色| P11
  P11 -->|讀取員工帳號與權限群組| D1
  D1 -->|帳號狀態、權限範圍| P11
  P11 -->|登入成功/失敗、可用功能| Staff

  Admin -->|管理員帳號增刪改指令| P12
  P12 -->|寫入/更新管理員帳號| D1
  D1 -->|現有帳號與權限資料| P12
  P12 -->|帳號設定結果| Admin

  Admin -->|權限設定| P13
  P13 -->|更新角色與功能權限| D1
  D1 -->|目前權限設定| P13
  P13 -->|權限變更結果| Admin

  P12 -->|帳號操作行為| P14
  P13 -->|權限操作行為| P14
  P14 -->|寫入系統操作日誌| D6

  classDef entity fill:#ffffff,stroke:#2f3a35,stroke-width:1px;
  classDef process fill:#f7fbff,stroke:#2f3a35,stroke-width:1.5px;
  classDef store fill:#fffef7,stroke:#2f3a35,stroke-width:1.5px;
  class Admin,Staff entity;
  class P11,P12,P13,P14 process;
  class D1,D6 store;
```

## Diagram 2：處理玩家與客服服務

```mermaid
flowchart LR
  Support[客服人員]
  GameServer[遊戲主伺服器]

  subgraph P2[2 處理玩家與客服服務]
    direction TB
    P21([2.1 查詢玩家基本資料])
    P22([2.2 查詢玩家資產與庫存])
    P23([2.3 處理補發鑽石/金幣])
    P24([2.4 登錄客服操作紀錄])
  end

  D2[[D2 玩家資料庫]]
  D6[[D6 系統操作日誌庫]]

  Support -->|玩家查詢條件| P21
  P21 -->|讀取玩家基本資料與庫存| D2
  D2 -->|玩家基本資料與資產狀態| P21
  P21 -->|玩家資料狀態| Support

  Support -->|庫存查詢條件| P22
  P22 -->|讀取指定玩家庫存| D2
  D2 -->|玩家庫存明細| P22
  P22 -->|玩家資產狀態| Support

  Support -->|補發鑽石/金幣請求| P23
  P23 -->|更新玩家鑽石餘額與狀態| D2
  P23 -->|補發指令| GameServer
  GameServer -->|補發成功/失敗結果| P23
  P23 -->|補發結果| Support

  P21 -->|查詢操作行為| P24
  P22 -->|查詢操作行為| P24
  P23 -->|補發操作行為| P24
  P24 -->|寫入系統操作日誌| D6

  classDef entity fill:#ffffff,stroke:#2f3a35,stroke-width:1px;
  classDef process fill:#f7fbff,stroke:#2f3a35,stroke-width:1.5px;
  classDef store fill:#fffef7,stroke:#2f3a35,stroke-width:1.5px;
  class Support,GameServer entity;
  class P21,P22,P23,P24 process;
  class D2,D6 store;
```

## Diagram 3：管理遊戲數值與活動

```mermaid
flowchart LR
  Planner[營運企劃]
  GameServer[遊戲主伺服器]

  subgraph P3[3 管理遊戲數值與活動]
    direction TB
    P31([3.1 維護作物/物品數值])
    P32([3.2 設定全服活動參數])
    P33([3.3 建立信件內容])
    P34([3.4 發送配置到遊戲伺服器])
    P35([3.5 登錄數值與活動操作])
  end

  D3[[D3 遊戲物品資料庫]]
  D4[[D4 信件活動資料庫]]
  D6[[D6 系統操作日誌庫]]

  Planner -->|作物/物品數值設定檔| P31
  P31 -->|寫入/更新作物與物品參數| D3
  D3 -->|讀取現有物品資料| P31
  P31 -->|設定成功確認| Planner

  Planner -->|全服活動參數| P32
  P32 -->|寫入全服活動與信件紀錄| D4
  D4 -->|既有活動設定| P32
  P32 -->|活動設定成功確認| Planner

  Planner -->|信件內容| P33
  P33 -->|寫入信件內容與發送條件| D4
  D4 -->|信件草稿與活動資料| P33
  P33 -->|信件設定成功確認| Planner

  P31 -->|遊戲物品數值更新包| P34
  P32 -->|活動設定包| P34
  P33 -->|信件發送指令| P34
  P34 -->|虛寶派發指令、數值更新包| GameServer
  GameServer -->|玩家即時狀態、套用結果| P34

  P31 -->|數值操作行為| P35
  P32 -->|活動操作行為| P35
  P33 -->|信件操作行為| P35
  P35 -->|寫入系統操作日誌| D6

  classDef entity fill:#ffffff,stroke:#2f3a35,stroke-width:1px;
  classDef process fill:#f7fbff,stroke:#2f3a35,stroke-width:1.5px;
  classDef store fill:#fffef7,stroke:#2f3a35,stroke-width:1.5px;
  class Planner,GameServer entity;
  class P31,P32,P33,P34,P35 process;
  class D3,D4,D6 store;
```

## Diagram 4：產出營運數據報表

```mermaid
flowchart LR
  OpsLead[營運主管]
  GameServer[遊戲主伺服器]

  subgraph P4[4 產出營運數據報表]
    direction TB
    P41([4.1 接收遊戲營收數據])
    P42([4.2 查詢指定期間經濟數據])
    P43([4.3 彙整營收統計圖表])
    P44([4.4 登錄報表查詢操作])
  end

  D5[[D5 遊戲經濟資料庫]]
  D6[[D6 系統操作日誌庫]]

  GameServer -->|遊戲原始營收數據| P41
  P41 -->|寫入遊戲內經濟流水帳| D5

  OpsLead -->|報表查詢條件| P42
  P42 -->|讀取指定時間區間之經濟數據| D5
  D5 -->|遊戲經濟流水資料| P42
  P42 -->|期間營收與消費資料| P43

  P43 -->|營收統計圖表數據| OpsLead
  P42 -->|報表查詢行為| P44
  P43 -->|報表產出行為| P44
  P44 -->|寫入系統操作日誌| D6

  classDef entity fill:#ffffff,stroke:#2f3a35,stroke-width:1px;
  classDef process fill:#f7fbff,stroke:#2f3a35,stroke-width:1.5px;
  classDef store fill:#fffef7,stroke:#2f3a35,stroke-width:1.5px;
  class OpsLead,GameServer entity;
  class P41,P42,P43,P44 process;
  class D5,D6 store;
```

## Diagram 5：稽核系統操作日誌

```mermaid
flowchart LR
  Admin[系統管理員]
  OpsLead[營運主管]

  subgraph P5[5 稽核系統操作日誌]
    direction TB
    P51([5.1 收集各模組操作行為])
    P52([5.2 寫入系統操作日誌])
    P53([5.3 查詢歷史日誌紀錄])
    P54([5.4 回傳稽核查詢結果])
  end

  D6[[D6 系統操作日誌庫]]

  P51 -->|操作行為紀錄| P52
  P52 -->|寫入系統操作日誌| D6

  Admin -->|日誌查詢條件| P53
  OpsLead -->|日誌查詢條件| P53
  P53 -->|讀取歷史日誌紀錄| D6
  D6 -->|系統操作日誌紀錄| P53
  P53 -->|符合條件的日誌資料| P54
  P54 -->|系統操作日誌紀錄| Admin
  P54 -->|系統操作日誌紀錄| OpsLead

  classDef entity fill:#ffffff,stroke:#2f3a35,stroke-width:1px;
  classDef process fill:#f7fbff,stroke:#2f3a35,stroke-width:1.5px;
  classDef store fill:#fffef7,stroke:#2f3a35,stroke-width:1.5px;
  class Admin,OpsLead entity;
  class P51,P52,P53,P54 process;
  class D6 store;
```

