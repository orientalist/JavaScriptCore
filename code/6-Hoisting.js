var ming='Ming'
console.log(ming)
//拆解後
//創造環境
var ming
//執行
ming='Ming'
console.log(ming)
//得Ming
//-----------------------------
console.log(ming2)
var ming2='Ming2'
//拆解後
//創造環境
var ming2
//執行
console.log(ming2)
ming2='Ming2'
//得undefined
//-----------------------------
callName()
//韓式陳述式
function callName(){
    console.log('This is Ming')
}
//拆解後
//創造環境
function callName(){
    console.log('This is Ming')
}
//執行
callName()
//得This is Ming
//-----------------------------
//函式表達式
var callName=function(){
    console.log('This is Ming2')
}
callName()
//拆解後
//創造環境
var callName
//執行
callName=function(){
    console.log('This is Ming2')
}
callName()
//得This is Ming2
//-----------------------------
callName()
var callName=function(){
    console.log('This is Ming2')
}
//拆解後
//創造環境
var callName
//執行
callName()
callName=function(){
    console.log('This is Ming2')
}
//得Exception callName is not a function
//-----------------------------
function callName(){
    console.log('This is Ming3')
}
var callName=function(){
    console.log('This is Ming4')
}
callName()
//拆解後
//創造環境
var callName
//執行
function callName(){
    console.log('This is Ming3')
}
callName=function(){
    console.log('This is Ming4')
}
callName()
//得This is Ming4
//-----------------------------
function callName(){
    console.log('This is Zhuang')
}
callName()
function callName(){
    console.log('This is Xiang')
}
callName()
//拆解後
//創造環境
function callName(){
    console.log('This is Zhuang')
}
function callName(){
    console.log('This is Xiang')
}
//執行
callName()
callName()
//得
//This is Xiang
//This is Xiang
//-----------------------------
whosName()
function whosName(){
    if(name){
        name='Xiang'
    }
}
var name='Zhuang'
console.log(name)
//拆解後
//創造環境
function whosName(){
    if(name){
        name='Xiang'
    }
}
var name
//執行
whosName()
name='Zhuang'
console.log(name)
//得Zhuang
//-----------------------------