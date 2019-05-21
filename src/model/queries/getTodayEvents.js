const db = require("../db_connection");
require("env2")("./config.env");
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const editObj = () => {
    const dateToday = new Date();

    let todayNum = parseInt((dateToday.getMonth() + 1).toString().concat(dateToday.getDate().toString()));

    todayNum = todayNum.toString();
    return todayNum.length === 3 ? '0' + todayNum : todayNum;
};


const getTodayEvents = () => {

    return db.query("SELECT * FROM events WHERE event_monthday = $1", [editObj()])
        .then(response => response.rows)
        .then(response => {
            response.map(event => {
                client.messages
                    .create({
                        to: "+447590060709",
                        from: "+447723429869",
                        body: `Its ${event.contact_name}'s ${event.event_name}!!!`
                    })
                    .then(message => console.log(message.sid));

            });
        })
        .catch(err => console.log(err))
};


getTodayEvents();



