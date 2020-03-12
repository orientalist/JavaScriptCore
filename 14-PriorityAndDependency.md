# 優先性與相依性
> [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
## 優先性(Precedence)
1. 運算子的執行順序
2. 優先序較高的運算子會成為優先序較低運算子的運算元
## 相依性(Associativity)
1. 運算子運算方向
2. +,-,*,/為向右執行
3. =為向左執行
4. 當兩運算子優先性相同時,依其相依性順序執行(如1+1-2)
```js
//運算子優先序:1.* 2.+ 3.=
//2*3與2*2成為=的運算元
//a=6+4
var a=2*3+2*2
```
```js
console.log(1<2<3);
//相依性:由左至右
//1<2=>false,false<3=>true
//得true
console.log(3>2>1);
//3>2=>true,true>1=>false
//得false
```
```js
var a=1;
var b=2;
a=b=3;
//相依性:由右至左
//得a=3,b=3
//注意:a被賦予的是b=3的結果,而非b的值
```
```js
//建立b物件,賦值a屬性2,不可寫
var b={};
Object.defineProperty(b,'a',{
    value:2,
    writable:false
});
//賦值b.a,其回傳結果為3,但b.a為不可寫,值仍為2
b.a=3;

//變數a賦值3
var a=3;

//將b.a賦值1之結果賦值a
a=b.a=1;
//結果為1
```