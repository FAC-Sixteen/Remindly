const db = require('../db_connection');

const postEventList = (custom_event_name) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO event_list (event_name) VALUES ($1)", [custom_event_name])
        .then(response => {
            console.log("new event added to events_list table");
            resolve(true);
        })
        .catch(err => reject(err))
    });
}

module.exports = postEventList;