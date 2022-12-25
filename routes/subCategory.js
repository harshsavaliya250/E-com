const express = require("express");
const subCategory = require("../models/subCategorySchema");
const router = express.Router();

router.post("/addsubcategory", async (req, res, next) => {
  try {
    const data = await subCategory.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/getallsubcategory", async (req, res, next) => {
  try {
    const data = await subCategory.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.put("/updatesubcategory/:id", async (req, res, next) => {
  try {
    const data = await subCategory.findByIdAndUpdate(req.params.id, {
      subCategoryname: req.body.subCategoryname,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);  
  }
});
router.delete("/deletesubcategory/:id", async (req, res, next) => {
  try {
    const data = await subCategory.findByIdAndDelete(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
