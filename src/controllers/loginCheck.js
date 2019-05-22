const getUser = require("../model/queries/getUser");

const loginCheck = (req, res) => {
  console.log("loginCheck function running");
  const { email, password } = req.body;
   console.log("pre-promise log:", getUser(email))
  getUser(email)
  .then(response => console.log("post-promise log:",response));
};

module.exports = loginCheck;
