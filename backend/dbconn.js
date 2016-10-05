var pgp = require("pg-promise")(),
    dbConnectionString = process.env.DATABASE_URL + '?ssl=true',
    db = pgp(dbConnectionString);
module.exports = db;
