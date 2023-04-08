import express from 'express'
import { mostarPersonas, addPeople, queryPerson } from '../../controllers/people/peopleControllers.js'
const peopleRoutes = express.Router();

peopleRoutes.get('/', mostarPersonas);
peopleRoutes.post('/', addPeople);
peopleRoutes.get('/id/:id', queryPerson)
peopleRoutes.get('/id', queryPerson)

export{peopleRoutes}