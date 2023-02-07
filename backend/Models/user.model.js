const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create the schema
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

// Create the model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Export the model
module.exports = Exercise;