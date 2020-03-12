var num=1;
var giveMoney=function giveMoreMooney(coin){
    num+=1;
    console.log(`Give more money`,num,coin);
    return coin>100?coin:giveMoreMooney(num*coin);
}

//console.log(giveMoney(30));

var num2=1;
var giveMoney2=function(coin){
    num2+=1;
    console.log('Give more ',num2,coin);
    return coin>100?coin:giveMoney2(num2*coin);
}
//console.log(giveMoney2(30));

function callSomeone(fn){
    fn();
}

callSomeone(function(){
    console.log('triggered');
});

(function(){
    console.log('instantly triggered.');
}());

(function(){
    var Ming='Ming';
    console.log(Ming);
})();