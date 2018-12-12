var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Product = sequelize.import('../models/product');

router.post('/create', function(req, res){
  var name = req.body.name;
  var price = req.body.price;
  var description = req.body.description;

  Product.create({
    name: name,
    price: price,
    description: description
  })
  .then(
    function createSuccess(product){
      res.json({
        product: product,
        message: 'product created'
      })
    },
    function createError(err){
      res.send(500, err.message);
    }
  )
})

router.put('/sampleupdate', function(req, res){
  let sampleArr = ['balogna','balogna','balogna','balogna','balogna','balogna','balogna'];
  let promArr = [];

  sampleArr.forEach((el, index) => {
    let temp = Product.update(
      {name: el},
      {where: {id: index + 1}}
    )
    promArr.push(temp);
  })
  Promise.all(promArr)
  .then(
    function somethingHappened(products){
      res.send(200, {
        products: products
      });
    },
    function somethingBroke(){
      res.send(500, 'this is silly!');
    }
  )
})

router.get('/:id', function(req, res){
  var productId = req.params.id;

  Product.findOne({
    where:{
      id: productId
    }
  })
  .then(
    function retrieveSuccess(product){
      res.json({
        product: product,
        message: 'product retrieved'
      })
    },
    function retrieveFailure(err){
      res.send(500, err.message);
    }
  )
})

router.get('/', function(req, res){
  Product.findAll()
  .then(
    function retrieveSuccess(products){
      res.json({
        products: products,
        message: 'products retrieved'
      })
    },
    function retrieveFailure(err){
      res.send(500, err.message);
    }
  )
})

module.exports = router;