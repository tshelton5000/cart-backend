require('dotenv').config();

var express = require('express');
var app = express();
var product = require('./controllers/product-controller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/product', product);

app.listen(3000, function(){
    console.log('Server connected on port 3000') //5
});