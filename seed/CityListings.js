const db = require('../db')
const { City, Listing } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const city1 = await new City({
        city: 'Minneapolis',
        state: 'MN'
    })
    city1.save()

const listings = [
    {
        image: 'https://www.travelwisconsin.com/uploads/blog/22/227181e8-df08-4d75-b119-0e62adce126f-header.jpg?preset=article-details-header',
        name: 'Snelling Lake',
        address: "Fort Snelling Unorganized Territory,",
        city: city1._id
    }
]

await Listing.insertMany(listings)
console.log('Created Listings')
}


const run = async () => {
    await main()
    db.close()
}

run()