# 物件(Object)
1. 定義方法
   1. 物件實字(Object literals)
      - 透過{}建立物件
      - 其內部為`屬性名`:`屬性值`
      - 屬性與屬性以`,`連結
      - 屬性值可以是任意型別
```js
//物件實字
var family={
    name:'Ming family',
    deposit:1000,
    members:{
        father:'Father',
        mom:'Mother'
    },
    callFamily:function(){
        console.log('Call Ming Family.')
    }
};
//建構式
var newFamily=new Object(family);
```
2. 物件取值
   1. 透過**物件變數名**`.`**屬性名**取值
      - 例:obj1.prop1
      - 僅能取得屬性名為字串的屬性值
   2. 中括號`[]`: **物件變數名**`[屬性名]`取值
      - 例:obj1['prop1']
      - 可取得屬性名非字串的屬性值
      - 亦可將屬性名賦予變數,再透過[變數]取值
   3. 調用方法:透過屬性名.與[‘屬性名’]後加()調用方法
3. 新增屬性
   1. 透過**物件變數名**`.`**屬性名**=`屬性值`
      -  例:obj1.prop1＝val1
   2. 中括號`[]`: **物件變數名**`[屬性名]`=`屬性值`
      - 例:obj1['prop1']=val1
4. 刪除屬性
   1. .delete:
      - delete **物件變數名**.`物件屬性名`
      - delete **物件變數名**`[物件屬性名]`
      - 例:delete obj1.prop1/delete obj1['prop1']