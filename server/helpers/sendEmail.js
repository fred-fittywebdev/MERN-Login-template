const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
// token
const Token = require('../models/tokenModel')


module.exports = async (user, malType) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtop.gmail.com",
        port: "587",
        secure: true,
        auth: {
            user: "fittycms@gmail.com",
            pass: "adnapwxgfnianrpp",
        },
    })

    // link
    const encryptedToken = bcrypt.hashSync(user._id.toString(), 10).replace(/['/']/g, "")
    const token = new Token({
        userId: user._id, token: encryptedToken,
    })
    await token.save()
    const emailContent = `<div><h1>Please follow this link to verify your email adress.</h1><a href="http://localhost:3000/verifymail/${encryptedToken}">${encryptedToken}</a></div>`

    const mailOptions = {
        from: "admin@gmail.com",
        to: user.email,
        subject: "Email verification",
        html: emailContent
    }

    await transporter.sendMail(mailOptions)
}