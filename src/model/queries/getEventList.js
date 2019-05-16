const db = require("../db_connection");
const getEventList = () => {
  return db.query("SELECT * FROM event_list").then(response => {
    return response.rows;
  });
};

module.exports = getEventList;
