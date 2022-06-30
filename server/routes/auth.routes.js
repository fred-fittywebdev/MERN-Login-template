const express = require('express');
const router = express.Router();
// model
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
    try {

        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.send({ success: false, message: 'User already registered' })
        }

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
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            res.status(200).send({ success: true, message: 'User login successfully', data: user })
        } else {
            res.status(200).send({ success: false, message: 'Invalid credentials', data: null })
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router