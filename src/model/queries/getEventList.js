const db = require("../db_connection");
const getEventList = (email) => {
  return db.query("SELECT * FROM event_list WHERE user_email = $1", [email]).then(response => {
    return response.rows;
  });
};

module.exports = getEventList;
