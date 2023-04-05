import { indexRouters } from "./indexRoutes.js";
//import {classManagement} from './classManagement/classManagementRoutes.js';
//import {academicManagement} from './academicManagement/academicManagementRoutes.js'
import { peopleRoutes } from './people/peopleRoutes.js'

const routerApi=(app)=>{
    app.use('/people', peopleRoutes);
    app.use('/', indexRouters);
    
    //app.use('/classManagement', classManagement);
    //app.use('/academicManagement', academicManagement);
}
export{routerApi};