const db = require('../db_connection');
const getEvents = () => {
    return db.query("SELECT * FROM events").then(response => {
        return response.rows;
    })
};

module.exports = getEvents;