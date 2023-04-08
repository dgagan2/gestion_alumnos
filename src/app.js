import dotenv from "dotenv"
dotenv.config();
import {createPool} from 'mysql2/promise'

const pool=createPool({
    host:'aws.connect.psdb.cloud',
    user:'tyfvdegotslitdp21djy',
    password:'pscale_pw_CEB2DXbu84MVpNk9JE7p5jUcO74wSr08yACvcoL7dqE',
    port: 3306,
    database:'academicplatform',
    ssl:{rejectUnauthorized:false}
})

export {pool}

