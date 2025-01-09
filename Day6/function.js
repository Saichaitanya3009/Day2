// //With parameter 
// a = 10;
// console.log(a);


//withput parameter 
// function demo(){
//     console.log("function is executing...")
// }
// demo();


//function calling 

// function add(a,b){
//     console.log(a+b);
// }
// add(2,3);
// add(6,89)


//! named function
// function test(){
//     console.log("Named function is executing....");
// }
// test();

//! ananymus function 
// function(){
    
// }
// (_);

//!function expression
// let x = function(){
//     console.log("anonymus is not executing");
// }
// ();
// //console.log(x);
// x();

//!IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

// ! Arrow function
//basic function strcuture
// function demo(){
//     console.log("Arrwo");
// }
// demo();


// let  x =a=>console.log(a);
// x(6);

// // i have onlt one variable

// let  x = a => console.log(a);
// x(4);

//! implicit returns and explicit returns.Used for return the expression.

function test1(a,b){
    return a+b;
}
console.log(test1(5,5));

let x = (a,b) => {return a*b};
console.log(x(5,5));

// implicit return 

let y = (a,b) => a+b;
console.log(y(100,200));
