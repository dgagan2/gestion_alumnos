$(function(){
    $('.createGroup').hide();
    $('.enrollClass').hide();
    $('.addClassGroup').hide();
    $('.addNota').hide();
    $('#btnCreateGroup').click(function(){
        $('.createGroup').show();
        $('.createClass').hide();
        $('.enrollClass').hide();
        $('.addClassGroup').hide();
        $('.addNota').hide();
    })
    $('#btnCreateClass').click(function(){
        $('.createGroup').hide();
        $('.createClass').show();
        $('.enrollClass').hide();
        $('.addClassGroup').hide();
        $('.addNota').hide();
    })
    $('#btnEnrollClass').click(function(){
        $('.createGroup').hide();
        $('.createClass').hide();
        $('.enrollClass').show();
        $('.addClassGroup').hide();
        $('.addNota').hide();
    })
    $('#btnClassGroup').click(function(){
        $('.createGroup').hide();
        $('.createClass').hide();
        $('.enrollClass').hide();
        $('.addClassGroup').show();
        $('.addNota').hide();
    })
    $('#btnAddNota').click(function(){
        $('.createGroup').hide();
        $('.createClass').hide();
        $('.enrollClass').hide();
        $('.addClassGroup').hide();
        $('.addNota').show();
        $('#formAgregarNota').hide();
    })
})
const arrStudent=[]//arreglo estdudiantes
const clas=[]//Arreglo de las materias
const group=[]//arreglo de los grupos
const assclasstogroup=[]//arreglo de asignacion de materias a grupos
const cursosMatr=[]//arreglo cursos matriculados
const notas=[]//arreglo notas
const form=document.querySelector('#formMateria').addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formMateria').reset();
})

function formulario(nform){
    const form=document.querySelector(nform).addEventListener("submit", function(event){
        event.preventDefault();
        let transform=new FormData(form)
        document.querySelector(nform).reset();
    })
}
const form1=document.querySelector('#formGroup').addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formGroup').reset();
})
//recuperar informacion de local storage
var myarraytemp=JSON.parse(localStorage.getItem("arrayClass"))
Array.prototype.push.apply(clas,myarraytemp)//arrglo materias

var b=JSON.parse(localStorage.getItem("arrayclasstogroup"))
Array.prototype.push.apply(assclasstogroup,b)//arreglo agregar materias a grupo

var tempLoc=JSON.parse(localStorage.getItem("arrayGroup"))
Array.prototype.push.apply(group,tempLoc)//arreglo grupos

var tempcurMatr=JSON.parse(localStorage.getItem("arraycursosmatriculados"))
Array.prototype.push.apply(cursosMatr,tempcurMatr)//arrgelo cursos matrciulados

let atemp=JSON.parse(localStorage.getItem("array"))
Array.prototype.push.apply(arrStudent,atemp)//arreglo estudiantes

let Ntemp=JSON.parse(localStorage.getItem("arrayNotas"))
Array.prototype.push.apply(notas,Ntemp)//arreglo notas

let selectIDStudent
function getStudent(){
    selectIDStudent=document.querySelector("#cmbStudent").value
    return selectIDStudent;
}
let selectClass
function getClassInscribir(){
    selectClass=document.querySelector("#cmbClass").value
    return selectClass;
}

document.querySelector("#cmbClass").addEventListener("change", function (){
    document.querySelector("#cmbClass").value
})
document.querySelector("#cmbGroup").addEventListener("change", function (){
     document.querySelector("#cmbGroup").value
})
document.querySelector("#cmbGroupAssig").addEventListener("change", function (){
    document.querySelector("#cmbGroupAssig").value
})
document.querySelector("#cmbClassAssig").addEventListener("change", function (){
     document.querySelector("#cmbClassAssig").value
})
document.querySelector("#cmbMateria").addEventListener("change", function (){
    document.querySelector("#cmbMateria").value
})

