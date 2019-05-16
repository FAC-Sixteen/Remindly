const db = require('../db_connection');

const postNewEvent = (event_name, event_date, contact) => {
    return db
        .query(
            "INSERT INTO events (event_name, event_date, contact_name) VALUES ($1, $2, $3)", [event_name, event_date, contact]
        )
        .then(response => response.rows);
};


module.exports = postNewEvent;