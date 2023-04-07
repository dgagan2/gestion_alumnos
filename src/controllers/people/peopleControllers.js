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

const addPeople=(req,res)=>{
   try {
    const data=req.body
    servicePeople.createPerson(data)    
    res.status(202).json({message:"Todo ok"})
   } catch (error) {
    res.status(404).json()
   }
     
}

export{mostarPersonas, addPeople}