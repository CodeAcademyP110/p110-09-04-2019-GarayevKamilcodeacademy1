"use strict";
[...document.querySelectorAll(".tab")].map(tab =>{
    tab.onclick= function(){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const id = this.getAttribute("data-id");
        [...document.querySelectorAll(".heading")].map(head=>{
            head.classList.add("d-none");
            document.querySelector(`.heading[data-id="${id}"]`).classList.remove("d-none");
        })
        
    }
})