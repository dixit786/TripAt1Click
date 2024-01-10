var express = require('express');
const { sendInfo } = require('../mailer/mailer');
const { sendMail } = require('../mailer/mailerConfig');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/home");
});

router.post('/inquiry', async function(req, res, next) {
  try {
    console.log(req?.body);
    const mailData = sendInfo(req?.body);

    await sendMail(mailData);
    res.status(200).send({
      message: "Inquiery submitted successfully"
    })
  } catch (error) {
    console.log("=============== Error while sending mail ========")
    console.log(error);
    res.status(500).send({
      message: "Error while submit inquiry"
    })
  }
});

module.exports = router;
