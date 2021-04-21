/*the javascript promise is a object that represent  an completed nd failure of an asynchronous
operatin nd task and its resulting value */
function hello(y){
return new Promise(function(resolve, reject) {
    
if(y==true){
    resolve("true");
}else{
    reject("false");
}
});
}
let obj=hello(false);
console.log(obj);
obj.then((value)=>{
    console.log(`the asynchronous operation is succesful ${value}`)
    }
).catch((value)=>{
    console.log(`the asynchronous operation is fail ${value}`)
    }).finally(()=>{
        console.log(`this block is execute everytime`)
        });