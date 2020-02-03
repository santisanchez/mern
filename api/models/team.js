var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: String,
});

let TeamModel = mongoose.model('TeamModel', TeamSchema);

module.exports = TeamModel;