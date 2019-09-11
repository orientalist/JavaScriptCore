# 範圍鍊(Scope chain)
```js
var value=1;
var fn1=()=>{
    console.log(value);
}
var fn2=()=>{
    var value=2;
    fn1();
}
fn2();
```
1. 執行環境堆疊:
   - 全域執行環境-fn2()執行環境-fn1()執行環境
2. 範圍鍊
   - 在fn1()的執行環境中沒有`value`的值,會**向外**查找
   - 當`執行環境`找不到資源時,會依照`作用域`邏輯查找,而不是`執行環境堆疊`
   - 依照`作用域`向外查找的邏輯便為`範圍鍊`
   - 故上例中fn1()與fn2()的上層作用域皆為`全域作用域`,此即`範圍鍊`
***
案例:
```js
var person='mom';
var sayHi=()=>{
    console.log(`hi ${person}`);
}
var doMorningWork=()=>{
    var person='father';
    var meetAuntie=()=>{
        //若此行註解,輸出值為hello father
        var person='pretty Auntie';
        console.log(`hello ${person}`)
    }
    sayHi();
    meetAuntie();
}
sayHi();
doMorningWork();
//輸出結果:
//hi mom
//hi mom
//hello father
```
解析:
1. `sayHi()`其中無value值,無論在處呼叫,都會依照範圍鍊向外查找.其上層作用域為`全域作用域`,value值為`mom`
2. `meetAuntie()`範圍練上層為`doMorningWork()`,若其內無定義value,向上層取值得`father`