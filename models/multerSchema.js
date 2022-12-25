const mongoose = require("mongoose");

const multerSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
    trim: true,
  },
});

const multer = mongoose.model("multer", multerSchema);

module.exports = multer;
