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
  }
};

module.exports = postGroup;
