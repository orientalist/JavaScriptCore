# Class類別
1. javaScript的繼承屬於**原型**繼承
2. javaScript中常用物件建構內容,因此沒有class的概念(供繼承類別)的概念
3. 透過**原型**繼承達到類似**類別繼承**的效果
## 原型(Prototype)
1. javaScript中的物件
```js
var dog_wine={
    color:'golden',
    size:'fat',
    bark:function(){
        alert('Wolf!');
    }
};
```
2. javaScript中的原型即類似class的概念
   1. 原型仍是物件
   2. 原型可以繼承原型(原型鍊)
   3. 當.運算式找不到屬性值時會由原型練向父原型查找
   4. 多個物件參考到同一個原型時,該原型共用(修改原型屬性值,繼承的物件參考到被修改的原型屬性值)
```js
//建立array物件
var arr=[1,2,3];
//._proto_即該物件的原型屬性
//其中有許多原型的屬性與方法可以調用
arr.__proto__;
//forEach()即原型定義的方法
arr.forEach(e=>{
    //...
});

//由於原型練共用,透過a為原型增加的屬性方法所有繼承物件皆可調用
a.__proto__.getLast=function(){
    return this[this.length-1]; 
};

console.log(a.getLast());//=>3

var arr2=[4,5,6];
console.log(arr2.getLast());//=>6
```
## 建構原型
1. 夠過建構函式建立原型
2. 函式物件包含屬性`prototype`,於其下新增原型屬性(包含方法)
   - 與物件.`__proto__`一樣指向原型
   - 但要為原型新增屬性,應透過建構式.prototype,以便維護
3. 透過new建立實體
```js
//建立回傳實體的建構式
let Dog=function(name,color,size){
    //函式內的this指向用new呼叫該函式所建立的實體物件
    this.name=name;
    this.color=color;
    this.size=size;
}
//所有透過new Dog()建立的物件都具有此方法
Dog.prototype.bark=function(){
    console.log(`${this.name} wolf!`);
}
//透過new建立實體物件
let wine=new Dog('Wine','golden','little fat');
```

## 純值與原型
1. 純值擁有其包裹物件
2. 包裹物件也是原型的實體
3. 因此,為原型增加屬性與方法後,純值變數/純值亦可調用
```js
//數值的包裹物件建構式為Number()
//為其加入的方法,所有純值變數/純值皆可調用
Number.prototype.doubleThis=function(){
    return 2*this;
}
var n=5;
console.log(n.doubleThis());//=>10
```

## 多層繼承
1. Object.`create(物件/原型)`-回傳物件/原型所屬的原型練端點
2. 將該端點指派給建構式的prototype,可將建構式自指定端點繼承
```js
function Animal(family){
    this.family=family;
}
Animal.prototype.Eat=function(){
    console.log('Eating');
}
function Human(name){
    this.name=name;
}
//Human繼承自Animal位於原型練上的端點
Human.prototype=Object.create(Animal.prototype);
//現在的原型鍊
//Object=>Animal=>Human
var man=new Human('Zhuang');
man.Eat();//=>Eating
```
3. 繼承的建構式的prototype指向另一原型練端點(該端點為原型而非建構式),故要觸發該原型的建構式，於繼承的建構式調用原型.`call(綁定物件,引數)`
```js
function Animal(family){
    this.family=family;
}
Animal.prototype.Eat=function(){
    console.log('Eating');
}
function Human(name){
    //父建構式.call,調用父建構式
    Animal.call(this,'Human');
    this.name=name;
}
//Human繼承自Animal位於原型練上的端點
Human.prototype=Object.create(Animal.prototype);
//現在的原型鍊
//Object=>Animal=>Human
var man=new Human('Zhuang');
man.family;//=>Human
```
4. 由於繼承建構式.prototype=Object.create(父建構式.prototype)會將繼承原型的constructor指向父原型的constructor,需重新定向
```js
function Animal(family){
    this.family=family;
}
Animal.prototype.Eat=function(){
    console.log('Eating');
}
function Human(name){
    //父建構式.call,調用父建構式
    Animal.call(this,'Human');
    this.name=name;
}
//Human繼承自Animal位於原型練上的端點
Human.prototype=Object.create(Animal.prototype);
Human.prototype.constructor=Human;
//現在的原型鍊
//Object=>Animal=>Human
var man=new Human('Zhuang');
man.family;//=>Human
```