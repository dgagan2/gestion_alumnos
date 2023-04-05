$(function () {
    $('#findPeople').hide();
    $('#btnCreateStudent').click(function(){
        $('#form').show();
        $('#findPeople').hide();
    })
    $('#btnListStudent').click(function () {
        $('#form').hide();
        $('#findPeople').show();
    })
})
import { validarAllInputs, borrarMensajeFinal, MensajeFinal } from "./validarFormulario.js";
const form = document.getElementById("formPeople").addEventListener("submit", function (event) {
    event.preventDefault();
    //let transform = new FormData(form)
    //document.getElementById('formPeople').reset();
})
document.querySelector("#btnAddPeople").addEventListener("click", (event)=>{
    borrarMensajeFinal();  
    if(!validarAllInputs()){
        MensajeFinal();
        console.log("mal")
    }else{
        console.log("todo ok")
    }
    
})