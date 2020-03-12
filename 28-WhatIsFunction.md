# 什麼是Function
1. function是一種物件
   - 不同之處在於其具有**被呼叫**的能力以及程式碼片段
2. this
   - 每個function程式碼區域都有一個
3. 可以透過`return`回傳值(任何型別)
4. 函式的名稱
   1. 函式陳述式
      - 函式本身具有名稱,稱為**具名函式**
   ```js
   function functionA(){
       //...
   }
   ```
   2. 函式表達式
      - 將函式指派給左方變數
      - 由於函式本身不具名,故為**匿名函式**
      - 左方變數儲存的是該function的參考路徑
      - 右方也可以是具名函式
        - 注意:將具名函式賦值給變數後,由於該具名函式並沒有宣告建立,故僅存在該變數的作用域裡,無法再作用域外調用
   ```js
   //將匿名函式賦值給變數
   var functionB=function(){
       //...
   }
   //將具名函式賦值給變數
   var functionC=function functionD(){
       console.log(functionC,functionD);
       //結果兩者皆為functionD
   }
   //在functionC作用域外無法調用functionD
   functionD();//=> Exception
   ```
   3. 函式需不需要名稱
      - 函式需要名稱與否取決於該函式是否需要透過名稱調用
      ```js
      //函式陳述式-若未給該函式名稱,該函式無意義(無法被調用)
      function doSomething(){
          //...
      };

      //函式作為引數(匿名函式),則該函式不需名稱即可調用
      function doSomething(fn){
          fn();
      };
      //作為引數的函式不需名稱
      doSomething(function(){
          console.log('triggered');
      });
      ```
5. 立即函式(Immediately Invoked Function Expression-IIFE)
      - 格式:(匿名/具名函式(參數))/(匿名/具名函式)(參數)
      - 可為void或回傳值
      - 特點:
        1. 立刻執行
        2. 若為具名函式,該作用域外無法調用該函式
      - 用途:建立特定變數的作用區域
        ```js
        (function (param){
            console.log('Instantly triggered.',param);
        }('a param'));
        ```  
      - 立即函式間傳遞資料的技巧
        1. 透過傳遞物件
        ```js
        var a={};
        //將物件a傳遞給函式,賦予屬性值
        (
            function(obj){
                obj.firstData='a';
            }
        )(a);
        //基於物件參考的特性,兩個立即函式會修改同一個物件
        (
            function(obj){
                obj.firstData='c';
                obj.secondData='b';
            }
        )(a);
        //a={firstData:'c',secondData:'b'};
        ```
        2. 透過window(全域))物件
        ```js
        //將物件a傳遞給函式,賦予屬性值
        (
            function(){
                window.firstData='a';
            }
        )();
        //基於物件參考的特性,兩個立即函式會修改同一個物件
        (
            function(){
                window.firstData='c';
            }
        )();
        //a={firstData:'c'};
        ```
    