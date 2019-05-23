const jwt = require("jsonwebtoken");

const postNewEvent = require("../model/queries/postNewEvent");
const postContact = require("../model/queries/postContact");

const postEvent = (req, res) => {
  if (!req.headers.cookie) {
    res.redirect("/");
    res.end();
  } else {
    let email = "";
    const {
      event_name,
      event_date,
      contact_name,
      phone,
      group_name
    } = req.body;
    console.log(req.body);
    const token = req.headers.cookie.split("=")[1];
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      email = decoded.user_email;
      console.log("this is decoded,>>>>", decoded);
    });

    const event_monthday = JSON.stringify(event_date)
      .slice(6, 11)
      .replace("-", "");
    postNewEvent(event_name, event_date, contact_name, event_monthday, email);
    postContact(contact_name, phone, group_name, email)
      .then(res.redirect(301, "/events"))
      .catch(err => console.log(err));
  }
};

module.exports = postEvent;
