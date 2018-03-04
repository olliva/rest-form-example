const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const bearSchema = new Schema({
  name: String,
  type: String,
});

const Bear = mongoose.model('Bear', bearSchema);

module.exports = Bear;
