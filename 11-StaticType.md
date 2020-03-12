# 動態型別
1. JavaScript為**動態型別**
2. 意即變數可以動態地賦予不同型別的值
3. 在**執行階段**才會確定型別
4. 與Hoisting機制相關
```js
var myName='Zhuang';

//分解階段
//1.創造階段
var myName;
//2.執行階段
myName='Zhuang';
//此時才確定myName為String型別
```
5. 型別可動態轉換(透過賦值)
```js
var myName='Zhuang';
myName=123

//分解階段
//1.創造階段
var myName;
//2.執行階段
myName='Zhuang';
//此時myName為String型別
myName=123
//此時myName為Number型別
```
## 型別轉換
1. 顯性轉換
   1. 當值被直接賦予另一型別之值
2. 隱性轉換
   1. 型別拼接,會改變為其中一種型別
   ```js
   var num=1;
   //num型別為Number
   num=num+'';
   //num之型別因為拼接上''而轉變為String
   num=num*3;
   //num型別再次轉換為Number
   ```