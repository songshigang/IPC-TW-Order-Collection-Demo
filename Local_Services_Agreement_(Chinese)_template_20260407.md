口當地服務協定(自動化取單平台)
- 封頁 -

本當地服務協定由以下雙方簽署
| Kimberly-Clark  | 實體名稱：  | 英屬蓋曼群島金百利克拉克股份有限公司台灣分公司  |     |
| --------------- | ------ | ------------------------ | --- |
（以下簡稱“K-C公
|     | 公司編號：  | 70805542  |     |
| --- | ------ | --------- | --- |
司”）
|      | 地址：    | 台北市信義區信義路5段8號8樓  |     |
| ---- | ------ | ---------------- | --- |
| 供應商  | 實體名稱：  |                  |     |
|      | 公司編號：  |                  |     |
|      | 地址：    |                  |     |

關鍵條款
| 期限  | 起始日期：  | 2026/06/1  |     |
| --- | ------ | ---------- | --- |
到期日期：  2028/01/31
  以2027/2/1上線日估算, 若上線延期, 以實際上線日推遲一
年計算.; 合約到期時, 若雙方無異議後以原費率再續約一

年, 最多續約3年.
| 服務專案  | 工作說明書：  | → 附件1  |     |
| ----- | ------- | ------ | --- |
關鍵績效指標（KPI）：  → 附件2
保險：  → 附件3
| 服務費用和付款條件  |        | → 附件4   |     |
| ---------- | ------ | ------- | --- |
| 條款及條件      | 標準條款：  | → 附件5A  |     |
退出條款：  → 附件5B
供應商社會合規標準：  → 附件5C
K-C信息安全附录:  → 附件5D
服务等级协议：  → 附件5E
| 通知  | K-C公司作為收件方：  | 收件人：Ivy Lai  |     |
| --- | ------------ | ------------ | --- |
電子郵箱：ivy.lai@kcc.com
|     | 供應商作為收件方：  | 收件人：   |     |
| --- | ---------- | ------ | --- |
電子郵箱：

簽字欄
K-C公司代表簽字  供應商代表簽字
| 簽字/蓋章：  |     | 簽字/蓋章：  |     |
| ------- | --- | ------- | --- |

| 姓名：  | 艾華斯  | 姓名：  |     |
| ---- | ---- | ---- | --- |

| 職務：  | 負責人  | 職務：  |     |
| ---- | ---- | ---- | --- |
| 日期：  |      | 日期：  |     |
1

當地服務協定
附件 1 – 工作說明書(SOW) (依雙方確認後更新)
一、 項目概述:
1.1 項目背景
台灣部分客戶有自有平台（含寄售訂單形式），需要手工每日及月度登錄客戶平臺獲取相應訂單，再手工轉換
格式生成訂單，因此希望這個平臺可以對接客戶訂單介面獲取訂單資訊，並轉換格式推送SAP生成EDI訂單
1.2 項目目標
開發 KC 自動化取單平臺方面主要功能，同時為確保業務正確運行需要例如：客戶主資料、物料主資料等輔助
資料資訊的對接。
主要功能，
訂單資料抓取及轉單，帶*為必須功能，其他依供應商開發能力提供
1） *用戶端提供訂單資料介面，將訂單資料推送給 KC 訂單平臺（Daily，Monthly 不同類型訂單格式
PDF/Excel/HTML.TXT 等格式），預計22家客戶，假設匯入的檔案是PDF檔，需同步新增SAP單號在後續下載
的PDF檔案上。
2） *可以檢查訂單在創建後一周至1個月內是否有更改；可以by 客戶設置檢查週期
3） *平臺訂單資料多條件查詢、下載
4） *可以從該平臺創建並下載該訂單PDF檔（部分客戶需要由該平臺生成）
5） *可以從 FTP 訂單資料夾或採集平臺下載 EDI 檔（排除重覆訂單，並換算成出貨箱數後，可以直接用於上傳
SAP生成SO）
6） *CSC 可以根據客戶，維護和管理可出貨產品及產品代碼、箱規資訊，可以批量上傳和下載
7） *訂單中的樣品過濾；產品箱規檢查；重複訂單檢查; 不成箱檢查，客戶下單的單位並非都為 CS) 、新品報
錯
8） 自動關單設置；by customer/sold to/material/時間段等設置（替代SAP預設管理）-可選
9） *可以維護客戶門店與 KC sold to和ship to的關係（GLN及閘店號）
2

二、 项目时间表

| 階段       | 工作內容           | 預計週期  | 驗收內容            |
| -------- | -------------- | ----- | --------------- |
| 需求分析與設計  | 需求確認、架構設計、資    | 2 周   | 需求規格說明書、架構設計文   |
|          | 料庫設計、UI/UX 設計  |       | 檔、資料庫設計文檔、UI 設計 |
稿
| 開發實現  |             |     | 原始程式碼、介面初版文檔  |
| ----- | ----------- | --- | ------------- |
|       | 各功能模組開發、介面對 | 4周  |               |
接、雙語功能實現
| 測試驗證(KC內部)  | 功能測試、相容性測試、  |  3周  | 測試報告、修復後的原始程式 |
| ----------- | ------------ | ---- | ------------- |
|             | 性能測試、缺陷修復、KC |      | 碼             |
內部介面測試、驗收確認
| 功能開發 外部客戶  | 開發對外客戶平台取單及   |  12周  | 測試報告、修復後的原始程式  |
| ---------- | ------------- | ----- | -------------- |
|            | 訂單轉換          |       | 碼              |
| 用戶培訓與驗收    | 用戶培訓、外部的UAT 測 |  5周   | 培訓記錄、UAT 驗收報告  |
試、驗收確認
| 部署上線  | 生產環境部署、資料移 | 9周  | 部署報告、上線驗證報告  |
| ----- | ---------- | --- | ------------ |
轉、上線驗證
系統上線後支援服務
| Hypercare  | 軟體開發和部署後的支援 | 13週  |     |
| ---------- | ----------- | ---- | --- |
服務
| 總計  | -   | 48周  | -   |
| --- | --- | ---- | --- |
注：时间表可根据实际需求调整，若涉及需求变更，需重新评估周期并签订补充协议。

三、 其它重要事項
1） 操作介面以中文繁體設置
2） 幫助文檔下載，幫助文檔即平臺操作說明的編寫
3） 使用者登錄及運算元據記錄
4） 用戶許可權維護與分配
5） 配合KC做相應認證工作及文檔提供，例如：供應商資訊安全認證等
3

6） 平臺供應商端相應工具證書費用。
7） 客戶平臺更換，或是格式調整，需協助維護
8） 支援增設後續新客戶抓取
9) 采集平台客户清单:

| 開發順序  | 客戶名稱   | 開發順序  | 客戶名稱    |
| ----- | ------ | ----- | ------- |
| 1     | 家樂福    | 12    | 佑全      |
| 2     |        | 13    |         |
|       | 好市多物流  |       | 維康      |
| 3     | 統一超商   | 14    | 大樹      |
| 4     |        | 15    |         |
|       | 全家     |       | 屈臣氏     |
| 5     | 萊爾富    | 16    | 愛買吉安    |
| 6     |        | 17    |         |
|       | 福利總處   |       | 富邦MOMO  |
| 7     | 大全聯    | 18    | 酷澎      |
| 8     |        | 19    | 全聯      |
康是美
| 9   | 寶雅  | 20  | 三商(美聯社)  |
| --- | --- | --- | -------- |
| 10  |     | 21  | 大買家      |
丁丁
| 11  | 卡多摩(含寶寶共和國)  | 22  | 杏一  |
| --- | ------------ | --- | --- |

四、交付物
4.1.1用戶交付物
•  使用者操作手冊（分角色說明操作步驟）；
•  針對TW CSC平臺使用Demo
4.1.2原始程式碼及智慧財產權歸屬
本合同項下由乙方為本專案開發、交付的全部系統原始程式碼（包括但不限於程式碼、腳本、設定檔、介面代碼
等），其著作權及相關智慧財產權自形成之日起均歸甲方（金佰利，KC）所有。
未經甲方事先書面同意，乙方不得以任何形式向協力廠商披露、轉讓、許可或使用上述原始程式碼。

五、驗收標準
5.1 功能驗收標準
5.1.1登錄模組： KC使用者提供CS、業務單位兩種不同權限的模組,由CS管理帳號權限
5.1.2訂單模組：獲取客戶訂單轉換生成EDI訂單
5.1.3 維護功能: 物料/價格/產品資料可正常導入、匯出、凍結，列表展示無欄位缺失
4

