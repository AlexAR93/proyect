'use strict'

let nav = document.querySelector(".nav")

let button=document.querySelector(".open")
let abrirNav=()=>{
    button.addEventListener("click",()=>{
            nav.classList.toggle("mostrar")
    })
}


abrirNav()

