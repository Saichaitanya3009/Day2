//dynamic creation of element in js//du

let ele = document.createElement("h1");
ele.innerText = "Dynamic";
// ele.id = "demo"
ele.setAttribute("id" , "demo")
console.log(ele);
//ele.removeAttribute("id");
document.body.appendChild(ele);

let image = document.creatElement("img");
image.src="./vardhan.jpg";
console.log(image);
document.body.appendChild(image)