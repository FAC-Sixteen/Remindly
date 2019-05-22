const db = require("../db_connection");
const getContacts = (email) => {
  return db.query("SELECT * FROM contacts WHERE user_email = $1", [email]).then(response => {
    return response.rows;
  });
};

module.exports = getContacts;
