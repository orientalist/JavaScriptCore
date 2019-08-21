# RHS and LHS
1. RHS:Right-hand side:`取`右側變數的值
   - 會在編譯時期檢查錯誤
2. LHS:Left-hand side:`賦`值左側變數
   - 只會在執行期間檢查錯誤
```js
//LHS
var ming='Xiao ming';
//編譯時期報錯
'Xiao ming'='man'


//RHS
console.log(ming);
var man=ming;
//編譯時期不會報錯
console.log(a)
```