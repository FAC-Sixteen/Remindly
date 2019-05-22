const db = require("../db_connection");

const getUser = email_address => {
  return db.query("SELECT * FROM users WHERE email=$1", [email_address])
    .then(response => response.rows)
    // > 0 ? response.rows[0] : console.log("email not found"))
    .catch(err => reject("Error: ", err));
  
  
};

module.exports = getUser;
