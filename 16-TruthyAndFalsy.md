# Truthy與Falsy
> [MDN-Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
## Truthy
1. 中文`真值`
2. 當boolean expression為**真值**時,等同true
3. 雖視同true,但其值**不等於**true
4. 包含基本型別(不為空),陣列,物件,new Number(0)(物件)
5. 特例:new Boolean(false)為真值(物件))
6. 使用基本型別避免使用包裹物件之原因
```js
if(5){
    console.log('exec')
}
//執行結果 => exec
//5!=true
```
## Falsy
1. 中文`假值`
2. 包含:'',undefined,null,0