5.1.4基礎功能維護: Sold to 、ship to 、物料、箱規、算量換算等資料維護，可以批量上傳和下載
5.1.5 訂單修改提醒:可以檢查訂單在創建後一周至1個月內是否有更改以郵件提醒；可以by 客戶設置檢查週期
5.1.6訂單修改提醒:可以檢查訂單在創建後一周至1個月內是否有更改以郵件提醒；可以by 客戶設置檢查週期
5.1.7訂單檢查邏輯:排除重覆訂單，訂單相關資訊轉換(Sold to 、ship to 、物料、箱規、算量換算)，樣品、免
費贈品的過濾後不上傳訂單，跳出提醒或mail通知、新品報錯、不成箱排除及報錯
5.1.8資料下載、查詢 訂單資料查詢、下載(格式EXCEL&PDF).
5.1.9訂單PDF單號標註 PDF文檔，需同步新增SAP單號在後續下載的PDF檔案上。
5.1.10介面功能：所有介面可正常調用，返回資料符合文檔要求，無報錯（含訂單創建）
5.2 性能驗收標準
5.2.1頁面載入時間≤10 秒；Page load time ≤ 10 seconds;
5.2.2訂單提交、操作回應時間≤15 秒；Order submission and approval response time ≤ 15s;
5.3 相容性驗收標準
5.3.1流覽器相容：支持 Chrome（最新版）、Edge（最新版）、Firefox（最新版）；
5.3.2設備相容：支持 PC 端（Windows 10/11、macOS Ventura 及以上）。
5.4 驗收流程
5.4.1乙方完成開發與測試後，提交驗收申請與交付物；
5.4.2甲方在 5 個工作日內組織 UAT 測試，按驗收標準驗證功能；
5.4.3若存在問題，乙方需在 3 個工作日內修復，重新提交驗收；
六、風險與應對措施
風險類型 風險描述 應對措施
需求變更風險 專案過程中甲方提出新增 / 1. 建立需求變更控制流程，所有變更
修改需求，導致工期延誤 需提交《需求變更申請單》；2. 評估
變更對工期、成本的影響，雙方確認
後簽訂補充協議；3. 優先保障核心功
能開發，非核心變更可延後至反覆運
算版本。
介面對接風險 SAP協力廠商介面對接失敗 1. 專案啟動前與協力廠商確認介面規
或資料不一致 範，提前進行介面聯調測試；2. 開發
介面適配層，預留相容方案；3. 制定
5

資料校驗規則，發現不一致時觸發告
警並提供手動修正入口。
測試不充分風險 測試覆蓋不全，上線後出現 1. 測試用例需經甲方確認，覆蓋所有
功能缺陷 功能點與異常場景；2. 上線前進行全
量回歸測試，邀請甲方業務人員參與
UAT；3. 上線後提供 3 個月售後支
持，快速回應並修復問題。
七、項目里程碑
• 需求設計確認 : 2026年6月中完成需求文檔確認；
• 系統開發: 2026年7月底完成所有介面開發及初版模版;2026年9月底完成所有系統開發
• 用戶接受度測試: 2026年10月開始測試，2026年11月底完成驗收;
• 正式上線：2027年2月初 正式啟用. 以Aurora項目上線時間為准
• HYPERCARE 時間 2027年2月初到5月初，起始時間以Aurora實際上線時間為准
6

當地服務協定
附件 2 – 關鍵績效指標

| 類別           | 關鍵指標項  | 詳細要求               |
| ------------ | ------ | ------------------ |
| 驗收標準 - 功能驗收  | 登錄模組   | K-C內部使用者權限設置、帳號管理  |
| 驗收標準 - 功能驗收  | 訂單模組   |                    |
獲取客戶訂單轉換生成EDI
物料/價格/產品資料可正常導入、匯出、凍結，列表展示無欄位缺失;可
| 驗收標準 - 功能驗收  | 維護功能    | 支援不同客戶群限定可下單產品，例A產品，經銷/藥房客戶可下單   |
| ------------ | ------- | -------------------------------- |
| 驗收標準 - 功能驗收  | 平臺語言設定  | 繁體中文                             |
| 驗收標準 - 功能驗收  | 介面功能    | 所有介面可正常調用，返回資料符合文檔要求，無報錯（含訂單創建）  |
Sold to 、ship to 、物料、箱規、算量換算等資料維護，可以批量上傳和下
| 驗收標準 - 功能驗收  | 基礎功能維護  | 載   |
| ------------ | ------- | --- |
可以檢查訂單在創建後一周至1個月內是否有更改以郵件提醒；可以by
| 驗收標準 - 功能驗收  | 訂單修改提醒  | 客戶設置檢查週期  |
| ------------ | ------- | --------- |
排除重覆訂單，訂單相關資訊轉換(Sold to 、ship to 、物料、箱規、算量
換算)，樣品、免費贈品的過濾後不上傳訂單，跳出提醒或mail通知、新
| 驗收標準 - 功能驗收  | 訂單檢查邏輯     | 品報錯、不成箱排除及報錯                   |
| ------------ | ---------- | ------------------------------ |
| 驗收標準 - 功能驗收  | 資料下載、查詢    | 訂單資料查詢、下載(格式EXCEL&PDF).        |
| 驗收標準 - 功能驗收  | 訂單PDF單號標註  | PDF文檔，需同步新增SAP單號在後續下載的PDF檔案上。  |
| 驗收標準 - 性能驗收  | 頁面載入       | ≤10秒                           |
訂單提交/審批回應
| 驗收標準 - 性能驗收   | 時間     | ≤15秒                           |
| ------------- | ------ | ------------------------------ |
| 驗收標準 - 相容性驗收  | 流覽器相容  | 支持Chrome、Edge、Firefox（均為最新版）   |
支援PC端（Windows 10/11、macOS Ventura及以上），不包含手機端
| 驗收標準 - 相容性驗收  | 設備相容  | 格式開發  |
| ------------- | ----- | ----- |
優先順序1事件（系
2小時內指派工程師，4小時內解決（非乙方過錯除外），可支援臺灣非
| 服務品質要求 - 服務回應  | 統無法登錄等)  | 假日部分  |
| -------------- | -------- | ----- |
優先順序2事件（網
| 服務品質要求 - 服務回應  | 路服務故障）  | 2小時內指派工程師，6小時內解決（非乙方過錯除外）   |
| -------------- | ------- | --------------------------- |
優先順序3事件（單
| 服務品質要求 - 服務回應  | 據傳輸延遲）  | 2小時內指派工程師，8小時內解決（非乙方過錯除外）   |
| -------------- | ------- | --------------------------- |
預先安排的系統維護需提前24小時通知甲方，維護後24小時內回饋詳
服務品質要求 - 系統維護
|     | 停機通知  | 情   |
| --- | ----- | --- |
事件在指定解決時間50%內未找到解決方案時，需提交技術領導協調更資
| 服務品質要求 - 事件升級  | 緊急升級機制  | 深工程師處理                        |
| -------------- | ------- | ----------------------------- |
| 服務品質要求 - 績效評審  | 改進要求    | 未達標的，供應商需制定令K-C公司滿意的行動方案並落實   |
總的服務時間/月 –服務中斷時間/月乘以 100%，每個月服務中斷時間應
| 服務品質要求 - 績效評審  | 服務聯通性  | 少於3.6小時  |
| -------------- | ------ | -------- |
7

條款及條件
1. 關鍵績效指標達標義務 供應商同意，在履行其在本協議項下的義務過程中，達到各項關鍵績效指標。
2. 績效評審 雙方高管層代表每年應至少會晤兩次，評審供應商實現績效指標的情況。如存在任何需改進之處，
供應商應制定令K-C公司合理滿意的行動方案，促進績效改進的落實。雙方應持續協作，確保行動
方案能夠實現預期成效。
3. 不達關鍵績效指標的後果 a) 一旦供應商連續三個月達不到一項或多項關鍵績效指標，K-C公司有權書面通知供應商，要求
其實施整改，且如果供應商自接到K-C公司通知後的30天內，整改效果無法令K-C公司合理
滿意的，K-C公司有權因供應商違約行為，立即解除本協議。
b) 如因供應商達不到某項關鍵績效指標而導致受K-C公司及其關聯方（以下合稱為“受償方”）
產生或蒙受任何成本，包括（但不限於）受償方從另一家供應商處獲取服務而產生的額外成
本，供應商均應負責賠償受償方。
8

當地服務協定
附件 3 – 保險
1. 供應商須在提供服務之前，以及本協定有效期內的任何時間，在自負費用的基礎上，維護以下保險：
險種 保額
一般商業責任險 不適用
車輛商業險 不適用
為供應商全體員工投保職員工傷險，符合服務所在國法律要求 不適用
雇主責任險 不適用
專業/錯誤和疏忽責任 不適用
[任何其他必要的保險] 不適用
** 關於必要險種及建議保額，請參考全球風險管理合同工具。**
2. 供應商還應按照法律規定以及K-C公司的合理要求，投保一切必要的其他險種。
3. 供應商應在開始履行本協議之時，以及後續應 K-C公司不定期要求，向 K-C公司提供保單，以證明其已履行了
本附件的規定。
4. 供應商應在相關險種的理賠範圍發生重大變化或取消投保後7天內，通知K-C公司。
9

當地服務協定
附件 4 – 服務費用和付款方式
服務費：
(1) 專案開發費用 :
XXX USD，以上價格均為WHT稅的價格
(或是 XXXX TWD，以上價格均為未稅的價格, XXXX 含稅的價格.)
(2) 運維費用:
USD，以上價格均為WHT稅的價格
(或是 XXXX TWD，以上價格均為未稅的價格 , XXXX 含稅的價格.)
(3) K-C公司須支付票面款項的限期：:
65MR : 65MR 65days from monthend,Inv Receipt Date cutoff 20th .
20號前收到發票後, 次月結60天, 隔月5號付款, 具體支付比例及時間詳見以下供應商開票週期
供應商開票週期：
里程碑 付款條件 發票 & 支付金額
開具發票並支付20%的款項，
合同簽署後。若本採購訂單（PO）無需簽訂合 金額為 人民幣(未稅) (含稅) /
合同簽定
同，則在採購訂單正式下達後 USD（含WHT）or TWD (未
稅)(含稅) (擇一填寫)
開具發票並支付40%的款項，
金額為人民幣(未稅) (含稅) /
驗收 用戶接受度測試（UAT）完成後並確認。
USD（含WHT）or TWD (未
稅)(含稅) (擇一填寫)
開具發票並支付40%的款項，
金額為人民幣(未稅) (含稅) /
項目正式上線 專案上線並穩定運行(hypercare)後。
USD（含WHT）or TWD (未
稅)(含稅) (擇一填寫)
10

