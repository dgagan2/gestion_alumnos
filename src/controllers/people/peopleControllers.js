import express from 'express'
import cors from 'cors'
import {people}  from '../../services/people/peopleServices.js';
const app=express();
const servicePeople=new people()
app.use(cors());
app.use(express.json())

const mostarPersonas = (req, res) => {
    res.render("people");
}

const addPeople= async (req,res)=>{
   try {
    const data=req.body
    const dataRes=await servicePeople.createPerson(data) 
    if (dataRes == true) {
        res.status(404).send("El usuario ya existe")
        } else { 
        res.status(202).json({ message: "Persona agregada" })
        }
   } catch (error) {
        res.status(404).json({error})
   }
     
}
const queryPerson=async (req,res)=>{
    try {
        const data=req.params.id
        const getdata=await servicePeople.queryPerson(data)
        res.status(202).json(getdata)
    } catch (error) {
        res.status(404).json({message:"EL id ingresado no existe", error})
    }
}

export { mostarPersonas, addPeople, queryPerson}