const mongoose=require('mongoose');

const subCategorySchema=new mongoose.Schema({
    Categoryname:{
        type:String,
        trim:true,
        required:true,
    },
    subCategoryname:{
        type:String,
        trim:true,
        required:true,
    },

})

const subCategory=mongoose.model('subCategory',subCategorySchema);

module.exports=subCategory;