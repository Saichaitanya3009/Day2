// let mainEle = document.createElement("div");
// mainEle.setAttribute("id" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" ,"topBlock");

// let image = document.createElement("img");
// image.src="https://pixabay.com/illustrations/girl-woman-surreal-night-outdoors-8788687/";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText="Girl";

// let btn = document.createElement("buttom");
// btn.innerText="View More";
 
// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// bottomEle.appendChild(image);
// bottomEle.appendChild(topEle);
// bottomEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementsByName("gender");
// console.log(gender);


//!hide and showing the password
check.addEventListener("click" , (event)=>{
    if(event.target.checked == true){
        password.setAttribute("type" , "text");
        show.innerText = "hide password";
    }else{
        password.setAttribute("type" , "password");
        show.innerText="show password";
    }
})

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )
})


