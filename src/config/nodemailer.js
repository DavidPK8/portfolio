const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
})


// send mail with defined transport object
module.exports.sendMailToUser = async(userMail,token)=>{
    let info = await transporter.sendMail({
    from: process.env.USER_MAILTRAP,
    to: userMail,
    subject: "Verifica tu cuenta de correo electrónico",
    html: `<a href="http://localhost:3000/user/confirmar/${token}">Clic para confirmar tu cuenta</a>`,
    });
    console.log("Message sent: %s", info.messageId);
}