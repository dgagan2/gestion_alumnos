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
//Modulo crear Clase
var a=localStorage.getItem("arrayClass")
let myarraytemp=JSON.parse(a)
Array.prototype.push.apply(clas,myarraytemp)
//
var b=JSON.parse(localStorage.getItem("arrayclasstogroup"))
Array.prototype.push.apply(assclasstogroup,b)

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
document.querySelector("#home").addEventListener("click", function(){
    var a=localStorage.getItem("arrayClass")
    let myarraytemp=JSON.parse(a)
    Array.prototype.push.apply(clas,myarraytemp)
});
//Modulo crear Grupo
const form1=document.querySelector('#formGroup').addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formGroup').reset();
})

var tempLoc=JSON.parse(localStorage.getItem("arrayGroup"))
Array.prototype.push.apply(group,tempLoc)
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

document.querySelector("#btnEnrollClass").addEventListener("click", function(event){
    for(var j=0;j<arrStudent.length;j++){
        document.querySelector("#cmbStudent").innerHTML +=
        `
        <option value="${arrStudent[j].Name}">${arrStudent[j].Name}</option>
        `
    } 
    for(var i=0;i<group.length;i++){
        document.querySelector("#cmbGroup").innerHTML +=
        `
        <option value="${group[i]}">${group[i]}</option>
        `
    }
})
let selectGroup
function getGroup(){
    selectGroup=document.querySelector("#cmbGroup").value
    return selectGroup;
}
document.querySelector("#cmbGroup").addEventListener("change", function(){
    for (let i = ("#cmbClass").length; i >= 0; i--) {
        document.getElementById("cmbClass").remove(i);
    }
    let selectGrou=document.querySelector("#cmbGroup").value
    for(var h=0;h<assclasstogroup.length;h++){
        if(selectGrou==assclasstogroup[h].Grupo){
            document.querySelector("#cmbClass").innerHTML +=
            `
            <option value="${assclasstogroup[h].Clase}">${assclasstogroup[h].Clase}</option>
            `
        }
    }      
})
let selectClass
function getClas(){
    selectClass=document.querySelector("#cmbClass").value
    return selectClass;
}

let selectStudent
function getStudent(){
    selectStudent=document.querySelector("#cmbStudent").value
    return selectStudent;
}
const cursosMatr=[]
document.querySelector("#btnAddMate").addEventListener("click", function(){
    let estudiante=selectStudent
    let clase=selectClass
    let grupo=selectGroup
    class inscribircurso{
        constructor(estudiante, grupo,clase){
            this.estudiante=estudiante
            this.grupo=grupo
            this.clase=clase
        }
        matricularcursos(estudiante,grupo,clase){
            
        }
    }let inscur=new inscribircurso(estudiante, grupo, clase)

})
//Asignar materias a grupo
document.querySelector("#btnClassGroup").addEventListener("click",function(){
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
function getClas1(){
    selectClass=document.querySelector("#cmbClassAssig").value
    return selectClass;
}
function getGroup1(){
    selectGroup=document.querySelector("#cmbGroupAssig").value
    return selectGroup;
}
document.querySelector("#btnAddClasstoGroup").addEventListener("click",function(){
    let clase=selectClass
    let grupo=selectGroup
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