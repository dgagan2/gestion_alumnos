$(function(){
    $('.createGroup').hide();
    $('.enrollClass').hide();
    $('.addClassGroup').hide();
    $('#btnCreateGroup').click(function(){
        $('.createGroup').show();
        $('.createClass').hide();
        $('.enrollClass').hide();
        $('.addClassGroup').hide();
    })
    $('#btnCreateClass').click(function(){
        $('.createGroup').hide();
        $('.createClass').show();
        $('.enrollClass').hide();
        $('.addClassGroup').hide();
    })
    $('#btnEnrollClass').click(function(){
        $('.createGroup').hide();
        $('.createClass').hide();
        $('.enrollClass').show();
        $('.addClassGroup').hide();
    })
    $('#btnClassGroup').click(function(){
        $('.createGroup').hide();
        $('.createClass').hide();
        $('.enrollClass').hide();
        $('.addClassGroup').show();
    })
})
let arrStudent=[]//arreglo estdudiantes
const clas=[]//Arreglo de las materias
const group=[]//arreglo de los grupos
const assclasstogroup=[]//arreglo de asignacion de materias a grupos
const cursosMatr=[]//arreglo cursos matriculados
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

var myarraytemp=JSON.parse(localStorage.getItem("arrayClass"))
Array.prototype.push.apply(clas,myarraytemp)

var b=JSON.parse(localStorage.getItem("arrayclasstogroup"))
Array.prototype.push.apply(assclasstogroup,b)

var tempLoc=JSON.parse(localStorage.getItem("arrayGroup"))
Array.prototype.push.apply(group,tempLoc)
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
const form1=document.querySelector('#formGroup').addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formGroup').reset();
})
//formulario("formGroup")

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

let atemp=JSON.parse(localStorage.getItem("array"))
Array.prototype.push.apply(arrStudent,atemp)

function limpiar(objclear){
    for (let i = ("#"+objclear).length; i >= 0; i--) {
        document.getElementById(objclear).remove(i);
    }
}
document.querySelector("#cmbStudent").addEventListener("change", function(){
    d=document.getElementById("lblname")
    if(!d){

    }else{nodo=d.parentNode
        nodo.removeChild(d)}      
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
    let selectGrou=document.querySelector("#cmbGroup").value
    let estudiante=selectIDStudent
    for(var h=0;h<arrStudent.length;h++){
        if(estudiante==arrStudent[h].ID){
            document.querySelector("#namestudent").innerHTML +=
            `
            <b>Nombre Estudiante</b><br>
            <p id="lblname" name="${arrStudent[h].Name}">${arrStudent[h].Name}</p>
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

let selectIDStudent
function getStudent(){
    selectIDStudent=document.querySelector("#cmbStudent").value
    return selectIDStudent;
}

document.querySelector("#cmbClass").addEventListener("change", function (){
    document.querySelector("#cmbClass").value
})
document.querySelector("#cmbGroup").addEventListener("change", function (){
     document.querySelector("#cmbGroup").value
})

document.querySelector("#btnAddMate").addEventListener("click", function(){
    let NombreEstud=document.querySelector("#lblname").innerHTML
    let IDestudiante=selectIDStudent
    limpiar("cmbClass")
    let clase=document.querySelector("#cmbClass").value
    let grupo=document.querySelector("#cmbGroup").value
    class inscribircurso{
        constructor(NombreEstud, IDestudiante, clase, grupo){
            this.NombreEstud=NombreEstud
            this.IDestudiante=IDestudiante
            this.clase=clase
            this.grupo=grupo
        }
        matricularcursos(NombreEstud, IDestudiante, clase,grupo){
            cursosMatr.push({
                NDocumento:this.IDestudiante, Estudiante:this.NombreEstud, Clase:this.clase, Grupo:this.grupo
            })
            const jsonArray = JSON.stringify(cursosMatr);
            localStorage.setItem('arraycursosmatriculados', jsonArray); 
        }
    }let inscur=new inscribircurso(NombreEstud, IDestudiante, clase,grupo)
    inscur.matricularcursos()
    formulario("#formEnrollClass")
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

document.querySelector("#cmbGroupAssig").addEventListener("change", function (){
    document.querySelector("#cmbGroupAssig").value
})
document.querySelector("#cmbClassAssig").addEventListener("change", function (){
     document.querySelector("#cmbClassAssig").value
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