const mongoose = require(`mongoose`)
require('dotenv').config()

const mongodb = process.env.MONGOODB_URL


let MONGODB_URI = (mongodb)

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch(e => {
        console.log(`Connection error`, e.message)
    })

const db = mongoose.connection

module.exports = db