const express = require("express");
const BrandName = require("../models/BrandSchema");
const router = express.Router();

router.post("/createBrand", async (req, res, next) => {
  try {
    const data = await BrandName.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/getallbrand", async (req, res, next) => {
  try {
    const data = await BrandName.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports=router;
