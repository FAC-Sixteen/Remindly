const db = require("../db_connection");

const postNewEvent = (event_name, event_date, contact, event_monthday, email) => {
  return db
    .query(
      "INSERT INTO events (event_name, event_date, contact_name, event_monthday, user_email) VALUES ($1, $2, $3, $4, $5)",
      [event_name, event_date, contact, event_monthday, email]
    )
    .then(response => response.rows);
};

module.exports = postNewEvent;
