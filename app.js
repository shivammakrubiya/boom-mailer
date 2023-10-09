require("express-async-errors");
require("dotenv").config()
const express = require("express");
const transporter = require("./services/mail/nodemailer.service")
const app = express();


app.use(require('cors')({ origin: '*' }));
app.use(express.json({ limit: process.env.JSON_BODY_LIMIT }));
app.use(express.urlencoded({ extended: false }));


app.post(`${process.env.BASE_URL}/sendMail`, async (req, res) => {
    try {
        let { email, client_name, client_email, client_phone, client_reference, client_message, page_url, client_ip, } = req.body
        let emailData = { client_name, client_email, client_phone, client_reference, client_message, page_url, client_ip, }
        if (!email) return res.status(400).send({ success: false, messege: "Email must required!!!" })
        await transporter.sendMail({ email, emailData })
        return res.status(400).send({ success: true, messege: "Email sent successfully!!!" })
    } catch (error) {
        console.log("Error : - ", error);
        res.status(500).send({ success: false, messege: error.messege || "Internal Server Error" })
    }
});


app.listen(process.env.PORT || 3301, () => {
    console.log("app listen at http://localhost:" + process.env.PORT);
})
module.exports = app;