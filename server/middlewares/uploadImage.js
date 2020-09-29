const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + shortid.generate() + path.extname(file.originalname));
  },
});

module.exports = upload = multer({ storage: storage });
