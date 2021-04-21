/*the javascript promise is an object that reprsents
 completion and failure an asychronous task/operation and
 its resulting value*/
let x = true;//gobal variable
let promise = new Promise(function(resolve, reject) {
    if (x == true) {
        resolve("asychro task is succesfully comolete");//fullfied state
    } else {
        reject("asychronous operation is failed");// rejected state
    }
});
console.log(promise);
promise.then(function(value){
    console.log(`done ${value}`);
}
).catch(function(value){
    console.log(`failure ${value}`);
}).finally(function(){
    console.log(`execute`);
});
