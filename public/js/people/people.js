$(function () {
    $('#findPeople').hide();
    $('#btnCreateStudent').click(function () {
        $('#form').show();
        $('#findPeople').hide();
    })
    $('#btnListStudent').click(function () {
        $('#form').hide();
        $('#findPeople').show();
    })
})
import { validarAllInputs, borrarMensajeFinal, MensajeFinal } from "./validarFormulario.js";

const form = document.getElementById("formPeople")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    borrarMensajeFinal("#errorFinal");
    const userData = eventToUserData(event)
    if (!validarAllInputs()) {
        MensajeFinal();
    } else {
        fetch(`http://127.0.0.1:9000/people`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch (err => console.error(err));

        borrarMensajeFinal("#input__correcto")
        document.getElementById('formPeople').reset();
    }
})

function eventToUserData(event) {
    const elements = event.target.elements;
    let idNumber = elements.txtIdNumber.value;
    let name = elements.txtName.value;
    let age = elements.txtAge.value;
    let sex = elements.cmbSex.value;
    let bloodType = elements.cmbBloodType.value;
    let residenceCity = elements.txtResidenceCity.value;
    let email = elements.txtEmail.value;
    return {
        idNumber: idNumber,
        name: name,
        age: age,
        sex: sex,
        bloodType: bloodType,
        residenceCity: residenceCity,
        email: email
    }
}