document.querySelector("#btnCreateClass").addEventListener("click", function(){
    sections("", ".createClass")
})

document.querySelector("#btnListStudent").addEventListener("click", function(){
    sections("", "")
})
 function sections(ocultar, mostrar){
    let ocultarS=document.querySelector(ocultar)
    ocultarS.style="display:none"
    let MostraS=document.querySelector(mostrar)
    MostraS.style="display:flex"
 }