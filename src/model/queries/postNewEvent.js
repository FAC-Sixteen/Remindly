const db = require("../db_connection");

const postNewEvent = (event_name, event_date, contact, event_monthday) => {
  return db
    .query(
      "INSERT INTO events (event_name, event_date, contact_name, event_monthday) VALUES ($1, $2, $3, $4)",
      [event_name, event_date, contact, event_monthday]
    )
    .then(response => response.rows);
};

module.exports = postNewEvent;
