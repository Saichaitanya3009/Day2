let UserData = {
    name:"chaithu",
    age:25,
    city:"Ananthapur",
};
console.log(UserData.name , typeof(UserData));

let x = JSON.stringify(UserData);
console.log(x , typeof(x));

let y = JSON.parse(x);
console.log(y);