function storeMoney() {
    var money = 1000;
    return function (price) {
        money = money + price;
        return money;
    };
};

//console.log(storeMoney()(100));

//console.log(storeMoney()(200));

function fnTest() {
    var money = 1000;
    money += 100;
    return money;
}

var test = fnTest;


var fn = storeMoney();
//console.log(fn(100));

function arrFunction() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

var fn = arrFunction();

// fn[0]();
// fn[1]();
// fn[2]();
function arrFunction2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        (function (j) {
            arr.push(
                function(){
                    console.log(j);
                }
            );
        })(i);
    }
    return arr;
}
var fn2 = arrFunction2();
// fn2[0]();
// fn2[1]();
// fn2[2]();

function arrFunction3(){
    var arr=[];
    for(let i=0;i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }
    return arr;
}

var fn3=arrFunction3();