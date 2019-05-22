const db = require("../db_connection");

const getUser = email_address => {
  db.query("SELECT * FROM users WHERE email=$1", [email_address])
    .then(response => console.log(response.rows))
    .catch(err => console.log("Error: ", err));
};

module.exports = getUser;
