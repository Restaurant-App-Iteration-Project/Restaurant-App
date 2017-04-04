const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const restaurants = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
// mongoose.createConnection(restaurants);

const profile = new Schema ({
  name: String,
  phoneNumber: Number,
  address: String,
})

const restaurantSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  phoneNumber: String,
  address: String,
  image: String,
  waitTime: Number,
});


module.exports = mongoose.model('Restaurant', restaurantSchema);