const express = require("express");
const siswaController = require("./controllers/siswaController");

const router = express.Router();

router.use("/", siswaController);

module.exports = router;
