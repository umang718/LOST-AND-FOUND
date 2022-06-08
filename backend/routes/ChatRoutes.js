const express = require("express");
const { ChatController } = require("../controllers/ChatController");
const router = express.Router();

router.route("/getMessages/:chatId").get(ChatController.index);
router.route("/sendMessage").get(ChatController.create);

module.exports = router;