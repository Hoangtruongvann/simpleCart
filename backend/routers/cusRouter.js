const express = require("express");
const router = express.Router();

const cusCotroller = require("../controllers/cusController");

router.get("/", cusCotroller.getAll);

module.exports = router;
