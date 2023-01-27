"use strict";

const numberCountEl = document.querySelector(".numberCount")
const buttonContainerEl = document.querySelectorAll(".buttonContainer button")

// starting values
numberCountEl.textContent = 0

buttonContainerEl.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.textContent.includes("Increase")){
            numberCountEl.textContent ++
        }else if(button.textContent.includes("Decrease")){
            numberCountEl.textContent --
        }else if(button.textContent.includes("Reset")){
            numberCountEl.textContent = 0
        }
    valueNumbers()      
    })
})

function valueNumbers(){
    if(numberCountEl.textContent < 0){
        numberCountEl.style.color = "red"
    }else if(numberCountEl.textContent > 0){
        numberCountEl.style.color = "green"
    }else 
    numberCountEl.style.color = "black"
}