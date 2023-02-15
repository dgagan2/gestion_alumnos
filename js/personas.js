document.querySelector("#btnCreateStudent").addEventListener("click", function(){
    let ocultarS=document.querySelector("#person")
    ocultarS.style="display:flex"
    let MostraS=document.querySelector("#List_person")
    MostraS.style="display:none"
})

document.querySelector("#btnListStudent").addEventListener("click", function(){
    let ocultarS=document.querySelector("#person")
    ocultarS.style="display:none"
    let MostraS=document.querySelector("#List_person")
    MostraS.style="display: flex"
})