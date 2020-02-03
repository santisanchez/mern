var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    birthdate: Date
});

let UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;
// UserModel.create({name:"santi",birthdate:new Date('12-14-1993')});