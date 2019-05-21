const db = require('../db_connection');


const getUser = (email) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE email = $1", [email])
            .then(response => resolve(response.rows[0]))
            .catch(error => reject('ERROR: ', error))
    })
}

module.exports = getUser;