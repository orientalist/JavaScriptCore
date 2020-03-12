# 閉包(Closure)
## 概念
1. 函式記得並存取語彙範圍的能力
2. 亦可說為指向特定範疇的參考
3. 因此當離開函式作用域後,仍可調用該函式回傳的函式
```js
function outerFunction(){
    var data=1;
    //基於範圍練規則,由於匿名函式內無data屬性,向外查找
    //outerFunction內的data因為被參考,執行完畢後不會被GC
    return function(dataToAdd){
        data+=dataToAdd;
        console.log(data);
    }
}

//將outerFunction回傳的function賦予變數
//此時outerFunction內的data被參考而不釋放
//回傳的匿名函式仍保留指向outerFunction內層範疇的參考,即形成"閉包"
var innerFunction=outerFunction();
innerFunction(1);
```
## 閉包參考
輸出0,1,2?
```js
function arrFunction(){
    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}

var fn=arrFunction();

fn[0]();
fn[1]();
fn[2]();
//輸出結果為3,3,3
```
解析:
1. 由於push進陣列的函式作用域被並無i變數,故會向外查找
2. 當調用陣列函式時向外查找的i變數已遞增至3,故輸出全為3

如何輸出0,1,2?
1. 立即函式
```js
function arrFunction2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        //當i遞增時將i作為引數傳遞給立即函式
        //arr內的函式的j變數便參考到參數j而非迴圈的i
        (function (j) {
            arr.push(
                function(){
                    console.log(j);
                }
            );
        })(i);
    }
    return arr;
}
var fn2 = arrFunction2();
```
2. `let`
```js
function arrFunction3(){
    var arr=[];
    //let宣告的變數i只會存在for()後的{}內,故每次回圈參考的i亦各自獨立存在
    //若透過var宣告i,則陣列function調用時參考的會是arrFunction3()後的{}內
    //因此會是所有遞增完成的結果
    for(let i=0;i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    return arr;
}

var fn3=arrFunction3();
```
## 工廠模式
1. 由於閉包會保留其參考區域不被GC,可利用此特性來建立特定的物件,保存特定值並重複利用,即"工廠"
2. 搭配參數傳遞可達到給予初始資料,重複利用該資料的工廠
```js
//傳遞初始值,供工廠重複利用
function storeMoney(initValue){
    var money=initValue||1000;
    //建立參考money的閉包,money不被消滅
    return function(price){
        money+=price;
        return money;
    }
}
//宣告工廠實體
var myMoney=storeMoney(100);
//得值150,可重複利用
myMoney(50);
```

## 私有方法
1. 將函式回傳的函式(閉包)轉變為函式物件({function(){},function(){}...})
2. 由於閉包僅參考回傳該閉包函式區域的特性,函式物件中的函式便成為此函式的"私有方法"
```js
function storeMoney(initValue){
    var money=initValue||1000;
    //建立參考money的閉包,money不被消滅

    //回傳的方法皆參考到孤立的money
    //即私有方法
    return {
        increase:function(price){
            money+=price;
        },
        decrease:function(price){
            money-=price;
        }
    }
}
//宣告工廠實體
//myMoney即具有increase與decrease兩個私有方法
var myMoney=storeMoney(100);
//得值150,可重複利用
myMoney.increase(50);
```