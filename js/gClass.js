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
const form=document.querySelector("#formMateria").addEventListener("submit", function(event){
    event.preventDefault();
    let transform=new FormData(form)
    document.getElementById('formMateria').reset();
})
const clas=[]

var a=localStorage.getItem("arrayClass")
let myarraytemp=JSON.parse(a)
Array.prototype.push.apply(clas,myarraytemp)
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
    let myarraytemp=JSON.parse(localStorage.getItem("arrayClass"))
    clas.push(myarraytemp)
});