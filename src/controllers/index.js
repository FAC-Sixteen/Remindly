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
const loginCheck = require("./loginCheck");
const postRegister = require("./postRegister");
const postGroup = require("./postGroup");

//routes
router.get("/", home);
// router.get("/login", login);
router.get("/register", register);
router.get("/events", events);
router.get("/addcontact", addContact);
router.get("/contacts", contacts);

router.get("*", function (req, res) {
  res.send("This is a 404 error. Page not found!", 404);
});

router.get("*", function (req, res) {
  res.send("This is a server error", 500);
});

router.post("/postevent", postEvent);
router.post("/postgroup", postGroup);

router.post("/login-form", loginCheck);
router.post("/register-form", postRegister);

module.exports = router;
