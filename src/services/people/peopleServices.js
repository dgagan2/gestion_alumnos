import { pool } from "../../app.js";
class people {
    constructor() {
        this.bd = pool
    }
    async createPerson(data) {
        const [rows] = await pool.query(`SELECT * FROM user WHERE id=${data.idNumber}`)     
        if (rows.length>0) {
            return true
        } else {
            await pool.query(`INSERT INTO user(id, name, age, sex, bloodtype, residenceCity, email) 
                VALUES ('${data.idNumber}','${data.name}','${data.age}','${data.sex}','${data.bloodType}',
                '${data.residenceCity}','${data.email}')`)
            return false
        }                  
    }
    async queryPerson(data){
        if (!data) {
            const [rows, err, fields] = await pool.query('SELECT * FROM user')
           return new Promise((resolve, reject) => {
            if(!rows.length){
                reject(err)
            }else{
                resolve(rows)
            }
           })     
        } else {
            const [rows, err, fields] = await pool.query(`SELECT * FROM user WHERE id=${data}`)
            return new Promise((resolve, reject) => {
                if (!rows.length) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })  
        }        
    }    
}

export { people }