條款及條件
1. 發票 供應商發票須注明公司註冊號、採購訂單編號、履行服務的日期和時間，以及 K-C公司合理要求和本地稅務機關
規定的一切其他必要資訊。
2. 稅金 a) 供應商有責任明確商品服務稅/增值稅需求，辦妥納稅人註冊手續，並向 K-C 公司提供商品服務稅/增值稅註
冊號。
b) 除協定或採購訂單中另有規定外，服務費均應為不含商品服務稅/增值稅的價格。
c) 如服務地所屬國及服務費開票物件國境內的稅務機關要求，本協議任何款項須代扣代繳稅金，則此類稅金均
應從應付供應商的賬款中扣繳，K-C 公司有權從一切應付帳款總額中扣除稅金，代供應商向相關稅務機關和/
或其他監管機構納稅，並按照本協議的規定，將扣繳稅金後的賬款餘額支付給供應商。如供應商獲准享受任
何適用稅務公約項下減免稅待遇，供應商應均應向 K-C 公司出具由其常駐國稅務機關出具的相關函件或憑
證，以證明其納稅人居民身份。應供應商要求，K-C公司應立即向其出具所有適用完稅憑證。
3. 有效性 除雙方另行書面約定外，否則，服務費：
a) 均應構成K-C公司應就所獲服務支付的一切性質賬款總額；以及
b) 在K-C公司有權提前向供應商下達訂單的整個有效期內有效。
4. 欠款抵扣 本協議項下供應商欠付K-C公司的一切賬款，均可由K-C公司從應付供應商的一切賬款中扣除。
11

當地服務協定
附件 5A – 標準條款
1. 定義 a) “協定”指本協定，包括任何附件及附錄。
b) “保密資訊”指構成或在某種意義上涉及到一方現有或未來經營、經營利益、方式方法、產品、服
務、智慧財產權、員、客戶、供應商、顧客或公司事務，由對方或其員工通過任何途徑得知的一切性
質資訊（包括有關本協定存在與否及其各項條款的資訊），但均不包含以下資訊：（i）無本協議項下
違規披露行為的前提下，已向社會公開的資訊；（ii）從披露方獲取相關資訊之前，已由接收方掌握的
資訊；或（iii）在協力廠商不存在違規披露保密資訊行為的前提下，由接收方從相關協力廠商處獲取
的資訊。
c) “資料主體”指可借助任何個人資料識別其身份的自然人。
d) “缺陷服務”指不符合本協議或品質不佳的一切服務或服務成果。
e) “服務費”指附件4中規定的服務費。
f) “不可抗力”指超出一方合理控制能力的任何無法預見的事件，例如自然災害、戰爭、暴亂、騷亂、
打砸搶或人為破壞。
g) “商品服務稅/增值稅”指應就服務專案或服務費繳納的一切商品服務稅或增值稅。
h) “智慧財產權”指一切版權、專利權、設計權或商標權（不論是已註冊、未註冊或於世界任何地點申
請註冊）、產業、業務、公司名稱或功能變數名稱、一切發明、工藝或專有技術（不論是書面的或以
任何形式記錄的），或由智慧財產權活動所產生，屬於經營、產業、科學或藝術領域內的一切其他專
屬權、使用許可或私有權益。
i) “K-C關聯方”指Kimberly-Clark Corporation及其直接、間接分公司、附屬公司或被許可方。
j) “法律”指一切適用政府法律、法規、法令、制度、準則及工作標準。
k) “人員”指為供應商工作或由供應商聘用、提供本協定服務的一切雇員、代理商、管理人員或其他代
表。
l) “個人資料”指受一切適用隱私權保護類法律法規所保護的資料或資訊（包括但不限於以一切文本、
影像、聲音和多媒體形式記錄的資訊在內），至少指能夠用以識別或藉以認定個人或自然人的一切形
式資訊。
m) “採購訂單”或“PO”指本協議項下K-C公司向供應商下達的採購訂單。
n) “服務”指附件1所列服務專案，以及不定期下達的採購訂單之中指定的一切附加工作。
o) “供應商關聯方”指供應商直接或間接下屬分公司、附屬公司或被許可方。
p) “期限”指封面頁上規定的本協議有效期。
2. 提供服務 a) 本協議自起始日（詳見封面頁）起生效，在整個有效期內持續有效，一方依照本協議條款提前終止的
除外。
b) 供應商將按照本協定以及採購訂單中提及的或包含的任何其他條款及條件提供服務。如此類檔案和本
協議條款之間存在任何不一致之處，均應以本協議條款為准。
12

c) 在K-C公司下達採購訂單之前，供應商不得開始提供服務。
d) 供應商須在自負費用的基礎上，為提供協定各項服務，配備所有必要的工具、設備和其他資源。
e) 供應商受託履行本協定各項服務以及K-C公司下達的一切採購訂單，均應為非獨家服務性質，K-C公司
有權委託其他方履行相同或同類服務。雙方確認，K-C 公司無義務從供應商處訂購任何最低數量的服
務。
3. 人員 a) 供應商應確保其所有人員：
i. 遵守本協定及任何採購訂單中的所有相關保證和義務；以及
ii. 熟悉掌握並遵守所有適用安全衛生類法律法規，以及 K-C 公司駐地所通行的一切承包商及雇員
安全、安防及其他管理準則。
b) 如在本協議期限內的任何時候，K-C公司合理認定，提供協定各項服務的服務人員表現、質素或品行無
法令其滿意的，K-C公司有權要求將此類人員更換為適宜人員，供應商應隨即予以落實。
c) 供應商確認，其獨自負責就其名下常規或偶爾提供服務和/或履行協定或採購訂單的人員，承擔所有員
工福利（包括薪資、報酬以及其他員工福利、退休金、職員工傷險、稅金以及一切性質的其他責
任），並均應豁免K-C公司承擔其所可能產生的一切此類福利或傭工類稅金攤繳責任。
4. 保證 供應商保證：
a) 所有服務均應：
i. 體現應有的敬業水準和技能，符合K-C公司的利益；
ii. 符合服務物件國或地區境內的所有適用法律及強制性標準；
iii. 及時提供；以及
iv. 遵守K-C公司隨時下達、涉及到服務履約、服務性質和範圍的一切合理指令。
b) 供應商及其每一名人員（在適用範圍內）均應具備履行服務所必備的所有證照、許可證、同意書並經
過正規培訓，與本協議要求相一致。
c) 供應商不得以誘使任何人員或實體不正當履行自身崗位職責或職能，或對於此類行為給予獎勵為目
的，以直接或間接方式，通過任何代理商或仲介機構，向相關人員或實體饋贈、給予任何有價物品，
包括但不限於賄賂、招待或回扣在內（以下簡稱“違規款項”），以期就 K-C 公司的任何業務活動，
獲取不正當利益或優待。
d) 供應商所使用、由 K-C 公司自有、控制或提供的一切物資、設備或設施，均應安全、妥善維護（合理
預期磨損除外），如應K-C要求，應統一予以返還。
e) 服務期間所做出的一切行為，均不得由供應商用於一切非法、欺詐或侵權目的或活動。
f) 供應商將保存準確、完整的帳冊和記錄。
5. 缺陷服務 在不限制 K-C 公司所享有的一切其他權益基礎上，K-C 有權要求供應商針對缺陷服務實施整改，或為 K-C
公司報銷缺陷服務的整改成本或缺陷服務所引發的任何損害或損失。K-C公司有權從應付供應商的服務費或
一切其他賬款中，扣除此類款項。
6. 利益衝突 本協議期限內，供應商不得且須確保其人員不得從事與K-C公司利益或Kimberly-Clark 全球集團公司利益存
在實際或潛在衝突的任何業務或活動。
7. 智慧財產權 供應商：
a) 作為獲取服務費的對價，向 K-C 公司轉讓一切服務成果或其中各個交割項所蘊含的智慧財產權，以及
履行服務期間所創作的一切智慧財產權成果（以下簡稱“工作成果”），自創作之時起隨即予以轉
讓。
13

