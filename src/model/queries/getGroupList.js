const db = require("../db_connection");
const getGroups = (email) => {
  return db.query("SELECT * FROM group_list WHERE user_email = $1", [email]).then(response => {
    return response.rows;
  });
};

module.exports = getGroups;
