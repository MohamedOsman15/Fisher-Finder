const mongoose = require(`mongoose`)
require('dotenv').config()

const mongodb = process.env.MONGODB_URI || 3001


// let MONGODB_URI = (mongodb)

mongoose
    .connect(mongodb)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch(e => {
        console.log(`Connection error`, e.message)
    })

const db = mongoose.connection

module.exports = db