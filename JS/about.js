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