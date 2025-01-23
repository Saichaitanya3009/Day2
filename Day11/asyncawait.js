// ftech user
// /async & await
// function demo()
// {
//     console.log("Start");
//     console.log(10);
//     console.log(20);
//     console.log(30);
//     console.log("End");
// }
// demo();

// let p = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         resolve("success")
//    },4000);
// })

// async function demo(){
//     console.log("Start");
//     let x = await p;
//     console.log(x);
//     console.log("end");
// }
// demo();

async function fetchUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers()
console.log(window);

//DOM










