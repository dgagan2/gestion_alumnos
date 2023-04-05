import dotenv from "dotenv"
import {join, dirname} from "path"
import express from "express"
import {fileURLToPath} from "url"
import { routerApi } from "../src/routes/mainRoutes.js";

const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(express.json());

const port=process.env.PORT||3000;
app.set(port);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})

routerApi(app)