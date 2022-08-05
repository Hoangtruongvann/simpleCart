const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.getAll);
router.post("/", cartController.createOne);

module.exports = router;
