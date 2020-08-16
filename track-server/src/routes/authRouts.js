const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const route = express.Router();

const User = mongoose.model('User')

// Auth Routes //

route.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')

        res.send({ token })

    } catch (error) {
        return res.status(422).send(error.message)
    }
})

route.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) res.status(422).send({ error: 'Must provie email and passowrd' })

    const user = await User.findOne({ email })

    if (!user) res.status(422).send({ error: 'Invalide email or password' })

    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        res.status(422).send({ error: 'Invalide email or password' })
    }
})

module.exports = route