const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const restaurants = 'mongodb://localhost/restaurants';
mongoose.Promise = global.Promise;
// mongoose.createConnection(restaurants);

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const restaurantSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  phoneNumber: String,
  address: String,
  image: String,
  waitTime: Number,
  lastUpdate: { type: Date, default: Date.now },
});

restaurantSchema.pre('save', function(next) {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});


module.exports = mongoose.model('Restaurant', restaurantSchema);
