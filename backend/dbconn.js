var pgp = require("pg-promise")();
var herokuDbConnection = {
    host: "ec2-54-243-201-116.compute-1.amazonaws.com",
    port: 5432,
    database: "dd21v6p4k8ar2i",
    user: "zdmsdjpqjlpkdh",
    password: "4cciG8i7mH4af2Tx-cpbtfgq9m",
    ssl: true
};
var db = pgp(herokuDbConnection);
module.exports = db;
