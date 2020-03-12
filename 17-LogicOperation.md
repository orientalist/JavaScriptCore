# 邏輯運算子與函式預設值
## 邏輯運算子
1. `&&` 驗證左右兩側運算元是否皆為**真值**,回傳真/假值結果
   - 結果為真值回傳最後一個真值
   - 結果為假值回傳第一個假值
2. `||` 驗證左右兩側運算元**其一**是否為**真值**
   - 結果為真值回傳第一個真值
   - 結果為假值回傳最後一個假值
3. `!`  為右側運算元**真/假值**相反之boolean值

## 補充
1. `&`與`&&`:
   - `&`會檢驗左右兩側運算元
   - `&&`只要一者為false即回傳false
2. `|`與`||`
   - `|`會檢驗左右兩側運算元
   - `||`只要一者為true即回傳true

## 運用(預設值)
```js
var originWallet=500;
function updateWallet(cash){
    //邏輯運算式,若cash為真值,回傳cash,否則回傳100
    //避免cash為假值導致結果為NaN
    cash=cash||100;
    var money=cash+originWallet;
    console.log(`I have $${money}`)
}
updateWallet()
```