b) 保證工作成果均應為原創，不會全部或部分剽竊任何他人的研究成果。
c) 保證均不存在任何障礙，妨礙自身向K-C公司轉讓工作成果之中的智慧財產權。
d) 保證工作成果的智慧財產權以及履行服務的整個過程，均不侵犯任何協力廠商的智慧財產權。
e) 承諾不會做出、也不會協助任何他人直接或間接做出，對 K-C 公司享有工作成果的智慧財產權形成質
疑或使之無效的一切行為，不得做出經 K-C公司合理認定，減損向 K-C公司移交的工作成果價值的一
切行為。
f) 同意應 K-C 公司要求，在供應商自負費用的基礎上，為保護已轉讓智慧財產權，提供合理必要的協
助，包括就圍繞工作成果的一切侵權索賠案給予配合。
g) 同意K-C公司及其附屬公司均有權在世界範圍內，將工作成果用於一切用途，不受任何限制。
h) 同意：（i）對工作成果之中的供應商著作權可能構成侵權的一切 K-C 公司行為或失察，均應不予追究
（並應從相關原創人處獲取所有必要的著作權同意書，以確保 K-C 公司均不構成著作權侵權）；以及
（ii）K-C 公司有權在不注明工作成果著作權歸屬字樣，且未經供應商審核或批准工作成果的情況下，
有權使用工作成果，不論K-C公司是否針對工作成果做出實質性修改或調整。
8. 保密 a) 各方必須：
i. 採取一切必要措施，對保密資訊進行保密；
ii. 僅限以履行本協定為唯一目的，方可向其確有必要掌握和參考相關資訊的雇員、代理商或供應
商披露保密資訊，除此之外，均不得向任何其他人員披露任何保密資訊；以及
iii. 確保其獲取或接觸保密資訊的所有雇員，遵守本協議中包含的接收方的所有保密義務和承諾。
b) 接收方須在接到披露方要求後，立即向披露方返還由接收方或其雇員所掌管或控制的披露方的全部財
產，包括含有保密資訊、屬於披露方的智慧財產權或涉及到披露方公司事務及經營情況的所有檔案及
其他媒介。
c) 未經 K-C公司事先書面同意，供應商不得利用自身與 K-C公司之間的合約關係，進行行銷、宣傳、推
廣自身業務或其他目的。
9. 隱私 供應商在履行服務期間，在利用任何其它途徑採集、披露、存儲、使用、處理、傳輸、轉移或處置個人資
料（以下統稱“個人資料使用”）時，應：
a) 遵守所有適用隱私權保護法及資料安全法，不得因自身行為或失職，導致 K-C 公司蒙受任何罰金、處
罰、禁令或承擔責任。
b) 遵守K-C公司有關個人資料使用準則、方針和規程。
c) 在向K-C公司披露個人資料之前，征得資料獲取物件明確、清晰的書面同意。
d) 落實合理適當的技術及行政安全措施、資料保護措施，保護個人資料及個人資料使用安全，並應 K-C
公司要求，向其出具相關證明材料。
e) 不得做出也不得默許任何他方存在，違反本條規定或超出資料獲取物件同意範圍之外的任何個人資料
使用行為。個人資料使用行為僅限以履行服務為目的，在合理必要的範圍內進行。
14

f)  採取一切必要措施，確保本協議項下供應商所持有或存取的個人資料受到保護，防範濫用、干擾、遺
失、違規存取、非法篡改和披露個人資料的情況（以下統稱 “資料洩露”）發生。供應商應就一切實
|     | 際或疑似資料洩露事件，立即向 | K-C公司做出書面通報，如應 | K-C公司要求，應在不加收費用的基礎 |
| --- | -------------- | -------------- | ------------------ |
上，向K-C公司提供相關資訊、協助和其他配合。

g)  立即向 K-C 公司轉發協力廠商就本協議項下供應商所持有或獲得的個人資料所提出的一切投訴、要求
或通知。

h)  在向 K-C公司組建地所屬國境外的任何人員披露或傳輸本協定相關個人資料之前，首先征得 K-C公司
的事先書面同意。

| 10.   雙方關係  | a)  雙方約定，彼此之間的關係為獨立簽約方關係，本協定及採購訂單中的任何條款均不構成雇主和雇員 |     |     |
| ----------- | ------------------------------------------------ | --- | --- |
關係、委託人和代理商關係或合夥經營關係。

b)  未經另一方事先書面批准，任何一方均無權以任何方式代理另一方事務，或代另一方承攬任何責任或
義務。

| 11.   賠償  | 供應商對於自身違反或未兌現本協議某項自身義務或保證的違約行為或不作為，以及供應商一切失職、不 |     |     |
| --------- | ---------------------------------------------- | --- | --- |
法行為或疏忽，或因供應商提供服務所引發的一切人員索賠案，均應向K-C公司及其管理人員、雇員和代理
商（以下簡稱“受償方”）賠償由此直接或間接引發或的與之相關的、受償方所蒙受或產生的一切賠償、損
失、侵害、責任或費用（包含應付給法律代表的實際法律費用）。

| 12.   不可抗力  | 雙方均無需就不可抗力事件所導致的自身未能履約或延期履約，向對方承擔任何責任，前提是受不可抗力 |     |     |
| ----------- | ---------------------------------------------- | --- | --- |
|             | 影響的一方應在客觀條件允許的前提下，儘快通知對方並採取合理措施，儘量避免無法履約或延期履約的 |     |     |
|             | 情況發生。凡不可抗力事件的持續作用期超過三個月的（包括此期限內間歇但定期發生的情況在內），雙 |     |     |
|             | 方各自均有權經書面通知對方後，立即解除本協議。                        |     |     |
13.   供應商社會責任 a)  供應商保證和陳述，其理解K-C的供應商社會責任標準（以下簡稱“SSCS”，參見附件5C）並將按照
| 標準  | 與 SSCS 相一致的方式開展業務。SSCS      | 包括至少應遵守與工作場所健康和安全標準、勞動實踐、薪 |     |
| --- | --------------------------- | -------------------------- | --- |
|     | 酬、工作時間、非歧視性雇傭慣例和環境合規相關的法律。  |                            |     |

b)  K-C將聘請獨立的協力廠商檢查和審核供應商遵守SSCS和法律的情況。K-C保留在供應商工廠進行協
力廠商檢查和審核的權利；但是，每個工廠每年只能進行一次審核，除非在特定的一年中需要進一步
的後續審核，以解決任何不合規的檢查結果。在審查過程中，供應商應為 K-C 的審查員和檢查員的安
全和便利提供所有合理的協助，包括在供應商的工廠為K-C的審查員和檢查員提供足夠的工作區。

c)  供應商應獨自承擔與協力廠商檢測和審核供應商工廠遵守SSCS和法律情況相關的所有合理的費用。如
|     | 果供應商在收到上述費用的帳單後 | 30日內未向協力廠商審查員支付該等費用，供應商將被視為違反了 |     |
| --- | --------------- | ------------------------------ | --- |
SSCS。

d)  如果K-C發現，供應商違反了法律或以不符合SSCS的方式開展業務，除有權終止本協議外，K-C還有
權要求供應商賠償K-C因供應商不合規發生的任何罰款或費用。

| 14.   協議續期  | 除本協議已經終止外，否則K-C公司在自願續約的情況下，應提前到期日期（詳見封面頁）前至少60天書 |     |     |
| ----------- | ------------------------------------------------ | --- | --- |
面通知供應商續約。儘管存在前述規定，但在未曾正式續約的情況下，凡供應商在協議有效期到期後，繼
續應 K-C 公司要求提供服務的，此類服務應視為按照原協定相同條款逐月提供，直至終止或正式續約為
止。

15.   其他  a)  未經 K-C 公司事先書面同意，供應商不得對外轉讓或分包本協定或任何採購訂單。對於獲准轉讓或分
包的情況，供應商仍應就已核准分包商違反本協議的一切行為或失職，繼續承擔責任。

15

b) 在法律所允許的最大範圍內，雙方各自均無需承擔對方任何特殊的、間接的、繼發性的、偶然性的或
懲戒性額損失、利潤損失、營收損失、商譽損失、預期存款損失或虧損，不以合約、侵權（含失職在
內）責任，或衡平法、法律規定或其他法理依據為轉移，無論相關損失或侵害是否可以預見，甚至包
括一方已事先接到可能發生此類損失或侵害的通知的情況在內。
c) 凡一方未能行使或推遲行使某項自身權益或權利的，均不構成從此均應放棄相關權益或權利。棄權行
為僅限以出具書面聲明的方式方為有效。
d) 本協定和任何採購訂單構成雙方就本協定標的在所有方面達成的完整協定和諒解，並取代雙方先前就
本協定標的在任何方面達成的任何協定和諒解。
e) 對本協定所做的修訂或修改，僅限以雙方共同簽署書面協定的方式方為有效。
f) 雙方可簽署本協定的任意數量文本。每份文本均視為原件，所有文本共同構成同一份協定。
g) 與本協定或採購訂單有關的任何通知，均應採用書面形式，發至本協議封面頁上雙方各自指定代表簽
收。一方有權通過向對方出具通知的方式，變更其通信地址。
h) 由其性質所決定，應在本協議終止或到期後繼續有效的一切條款，一律在協議終止或到期後繼續有
效。
i) 被認定為非法、無執行力或無效的條款，均應從本協議之中分割出去。所有其他條款繼續擁有完整法
律效力。
j) K-C公司有權經提前一定合理期限書面通知供應商，對供應商駐地、帳冊、記錄及其他材料實施審核，
以確保供應商已如實履行本協議各項條款。如應 K-C公司合理要求，供應商應按照 K-C公司合理決定
的審查頻次，向K-C公司開放其人員、設施和記錄的訪談權和查閱權。審核完畢後，K-C公司和供應商
應隨即展開會晤，討論審核結論，供應商應針對審核報告中所提出的一切不足之處和調整建議做出回
應。供應商應確保，本條項下 K-C 公司所享有的審核權均應適用于供應商名下履行本協定服務的分包
商，同時應將此項許可權明確納入供應商與此類分包商所訂立的一切協議中。
k) 本協定（及一切採購訂單）均受 K-C公司成立地所屬國法律管轄，雙方均同意服從 K-C公司成立地所
屬國的法院的專有司法管轄權
16

