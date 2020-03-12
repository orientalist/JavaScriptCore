# 參數(Parameter)
1. 參數-定義函式時,預先撰寫該函式接收的引數變數
2. 引數-調用函式時傳遞給函式的值(參考)
   - 若傳遞給函式的引數數量與參數數量不一致,函式照樣能執行,不過多餘的引數便無法透過參數調用
   - 引數數小於參數數,不足的參數自動得undefined
   - 將具名函式作為引數,於函式作用域內透過參數調用,稱為callback function
3. 函式作用域
   1. 隱含屬性`arguments`-類陣列屬性,代表函式實際接收到的引數(包含多餘引數)
      - 可透過for遍歷,但不適用.forEach(),因為其為類陣列而非陣列
   2. Hoisting-函式作用域中若包含函式陳述式,會優先執行
```js
//P1與P2即為引數
//P3與P4為多餘引數
functionA('P1','P2','P3','P4');

//引數數小於參數數,para2為undefined
functionA('P1');

//para1與para2即該函式參數
//調用該函式傳入引數後para1與para2則代表引數
function functionA(para1,para2){
    //arguments='P1','P2','P3','P4'
    console.log(arguments);
}
```
函式作用域Hoisting
```js
functionA('thing');

function functionA(para1){
    //由於Hoisting原則,para1會被取代成函式
    console.log(para1);

    function para1(){
        //...
    }
};
```
callback function
```js
function functionA(name){
    console.log(`Hello ${name}`);
}

function functionB(fn){
    //於此調用,稱為callback function
    fn('Zhuang');
};
```