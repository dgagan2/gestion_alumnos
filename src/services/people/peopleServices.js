import { connection } from "../../app.js";
//const bd = connection//Conexion base de datos

class people {
    constructor() {
        this.bd = connection
    }
    createPerson(data) {
        if (!data) {
            resizeBy.status(404)
        } else {
            this.bd.query(`INSERT INTO user(id, name, age, sex, bloodtype, residenceCity, email) VALUES ('${data.idNumber}','${data.name}','${data.age}','${data.sex}','${data.bloodType}','${data.residenceCity}','${data.email}')`, function (err, results) {
                console.log(results, err);
            })
            connection.end()
        }
    }
}

export { people }

