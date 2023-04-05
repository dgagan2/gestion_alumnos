import express from 'express'
import { mostarPersonas } from '../../controllers/people/peopleControllers.js'
const peopleRoutes = express.Router();

peopleRoutes.get('/', mostarPersonas)

export{peopleRoutes}