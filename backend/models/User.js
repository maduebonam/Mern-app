const mongoose = require('mongoose');

// Define the schema for a User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Create and export the model
const User = mongoose.model('User', userSchema);

module.exports = User;
