const db = require('../db_connection');

const postContact = (name, phone, group_name) => {
    return db
        .query(
            "INSERT INTO contacts (name, phone, group_name) VALUES ($1, $2, $3)", [name, phone, group_name]
        )
        .then(response => response.rows);
};

module.exports = postContact;