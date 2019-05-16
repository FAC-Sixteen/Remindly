//modules
const express = require('express');
const path = require('path');

//initialising router
const router = express.Router();

//page controllers
const home = require('./home');

const postEvent = require('./postEvent');

//routes
router.get('/', home);


router.post('/postevent', postEvent)

module.exports = router;
