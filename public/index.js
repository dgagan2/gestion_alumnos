import dotenv from "dotenv"
import {join, dirname} from "path"
import express from "express"
import {fileURLToPath} from "url"
import { routerApi } from "../src/routes/mainRoutes.js";

dotenv.config();
const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;

app.use(express.json());
app.set(port);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})

routerApi(app)