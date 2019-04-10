"user strict";
[...document.querySelectorAll(".button")].map(button =>{
    button.onclick=function(){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    }
})