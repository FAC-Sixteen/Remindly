const getEventList = require("../model/queries/getEventList");
const getGroupList = require("../model/queries/getGroupList");
const jwt = require("jsonwebtoken");

const getEventLists = (req, res) => {
  let email = '';
  const token = req.headers.cookie.split("=")[1];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    email = decoded.user_email;
    
  });
  getEventList(email).then(response => {
    getGroupList(email).then(response1 => {
      return res.render("addContact", {
        eventslist: response,
        groupslist: response1
      });
    });
  });
  
};

module.exports = getEventLists;
