const getEvents = require("../model/queries/getEvents");
const jwt = require("jsonwebtoken");

const events = (req, res, next) => {
  let email = '';
  const token = req.headers.cookie.split("=")[1];
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    email = decoded.user_email;
    console.log('this is decoded,>>>>', decoded); // bar
  });
  getEvents(email)
    .then(response => {
      console.log(response);
      return res.render("events", { events: response });
    })
    .catch(err => console.log(err));
};

module.exports = events;
