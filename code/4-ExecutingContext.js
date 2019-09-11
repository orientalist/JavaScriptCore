sayHi=(name)=>{
    var greeting=`hi ${name}`;
    return greeting;
}

doSomething=()=>{
    var mom='mother';
    console.log(1,sayHi(mom))
}

//doSomething();

var openTheDoor=(num)=>{
    return `開第 ${num} 門`;
}

var openDoors=()=>{
    openTheDoor(1)

    for(var i=2;i<5;i++){
        openTheDoor(i)
    }
}

//openDoors()