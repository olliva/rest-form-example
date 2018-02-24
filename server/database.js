var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bearSchema = new Schema({
  name: String,
  id: String
});

var Bear = mongoose.model('Bear', bearSchema);

module.exports = Bear;
