var name='Zhuang';

var person={
    name:'Guang',
    getName:function(){
        return this.name;
    }
};

var getName=person.getName;
console.log(getName());//=>Zhuang
//---------------------------------------------
var obj={
    name:'Xiang',
    fn:function(a,b,c){
        return `${this.name},${a},${b},${c}`;
    }
};

var fnA=obj.fn;
var fnB=fnA.bind(null,0);
console.log(fnB(1,2));//=>Zhuang,0,1,2
//---------------------------------------------
var value='global';
var foo={
    value:'local',
    bar:function(){
        return this.value;
    }
};

console.log(foo.bar());//=>local
console.log((foo.bar=foo.bar)());//global
console.log((false||foo.bar)());//global
//---------------------------------------------
var arr=['1','2','3'].map(parseInt);
//上式等價於
var arr2=['1','2','3'].map(function(item,i){
    return parseInt(item,i);
});
console.log(arr);//=>[1,NaN,NaN];