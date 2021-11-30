
let child=document.getElementById("show-gallery-child");
let family=document.getElementById("show-gallery-family");
let clickChild=document.querySelector(".click-child");
let clickFamily=document.querySelector(".click-family");

let showGallery=()=>{
        child.addEventListener("click",()=>{
            clickChild.classList.toggle("click-child")
        })
        family.addEventListener("click",()=>{
            clickFamily.classList.toggle("click-family")
        })
}
showGallery()