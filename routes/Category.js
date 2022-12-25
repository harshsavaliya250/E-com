const express=require('express');
const Category = require('../models/CategorySchema');
const router=express.Router();

router.post('/addcategory', async (req,res,next)=>{
    try {
        const data=await Category.create(req.body);
        res.status(201).send(data);
        
    } catch (error) {
        res.status(400).send(error);
    }
})
router.get('/getallcategory', async (req,res,next)=>{
    try {
        const data=await Category.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error);
    }
})
router.put('/deletcategory/:id',async(req,res,next)=>{
    try {
        const data=await Category.findByIdAndUpdate(req.params.id,{
            Categoryname:req.body.Categoryname,
        });
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.delete('/deletecategory/:id',async(req,res,next)=>{
    try {
        const data=await Category.findByIdAndDelete(req.params.id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports=router;