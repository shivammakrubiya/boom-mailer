const nodemailer = require('nodemailer');
require("dotenv").config()
// create transporter for mail server
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER, 
      pass:  process.env.EMAIL_PASSWORD
    }
  });
  
// thummernirav7@gmail.com
// verify connection configuration for mail server
transporter.verify((error, success) => {
    if (error) {
        console.log('✘ UNABLE TO CONNECT TO THE MAIL SERVER');
        console.log(error);
    } else {
        console.log(`✔ MAIL SERVER IS READY TO SEND MAILS`);
    }
});

module.exports = transporter;