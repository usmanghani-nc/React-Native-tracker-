require('./Model/UsersModel')
require('./Model/TrackModel')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRouth = require('./routes/authRouts')
const trackRouts = require('./routes/trackRouts')
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json())
app.use(authRouth);
app.use(trackRouts);

const mongoUri = `mongodb+srv://usman:123@nodetuts.vmb25.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => app.listen(3000, () => console.log("server running on 3000")))

mongoose.connection.on("connected", () => {
    console.log('Connected mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('Error connect to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`your email: ${req.user.email}`)
})