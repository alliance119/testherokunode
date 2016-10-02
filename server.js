var express = require('express'),
    router_users = require('./backend/router_users'),
    bodyParser = require('body-parser'),
    app = express(),
    apiPref = 'api';
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/build'));
app.use('/'+ apiPref +'/users', router_users);
app.listen(app.get('port'), function () {
    console.log('Example app listening on port 3000!');
});
