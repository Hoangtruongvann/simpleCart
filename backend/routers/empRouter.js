const express = require("express");
const router = express.Router();
const empsController = require("../controllers/EmpController");

router.get("/", empsController.getAll);

module.exports = router;
