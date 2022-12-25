const express = require("express");
const product = require("../models/ProductSchema");
const router = express.Router();

router.post("/createproduct", async (req, res, next) => {
  try {
    const data = await product.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    res.send({
      error,
    });
  }
});

router.get("/getallproduct", async (req, res, next) => {
  try {
    const data = await product.find();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
});

router.put("/updateproduct/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await product.findByIdAndUpdate(id, {
      product_imgurl: req.body.product_imgurl,
      product_title: req.body.product_title,
      product_discription: req.body.product_discription,
      product_price: req.body.product_price,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error)
  }
});


router.delete("/deleteproduct/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    
    const data = await product.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error)
  }
});

module.exports = router;
