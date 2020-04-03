const Restaurants = require('../models/restaurants')
const router = require('express').Router()

router.get('/', (req, res) => {
	Restaurants.find({})
		.populate('category')
		.then(response => {
			res.send(response)
		})
		.catch(err => {
			res.send(err)
		})
})

router.post('/', (req, res) => {
	Restaurants.create(req.body)
		.then(response => {
			res.send(response.data)
		})
		.catch(err => {
			res.send(err)
		})
})

router.patch('/:id', (req, res) => {
	Restaurants.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		response => {
			res.send(response)
		}
	)
})

// Created Route for single Restaurant
router.get('/:id', (req, res) => {
	Restaurants.find({ _id: req.params.id })
		.populate('category')
		.then(restaurant => {
			res.send(restaurant[0])
		})
		.catch(err => {
			res.send(err)
		})
})

module.exports = router
