const jwt = require("jsonwebtoken");

const getContacts = require("../model/queries/getContacts");

const contacts = (req, res) => {
  let email = "";
  if (!req.headers.cookie) {
    res.redirect("/");
    res.end();
  } else {
    const token = req.headers.cookie.split("=")[1];
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      email = decoded.user_email;
      console.log("this is decoded,>>>>", decoded);
    });

    getContacts(email).then(response => {
      console.log(response);
      return res.render("contacts", { contacts: response });
    });
  }
};

module.exports = contacts;
