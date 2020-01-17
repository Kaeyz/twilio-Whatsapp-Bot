module.exports = Object.freeze({
  twilio: {
    accountSid: process.env.TwilioAccountSid,
    authToken: process.env.TwilioAuthToken,
    twilioNumber: process.env.TwilioNumber,
  }
});