當地服務協定
附件 5B – 退出條款
1. 出於便利終止 除另行書面約定外，否則 K-C公司有權經提前 60 天書面通知供應商後，出於便利終止本協議、一份或
多份採購訂單或部分服務。K-C 公司有權決定，按照通知期內預計供應商能夠正常賺取的費用，就受此
影響的服務專案，向供應商支付相關款項而不出具終止通知。
2. 因故終止 a) 任何一方存在以下情況的，另一方有權經隨時書面通知對方後，隨即解除本協議和/或任何採購訂
單：
i. 違反協定或採購訂單之中某項條款，且在收到另一方整改通知後的30天內，仍未能糾正違
約行為的；或
ii. 實施破產程式或與自身名下的某家債權人簽署轉讓協議或以資抵債方案，或（對於公司）
向法院提交破產申請或法院下達破產令，或通過破產清算決議，或出具此類議案討論通知
（以公司重組或兼併為目的的除外），或法院為該方或其名下全部或部分財產、業務，指
定管理方或監管方的。
b) K-C公司在供應商符合以下條件的情況下，經隨時書面通知供應商後，可隨即解除本協定和/或採購
訂單：
i. 管理權、產權或控股權發生變更的；
ii. 從事任何活動，可能損害或侵害K-C公司聲譽的； 或
iii. 支出或收受任何違規款項，或違反標準條款第4（c）款之中自身保證事項的；
c) 如K-C公司依照第2（b）（iii）款終止本協議，除繼續享有K-C公司原有的一切其他權益外，K-C
公司還有權追討：（i）違規款項的金額或價值；以及（ii）違規款項所涉及的一切罰金或費用。此
外，供應商應對自身或其任何分包商或代理商違反或疑似違反一切司法轄區境內反腐敗法的違法或
失職行為，均應就K-C公司因此蒙受的一切訴訟案或其他司法、行政或法律程式，向K-C公司賠償
由此引發或與之相關的一切調查或維權辯護成本、費用、滯納金、罰金或其他債務。
3. 終止的後果 a) 如本協議到期或因任何原因終止，供應商在接到K-C公司要求的情況下，應：
i. 盡一切合理努力，協助K-C公司落實向另一家供應商平穩、有序的服務過渡；以及
ii. 向K-C公司移交，由供應商所掌管的K-C公司名下所有保密資訊和其他財產，包括作為智
慧財產權載體的一切檔或資料、資料，以及由供應商在服務期間所編制的其他交割項在
內。
b) 本協議終止後，K-C 僅需向供應商支付截至終止之日的累計服務費，均不向供應商支付任何其他費
用、款項或其他錢款。
17

當地服務協定
附件 5C –供應商社會責任標準
供應商社會責任標準
Kimberly-Clark Corporation 的價值觀和承諾
成為美好生活所需的必需品領域領導者是 Kimberly-Clark 的經營目標。我們相信做生意的方式與生意本身同樣重要。
簡單來說，誠信與高道德標準的經營是 Kimberly-Clark 的經商之道。我們的「行為規範」提供了以誠信、合乎道德
且適當的方式來對待客戶、供應商、其他員工、競爭對手及公眾的指引。
我們公司尊重旨在促進並保護人權與環境的國際社會責任標準及環保原則。我們的政策與數個國際標準的目標相一
致，包含《國際勞工組織關於工作中的基本原則和權利宣言》(International Labor Organization’s Declaration on
Fundamental Principles and Rights at Work)。這些價值觀在我們的《就業人權政策與指示》(Human Rights In
Employment Policy and Instructions) 中正式規定。
我們對於這些國際原則的承認與我們對於完善工作場所、保護環境、增強我們營運所在社區的努力一致。
《供應商社會責任標準》──反映了 Kimberly-Clark 的價值觀
《供應商社會責任標準》(Supplier Social Compliance Standards, SSCS) 是 Kimberly-Clark 工作場所課責任計劃的重要
支柱。這些標準的推動力來自於我們相信良好的企業公民是長期商業成功的關鍵，必須反映在我們的合作關係中、
我們工作場所的行動中，以及授權直接供應商之工作場所的行動中。
儘管世界各地的法律、習俗、經濟條件差異影響了商業慣例，我們仍然相信共同的價值觀是 Kimberly-Clark 與供應
商之間關係的基礎。SSCS 傳達了我們的價值觀與期望，並強調負責任的工作場所政策及實踐至少必須廣泛地遵守
適用的職業安全以及健康、環境及勞工法律與法規。下方概述的標準反映了我們在政策中堅持的價值觀，我們希望
供應商能夠遵循這些標準與要求。
結社自由及集體談判
尊重員工結社自由的權利、從事其他受保護之活動的權利，以及避免此類活動的權利。當員工由法律認可的工會代
表時，尊重其所選擇之代表人為了代表員工，能夠在合理的程度上聯絡員工的權利，並且真誠地與這些代表人進行
協商。
防範僱用童工
供應商不得雇用未滿 15 歲者。若地方法律規定的年齡較低，但係依照《國際勞工組織第 138 號公約》(International
Labour Organization Convention 138) 的開發中國家例外情況，則將適用此較低的年齡。供應商不得招聘童工，也不
得以任何方式剝削兒童。若發現有兒童直接為該供應商工作，則供應商應尋求顧及感受且令人滿意的解決方案，以
兒童的最佳利益優先。
禁止強迫勞動與虐待勞工
禁止以紀律的形式對員工進行身體與精神上的虐待，禁止所有形式的強迫勞動，包含強迫監禁勞動、契約勞動、抵
債勞動或奴隸勞動，以及與此類濫用相關的人口販賣。
18

禁止歧視
禁止在就業的所有方面上（含員工的招聘、雇用、人員配置、培訓、報酬、待遇及晉升），對於受法律保護的特徵
進行歧視與騷擾。
工時、工資及福利
相應業界和／或當地勞動市場來補償員工。營運須完全符合適用之工資、工時及福利的法律。
提供安全且健康的工作場所
致力提供安全、健康的工作場所。透過遵守所有適用之職業安全與健康的法律、規則及法規，以及透過減輕事故、
傷害及危害健康的風險，來維持高生產力的工作場所。
保護環境
依照所有適用的環境法律、規則及法規來進行商業活動。
商業誠信
透過遵守所有關於賄賂、洗錢和／或腐敗之適用法律，以及禁止與任何人（含政府官員）藉由交換金錢或任何其它
有價物來影響行動或取得不當優勢，致力提供零賄賂及零腐敗的工作環境。
衝突礦物
供應商將本著高度負責的態度從剛果民主共和國 (DRC) 及周邊國家以外的礦山與冶煉廠或電子行業公民聯盟-全球
電子可持續性倡議組織 (EICC-GeSI) 指定的「無衝突」礦山與冶煉廠採購「衝突礦物」（錫、鉭、鎢和黃金），供
應商還將各自制定並提供盡職調查計劃的書面證明文件，確保供應鏈「無衝突」。
遵守適用的法律與標準
Kimberly-Clark Corporation 的供應商應廣泛地遵守關於製造與經銷我們的產品與用品，以及關於服務提供的所有適
用的地方及國家法律、規則、法規與要求。
合規證明
為最低限度地遵守 SSCS，工廠必須證明其沒有違反以下各項： 童工；強迫勞動；虐待勞工；結社自由與集體談判；
歧視；存在迫切威脅、嚴重傷害或威脅員工的工作環境。所有其它對於 SSCS 的違反，供應商將負責糾正，作為供
應商在未來替 K-C 選擇提供商之責任的一部分。
此要求是所有 Kimberly-Clark 與其直接及授權供應商之協議的一部分。我們希望供應商能夠制定並實施適當的內部
業務流程，以確保遵守 SSCS。
Kimberly-Clark 定期利用獨立的第三方來評估供應商對於 SSCS 的合規性。此評估通常包含與員工及現場的合約勞動
者進行保密的面談。供應商應與 Kimberly-Clark 合作實施所需的糾正措施。若供應商未能完全遵守 SSCS，
Kimberly-Clark 保留發出糾正措施和／或矯正措施的權利，包含但不限於供應商與 Kimberly- Clark 之間協議的終止。
若您有任何疑問，或想要詳細討論我們的供應商社會責任要求，請寄送電子郵件給 kccorpsocialcompliance@kcc.com
或瀏覽我們的網站：http://www.kimberly-clark.com。
19

