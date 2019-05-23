const postUser = require("../model/queries/postUser");
const bcrypt = require("bcryptjs");

const validate = require('./validate');
const validationQuery = require('../model/queries/validationQuery');

const postRegister = (req, res) => {
  
    const { first_name, last_name, mobile_number, email, password, password_confirm } = req.body;

    validationQuery(email)
        .then(response => {
            if (response) {
                validate(req.body)
                    .then(response => {
                        console.log('this is from validate:', response)
                        if (response) {
                            const salt = bcrypt.genSaltSync(10);
                            const hashedPass = bcrypt.hashSync(password, salt);
                            console.log("hashedPass", hashedPass);
                            postUser(first_name, last_name, mobile_number, email, hashedPass);
                            res.redirect(302, '/');
                            res.end();
                        }
                    }).catch(err => {
                        console.log('this is err', err);
                        res.render('register', { message: 'Passwords do not match' });
                    })

            } else {
                res.render('register', { message: 'Email Already exists' });
            }
        }).catch(err => console.log('This is error:', err));

};

module.exports = postRegister;
