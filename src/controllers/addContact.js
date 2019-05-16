const getEventList = require("../model/queries/getEventList");
const getGroupList = require("../model/queries/getGroupList");

const getEventLists = (req, res) => {
  getEventList().then(response => {
    getGroupList().then(response1 => {
      return res.render("addContact", {
        eventslist: response,
        groupslist: response1
      });
    });
  });
};

module.exports = getEventLists;
