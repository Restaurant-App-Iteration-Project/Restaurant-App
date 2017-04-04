const Restaurant = require('./restaurantModel');
const mongoose = require('mongoose');
const restController = {};

restController.createRest = (req, res, next) => {
	Restaurant.create({
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		phoneNumber: req.body.phoneNumber,
		address: req.body.address,
		image: req.body.image,
		waitTime: req.body.waitTime,
	}, (error, restaurant) => {
		if (error) {
			return res.status(400).json('Error');
		} else {
			return res.status(200).json(restaurant);
		}
	});
};

restController.findAll = (req, res, next) => {
	Restaurant.find({}, (err, restaurants) => {
		if (err) {
			console.log(err);
			return res.status(400).json("Request was terrible");
		} else {
			res.status(200).json(restaurants);
		}
	});
};

restController.removeRest = (req, res, next) => {
  Restaurant.find({ name: req.body.name }).remove().exec();
  res.status(200).json('Successfully removed restaurant');
};

module.exports = restController;
