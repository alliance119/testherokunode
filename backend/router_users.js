var express = require('express'),
    dbusers = require('./dbusers'),
    router = express.Router();

router.get('/', function(req, res) {
    dbusers.getAll().then(function(data){
        res.send(data);
    })
});
router.post('/', function(req, res) {
    dbusers.addUser(req.body);
    res.send(req.body);
});
module.exports = router;
