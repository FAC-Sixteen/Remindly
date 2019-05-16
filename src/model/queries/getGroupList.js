const db = require("../db_connection");
const getGroups = () => {
  return db.query("SELECT * FROM group_list").then(response => {
    return response.rows;
  });
};

module.exports = getGroups;
