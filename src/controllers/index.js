//modules
const express = require('express');
const path = require('path');

//initialising router
const router = express.Router();

//page controllers
const home = require('./home');

//routes
router.get('/', home);

module.exports = router;
