//const formulario = document.getElementById('btnAddPerson')
var identityNumberVerification = false
var nameVerification = false
var ageVerification = false
var cityVerification = false
var mailVerification = false
const inputs = document.querySelectorAll('#formPeople input')
const expresiones = {
    txtIdNumber: /^\d{6,14}$/,
    txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
    txtAge: /^\d{1,2}$/,
    txtResidenceCity: /^[a-zA-ZÁ-ÿ\s]{4,20}$/,
    txtEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
function borrarValidaciones(text,image) {
    const texto = document.querySelector(text)
    const imagen = document.querySelector(image)
    if (!imagen) {

    } else {
        var padreI = imagen.parentNode;
        var padreT = texto.parentNode;
        padreI.removeChild(imagen);
        padreT.removeChild(texto)
    }
}
function borrarMensajeFinal(valorBorrar) {
    const texto = document.querySelector(valorBorrar)
    if (!texto) {

    } else {
        var padreT = texto.parentNode;
        padreT.removeChild(texto)
    }
}
function MensajeFinal() {
    document.querySelector("#error").innerHTML += 
    `<p class="text-danger fs-6" id="errorFinal">*Algunos campos no quedaron bien diligenciados,
    valide la información</p>`
}
const input_ok = (b) => {
    borrarValidaciones("#inputIncorrecto", "#input__incorrecto")
    borrarMensajeFinal("#input__correcto")
    document.querySelector(b).innerHTML += `<img src="../img/cheque.png" id="input__correcto"></img>`

}
const input_wrong = (b) => {
    borrarMensajeFinal("#input__correcto")
    borrarValidaciones("#inputIncorrecto", "#input__incorrecto")
    document.querySelector(b).innerHTML += `<img src="../../img/incorrecto.png" id="input__incorrecto"></img>
    <p class="text-danger fs-6" id="inputIncorrecto">*El campo no esta bien diligenciado</p>`
}

const validarCampos = (e) => {
    switch (e.target.name) {
        case "txtIdNumber":
            if (expresiones.txtIdNumber.test(e.target.value)) {
                input_ok(".validateIdNumber")
                identityNumberVerification = true
            } else {
                input_wrong(".validateIdNumber")
                identityNumberVerification = false
            }
            break;
        case "txtName":
            if (expresiones.txtName.test(e.target.value)) {
                input_ok(".validateName")
                nameVerification = true
            } else {
                input_wrong(".validateName")
                nameVerification = false
            }
            break;
        case "txtAge":
            if (expresiones.txtAge.test(e.target.value)) {
                input_ok(".validateAge")
                ageVerification = true
            } else {
                input_wrong(".validateAge")
                ageVerification = false
            }
            break;
        case "txtResidenceCity":
            if (expresiones.txtResidenceCity.test(e.target.value)) {
                input_ok(".validateResidenceCity")
                cityVerification = true
            } else {
                input_wrong(".validateResidenceCity")
                cityVerification = false
            }
            break;
        case "txtEmail":
            if (expresiones.txtEmail.test(e.target.value)) {
                input_ok(".validateEmail")
                mailVerification = true
            } else {
                input_wrong(".validateEmail")
                mailVerification = false
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('change', validarCampos)
})


function validarAllInputs(event) {
    if (identityNumberVerification && nameVerification && ageVerification && cityVerification && mailVerification == true) {
        return true
    } else {
        return false
    }
}
export { validarAllInputs, borrarMensajeFinal, MensajeFinal }

