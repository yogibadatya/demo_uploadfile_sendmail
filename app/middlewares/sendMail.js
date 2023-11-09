const mailer = require("nodemailer")

const createtransport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'please_use_your@gmail.com',
        pass: 'please_use_your_passcode',
    },
})

const sendmail = async (to,subject,text) => {
    const mailOptions = {
        from: 'please_use_your@gmail.com',
        to,
        subject,
        text,
      };
      try {
        return await createtransport.sendMail(mailOptions);
      } catch (error) {
        console.error('Error sending email:', error);
      }
}
module.exports = {
    sendmail
}