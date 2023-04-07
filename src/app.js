import dotenv from "dotenv"
dotenv.config();
import mysql2 from 'mysql2'
const mysql = mysql2

const connection =  mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
//connection.end()


export {connection}

