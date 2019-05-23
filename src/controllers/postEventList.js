const postEventListQuery = require('../model/queries/postEventList');
const getEventList = require('../model/queries/getEventList');

const postEventList = (req, res) => {
    console.log("this is req.body for postGroup:",req.body);
    postEventListQuery(req.body.custom_event_name)
    .then(getEventList)
    .then(res.redirect(301, "/addcontact"))
    .catch(err => console.log(err))
};

module.exports = postEventList;