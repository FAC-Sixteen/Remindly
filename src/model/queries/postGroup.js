const db = require('../db_connection');

const postGroup = (custom_group_name) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO group_list (group_name) VALUES ($1)", [custom_group_name])
        .then(response => {
            console.log("new group added to group list table");
            resolve(true);
        })
        .catch(err => reject(err));
    })
    
}

module.exports = postGroup;