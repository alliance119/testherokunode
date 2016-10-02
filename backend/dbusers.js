var db = require("./dbconn"),
    dbusers = {
        getAll: function() {
            return db.query('SELECT * FROM userlist;');
        },
        addUser: function(dbuser) {
            return db.query("INSERT INTO userlist (firstname,lastname,birthdate) VALUES('" + dbuser.firstname + "', '" + dbuser.lastname + "', '" + dbuser.birthdate + "');");
        }
    };

module.exports = dbusers
