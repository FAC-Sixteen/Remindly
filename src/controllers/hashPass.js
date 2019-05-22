const bcrypt = require('bcryptjs');

const hashPass = (password) => {
   
        bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(password, salt))
            .then(hash => hash)
            .catch(err => console.log(err));
}

module.exports = hashPass;