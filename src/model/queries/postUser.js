const db = require("../db_connection");

const postUser = (first_name, last_name, mobile_number, email, hashed_pass) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (first_name, last_name, mobile_number, email, hashed_pass) VALUES ($1, $2, $3, $4, $5)",
      [first_name, last_name, mobile_number, email, hashed_pass]
    )
      .then(response => {
        console.log("new user added to user table");
        resolve(true);
      })
      .catch(err => reject(err));
  });
};
module.exports = postUser;
