var value=1;
var fn1=()=>{
    console.log(value);
}
var fn2=()=>{
    var value=2;
    fn1();
}
//fn2();

var person='mom';
var sayHi=()=>{
    console.log(`hi ${person}`);
}
var doMorningWork=()=>{
    //var person='father';
    var meetAuntie=()=>{
        //var person='pretty Auntie';
        console.log(`hello ${person}`)
    }
    //sayHi();
    meetAuntie();
}

sayHi();
doMorningWork();
//hi mom
//hi mom
//hello pretty Auntie