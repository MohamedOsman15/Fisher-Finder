const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root Page'))

router.get('/city', controllers.getAllCities)
router.post('/city', controllers.addCity)
router.get('/city/:id', controllers.getCityById)
router.put('/city/:id', controllers.updateCity)
router.delete('/city/:id', controllers.deleteCity)

router.get('/listings', controllers.getAllListings)
router.post('/listings', controllers.CreateListing)
router.get('/listings/:id', controllers.getListingById)
router.put('/listings/:id', controllers.updateListing)
router.delete('/listings/:id', controllers.deleteListing)

router.get('/:id', controllers.listingByCity)

module.exports = router