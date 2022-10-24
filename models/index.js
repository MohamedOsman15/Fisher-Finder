const mongoose = require('mongoose')
const CitySchema = require('./City')
const ListingSchema = require('./Listing')

const City = mongoose.model('City', CitySchema)
const Listing = mongoose.model('Listing', ListingSchema)

module.exports = {
    City,
    Listing
}