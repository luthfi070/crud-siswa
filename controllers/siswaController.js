const express = require("express");
const siswaService = require("../services/siswaService");

const upload = require("../multer/index");

const router = express.Router();

router.post(
  "/api/siswa",
  upload.fields([{ name: "fotoArtikel", maxCount: 1 }]),
  upload.fields([{ name: "fotoLogo", maxCount: 1 }]),
  async (req, res) => {
    try {
      res.send(await siswaService.createSiswa(req));
    } catch (err) {
      next(err);
    }
  }
);

router.post("/api/siswa/payment", async (req, res) => {
  res.send(await siswaService.paymentSiswa(req));
});

router.get("/api/siswa", async (req, res) => {
  try {
    res.send(await siswaService.getSiswa(req));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
