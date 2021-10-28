const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index");
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Thank you! Here is what you sent: ${req.body}`);
});

module.exports = router;
