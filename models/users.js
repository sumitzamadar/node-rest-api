var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailid: String,
    address: String
});

var Users = mongoose.model('USers', usersSchema);

module.exports = Users;

