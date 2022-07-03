const nodemailer = require('nodemailer')


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

    const mailOptions = {
        from: "admin@gmail.com",
        to: user.email,
        subject: "Email verification",
        content: "Please verify your email address"
    }

    await transporter.sendMail(mailOptions)
}