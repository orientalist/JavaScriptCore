# 屬性的特徵
1. `Object.defineProperty(物件/物件名,屬性名,屬性值物件)`-為物件定物或修改屬性與值
   ```js
   var obj={
       a:1,
       b:2,
       c:3
   };

   //屬性值物件:value-值／writable-可否覆寫/configurable-可否刪除/enumerable-可否列舉
   Object.defineProperty(obj,'a',{
       value:9,
       writable:false,
       configurable:true,
       enumerable:false
   });

   //writable只限定該屬性記憶體位置不能修改,非其下內容不能修改
    Object.defineProperty(obj,'d',{
       value:{},
       writable:false,
   });

   //不會修改
   obj.d=6;
   //會修改
   obj.d.k=6;
   ```
2. `Object.defineProperties(物件/物件名,屬性值物件)`
   ```js
   var obj={
       a:1,
       b:2,
       c:3
   };

   //屬性值物件:value-值／writable-可否覆寫/configurable-可否刪除/enumerable-可否列舉
   Object.defineProperties(obj,{
       a:{
           value:9,
           writable:false,
           configurable:true,
           enumerable:false
       },
       b:{
           value:9,
           writable:false,
           configurable:true,
           enumerable:false
       }
   });
   ```
3. `Object.preventExtensions(物件)`-防止擴充
   ```js
   var obj={
       a:1,
       b:2,
       c:{}
   };
   //新增屬性失敗
   obj.d=6;
   //注意,僅淺層禁止,於原屬性下新增屬性並不禁止
   obj.c.a=1;
   Object.preventExtensions(obj);
   ```
   - `Object.isExtensible(物件)`-boolean,物件是否可擴充
   - `Object.getOwnPropertyDescription(物件,屬性名)`-取得物件下屬性的特徵(值,可否寫入...)
4. `Object.seal(物件)`-禁止新增/刪除/重新配置物件屬性(僅可調整目前屬性值,不禁止子物件屬性修改)
    - `Object.isSealed(物件)`-boolean,物件是否被封裝
5. `Object.freeze(物件)`-物件加上seal,並且禁止調整值(不禁止子物件屬性修改)
   - `Object.isFrozen(物件)`-boolean,物件是否被凍結
6. 原型
   - `物件.hasOwnProperty('屬性名')`-僅判斷"當前"物件是否有該屬性,若原型有該屬性,一樣回傳false
   - `for(let prop in 物件)`-會列舉出原型屬性,原生屬性的enumerable為false,故不會顯示
7. `Getter與Setter`
   1. `Gettter`-取值方法
   2. `Setter`-設值方法
   ```js
   //此方法建立的get與set可刪除,可列舉
   let wallet={
       total:100,
       set save(price){
           this.total+=price;
       },
       get save(){
           return this.total;
       }
   };
   //呼叫方式
   wallet.save=100;
   console.log(wallet.save);

   //另一種定義方式
   //此方法建立的get與set·預設不可刪除,不可列舉
   Object.defineProperty(wallet,'save',{
       set:function(price){
           this.total=+price;
       },
       get:function(){
           return this.total;
       }
   });
   ```