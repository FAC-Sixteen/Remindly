const getUser = require('../model/queries/getUser.js');

const checkUser = (req, res) => {
    const { email, password } = req.body;
    console.log('this >>>', req.body);
    getUser('abc123@hotmail.com')
        .then(response => response)
        .catch(error => console.log('ERROR: ', error));


}

module.exports = checkUser;