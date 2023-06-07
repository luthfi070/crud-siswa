const express = require("express");
const siswaService = require("../services/siswaService");

const router = express.Router();

router.post("/api/siswa", (req, res) => {
  try {
    res.send(siswaService.createSiswa(req));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
