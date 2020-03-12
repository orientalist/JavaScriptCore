//Scope
var parent='Father';
function sayHi(){
    var greeting=`hi ${parent}`
    return greeting
}
function doMorningWork(){
    var parent='Mother';
    console.log(sayHi())
}

doMorningWork();

//Hoisting
fn();
function fn(params){
    if(!a){
        a=2;
    }
}
var a=1;
console.log(a);

//Async
for(var i=0;i<3;i++){
    console.log(i)
    setTimeout(function(){
        console.log(i)
    },0)
}