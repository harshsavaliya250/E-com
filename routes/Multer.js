const express=require('express');
const multer = require('../models/multerSchema');
const router=express.Router();

router.post('/addImage',async(req,res,next)=>{
    try {
        const data=await multer.create(req.body)
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;