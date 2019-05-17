const db = require("../db_connection");
const getContacts = () => {
  return db.query("SELECT * FROM contacts").then(response => {
    return response.rows;
  });
};

module.exports = getContacts;
