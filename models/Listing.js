const { Schema } = require('mongoose')

const Listing = new Schema(
    {
        image: {type: String, required: true},
        name: {type: String, required: true},
        address: {type: String, required: true},
        city: {type: Schema.Types.ObjectId, ref: 'City'}
    },
    {timestamps: true}
)

module.exports = Listing