const db = require('../db_connection');

const postEventList = (custom_event_name, user_email) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO event_list (event_name, user_email) VALUES ($1, $2)", [custom_event_name, user_email])
        .then(response => {
            console.log("new event added to events_list table");
            resolve(true);
        })
        .catch(err => reject(err))
    });
}

module.exports = postEventList;