const express = require("express");
const router = express.Router();
const { ChatController } = require("../controllers/ChatController");

router.post("/startChat/:userId", ChatController.startChat);
router.get("/getChatList/:userId", ChatController.getChatList);
router.get("/getMessages/:chatId", ChatController.checkMessage);
router.get("/sendMessage/:chatId", ChatController.sendMessage);

module.exports = router;