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

let iAbout=document.getElementById("about")
let p=document.querySelector(".hide-about")
let extend=document.querySelector(".extend")
let about=()=>{
    iAbout.addEventListener("click",()=>{
        p.classList.toggle("hide-about")
        if(extend.innerHTML=="ver info"){
            extend.innerHTML="esconder"
        }else if(extend.innerHTML=="esconder"){
            extend.innerHTML="ver info"
        }else{
            null
        }
})
}
about()