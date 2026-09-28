const express = require("express");
const uploads = require("../config/multer");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("backend running properly");
});

router.post("/", uploads.array("image"), (req, res) => {
  try {
    const body = req.body;
    const files = req.files;

    console.log(body);
    console.log(files);

    res.status(200).json("Images received successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;