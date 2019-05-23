const postEventListQuery = require('../model/queries/postEventList');
const getEventList = require('../model/queries/getEventList');
const jwt = require('jsonwebtoken');

const postEventList = (req, res) => {
    const token = req.headers.cookie.split("=")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        const email = decoded.user_email;
        postEventListQuery(req.body.custom_event_name, email)
        .then(getEventList)
        .then(res.redirect(301, "/addcontact"))
        .catch(err => console.log(err))
        })  
};

module.exports = postEventList;