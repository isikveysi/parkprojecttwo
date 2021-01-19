const express = require("express");
const router = express.Router();
const iletisim = require("./iletisim")
router.use("/iletisim",iletisim);

module.exports = router;