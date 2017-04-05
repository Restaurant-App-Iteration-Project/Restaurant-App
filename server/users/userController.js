const User = require('./userModel');
const mongoose = require('mongoose');
const userController = {};

userController.createUser = (req, res, next) => {
  console.log(req.body)
  User.create({
    username: req.body.username,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  }, (err, result) => {
    if (err) res.status(400).json('Error')
    else {
      return res.status(200).json(result);
    }
  });
};

userController.getUserList = (req, res, next) => {
  Users.find({}, (err, result) => {
    console.log(users);
    if (err) res.status(400).json('Error')
    else {
      return res.status(200).json(result);
    }
  });
};

userController.verifyUser = (req, res, next) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (err) console.log(err);
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      
      res.status(200).json(user);
      return next();
    } else {
    //Sends the string 'Error' if the credentials do not match
      res.status(400);
    }
  });
};

userController.removeUser = (req, res, next) => {
  User.find({ name: req.body.name }).remove().exec();
  res.status(200).json('Successfully removed user');
};

module.exports = userController;
