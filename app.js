var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var appConfig = require('./config');
var usersApi = require('./api/users');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('---node rest api---');
});

mongoose.connect(appConfig.getDBConnectionString(), function(err) {
    if(err) {
        console.log('DB Connection Failed!');
        console.error(err);
    }
});

usersApi(app);

app.listen(port);
