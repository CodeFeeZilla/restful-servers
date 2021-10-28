const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  if (req.params.id === "0") res.send("Hello");
  res.send("Bye");
});

module.exports = router;
