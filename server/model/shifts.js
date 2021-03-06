var mongoose = require('mongoose');

var shiftsSchema = new mongoose.Schema({
  home_store: {storeId: String, address: String},
  shift_start: Date,
  shift_end: Date,
  shift_text_time: String,
  prize: String,
  submitted_by: String,
  submitted_by_name: String,
  covered_by: String,
  covered_by_name: String,
  covered: Boolean,
  pickup_approved: String,
  restricted: Array,
  requested: Array
});

var Shifts = module.exports = mongoose.model('Shifts', shiftsSchema);