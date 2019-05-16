//modules
const express = require("express");
const path = require("path");

//initialising router
const router = express.Router();

//page controllers
const home = require("./home");
const addContact = require("./addContact");

//routes
router.get("/", home);
router.get("/addcontact", addContact);

module.exports = router;
