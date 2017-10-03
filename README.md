# HTTP Proxy Server

此範例使用Node.js 架設HTTP proxy server，模擬中間人攻擊 (Man-in-the-middle attack)。
> 黑箱作業要點：
　　架設中介伺服器，並限制 App的行動裝置對外連線皆須透過本 Proxy Server，從而取得App實際對外的連線URI、連線Method、以及Server 回覆的內容。除了直接取得敏感性資料外，亦可直接修改回應內容，使app顯示或接收到錯誤的資料，運行出受攻擊後的結果。

實作步驟：

  - 列出具有風險的API，修改回應內容
  - 將程式內的API替換為：http://127.0.0.1/...
  - 開始測試

### Debug Dashboard

http://127.0.0.1/debug_mode/

 - 目前不接受HTTPS
 - TODO - 完善實作步驟
 - TODO - 解決跨Domain，伺服器依然最終的url，導致無法使用



