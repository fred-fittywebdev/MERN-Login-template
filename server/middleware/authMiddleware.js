const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const secret = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    const user = jwt.verify(token, secret)

    if (user) {
        req.body.user = user
        next()
    } else {
        res.status(500).send({ message: 'Unauthenticated' })
    }
}