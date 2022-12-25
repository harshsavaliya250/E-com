const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    product_imgurl:{
        type:String,
        required:true,
        trim:true
    },
    product_title:{
        type:String,
        required:true,
        trim:true
    },
    product_discription:{
        type:String,
        required:true,
        trim:true
    },
    product_price:{     
        type:Number,
        required:true,
        trim:true
    },
    Categoryname:{
        type:String,
        required:true,
        trim:true,
    },
    subCategoryname:{
        type:String,
        required:true,
        trim:true,
    },
})

const product=mongoose.model('product',productSchema);

module.exports=product;