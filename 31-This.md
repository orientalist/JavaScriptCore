# This
先看看程式碼
```js
var myName='Zhuang';

function callName(){
    console.log(this.myName);
}

callName();
```
解析
1. 在函式內可調用this=>函式調用時自動於其作用域產生this
2. 這個例子中的this可取得宣告於全域得name屬性=>this指向全域物件
## 概念
1. 執行環境自動產生
2. this**並不**等於產生它的函式
3. this的**指向**與函式如何宣告**沒有關係**,僅與**呼叫方法**有關
   ```js
    var name='Zhuang';

    function callName(){
        console.log(this.name);
    }

    var family={
        name:'Guang',
        callName:callName
    };

    family.callName();
    //由於調用的是物件函式,故該函式的this指向物件
    //輸出為Guang

    callName();
    //直接調用函式,this指向全域
    //輸出為Zhuang
    ```
    ```js
    name='out';

    var family={
        name:'Zhuang',
        callName:function(){
            console.log(this.name);
        }
    }

    //將物件方法賦予變數
    var fn=family.callName;
    //調用該變數方法時,其內的this並非指向物件,而是全域物件
    fn();
    ```
4. **嚴格模式**下,簡易呼叫會有很大改變
## 影響函式this的調用方法
1. 作為物件方法(最常運用this的方法)
   ```js
   var obj={
       fn:function(){
           this.a='a';
       }
   }
   //obj物件增加了屬性a=>this指向obj
   ```
   - 此時只需關注方法是在哪個物件下便可知this指向哪個物件
   - 物件函式內調用call back函式
   ```js
   var name='out';
   var family={
       name:'Zhuang',
       callName:function(){
           setTimeout(function(){
               console.log(this.name);
           },1000);
       }
   }
   family.callName();
   //由於setTimeout調用了call back函式,故其中的this指向全域物件而非family物件
   ```
   - 物件函式內調用call back函式,並取用物件屬性
   ```js
   var name='out';
   var family={
       name:'Zhuang',
       callName:function(){
           var self=this;
           setTimeout(function(){
               console.log(self.name);
           },1000);
       }
   }
   family.callName();
   //先將物件函式的this賦予變數,並於call back函式取值,正確得到family物件屬性
   ```
2. 簡易呼叫(絕大多數的呼叫方法)-simple call
   1. 類型
      1. 函式變數名()
      2. IIFE(立即函式)
      3. call back函式
        ```js
        //函式變數名()
        function fn(){
            //...
        }
        fn();

        //IIFE(立即函式)
        (
            function(){
                //...
            }
        )()

        //call back函式
        function fn(fn2){
            fn2();
        }

        fn(function(){
            //...
        });
        ```
   2. 此類函式的this皆指向window
      ```js
      var name='Guang';
      function fn(){
          var name='Zhuang';
          console.log(this.name);
      }
      fn();//輸出為Guang
      ```
   3. 避免使用simple call的this
3. bind,apply,call方法
   1. call
      - 語法:函式變數名.call(this指向物件/純值,參數1,參數2...);
      - 用以替換函式的this指向
      ```js
      var family={
        name:'Zhuang'
      };

      function fn(p1,p2){
        console.log(this,p1,p2);
      }
      fn.call(family,1,2);
      ```
   2. apply
      - 語法:函式變數名.call(this指向物件/純值,[參數1,參數2...]);
      - 其他與call相同
   3. bind
      - 語法:var 函式變數名=函式變數名.bind(this指向物件,,參數1,參數2...);
      - 替代函式this指向物件
      - 不會直接調用
      - 預先將引數傳入(無法改變),亦可不預先傳入,待呼叫時傳入
      ```js
      var family={
        name:'Zhuang'
      };

      function fn(p1,p2){
        console.log(this,p1,p2);
      }
      
      var fn2=fn.bind(family,1,2);
      fn2();
      ``` 
    4. 注意
       1. 非嚴格模式
          1. 將純值作為引數傳遞給call/apply/bind作為this指向,會將其包裝為物件
          2. 若傳遞undefined或null則指向全域物件
            ```js
            function fn(p1,p2){
                console.log(this,p1,p2);
            }
            var fn2=fn.bind(1,2,3);//=>fn2的this指向Number物件
            var fn2=fn.bind(undefined,2,3);//=>fn2的this指向Window物件
            ```
        1. 嚴格模式
           1. 將純值作為引數傳遞給call/apply/bind作為this指向,**不**會將其包裝為物件
           2. 若傳遞undefined或null則指向全域物件維持原值(undefined/null)
            ```js
            function fn(p1,p2){
                'use restrict'
                console.log(this,p1,p2);
            }
            var fn2=fn.bind(1,2,3);//=>fn2的this指向1
            var fn2=fn.bind(undefined,2,3);//=>fn2的this指向undefined
            ``` 
4. new
5. DOM事件處理
   1. inline function
      - inline funciton中的this直接指向該element
      ```html
      <button onclick="console.dir(this)">Button</button>
      ```
    2. lietener
       - dom.addEventlistener('event',function)第二個參數函式中的this指向dom
       ```js
       var fn=function(){
           console.dir(this);
       }
       var eles=document.querySelectorAll('li');
       for(var i=0;i<eles.length;i++){
           eles[i].addEventListener('click',fn);
       }
       ```
6. 箭頭函式(ES6)

## 程式碼
```js
var name='Zhuang';

function callName(){
    console.log(this.name);
}

var family={
    name:'Guang',
    callName:callName
};

family.callName();
//由於調用的是物件函式,故該函式的this指向物件
//輸出為Guang
```
```js
var name='Zhuang';

function callName(){
    console.log(this.name);
}

var family={
    name:'Guang',
    callName:callName,
    innerFamily:{
        name:'Xiang',
        callName:callName
    }
};

family.callName();
family.innerFamily.callName();
```
```js
name='out';

var family={
    name:'Zhuang',
    callName:function(){
        console.log(this.name);
    }
}

var fn=family.callName;
fn();
```
```js
var name='out';

var obj={
    name:'Zhuang',
    callName:function(){
        setTimeout(
            function(){
                console.log(this.name);
            },1000
        );
    }
};

obj.callName();
```