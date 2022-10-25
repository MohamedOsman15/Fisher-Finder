const { Schema } = require('mongoose')

const City = new Schema(
    {
        city: {type: String, required: true},
        state: {type: String, required: true},
        image: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = City