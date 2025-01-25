let buttons = document.getElementsByTagName("button");

 // Loop through each button and add an event listener

 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("mouseover", () => {
         document.body.style.backgroundColor = buttons[i].className;
     });
 }