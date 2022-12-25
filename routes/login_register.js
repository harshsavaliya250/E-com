const express = require("express");
const userRegister = require("../models/login_register");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  try {
    const bpassword = await bcrypt.hash("req.body.password", 10);
    const userdetails = {
      name: req.body.name,
      email: req.body.email,
      mobilenumber: req.body.mobilenumber,
      password: bpassword,
    };
    const data = await userRegister.create(userdetails);
    res.status(201).send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const email = req.body.email;
    // const mobilenumber = req.body.email;

    const data = await userRegister.findOne({
      email:email,
    });

    var matchpassword = await bcrypt.compare(
      "req.body.password",
      data.password
    );

    if (data.email === email) {
      if (matchpassword) {
        res.status(200).send(data);
      } else {
        res.status(401).send("Password is Invalid....");
      }
    } else {
      res.status(401).send("Email or Password is Invalid");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
