function eatBreakfast(){
    console.log('Eat breakfast');
}

function washPlate(){
    console.log('Washing plates');
}

function callSomeone(someOne){
    console.log(`Call ${someOne}`);
    setTimeout(function(){
        console.log(`${someOne} call back`)
    },3000);
}

function doWork(){
    var auntie='Beautiful auntie';
    eatBreakfast();
    callSomeone(auntie);
    washPlate();
}

doWork();

function clickTrigger(){
    console.log('Clicked');
}

var dom=document.querySelector('p');
dom.addEventListener('click',clickTrigger,false)