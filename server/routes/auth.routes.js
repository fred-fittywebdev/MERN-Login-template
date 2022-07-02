const express = require('express');
const router = express.Router();
// model
const User = require('../models/userModel');
// hash password
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {

        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.send({ success: false, message: 'User already registered' })
        }

        // Hashing password
        const password = req.body.password
        const saltRounds = 12
        const salt = await bcrypt.genSalt(saltRounds)
        const encryptedPassword = await bcrypt.hash(password, salt)
        req.body.password = encryptedPassword

        const newuser = new User(req.body)
        await newuser.save()
        res.status(200).send({ success: true, message: 'User registered successfully' })
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {

            // Comparing password
            const comparedpassword = await bcrypt.compare(req.body.password, user.password)

            if (comparedpassword) {
                res.status(200).send({ success: true, message: 'User login successfully', data: user })
            } else {
                res.status(200).send({ success: false, message: 'Invalid credentials', data: user })
            }


        } else {
            res.status(200).send({ success: false, message: 'User does not exist', data: null })
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router