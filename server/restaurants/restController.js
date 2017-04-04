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

restController.getRestList = (req, res, next) => {
	Restaurant.find({}, (err, result) => {
		if (err) return res.status(400).json('Sorry, the request was bad.');
		return res.status(200).json(result);
	});
};
// get req for single restaurant
restController.getRest = (req, res, next) => {
	const restaurant = req.body.name;
	Restaurant.findOne({name: restaurant}, (err, result) => {
		if (err) return res.status(400).send('restaurant not in database');
		return res.status(200).json(result);
	});
}
// put request for updating restaurant wait time.
restController.updateTime = (req, res, next) => {
	const name = req.body.name;
	const newTime = req.body.waitTime;
	const newDate = Date.now();

	Restaurant.findOneAndUpdate({ name: name }, { waitTime: newTime, lastUpdate: newDate }, (err, result) => {
		if (err) return res.status(400);
		return res.status(200).json(result);
	});
},

restController.removeRest = (req, res, next) => {
  Restaurant.find({ name: req.body.name }).remove().exec();
  res.status(200).json('Successfully removed restaurant');
};

module.exports = restController;
