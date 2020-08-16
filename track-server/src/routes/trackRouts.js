const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router();

const Track = mongoose.model('Track')

// check if user is authenticated or not 
router.use(requireAuth)

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id })

    res.send(tracks)
})


router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body

    if (!name || !locations) {
        res.status(422).send({ error: 'you must provide name and locations' })
    }

    try {
        const tracks = new Track({ userId: req.user._id, name, locations })
        tracks.save()
        res.send(tracks)
    } catch (err) {
        res.status(422).send({ error: err.message })
    }
})

module.exports = router