const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

let connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "test") {
  connectionString = process.env.TEST_DATABASE_URL;
}

// Long version that explicitly sets all the Pool parameters:
// ---
// const params = url.parse(connectionString);
// const [username, password] = params.auth.split(":");

// const options = {
//   host: params.hostname,
//   port: params.port,
//   database: params.pathname.split("/")[1],
//   max: process.env.DB_MAX_CONNECTIONS || 2,
//   user: username,
//   password,
//   ssl: params.hostname !== "localhost"
// };

// module.exports = new Pool(options);

// middle version that explicitly sets some of the parameters:
module.exports = new Pool({
  connectionString,
  max: 2,
  ssl: !connectionString.includes("localhost")
});

// super short version (that didn't work)
// module.exports = new Pool({ connectionString });
