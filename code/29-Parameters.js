var globalVariable='Global variable';
var obj={
    aFunction:function(para){
        var scopeVariable='Scope variable';
        console.log(para,scopeVariable,arguments,globalVariable);
    }
};

obj.aFunction('description',2,3);