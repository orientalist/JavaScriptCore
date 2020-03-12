# 變數與屬性的差異
1. 變數無法被刪除
2. 屬性可被刪除
```js
//變數賦值會直接作為屬性加入window物件
var a=1;
b=2;
console.log(window);
```
![variableAndProperty](/imgs/variableAndProperty2.png)
```js
//執行刪除
delete window.a;
delete window.b;
```
![variableAndProperty](/imgs/variableAndProperty3.png)
如上所示,b作為window的屬性已經被刪除