const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



function sendEmailTo(mail, name) {
    const mailOptions = {
        from: {
            name: 'learnZ',
            address: 'mish9976.pc@gmail.com'
        }, // sender address
        to: mail, // list of receivers
        subject: `Hello, ${name}`, // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Thank you for contacting learnZ. We will get back to you shortly!</b>", // html body
    }

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log('EMail sent successfully')
        } catch(err) {
            console.log(err)
        }
    }

    sendMail(transporter, mailOptions);
}

module.exports = {
    sendEmailTo
}