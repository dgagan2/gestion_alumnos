$(function(){
  $('.materias').hide();
  //$('#tblalumnos').hide()
    $('#btnPAlumno').click(function(){
      $('.materias').hide();
      $('.promedios').show();
    })
    $('#btnLEstudiantes').click(function(){
      $('.materias').show();
      $('.promedios').hide();
    })
})
const form=document.querySelector('#formAlu').addEventListener("submit", function(event){
  event.preventDefault();
  let transform=new FormData(form)
  
})
const notas=[]//arreglo notas
let Ntemp=JSON.parse(localStorage.getItem("arrayNotas"))
Array.prototype.push.apply(notas,Ntemp)//arreglo notas

const assclasstogroup=[]//arreglo de asignacion de materias a grupos
var b=JSON.parse(localStorage.getItem("arrayclasstogroup"))
Array.prototype.push.apply(assclasstogroup,b)//arreglo agregar materias a grupo

function borartb(){
  d=document.getElementById("tbodyAlumnos")
  e=document.getElementById("pPromedio")
  if(!d){
  }else{
      nodos=e.parentNode
      nodo=d.parentNode
      nodo.removeChild(d)
      nodos.removeChild(e)
  } 
}
//Selecionar prom
var opcion=document.querySelector('#selectPro');
opcion.addEventListener('change', ()=>{
  let valueOption=opcion.value;
  if(valueOption==1){
    $('.container-prom-alumno').show();
    $('.container-prom-grupo').hide();
  }else{
    $('.container-prom-grupo').show(tablaProGrupo());
    $('.container-prom-alumno').hide();
    $('#tblalumnos').hide();    
    document.getElementById("tbodyAlumnos").innerHTML = ''
    document.getElementById("promedio").innerHTML = ''

  }
})
let arrtemp=[]
document.querySelector("#btnfindID").addEventListener("click", function(){
  let IdFind=document.querySelector("#txtId").value;
  if(IdFind!==""){
    for(var j=0;j<notas.length;j++){

        if(IdFind==notas[j].Id){
          total=notas[j].Calificacion;
          arrtemp.push(total)
          document.querySelector("#tbodyAlumnos").innerHTML+=
            `
            <tbody id="tbodyAlumnos">
                <tr>
                  <td>${notas[j].Id}</td>
                  <td>${notas[j].Nombre}</td>
                  <td>${notas[j].Grupo}</td>
                  <td>${notas[j].Materia}</td>
                  <td>${notas[j].Calificacion}</td>
                </tr>
            </tbody>
            `
        }else{
          alert("No tiene cursos matriculados")
        }
        // arrtemp.forEach(myFunction);
        // function myFunction(item) {sum += parseFloat(item);}
        $('#tblalumnos').show(c()); 
        
    }
  }else{
    alert("Imgrese el ID del estudiante")
  }
})
function c(){
  let sum = 0;
  arrtemp.forEach(myFunction);
  function myFunction(item) {sum += parseFloat(item);}
  document.querySelector("#promedio").innerHTML+=
    `
    <p id="pPromedio">Promedio: ${sum}</p>
    `
  arrtemp.pop()
  document.getElementById("txtId").value=""
}
let totalProGrupo=[]
function tablaProGrupo(){
  for(var j=0;j<assclasstogroup.length;j++){
    // document.querySelector("#tblgrupos").innerHTML+=
    //     `
    //     <tbody id="tbodyAlumnos">
    //         <tr>
    //           <td>${assclasstogroup[j].Grupo}</td>
    //           <td>${assclasstogroup[j].Clase}</td>
    //         </tr>
    //     </tbody>
    //     `
    for(var i=0;i<notas.length;i++){
      if(assclasstogroup[j].Grupo == notas[i].Grupo){
        savegr=notas[i].Grupo
        totalG=notas[i].Calificacion
        totalProGrupo.push({Grupo:savegr,Calificacion:totalG})
      }else{
        alert("nada")
      }
    }
    }obtenerPor()
    
}
function obtenerPor(){
  for(var j=0;j<totalProGrupo.length;j++){
    let contador=0
    if(totalProGrupo[j].Grupo == totalProGrupo[j].Grupo){
      
      alert("hola"+contador)
      let sumaCali=0
      let h=parseFloat(totalProGrupo[j].Calificacion)
      let sumaCali2=h+sumaCali
      console.log(contador,sumaCali2)
    }else{

    }

  }
}