//Modulo crear Clase
document.querySelector("#addClass").addEventListener("click",function(){
    let clase=document.querySelector("#txtClass").value
    class addClass{
        constructor(materia){
            this.materia=clase
        }
        addMaterias(clase){
            clas.push(this.materia)
            const jsonArray = JSON.stringify(clas);
            localStorage.setItem('arrayClass', jsonArray);
        }
    }
    let i=new addClass(clase)
    i.addMaterias()
});
//Modulo crear Grupo
document.querySelector("#addGroup").addEventListener("click",function(){
    let grupo=document.querySelector("#txtGrupo").value
    class Group{
        constructor(grupo){
            this.grupo=grupo
        }
        addGroup(grupo){
            group.push(this.grupo)
            const jsonArray = JSON.stringify(group);
            localStorage.setItem('arrayGroup', jsonArray);
        }
    }
    let j=new Group(grupo)
    j.addGroup() 
});
//Modulo Inscribir materias
function borarnom(){
    d=document.getElementById("lblname")
    e=document.getElementById("lblN")
    if(!d){
    }else{
        nodos=e.parentNode
        nodo=d.parentNode
        nodo.removeChild(d)
        nodos.removeChild(e)
    }   
}
function borarNomNotas(){
    d=document.getElementById("lblidEst")
    e=document.getElementById("lblnomb")
    if(!d){
    }else{
        nodos=e.parentNode
        nodo=d.parentNode
        nodo.removeChild(d)
        nodos.removeChild(e)
    } 
}
document.querySelector("#cmbStudent").addEventListener("change", function(){
  borarnom()
})
document.querySelector("#btnEnrollClass").addEventListener("click", function(event){
    limpiar("cmbGroup")
    limpiar("cmbClass")
    for(var j=0;j<arrStudent.length;j++){
        document.querySelector("#cmbStudent").innerHTML +=
        `
        <option value="${arrStudent[j].ID}">${arrStudent[j].ID}</option>
        `
    } 
    for(var i=0;i<group.length;i++){
        document.querySelector("#cmbGroup").innerHTML +=
        `
        <option value="${group[i]}">${group[i]}</option>
        `
    }
})

document.querySelector("#cmbGroup").addEventListener("change", function(){
    limpiar("cmbClass")
    borarnom()
    let selectGrou=document.querySelector("#cmbGroup").value
    let estudiante=selectIDStudent
    for(var h=0;h<arrStudent.length;h++){
        if(estudiante==arrStudent[h].ID){
            document.querySelector("#namestudent").innerHTML +=
            `
            <b id="lblN">Nombre Estudiante</b>
            <p id="lblname">${arrStudent[h].Name}</p>
            `
        }
    }  
    for(var h=0;h<assclasstogroup.length;h++){
        if(selectGrou==assclasstogroup[h].Grupo){
            document.querySelector("#cmbClass").innerHTML +=
            `
            <option value="${assclasstogroup[h].Clase}">${assclasstogroup[h].Clase}</option>
            `
        }
    }   
})

document.querySelector("#btnAddMate").addEventListener("click", function(){
    let NombreEstud=document.querySelector("#lblname").innerHTML
    let IDestudiante=selectIDStudent
    let clase=selectClass
    let grupo=document.querySelector("#cmbGroup").value
    class inscribircurso{
        constructor(NombreEstud, IDestudiante, clase, grupo){
            this.NombreEstud=NombreEstud
            this.IDestudiante=IDestudiante
            this.clase=clase
            this.grupo=grupo
        }
        matricularcursos(NombreEstud, IDestudiante, clase, grupo){
            cursosMatr.push({
                NDocumento:this.IDestudiante, Estudiante:this.NombreEstud, Clase:this.clase, Grupo:this.grupo
            })
            const jsonArray = JSON.stringify(cursosMatr);
            localStorage.setItem('arraycursosmatriculados', jsonArray); 
        }
    }let inscur=new inscribircurso(NombreEstud, IDestudiante, clase, grupo)
    inscur.matricularcursos()
    formulario("#formEnrollClass")
    //borarnom()
})
//Asignar materias a grupo
document.querySelector("#btnClassGroup").addEventListener("click",function(){
    limpiar("cmbGroupAssig")
    limpiar("cmbClassAssig")
    for(var i=0;i<group.length;i++){
        document.querySelector("#cmbGroupAssig").innerHTML +=
        `
        <option value="${group[i]}">${group[i]}</option>
        `
    }
    for(var h=0;h<clas.length;h++){
        document.querySelector("#cmbClassAssig").innerHTML +=
        `
        <option value="${clas[h]}">${clas[h]}</option>
        `
    }
})

