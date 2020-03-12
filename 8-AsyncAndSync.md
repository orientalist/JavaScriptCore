# 執行緒之**同步**與**非同步**
1. javaScript為**單執行緒**(系統)
2. javaScript可以**非同步**(程式)
3. 事件佇列(Event queue)
   1. 當執行時遇到非同步程式,會將該段程式碼移至事件佇列,而不執行
   2. 待同步程式碼的執行堆疊完成後才執行事件佇列中的非同步程式碼
4. 以下程式說明
```js
function eatBreakfast(){
    console.log('Eat breakfast');
}

function washPlate(){
    console.log('Washing plates');
}

function callSomeone(someOne){
    console.log(`Call ${someOne}`);
    setTimeout(function(){
        console.log(`${someOne} call back`)
    },3000);
}

function doWork(){
    var auntie='Beautiful auntie';
    eatBreakfast();
    callSomeone(auntie);
    washPlate();
}

doWork();
```
4. 說明
   1. 由於js為單執行緒,故eatBreakfast,callSomeone,washPlate會**次序**執行,而非各自透過獨立的執行緒執行
   2. 當同步方法全部執行完畢,至事件堆疊取出非同步方法執行
![](/imgs/eventQueue.png)

5. AddEventListener也是將事件加入事件佇列的方法
```js
function clickTrigger(){
    console.log('Clicked');
}

var dom=document.querySelector('p');
dom.addEventListener('click',clickTrigger,false)
```