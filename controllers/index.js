const { Listing, City, User } = require('../models')

const addCity = async (req, res) => {
    try {
        const city = await new City(req.body)
        await city.save()
        return res.status(201).json({
            city
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllCities = async (req, res) => {
    try {
        const cities = await City.find()
        return res.status(200).json({ cities })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCityById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await City.findById(id)
        if (city) {
            return res.status(200).json({ city })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateCity = async (req, res) => {
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(city)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await City.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("City deleted");
        }
        throw new Error("City not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find().populate('city')
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const CreateListing = async (req, res) => {
    try {
        const listing = await new Listing(req.body)
        await listing.save()
        return res.status(201).json({
            listing
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getListingById = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id)
        if (listing) {
            return res.status(200).json({ listing })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(listing)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Listing.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Listing deleted");
        }
        throw new Error("Listing not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const listingByCity = async (req, res) => {
    try {
        const city = req.params
        const listings = await Listing.find(city)
        return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const newUser = async (req, res) => {
    try {        
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}

const allUsers = async(req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getAllCities,
    addCity,
    getCityById,
    updateCity,
    deleteCity,
    getAllListings,
    CreateListing,
    getListingById,
    updateListing,
    deleteListing,
    listingByCity,
    newUser,
    allUsers,
}