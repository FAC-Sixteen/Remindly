
const postGroupQuery = require("../model/queries/postGroup");
const getGroupListQuery = require("../model/queries/getGroupList");

const postGroup = (req, res) => {
  if (!req.headers.cookie) {
    res.redirect("/");
    res.end();
  } else {
    console.log("this is req.body for postGroup:", req.body);
    postGroupQuery(req.body.custom_group_name)
      .then(res.redirect(301, "/addcontact"))
      .then(getGroupListQuery)
      .catch(err => console.log(err));
 

const postGroupQuery = require('../model/queries/postGroup');
const getGroupListQuery = require('../model/queries/getGroupList');
const jwt = require("jsonwebtoken");

const postGroup = (req, res) => {
    const token = req.headers.cookie.split("=")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        const email = decoded.user_email;
        postGroupQuery(req.body.custom_group_name, email)
        .then(getGroupListQuery)
        .then(res.redirect(301, "/addcontact"))
        .catch(err => console.log(err))
    })
}
};

module.exports = postGroup;
