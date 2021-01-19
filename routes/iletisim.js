const express = require("express");
const router = express.Router();
const {iletisimcontroller,getiletisim} = require("../controllers/iletisimcontroller")

router.post("/",iletisimcontroller)
router.get("/",getiletisim)

module.exports = router;