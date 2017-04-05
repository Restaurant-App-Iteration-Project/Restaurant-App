var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./server/users/userController');
const restController = require('./server/restaurants/restController');
const path = require('path');
const cors = require('cors');

mongoose.connect('mongodb://codesmith13:1Lovetesting@ds149800.mlab.com:49800/codesmith13');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/userList', userController.getUserList);
app.post('/login', userController.verifyUser);
app.post('/register', userController.createUser);
app.post('/removeUser', userController.removeUser);

app.get('/restaurantList', restController.getRestList);
app.get('/restaurant', restController.getRest);
app.post('/restaurant', restController.createRest);
app.post('/removeRest', restController.removeRest);
app.put('/restaurant', restController.updateTime);

app.use(express.static(path.join(__dirname, './')));

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});

module.exports = app;
