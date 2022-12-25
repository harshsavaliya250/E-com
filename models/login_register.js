const mongoose=require('mongoose');
const validator=require('validator');


const userRegisterSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid") 
            }
        }
    },
    mobilenumber:{
        type:Number,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password  is not valid") 
            }
        }
    },

})

const userRegister=mongoose.model('userRegister',userRegisterSchema)
module.exports=userRegister;