附件5D K-C Information Security Addendum
K-C信息安全附录
I. Definitions 定义
Addendum: This K-C Information Security Addendum.
附录：本K-C信息安全附录。
K-C: The Kimberly-Clark entity, which may include Kimberly-Clark Corporation or a subsidiary or affiliate thereof,
that is the counterparty to the named Vendor in the underlying Master Services Agreement or other agreement that
this Addendum is a part of and incorporated into.
金佰利：金佰利实体（可能包括Kimberly-Clark Corporation或其子公司或关联公司），是与供应商在主服
务协议或其他本附录所附属并纳入的协议中的交易方。
K-C Information: All (i) information received by Vendor from K-C, or information collected, accessed, or generated
by the Vendor in connection with its provision of the Services, that should reasonably be considered confidential
under the circumstances; (ii) all information identified as confidential to which Vendor has access; and (iii) without
limitation, (A) all trade secrets, (B) existing or contemplated products, services, designs, technology, processes,
technical data, engineering, techniques, methodologies and concepts and any information related thereto, (C)
information relating to business plans, sales or marketing methods and customer lists or requirements, and (D)
Personal Data.
K-C 信息：所有（i）供应商从金佰利收到的信息，或由供应商收集、访问或生成的与其所提供服务相关
的信息，在这种情况下应被合理视为机密信息；（ii）供应商有权访问的所有被标识为机密的信息；以及
（iii）但不限于（A）所有商业秘密，（B）现有的或预期的产品、服务、设计、科技、流程、技术数据、
工程、技术、方法和概念以及与之相关的任何信息，（C）与业务计划、销售或营销方法以及客户名单或
要求相关的信息，和（D）个人数据。
K-C Information Incident: Any actual or reasonably suspected compromise to the availability, confidentiality,
integrity, or privacy of K-C Information or the Services, including without limitation the accidental, unlawful, or
unauthorized destruction, loss, acquisition, alteration, interruption, corruption, disclosure of, access to, use, or other
processing of K-C Information.
K-C 信息事件：任何对 K-C 信息或服务的可用性、保密性、完整性或隐私性的实际或合理怀疑的损害，
包括但不限于意外、非法或未经授权的销毁、丢失、获取、更改、中断、损坏、披露、访问、使用或以
其他方式处理K-C信息。
Personal Data: Data that can be attributed to an identifiable consumer, customer, employee, other individual, or
household. This includes identifying information like an individual’s full name, but also can include information
that can be linked directly or indirectly to an identifiable individual, like a home address, email address, phone
number, and device information. Personal Data does not include data that is fully de-identified or fully anonymized
for which the identity of any individual is unknown and any linkage of such data to any individual has been
permanently removed.
个人数据：可归属于可识别消费者、客户、员工、其他个人或家庭的数据。该数据不仅包括个人全名等
身份识别信息，也包括可直接或间接与可识别个人相关联的信息，比如家庭住址、电子邮件地址、电话
号码和装置信息。个人数据不包括完全去除身份识别信息或完全匿名化的数据，因为任何个人的身份无
法通过此类数据被明确，且此类数据与任何个人的任何关联已被永久删除。
20

Services: The goods and/or services provided by Vendor to K-C pursuant to the underlying Master Services
Agreement, a statement(s) of work, or other agreement between K-C and Vendor.
服务：供应商根据相关主服务协议、工作说明书或 K-C与供应商之间的其他协议向 K-C提供的商品和/或
服务。
Vendor: The entity that is the counterparty to K-C in the underlying Master Services Agreement or other agreement
that this Addendum is a part of and incorporated into.
供应商：在主服务协议或本附录所附属并纳入的其他协议中作为K-C交易方的实体。
II. Information Security Program 信息安全计划
a. Vendor agrees to establish and maintain, in writing, an information security and protection program that
meets or exceeds the requirements of this Addendum and applicable laws and regulations (“Information
Security Program”). Vendor will establish and maintain adequate and appropriate administrative,
environmental, technological, and other controls and safeguards as part of its Information Security Program,
which include security and privacy procedures, practices, accountable officers, safeguards, and technical
and organizational controls that are designed to (1) ensure the confidentiality, integrity, and availability of
K-C Information while such is in Vendor’s possession, custody, or control; (2) prevent a breach or malicious
code infection of the Services and to protect against any anticipated threats or hazards to K-C Information;
(3) protecting against the occurrence of a K-C Information Incident; (4) ensure the proper access and use
limitations, return, or disposal of K-C Information as further detailed herein; and (5) ensure that Vendor
personnel and all subcontractors engaged by Vendor comply with this Addendum.
a. 供应商同意以书面形式建立并维护满足或超过本附录及适用法律法规要求的信息安全和保护计划
（以下简称“信息安全计划”）。作为信息安全计划的一部分，供应商将建立并维持充分和适当的
行政、环境、技术及其他控制和保障措施，其中包括安全和隐私程序、实践、责任官员、保障措
施以及技术和组织控制措施，旨在（1）确保K-C信息在供应商拥有、保管或控制期间的保密性、
完整性和可用性；（2）防止服务遭受破坏或恶意代码感染，并保护K-C信息免受任何预期的威胁
或危害；（3）预防 K-C信息事件的发生；（4）确保对 K-C信息的正确访问、使用限制、归还或
处置（详见本附录的进一步说明）；以及（5）确保供应商人员和供应商聘用的所有分包商遵守本
附录。
b. Vendor’s Information Security Program will follow a cybersecurity and privacy framework of recognized
standards and their controls, such as those outlined by International Standards Organization (“ISO”)
27001/27002, National Institute of Standards and Technology (“NIST”), Center for Internet Security (“CIS”)
Critical Security Controls Top 20, Control Objectives for Information and Related Technologies
(“COBIT”), Open Web Application Security Project (“OWASP”), or other generally accepted industry
standards.
b. 供应商的信息安全计划将遵循由公认标准及其控制措施组成的网络安全和隐私框架，例如国际标
准化组织（“ISO”）27001/27002、美国国家标准与技术研究院（“NIST”）、互联网安全中心
（“CIS”）的关键安全控制、信息及相关技术控制目标（“COBIT”）、开放式Web应用程序安全项
目（“OWASP”）或其他公认的行业标准。
c. Such Information Security Program shall be appropriate to the size, complexity, and the nature and scope
of Vendor activities under this Addendum and the master contract document which it appends, and shall
provide for the following:
21

c. 此类信息安全计划应与本附录及其所附主合同文件项下的供应商活动的规模、复杂性、性质和范
围相适应，并应规定以下内容：
1. the security systems, computers, and technologies (including but not limited to firewalls, intrusion
detection, pseudonymization, anonymization, and encryption and other secure technologies) in
connection with any transfer, communication, or remote access connectivity involving K-C Information;
1. 与任何涉及 K-C信息的传输、通信或远程访问连接相关的安全系统、计算机和技术（包括但不
限于防火墙、入侵检测、假名化、匿名化、加密和其他安全技术）；
2. physical security procedures, including physical access control, security guards, and regular monitoring
of all work areas;
2. 物理安全程序，包括物理访问控制、保安人员以及对所有工作区域的定期监控；
3. background checks on Vendor personnel that have access to K-C Information or K-C systems or
technologies;
3. 对有权访问K-C信息、系统或技术的供应商人员进行背景调查；
4. restriction of access, use, and copying of K-C Information strictly to a “need-to-know” basis, with the
appropriate level of access and authorization permissions based on such need, and only at authorized
locations;
4. 严格按照“按需知密”的原则，限制对 K-C 信息的访问、使用以及复制，并根据此类需求授予仅
可在授权地点进行的适当访问和授权许可；
5. regular monitoring of the transport and storage of K-C Information;
5. 定期监控K-C信息的传输和存储；
6. regular monitoring and appropriate enhancement of password procedures; and
6. 定期监控和适当增强密码程序；以及
7. regular and random monitoring of Vendor personnel providing the Services or working on Kimberly-
Clark systems, technologies, and/or programs.
7. 对提供服务或处理K-C系统、技术和/或计划的供应商人员进行定期和随机监控。
d. K-C shall have the right at any time and at its expense, to have a qualified third party perform an
audit/assessment of Vendor’s privacy and security practices and controls, the scope of which shall include
measuring standard operating procedures and software design, development and testing practices against
relevant criteria such as those outlined by ISO 27001/27002, NIST, CIS Critical Security Controls, COBIT,
MITRE Corporation Common Weakness Enumeration (“CWE”), Software Engineering Institute’s
Computer Emergency Response Team (“CERT”) Secure Coding Standards, or other generally accepted
industry standards. Any audits/assessments shall be upon reasonable notice to Vendor in writing of not less
than fourteen (14) days, shall be scheduled and conducted during normal business hours, shall not
unreasonably interfere with business activities, and shall be subject to Vendor’s reasonable policies and
practices in effect for site visits and audits/assessments to maintain the security and the confidentiality of
information which is proprietary and confidential to Vendor or its clients.
d. K-C 有权随时自费让合格的第三方对供应商的隐私和安全实践及控制措施进行审计/评估，其范围
应包括根据 ISO 27001/27002、NIST、CIS 关键安全控制、COBIT、MITRE 的通用缺陷列表
（“CWE”），软件工程研究所计算机应急响应组（“CERT”）的安全编码标准或其他公认的行业标
准衡量标准操作程序和软件设计、开发及实践测试。任何审计/评估应在不少于十四（14）天内以
书面形式合理通知供应商，并且应在正常工作时间内安排和进行，不得不合理地干扰业务活动，
并应遵守供应商在实地考察和审计/评估方面现行的合理政策和做法，以维护供应商或其客户专有
和保密信息的安全性和保密性。
22

