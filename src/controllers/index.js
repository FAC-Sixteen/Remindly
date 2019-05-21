//modules
const express = require("express");
const path = require("path");

//initialising router
const router = express.Router();

//page controllers
const home = require("./home");
// const login = require("./login");
const register = require("./register");
const addContact = require("./addContact");
const events = require("./events");
const contacts = require("./contacts");
const postEvent = require("./postevent");
// const checkUser = require('./checkUser');

//routes
router.get("/", home);
// router.get("/login", login);
router.get("/register", register);
router.get("/events", events);
router.get("/addcontact", addContact);
router.get("/contacts", contacts);

router.post("/postevent", postEvent);
// router.post("/login", checkUser);

module.exports = router;
