const getEvents = require("../model/queries/getEvents");

const home = (req, res) => {
  getEvents().then(response => {
    console.log(response);
    return res.render("home", { events: response });
  });
};

module.exports = home;
