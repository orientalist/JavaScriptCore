var value=1;
fn1=()=>{
    console.log(value);
}
fn2=()=>{
    var value=2;
    fn1();
}
fn2();