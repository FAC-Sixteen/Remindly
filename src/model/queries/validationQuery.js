const db = require('../db_connection');

const validationQuery = (email) => {
    return db.query("SELECT * FROM users WHERE email=$1", [email])
        .then(response => {
            if (response.rows.length > 0) {
                throw 'Email already exists in database'
            } else {
                return true;
            }
        })
        .catch(err => console.log('Error: ', err));
}

module.exports = validationQuery;