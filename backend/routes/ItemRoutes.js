const express = require("express");
const { ItemController } = require("../controllers/ItemController");
const router = express.Router();

router.route("/items").get(ItemController);

module.exports = router;