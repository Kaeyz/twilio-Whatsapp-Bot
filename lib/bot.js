const { twilio: { accountSid, authToken, twilioNumber } } = require("../config/keys");

const client = require('twilio')(accountSid, authToken);

const bot = {};

const validateNumber = (number) => {
  return number.includes("whatsapp:") ? number : `whatsapp:${number}`;
};

bot.sendMessage = (to, message) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: validateNumber(twilioNumber),
        body: message,
        to: validateNumber(to)
      })
      .then(message => resolve(message.sid))
      .catch(error => reject(error));
  })
};

module.exports = Object.freeze(bot);