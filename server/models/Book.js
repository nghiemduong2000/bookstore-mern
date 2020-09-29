const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  imageBook: String,
  author: {
    type: String,
    required: true,
  },
  description: String,
  language: {
    type: String,
    required: true,
  },
  traffic: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("Book", BookSchema);
