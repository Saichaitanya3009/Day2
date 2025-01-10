//Higher Order function
function hof(a){
    return a();
}
let k = hof(function(){return "Callback function"});
console.log(k);



// let x =hof(function(){return"Call Back function"});
// console.log(x());

// //Example 
//arrow function
// let user = ["Manu", "Shaik", "Harish", "Chaithu"];
// console.log(user);
// user.map((user)=>{
//     console.log(user);
// })


//without arrow fun

