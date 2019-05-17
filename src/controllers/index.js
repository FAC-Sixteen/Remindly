//modules
const express = require("express");
const path = require("path");

//initialising router
const router = express.Router();

//page controllers
const home = require("./home");
const addContact = require("./addContact");
const contacts = require("./contacts");
const postEvent = require("./postevent");

//routes
router.get("/", home);
router.get("/addcontact", addContact);
router.get("/contacts", contacts);
router.post("/postevent", postEvent);

module.exports = router;
