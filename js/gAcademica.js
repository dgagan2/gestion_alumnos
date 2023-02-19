$(function(){
  $('.materias').hide();
    $('#btnPAlumno').click(function(){
      $('.materias').hide();
      $('.promedios').show();
    })
    $('#btnLEstudiantes').click(function(){
      $('.materias').show();
      $('.promedios').hide();
    })
})
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
  }

})