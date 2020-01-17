const express = require("express");
const router = express.Router();
const bot = require("./lib/bot");

router.get("/", (req, res) => {
  res.send('server is up and running');
});

router.post("/send", (req, res) => {
  const recipientNumber = req.query.recipientNumber || "+4917636364065";
  const message = req.query.message || "this is a test message";
  bot.sendMessage(recipientNumber, message)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err));
});

router.post("/incoming", (req, res) => {
  const recipientNumber = req.body.From;
  const message = `
  Your have just sent a message with the following details
  ${req.body.Body}
  `;
  bot.sendMessage(recipientNumber, message)
    .then(response => res.status(200).send(response))
    .catch(error => res.status(400).json(error));
});

module.exports = router;