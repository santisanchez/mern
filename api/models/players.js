var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: String,
    birthdate: Date,
    position: String,
});

let PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

module.exports = PlayerModel;
