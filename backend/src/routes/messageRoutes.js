const { Router } = require("express");
const { getMessages } = require("../controllers/messageController");

const MessageRouter = Router();

MessageRouter.get("/", getMessages);

module.exports = { MessageRouter };
