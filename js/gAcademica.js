$(function(){
  $('.materias').hide();
  $('#tblalumnos').hide()
    $('#btnPAlumno').click(function(){
      $('.materias').hide();
      $('.promedios').show();
    })
    $('#btnLEstudiantes').click(function(){
      $('.materias').show();
      $('.promedios').hide();
    })
})
const notas=[]//arreglo notas
let Ntemp=JSON.parse(localStorage.getItem("arrayNotas"))
Array.prototype.push.apply(notas,Ntemp)//arreglo notas
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
    $('.container-prom-grupo').show();
    $('.container-prom-alumno').hide();
    $('#tblalumnos').hide();    
  }
})
let arrtemp=[]
document.querySelector("#btnfindID").addEventListener("click", function(){
  
  let IdFind=document.querySelector("#txtId").value;
  if(IdFind!==""){
    let sum = 0;
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
        $('#tblalumnos').show(); 
    }
    arrtemp.forEach(myFunction);
    function myFunction(item) {sum += parseFloat(item);}
    document.querySelector("#promedio").innerHTML+=
        `
        <p id="pPromedio">Promedio: ${sum}</p>
        `   
  }else{
    alert("Imgrese el ID del estudiante")
  }
})
