import express from 'express'
import { mostarPersonas, addPeople } from '../../controllers/people/peopleControllers.js'
const peopleRoutes = express.Router();

peopleRoutes.get('/', mostarPersonas)
peopleRoutes.post('/', addPeople)

export{peopleRoutes}