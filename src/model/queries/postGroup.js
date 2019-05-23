const db = require('../db_connection');

const postGroup = (custom_group_name, user_email) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO group_list (group_name, user_email) VALUES ($1, $2)", [custom_group_name, user_email])
        .then(response => {
            console.log("new group added to group list table");
            resolve(true);
        })
        .catch(err => reject(err));
    })
    
}

module.exports = postGroup;