const getContacts = require("../model/queries/getContacts");

const contacts = (req, res) => {
  getContacts().then(response => {
    console.log(response);
    return res.render("contacts", { contacts: response });
  });
};

module.exports = contacts;
