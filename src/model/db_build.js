const fs = require("fs");

const buildDatabase = new Promise((resolve, reject) => {
  const connection = require("./db_connection");
  let sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
  if (process.env.NODE_ENV === "test")
    sql = fs.readFileSync(`${__dirname}/testdb_build.sql`).toString();
  connection
    .query(sql)
    .then(res => resolve(res))
    .catch(err => reject(err));
});

buildDatabase
  .then(res => console.log("database build succeeded"))
  .catch(err => console.log("database build failed"));

module.exports = buildDatabase;