Following completion of such audit/assessment, K-C shall notify Vendor in writing of any deficiencies in
comparison to such standards like those listed above in the section (“Deficiencies”). Vendor shall, within
thirty (30) days of such written notification, either correct such Deficiencies or provide K-C with a plan
that is acceptable to K-C in its reasonable discretion for remediating the Deficiencies. Unless and until the
Deficiencies are remediated or an acceptable plan for remediating such Deficiencies is accepted by K-C,
K-C may exercise such rights and remedies it deems appropriate under the circumstances, including,
without limitation, suspending the Services and/or Vendor’s access to K-C systems, technologies, and/or
K-C Information. Further, such Deficiencies that have not been remediated shall be deemed a material
breach of the Addendum and the Agreement. Vendor shall bear all reasonable costs for retesting and
validations performed to verify the remediation of any Deficiencies.
在完成此类审计/评估后，K-C 应以书面形式通知供应商与上文所述标准相比存在的任何缺陷（以
下简称“缺陷”）。供应商应在收到相关书面通知的三十（30）日内就该缺陷做出整改，或向 K-C
提供在其合理判断下可接受的缺陷补救计划。除非缺陷得到补救，或者一个补救计划被 K-C 所接
受，否则 K-C可行使其认为在此情况下适当的权利和补救措施，包括但不限于暂停服务和/或供应
商对K-C系统、技术和/或K-C信息的访问。此外，尚未得到补救的缺陷应视为对本附录和有关协
议的重大违约。供应商应承担所有用于重新测试和验证缺陷修复而产生的合理费用。
e. Vendor’s Annual Assessment: Vendor shall carry out no less than annually an independent, qualified third-
party audit of its Information Security Program and privacy program against a generally accepted industry
standard (e.g., SSAE 18, SOC II), provide such audit findings to K-C, and Vendor shall implement at its
expense any required remediations or as identified by such audits against such standards.
e. 供应商年度评估：供应商应根据公认的行业标准（例如 SSAE 18、SOC II）对其信息安全计划和
隐私计划进行不少于每年一次独立的、合格的第三方审计，并向 K-C 提供审计结果。供应商应承
担任何必要补救措施，或根据前述标准确定的补救措施而产生的费用。
f. Vendor shall promptly implement security practice improvements and patch security vulnerabilities in the
Services as may be necessary to respond to evolving and newly discovered security threats and
vulnerabilities.
f. 供应商应及时实施安全实践改进并修补服务中的安全漏洞，以应对不断变化的和新发现的安全威
胁和漏洞。
g. Vendor shall abide by a policy of least privilege and segregation of duties for granting logical access to K-
C systems and technologies and K-C Information by granting to employees and other personnel access to
only the K-C systems, technologies, and/or K-C Information necessary to carry out their job functions in
relation to the Services. Such policies must include controls ensuring proper operating system permissions,
file access, user accounts and associated privileges, application-to-application communications, APIs, and
other relevant authorization components.
g. 供应商在授予对 K-C系统、技术和 K-C信息的逻辑访问权限时，应遵守最小特权原则和职责分离
政策，仅授予员工和其他人员履行其与服务相关的工作职能所需的 K-C系统、技术和/或信息的访
问权限。此类政策必须包括确保适当的操作系统权限、文件访问、用户账号和相关权限、应用程
序间通信、应用程序编程接口和其他相关授权组件的控制措施。
h. Vendor shall receive and store K-C Information into either (1) a database or repository maintained
exclusively for the storage of K-C Information or (2) a database or other repository for which the Vendor
has ensured proper data segregation (both physical or logical segregation) of K-C Information from all other
data. Vendor’s application instances and data stores shall be architected with appropriate measures to
23

prevent unauthorized access to K-C Information, including but not limited to hardening the data store as
well as the application to ensure data segregation.
h. 供应商应接收 K-C信息并将其存储到（1）专门用于存储 K-C信息的数据库或存储库，或（2）已
经供应商确保 K-C 信息与所有其他数据将进行适当数据隔离（包括物理隔离或逻辑隔离）的数据
库或其他存储库中。为防止未经授权访问 K-C 信息，供应商的应用程序实例和数据存储应采用适
当的措施来构建，包括但不限于强化数据存储和应用程序，以确保数据隔离。
i. Vendor shall maintain compliance with all open-source licenses. This will apply to all licensing
environments.
i. 供应商应遵守所有开源许可证的规定。这将适用于所有许可环境。
j. Vendor represents and warrants that the Services have been designed, developed, tested, and maintained
according to generally accepted industry standards and practices (meaning those reasonably expected of a
diligent Vendor providing similar software and services to Fortune 500 companies) to appropriately
safeguard the Services (and any K-C Information posted, transmitted, displayed, submitted, or generated
by or through the Services) against accidental or unauthorized access and/or interference by third parties,
intrusion, theft, destruction, loss, or alteration, including without limitation any K-C Information Incident.
j. 供应商声明并保证，服务的设计、开发、测试和维护均符合公认的行业标准和惯例（即勤勉的供
应商在向《财富》500 强公司提供类似软件和服务时合理预期的标准和惯例），以适当保护服务
（以及由或通过服务发布、传输、显示、提交或生成的任何 K-C 信息）免受意外或未经授权的访
问和/或第三方干扰、入侵、盗窃、销毁、损失或更改，包括但不限于任何K-C信息事件。
k. Vendor shall encrypt all K-C Information in transit utilizing strong cryptographic mechanisms, such as
secure shell protocol (“SSH”), tokenization, certificates, public key infrastructure (“PKI”), virtual private
network (“VPN”), or transport layer security (“TLS”).
k. 供应商应使用安全外壳协议（“SSH”）、令牌化、证书、公钥基础设施（“PKI”）、虚拟专用网络
（“VPN”）或传输层安全（“TLS”）等强加密机制，对所有传输中的K-C信息进行加密。
l. When Vendor hosts or stores K-C Information, Vendor will encrypt all K-C Information at rest. K-C
Information at rest is data that is commonly located on desktops and laptops, in databases or on file servers.
In addition, subsets of data can often be found in log files, application files, configuration files, and many
other places.
l. 当供应商托管或存储K-C信息时，供应商将对所有K-C信息进行静态加密。静态的K-C信息是指
通常位于台式电脑和笔记本电脑、数据库或文件服务器中的数据。此外，数据子集通常可以在日
志文件、应用程序文件、配置文件和许多其他位置找到。
m. Encryption solutions will be equivalent to or more restrictive than those deployed through the use of NIST
Federal Information Processing Standard (“FIPS”) 140-3 Level 2 Requirements or similar approved
encryption mechanisms. Vendor shall provide an automated remote key with an established update method
that protects the confidentiality and integrity of the cryptographic keys.
m. 加密解决方案将等同于或比使用美国国家标准与技术研究院（“NIST”）颁布的联邦信息处理标准
（“FIPS”）140-3第 2级要求或类似获批加密机制更为严格。供应商应提供具备既定更新方法的自
动远程密钥，以保护密钥的保密性和完整性。
n. Vendor is responsible for maintaining incremental and full backups of K-C Information for an orderly and
timely recovery of such data in the event that the provision of the Services is interrupted and will follow
24

business continuity and disaster recovery procedures from relevant privacy and cyber-security frameworks,
such as ISO 27001 or NIST. Vendor will perform a yearly business continuity test to ensure systems can
provide orderly and timely recovery. Upon K-C’s request, Vendor will share the results of the test in a
reasonable degree of detail to provide K-C assurance that processes and procedures are functioning
effectively.
n. 供应商负责维护 K-C 信息的增量和完整备份，以便在服务中断时能够有序且及时地恢复数据，并
将遵循ISO 27001或NIST等相关隐私和网络安全框架规定的业务连续性和灾难恢复程序。供应商
将进行年度业务连续性测试，以确保系统能够提供有序且及时的恢复。应 K-C 的要求，供应商将
合理且详细地分享测试结果，以向K-C保证流程和程序的有效运行。
o. Vendor, at its sole cost, will promptly return K-C Information upon expiration, termination or cancellation
of the Agreement. Within thirty (30) days of the expiration or termination of the Agreement or other
engagement (e.g., Proof of Concept), the Vendor shall remove all K-C Information from its systems,
including any memory devices, and shall at K-C’s discretion destroy or return all documents, materials,
software, or other media containing K-C Information, and delete existing copies. If K-C chooses to have
Vendor destroy the K-C Information and/or materials, the Vendor shall provide a certificate of destruction
to K-C in writing, attesting that Vendor has properly destroyed all K-C Information and other materials. In
the event Vendor is unable to return or delete K-C Information for reasons allowed under the law, Vendor
shall (1) promptly inform K-C of the reason(s) for its refusal of the request, (2) ensure the privacy,
confidentiality and security of such K-C Information, including by continuing to apply this Addendum to
such K-C Information for as long as it is retained by Vendor, and (3) delete or return the K-C Information
accordingly promptly after the reason(s) for Vendor’s refusal has expired.
o. 供应商将在协议到期、终止或取消时及时归还 K-C 信息，费用由其自行承担。在协议或其他约定
（例如概念验证）到期或终止后的三十（30）天内，供应商应从其系统中删除所有 K-C 信息，包
括任何存储设备，并根据 K-C的指示销毁或归还所有包含 K-C信息的文件、材料、软件或其他介
质，以及删除所有现有副本。如果K-C选择让供应商销毁K-C信息和/或材料，供应商应以书面形
式向 K-C提供销毁证明，以证明供应商已妥善销毁所有 K-C信息和其他材料。如果供应商因法律
允许的原因无法归还或删除 K-C信息，则供应商应（1）及时通知 K-C拒绝该请求的原因，（2）
确保此类 K-C 信息的隐私性、保密性和安全性，包括在供应商保留K-C信息期间继续适用本附录，
以及（3）在供应商拒绝的原因失效后，立即删除或归还相应的K-C信息。
p. At K-C’s request, Service Provider/Vendor shall provide K-C with evidence of compliance the
requirements set forth in this Addendum.
p. 应K-C的要求，服务提供商╱供应商须向K-C提供符合本附录所载要求的证明。
III. K-C Information Security Incidents K-C 信息安全事件
a. Upon becoming aware of or reasonably suspecting a K-C Information Security Incident, the Vendor shall
(1) immediately, but in no case after seventy-two (72) hours after it becomes aware of the K-C Information
Incident, notify K-C in writing and investigate the reasons for and circumstances surrounding such K-C
Information Incident, preserving any potential forensic evidence relating to the security incident; (2) as
quickly as circumstances permit, plan and take reasonable and appropriate actions to identify and mitigate
all vulnerabilities that were exploited, remove any malicious code, inappropriate materials, and other
components, and implement those security measures necessary to ensure that a similar K-C Information
Incident cannot occur and restore the Services to normal operation; (3) within seventy-two (72) hours of
discovery, provide a written report to K-C summarizing in reasonable detail when and how the K-C
25

