/*the javascript promise is a object that represent 
a completion or failure of an asynchronous operation or task
and its resulting value*/
let v = false;
//create promise constructor
let promiseobj = new Promise(function(resolve, reject) {
    if (v) {
        resolve("yes");
    } else {
        reject("no");
    }
});
console.log(promiseobj);
let hello = (value) => {
    console.log(`the synchronous task complete succesful ${value}`);
}
let hii = (value1) => {
    console.log("the synchronous task fail" +  value1);
}
let oky = () => {
    console.log("execute");
}
//THE PROMISE RESULT  CAN BE HANDLE  USING THREE METHODS
//THEN METHOD
//CATCH METHOD
//FINALLY METHOD
promiseobj.then(hello).catch(hii).finally(oky);