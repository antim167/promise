/*the javascript promise is an object that reprsents
 completion and failure an asychronous task/operation and
 its resulting value*/
let x = true;
let promise = new Promise(function(resolve, reject) {
    if (x == true) {
        resolve("completi");//fullfied state
    } else {
        reject("failure");// rejected state
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
