const { Listing, City } = require('../models')


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
        const listings = await Listing.find()
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

module.exports = {
    CreateListing,
    getAllCities,
    addCity,
    getAllListings,
    getCityById,
    updateCity,
    deleteCity,
}