const express = require("express");
const Book = require("../../models/Book");
const Router = express.Router();
const upload = require("../../middlewares/uploadImage");
const fs = require("fs");

// Item Model

// @route GET api/books
// @desc Get All Books
// @access Public
Router.get("/", (req, res) => {
  Book.find()
    .sort("-date")
    .then((books) => res.json(books));
});

// @route POST api/books
// @desc Create A Post
// @access Public
Router.post("/", upload.single("imageBook"), (req, res) => {
  // const { name, author, description, language } = req.body;
  const { name, author, description, language } = req.body;
  const imageBook = req.file.path.split("/").slice(1).join("/");

  const newBook = new Book({
    name,
    author,
    description,
    language,
    imageBook,
    traffic: 0,
  });

  newBook.save().then((book) => res.json(book));
});

// @route DELETE api/books/:id
// @desc Delete A Book
// @access Public
Router.delete(`/:id`, (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      fs.unlink(`public/${book.imageBook}`, (err) => {
        if (err) throw err;
      });
      book.deleteOne().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = Router;
