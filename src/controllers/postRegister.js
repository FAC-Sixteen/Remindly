const postUser = require('../model/queries/postUser');
const bcrypt = require('bcryptjs');

const validate = require('./validate');

const postRegister = (req, res) => {
    const { first_name, last_name, mobile_number, email, password, password_confirm } = req.body;
    console.log(req.body);
    validate(req.body)
        .then(response => {
            if (response) {
                const salt = bcrypt.genSaltSync(10);
                const hashedPass = bcrypt.hashSync(password, salt);
                console.log("hashedPass", hashedPass);
                postUser(first_name, last_name, mobile_number, email, hashedPass);
                res.redirect(302, '/');
                res.end();
            }
        })
}

module.exports = postRegister;
