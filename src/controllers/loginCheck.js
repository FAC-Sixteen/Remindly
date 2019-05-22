const getUser = require("../model/queries/getUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginCheck = (req, res) => {
  // console.log("loginCheck function running");
  const { email, password } = req.body;
  // console.log("pre-promise log:", getUser(email));
  console.log(password);
  getUser(email)
    // .then(response => console.log("post-promise log:", response))
    .then(response =>
      bcrypt.compare(password, response[0].hashed_pass, (err, resp) => {
        if (resp) {
          console.log("JWT signing here");
          const token = jwt.sign({ loggedin: true }, process.env.SECRET);
          console.log(token);
          res.writeHead(302, {
            "set-cookie": `remindly=${token}; max-age=9000; HttpOnly`,
            Location: "/events"
          });
          res.end();
        } else {
          console.log("Redirect to home happening here");
          res.redirect(302, "/");
          res.end("user login failed");
        }
      })
    )
    .catch(err => console.log("promise error: ", err));
};

module.exports = loginCheck;
