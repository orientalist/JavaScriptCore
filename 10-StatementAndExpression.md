# 陳述式與表達式
## 陳述式(Statement)
> [MDN解說-陳述式](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements)

1. 命令執行指定之一系列操作，不會回傳結果(if/else)
2. 由於不會回傳,故不能用於指派給變數(var a=if(c===d)=>錯誤)
3. 函式陳述式/具名函式:
   ```js
   function callName(){
       console.log('Zhuang');
   }
   ```
## 表達式(Expression)
1. 又稱為**表示式**,**運算式**,通常透過符號結合上下語句並回傳結果(+-*/)
2. 函式表達式/匿名函式
   ```js
   var fnCallName=function(){
       console.log('Xiang');
   }
   ```

## 補充
1. 根據Hoisting原則,兩種不同的函式表達式會影響其調用原則，函式表達式在執行時才被賦值給變數,而後才能調用,函式陳述式則相反
2. block**不等於**物件實字
   ```js
   //block,不可指派給變數(無回傳值)
   {
       var ming='Xiao Ming';
   }
   //物件實字(可指派給變數)
   var obj={
       ming:'XiaoMing'
   }
   ```
3. block用途
   1. ES5後,可用以定義**let**變數,該變數作用域僅限於block內
   ```js
   {
       let ming='Xiao Ming';
   }
   console.log(ming);
   //ReferenceError: ming is not defined
   ```
