'use strict'

let nav = document.querySelector(".nav")

let button=document.querySelector(".open")
let abrirNav=()=>{
    button.addEventListener("click",()=>{
            nav.classList.toggle("mostrar")
    })
}


abrirNav()

let whatsapp=document.getElementById("whatsapp");
let hide=document.querySelector(".hide")
let openWindowWhatsapp=()=>{
    whatsapp.addEventListener("click",()=>{
        hide.classList.toggle("hide")
    })
}
openWindowWhatsapp();

let iAbout=document.getElementById("section-about")
let p=document.querySelector(".hide-about")
let about=()=>{
    iAbout.addEventListener("click",()=>{
        p.classList.toggle("hide-about")
})
}
about()