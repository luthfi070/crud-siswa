const express = require("express");
const siswaService = require("../services/siswaService");

const router = express.Router();

router.get("/api/siswa", (req, res) => {
  try {
    res.send(siswaService.getAll(req));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
