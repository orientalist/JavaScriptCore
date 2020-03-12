# 深層/淺層複製
## Question:想"複製"一份物件給新的變數而不是參考到同一個物件
## 淺層複製(Shallow Copy)
1. `for(var key in 物件){}`
   - 逐一取出物件的第一層屬性
   - 建立一新的物件,逐一將被複製物件的屬性與值賦予新物件
   - 注意:若物件內有屬性值為物件,此方法複製之新物件的該屬性會與被複製物件的該屬性參考相同物件
   ```js
    var family={
        name:`Ming's Home`,
        members:{
            father:'Father',
            mother:'Mother'
        }
    };
    var newFamily={};
    for(var key in family){
        newFamily[key]=family[key];
    }
    //family與newFamily的members屬性參考到相同物件
    ```
2. `Object.assign({},被複製物件)`
   ```js
    var newFamily=Object.assign({},family);
    ```
### 深層複製(Deep Copy)
1. 將被複製物件轉為字串,賦值後再轉為物件
   ```js
   var str=JSON.stringify(family);
   var newFamily=JSON.parse(str);
   ```