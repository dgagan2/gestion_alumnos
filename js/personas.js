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
const form=document.querySelector("#formFindID").addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formPers').reset();
})
const student=[]
//Guardar info local storage
let myarraytem=JSON.parse(localStorage.getItem("array"))
Array.prototype.push.apply(student,myarraytem)
//Obtener valores select Sexo
let Sexo
function getSex(){
    Sexo=document.querySelector("#sex").value
    return Sexo;
}
//Obtener valores select Tipo sangre
let TS
function getGS(){
    TS=document.querySelector("#bloodType").value
    return TS;
}
//Evento agregar persona
document.querySelector("#btnAddPerson").addEventListener("click", function(){
    let ID=document.querySelector("#txtNDocumnet").value;
    let Nombre=document.querySelector("#txtName").value;
    let Edad=document.querySelector("#txtAge").value;
    let Sexo1=Sexo
    let TS1=TS
    let Ciudad=document.querySelector("#txtCity").value;
    let Correo=document.querySelector("#txtMail").value;
    if(ID == "" | Nombre == "" | Edad =="" | Sexo1 ==undefined ){
        alert("Debe diligenciar todos los campos")
    }else{
        class person{
            constructor(ID,Nombre,Edad,Sexo1,TS1,Ciudad,Correo){
                this.ID=ID
                this.Nombre=Nombre
                this.Edad=Edad
                this.Sexo1=Sexo1
                this.TS1=TS1
                this.Ciudad=Ciudad
                this.Correo=Correo  
            }
            addPerson(ID,Nombre,Edad,Sexo,TS,Ciudad,Correo){
                student.push({
                    ID:this.ID, Name:this.Nombre, Age:this.Edad, Sex:this.Sexo1, BloodType:this.TS1,City:this.Ciudad, Mail:this.Correo
                })
                //guardar arreglo local storage
                const jsonArray = JSON.stringify(student);
                localStorage.setItem('array', jsonArray);           
            }
        }
    let p=new person(ID,Nombre,Edad,Sexo1,TS1,Ciudad,Correo)
    p.addPerson()
} 
})
var r=[]
document.querySelector("#btnFind").addEventListener("click", function(){
    let myar=JSON.parse(localStorage.getItem("array"))
    Array.prototype.push.apply(r,myar)
    let IdF=document.querySelector("#txtIdFind").value;
    if(IdF==""){
        for(var j=0;j<r.length;j++){
            var constemp=r[j]
            document.querySelector("#tablePerson").innerHTML +=
            `
            <tbody id="tablePerson">
                <tr>
                <td>${r[j].ID}</td>
                <td>${constemp.Name}</td>
                <td>${constemp.Age}</td>
                <td>${r[j].Sex}</td>
                <td>${r[j].BloodType}</td>
                <td>${r[j].City}</td>
                <td>${r[j].Mail}</td>
                </tr>
            </tbody>
            `} 
    }else{
        for(var k=0;k<r.length;k++){
            var constemp=r[k]
            if(IdF==r[k].ID){
                document.querySelector("#tablePerson").innerHTML +=
                `
                <tbody id="tablePerson">
                    <tr>
                    <td>${r[k].ID}</td>
                    <td>${r[k].Name}</td>
                    <td>${r[k].Age}</td>
                    <td>${r[k].Sex}</td>
                    <td>${r[k].BloodType}</td>
                    <td>${r[k].City}</td>
                    <td>${r[k].Mail}</td>
                    </tr>
                </tbody>
                `
            }
        }
    }
})