document.querySelector("#btnAddClasstoGroup").addEventListener("click",function(){
    let clase=document.querySelector("#cmbClassAssig").value
    let grupo=document.querySelector("#cmbGroupAssig").value
    class classtogroup{
        constructor(grupo,clase){
            this.grupo=grupo
            this.clase=clase
        }
        addClasstoGroup(grupo,clase){
            assclasstogroup.push({
                Grupo:this.grupo, Clase:this.clase
            })
            const jsonArray = JSON.stringify(assclasstogroup);
            localStorage.setItem('arrayclasstogroup', jsonArray); 
        }
    }let p=new classtogroup(grupo, clase)
    p.addClasstoGroup()
    formulario("#fomraddClassGroup")
})
function limpiar(objclear){
    for (let i = ("#"+objclear).length; i >= 0; i--) {
        document.getElementById(objclear).remove(i);
    }
}
//Modulo agregar nota
let nombreSt
document.querySelector("#btnbuscar").addEventListener("click",function(){
    // document.querySelector("#txtID").innerHTML=""
    //borarNomNotas()
    let IdFind=document.querySelector("#txtID").value;
    if(IdFind!==""){
        for(var j=0;j<arrStudent.length;j++){
            if(IdFind==arrStudent[j].ID){
                document.querySelector("#infoEstudiante").innerHTML+=
                `
                <label id="lblidEst" value="${arrStudent[j].ID}">Numero ID: ${arrStudent[j].ID}</label>
                <label id="lblnomb" value="${arrStudent[j].Name}">Nombre Estudiante: ${arrStudent[j].Name}</label>
                `
                nombreSt= `${arrStudent[j].Name} `
            }
        }
        for(var i=0;i<cursosMatr.length;i++){
            if(IdFind==cursosMatr[i].NDocumento){
                document.querySelector("#cmbMateria").innerHTML+=
                `
                <option value="${cursosMatr[i].Clase}">${cursosMatr[i].Clase}</option>
                `
            }
        }$('#formAgregarNota').show();
    }else{
        alert("Ingrese el ID de estudiante")
    }
    formulario("#formAgregarNota")
})
document.querySelector("#btnAddNotaFinal").addEventListener("click",function(){
    let IdFind=document.querySelector("#txtID").value;
    mate=document.getElementById("cmbMateria").value;
    let k
    assclasstogroup.forEach(function(x){
        if(x.Clase==mate){
            k=x.Grupo 
        }
    })
    nomb=nombreSt//se cambio
    let gr=k        
    cal=document.getElementById("txtNota").value
    class calificaciones{
        constructor(IdFind,nomb,gr, mate, cal){
            this.IdFind=IdFind
            this.nomb=nomb
            this.gr=gr
            this.mate=mate
            this.cal=cal
        }
        addcalificaciones(IdFind,nomb,gr, mate, cal){
            notas.push({          
                Id:this.IdFind, Nombre:this.nomb, Grupo:this.gr, Materia:this.mate, Calificacion:this.cal
            })
            const nArray = JSON.stringify(notas);
            localStorage.setItem('arrayNotas', nArray); 
        }
    }
    let ca=new calificaciones(IdFind,nomb,gr,mate,cal)
    ca.addcalificaciones()
    borarNomNotas()
})
