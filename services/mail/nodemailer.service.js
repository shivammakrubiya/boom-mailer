const transporter = require('./nodemailer.config');
const { sendTestEmail } = require('./nodemailer.templates');
module.exports = {
    sendMail: async ({ email, emailData = {} }) => {
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: `${email}`,

            subject: `${process.env.PROJECT_NAME} | Offer`,
            text: '------ Offer 50% - Grab you deal ------',
            html: await sendTestEmail(emailData)
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    },
};