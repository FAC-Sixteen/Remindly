const db = require("../db_connection");

const editObj = obj => {
  const dateToday = new Date();
  obj.map(x => {
    let dateNum = parseInt(
      JSON.stringify(x.event_date)
        .slice(6, 11)
        .replace("-", "")
    );
    let todayNum = parseInt(
      (dateToday.getMonth() + 1)
        .toString()
        .concat(dateToday.getDate().toString())
    );
    if (dateNum < todayNum) {
      x.event_monthday = parseInt(x.event_monthday) + 1200;
    }
  });
  return obj.sort(function (a, b) {
    return a.event_monthday - b.event_monthday;
  });
};

const getEvents = (email) => {
  return db.query("SELECT * FROM events WHERE user_email = $1", [email]).then(response => {
    return editObj(response.rows);
  });
};

module.exports = getEvents;
