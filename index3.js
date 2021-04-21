let hello = () => {
    return new Promise(function (resolve, reject){
      setTimeout(()=>{
          resolve('retrun succesfully')
      },2000);  
    })

}
let h = hello();
h.then((value)=>{
    console.log(`succesful ${value}`)
}).catch((value)=>{
    console.log(`failure ${value}`)
}).finally(()=>{
    console.log(`this block is execute everytime`)
});
console.log(h);