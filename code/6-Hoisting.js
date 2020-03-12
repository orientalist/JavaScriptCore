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
callmame()
//韓式陳述式
function callmame(){
    console.log('This is Ming')
}
//拆解後
//創造環境
function callmame(){
    console.log('This is Ming')
}
//執行
callmame()
//得This is Ming
//-----------------------------
//函式表達式
var callmame=function(){
    console.log('This is Ming2')
}
callmame()
//拆解後
//創造環境
var callmame
//執行
callmame=function(){
    console.log('This is Ming2')
}
callmame()
//得This is Ming2
//-----------------------------
callmame()
var callmame=function(){
    console.log('This is Ming2')
}
//拆解後
//創造環境
var callmame
//執行
callmame()
callmame=function(){
    console.log('This is Ming2')
}
//得Exception callmame is not a function
//-----------------------------
function callmame(){
    console.log('This is Ming3')
}
var callmame=function(){
    console.log('This is Ming4')
}
callmame()
//拆解後
//創造環境
var callmame
//執行
function callmame(){
    console.log('This is Ming3')
}
callmame=function(){
    console.log('This is Ming4')
}
callmame()
//得This is Ming4
//-----------------------------
function callmame(){
    console.log('This is Zhuang')
}
callmame()
function callmame(){
    console.log('This is Xiang')
}
callmame()
//拆解後
//創造環境
function callmame(){
    console.log('This is Zhuang')
}
function callmame(){
    console.log('This is Xiang')
}
//執行
callmame()
callmame()
//得
//This is Xiang
//This is Xiang
//-----------------------------
whosmame()
function whosmame(){
    if(name){
        name='Xiang'
    }
}
var name='Zhuang'
console.log(name)
//拆解後
//創造環境
function whosmame(){
    if(name){
        name='Xiang'
    }
}
var name
//執行
whosmame()
name='Zhuang'
console.log(name)
//得Zhuang
//-----------------------------