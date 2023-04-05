import express from "express";
import { mostarPrincipal,callback } from '../controllers/index.js';
const indexRouters = express.Router();

indexRouters.get('/', mostarPrincipal);
indexRouters.get('/*', callback);

export{indexRouters}