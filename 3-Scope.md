# 作用域
```js
doSomething=()=>{
    //函式作用域,變數只存在這裡面
    var mood='happy';
    console.log(mood);
}
doSomething();
//會輸出happy
console.log(mood);
//報錯mood is not defined
```
## 語法作用域(Lexical scope)
`靜態作用域`-在直譯器進行語法解析時便已決定作用域,且不會改變,javaScript屬之
`動態作用域`-作用域在函式調用時才決定
![scope](/imgs/scope.png)
## 階層式作用域
1. 當內層作用域找不到指定的變數時會`向外`找尋,皆找不到時會報錯`ReferenceError`
![casecade](/imgs/casecadeScope.png)
```js
var value=1;
fn1=()=>{
    conole.log(value)
}
fn2=()=>{
    var value=2;
    fn1();
}
fn2();
//輸出結果為 1
```
若為動態作用域,當變數值在現作用域找不到值時,會往**方法呼叫源**尋找,而不是**向外**找尋,如上例若為動態作用域,fn1作用域內找不到value變數的值,會向呼叫fn1的fn2作用域查找,輸出值為**2**