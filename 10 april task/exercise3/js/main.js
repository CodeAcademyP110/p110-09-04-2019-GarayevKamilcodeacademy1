"use strict";
[...document.querySelectorAll(".box")].map(box=>{
    box.onclick=function(){
        const id= this.getAttribute("data-id");
        [...document.querySelectorAll(".boxFull")].map(boxfull=>{
            boxfull.classList.add("no-width");
            document.querySelector(`.boxFull[data-id="${id}"]`).classList.remove("no-width");
        })
        
    }
})