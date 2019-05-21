const getEvents = require("../model/queries/getEvents");

const events = (req, res, next) => {
  getEvents()
    .then(response => {
      console.log(response);
      return res.render("events", { events: response });
    })
    .catch(err => console.log(err));
};

module.exports = events;
