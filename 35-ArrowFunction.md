# Arrow Function箭頭函示
1. ES6新增
2. 用以簡化傳統函式
```js
//表達式等價函示
let fn=function(name){
    return 'Hello '+name;
};
//箭頭韓式會自動return箭頭左邊之值
let fn=name=>'Hello'+name;
```
3. 與傳統函式差異之處
   1. `arguments` 
      1. 傳統函式的作用域內自帶`arguments`,為類陣列物件,代表傳入參數
      2. 箭頭函式不具備`arguments`
      3. 可使用`其餘參數`達到一樣效果
      ```js
      function fn(){
          console.log(arguments);
      };
      fn(1,2,3,4,5,6);
      //[1,2,3,4,5,6]
      let fn=(...args)=>{console.log(args)};
      fn(1,2,3,4,5,6);
      //[1,2,3,4,5,6]
      ```
    2. `this`
       1. 傳統函式的具備`this`指向調用該函式的物件
       2. 箭頭函式不具備自己的`this`,被調用時指向外層的this
       3. 無法透過`call`,`apply`,`bind`賦予`this`,若使用,`this`依然指向全域
       4. 箭頭函式不可作為`建構函式`使用
       ```js
       var name='out';
       let person={
           name:'wang',
           callName:()=>{
               console.log(this.name);//out
               setTimeout(()=>{
                   console.log(this.name);//out
                   console.log(this);//window
               },10);
           }
       };
       person.callName();//out
       ```
4. 常見錯誤
   1. 欲回傳物件,不應直接`{a:1}`(作為function),而應該`({a:1})`
   2. 判斷式不應直接回傳箭頭函式,需加括號
   3. 搭配物件使用須注意`this`不指向物件
   4. 不能做為建構函式
   5. 若prototype指向箭頭函式,一樣無法取得`this`
   ```js
   let fn=()=>({a:1});
   let fn2=0||(()=>{ console.log('ok') });
   ```
5. 實用技巧
   1. 搭配`.map()`
   ```js
   const arr=[1,2,3,4,5];
   const arr_double=arr.map(n => n * 2);//2,4,5,6,10
   ```
   2. 搭配`.reduce()`
   ```js
   const arr=[1,2,3,4,5];
   const total=arr.reduce((pre,cur)=>pre+=cur);//15
   ```