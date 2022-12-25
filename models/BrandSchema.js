const mongoose = require("mongoose");

const Brand_NameSchema = new mongoose.Schema({
  Categoryname: {
    type: String,
    trim: true,
    required: true,
  },    
  subCategoryname: {
    type: String,
    trim: true,
    required: true,
  },
  Brand_Name: {
    type: String,
    trim: true,
    required: true,
  },
});

const BrandName=mongoose.model('brandname',Brand_NameSchema);

module.exports=BrandName;