Information Incident was discovered; the categories and approximate number of affected data subjects; the
categories and approximate number of K-C Information and/or records that was accessed, used, or disclosed;
the person(s) who accessed, used and disclosed and/or received the K-C Information (if known); the impact
on K-C and/or individuals affected by such K-C Information Incident; the nature and duration of the K-C
Information Incident; the cause thereof, and the corrective action taken or proposed to be taken by the
Vendor; (4) cooperate with K-C to immediately contain and remediate, to the extent practicable, the harmful
effects of the K-C Information Incident; (5) consult in good faith with K-C regarding remediation efforts;
and (6) make all reasonable efforts to assist and cooperate with K-C in K-C’s, or any governmental or
regulatory body’s, investigation of any K-C Information Incident, including by preserving and making
available to K-C all relevant records, logs, files, or other relevant materials and regular updates.
a. 在供应商意识到或有合理怀疑发生 K-C 信息安全事件时， 供应商应（1）立即（无论如何不得在
获悉 K-C信息事件的七十二（72）小时后）以书面形式通知 K-C，并调查有关 K-C信息事件的原
因和情况，并保留与安全事件相关的任何潜在取证证据；（2）在情况允许时，尽快制定并采取合
理适当的行动，以识别和减轻所有被利用的漏洞， 删除任何恶意代码、不当材料和其他组件，以
及实施必要的安全措施，以确保不会发生类似的 K-C 信息事件，并使服务恢复正常运营；（3）
在发现信息事件后的七十二（72）小时内，向 K-C提供一份书面报告，以合理详细的方式总结 K-
C 信息事件是何时以及如何被发现的；受影响数据主体的类别和大致数量；被访问、使用或披露
的K-C信息和/或记录的类别和大致数量；访问、使用、披露和/或接收K-C信息的人员（如已知）；
信息事件对 K-C和/或受影响个人的影响；K-C信息事件的性质和持续时间；造成信息事件的原因；
以及供应商已采取或拟采取的纠正措施；（4）与K-C合作，并在可行的范围内，立即控制并补救
K-C 信息事件的有害影响；（5）真诚地与 K-C 协商有关补救措施；以及（6）尽一切合理努力协
助并配合K-C或任何政府或监管机构对K-C信息事件的调查，包括保存并向K-C提供所有相关记
录、日志、文件或其他相关材料，并定期更新。
b. Pursuant to such consultation noted in Section III(a)(5) above, the Vendor shall undertake remediation
efforts at its sole expense and reimburse K-C for K-C’s reasonable costs or expenses (including, without
limitation, all commercially reasonable Notification-Related Costs (as defined below), administrative costs,
costs of legal action and attorney engagement, and payment of fines, penalties, settlements, and damages)
incurred in connection with the K-C Information Incident and remediation efforts. Remediation efforts and
consumer services, including those associated with Notification-Related Costs, required by law (applicable
to K-C, Vendor, or both) as a result of the K-C Information Incident must be carried out and are not
dependent upon the completion of the consultation process, although both parties shall use good faith efforts
to discuss remediation efforts required by law during the consultation process.
b. 根据上文第 III(a)(5)节所述的协商，供应商应自费采取补救措施，并向 K-C 偿还与 K-C 信息事件
和补救工作有关的合理成本或开支（包括但不限于所有商业上合理的通知相关费用（定义见下
文）、行政费用、法律诉讼和律师聘用的费用以及支付罚款、处罚、和解和损害赔偿的费用）。
根据法律要求（适用于 K-C、供应商或两者），必须执行因 K-C 信息事件而需进行的补救工作和
消费者服务（包括与通知相关费用有关的工作），并且这些措施不依赖于协商过程的完成。然而，
双方在协商过程中仍应尽真诚努力讨论符合法律要求的补救工作。
“Notification-Related Costs” means K-C’s and its affiliates’ internal and external costs associated with
investigating, addressing, and responding to a K-C Information Incident, including but not limited to:
“通知相关费用”是指 K-C 及其附属公司与调查、处理和应对 K-C 信息事件相关的内部和外部费用，
包括但不限于：
26

1. preparation and mailing or other transmission of any notifications or other communications to K-C’s
current and potential consumers, customers, employees, agents, or other persons whose Personal
Information was affected by the K-C Information Incident;
1. 准备并向K-C当前及潜在消费者、客户、员工、代理人或个人信息受K-C信息事件影响的其他
人士邮寄或以其他方式传送任何通知或其他通信；
2. establishment and staffing of a call center or other communications procedures required to provide
necessary information to impacted data subjects in response to the K-C Information Incident;
2. 建立并配备呼叫中心或其他沟通程序，以便向因 K-C信息事件而受影响的数据主体提供必要的
信息；
3. public relations and other similar crisis management services deemed necessary by K-C in its reasonable
discretion;
3. K-C在其合理判断下认为有必要的公共关系和其他类似的危机管理服务；
4. legal, accounting, consulting and forensic expert fees and expenses associated with K-C’s and its
affiliates’ investigation of and response to a K-C Information Incident; and
4. 与 K-C 及其附属公司调查和应对 K-C 信息事件相关的法律、会计、咨询和法证专家费用和开
支；以及
5. costs for commercially reasonable credit monitoring, identity protection services or similar services that
K-C in its reasonable discretion determines are advisable under the circumstances.
5. K-C 根据其合理判断认为在相关情况下可取的商业合理信用监控、身份保护服务或类似服务的
费用。
c. The Vendor shall keep K-C reasonably informed regularly, either on a daily basis or with a frequency
approved by K-C, of the progress of its K-C Information Incident response activities. The Vendor shall not
make any public announcement (including without limitation website postings or press releases) or notify
affected individuals regarding such K-C Information Incident without K-C’s prior written approval, which
approval shall not be unreasonably withheld. The content of any filings, communications, notices, press
releases, or other external reports related to any K-C Information Incident must be approved by K-C prior
to any publication or communication thereof.
c. 供应商应定期（每天或按K-C批准的频率）向K-C合理通报其应对K-C信息事件的进展情况。未
经 K-C事先书面批准（K-C不得无理拒绝批准），供应商不得就 K-C信息事件发布任何公告（包
括但不限于网站发布或新闻稿）或通知受影响的个人。任何与 K-C 信息事件相关的文件、通信、
通知、新闻稿或其他外部报告的内容，必须在发布或传达之前获得K-C的批准。
d. All notices to be provided under this Section III shall be made to securityincidents@kcc.com in addition to
other notice addresses as specified in the Master Services Agreement or other underlying agreement that
this Addendum accompanies.
d. 根据本节提供的所有通知均应发送至 securityincidents@kcc.com，此外还应发送至主服务协议或本
附录随附的其他相关协议中指定的通知地址。
IV. PCI-DSS Compliance PCI-DSS 合规
a. To the extent the Vendor is providing Services related to financial card processing, Vendor shall at all times
maintain compliance with the most current Payment Card Industry Data Security Standards (PCI-DSS).
Vendor acknowledges responsibility for the security of the cardholder data to the extent that they could
impact the security of a consumer’s cardholder data, as defined within the PCI-DSS. The Vendor
acknowledges and agrees that cardholder data may only be used for completing the contracted Services or
as required by the PCI-DSS, or as required by applicable law.
27

a. 如果供应商提供与金融卡处理相关的服务，则供应商应始终遵守最新的支付卡行业数据安全标准
（PCI-DSS）。供应商承认，当其行为可能影响到消费者持卡人数据的安全时，供应商对持卡人
数据的安全负有责任（如 PCI-DSS 中所定义的）。供应商承认并同意，持卡人数据仅可用于完成
合同规定的服务,或按照PCI-DSS的要求及适用法律的要求使用。
b. In the event of a breach or intrusion or other unauthorized access to the cardholder data, the Vendor shall
immediately notify K-C. The Vendor shall provide appropriate payment card companies, acquiring
financial institutions, and their respective designees access to the Vendor facilities and all pertinent records
as necessary to conduct a review of the Vendor’s compliance with the PCI-DSS requirements.
b. 一旦发生泄露、入侵或其他未经授权访问持卡人数据的情况，供应商应立即通知 K-C。供应商应
向适当的支付卡公司、金融收单机构及其指定代表提供访问供应商设施和所有相关记录的权限，
以便审查供应商对PCI-DSS要求的遵守情况。
V. Others 其他
a. This Addendum is initially drafted in English. Any Chinese version provided is for reference only. If there
is any inconsistency or ambiguity between the English and Chinese versions, the English version shall
prevail.
a. 本附录最初以英文起草。任何提供的中文版本仅供参考。如英文版与中文版存在任何不一致或歧
义，以英文版本为准。
附件 5E
服务等级协议(SLA) =>依供應商提供後會再補充成附件
28