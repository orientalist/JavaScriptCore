//Constructor native type
var a=1;
var b=new Number(1);
console.log(1==b) //true
console.log(1===b)//false

// Logical Operating
var a=1;
var b=0;
console.log(a||b); //1

//&&相依性:由左至右
var a=1;
var b=2;
var c=0;
console.log(a&&b&&c);//0
//注意 &&優先於||
console.log(c||c&&c||a);// => c||0||a => 0||a => 1
console.log(a&&b||c&&a);// => 2||0 => 2 

//+優先序大於===
var a=1+1===1; // => var a=2===1; => var a=false;

//比對運算子相依性由左至右
console.log(1000<10000<10);// => true<10 => 1<10 => true


var a='1';
var b=2;
var c=(a>b)?a*b:sum(a,b);//3
console.log(c);

function sum(a,b){
    return a+b;
}