// let p = new Promise((resolve , rejecte)=>{});
// console.log(p);

// let q = new Promise((resolve , rejecte)=>{
//     resolve("Success");
//     //reject("Failure");
// });

// q.then((res)=>{
//     console.log(res);
// })

// q.catch(err=>console.log(err))
// q.finally(()=>console.log("final"));

// let r = new Promise((resolve , reject)=>{
//     reject("Failure");

// });
// r
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))


//API fetching 

function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(res=>{
        // console.log(res)
        // console.log(res.json());
        return res.json().then(data=>{
            // console.log(data);
            let store = document.getElementById("store");
            data.map(user=>{
                console.log(user);
                store.innerHTML +=`
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();