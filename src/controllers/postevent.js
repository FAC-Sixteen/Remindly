const postNewEvent = require("../model/queries/postNewEvent");
const postContact = require("../model/queries/postContact");

const postEvent = (req, res) => {
  const { event_name, event_date, contact_name, phone, group_name } = req.body;
  console.log(req.body);
  const event_monthday = JSON.stringify(event_date)
    .slice(6, 11)
    .replace("-", "");
  // console.log(
  //   JSON.stringify(event_monthday)
  //     .slice(6, 11)
  //     .replace("-", "")
  // );
  postNewEvent(event_name, event_date, contact_name, event_monthday);
  postContact(contact_name, phone, group_name)
    .then(res.redirect(301, "/"))
    .catch(err => console.log(err));
};

module.exports = postEvent;
