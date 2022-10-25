const mongoose = require('mongoose')
const CitySchema = require('./City')
const ListingSchema = require('./Listing')
const UserSchema = require("./User")

const City = mongoose.model('City', CitySchema)
const Listing = mongoose.model('Listing', ListingSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    City,
    Listing,
    User
}