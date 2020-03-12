# 運算子(Operator)
1. 運算子**一定**會回傳值
2. 進行運算的值稱為**運算元**
3. `=`雖為指派,但亦會回傳值
> [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators)
## 一元運算子
1. 常見:delete,typeof()
## 二元運算子
1. 常見運算子:+-*/...
## 三元運算子
1. 又稱條件運算子
2. 格式：Boolean Expression?true condition expression:false condition expression;
```js
var day={
    isRaining:true
};
var colorOfSky=day.isRaining?'Dark':'Blue';
//得Dark
```