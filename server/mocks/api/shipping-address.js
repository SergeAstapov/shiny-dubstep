module.exports = function(app) {
  var express = require('express');

  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  var shippingAddressesRouter = express.Router();
  var shippingAddresses = [
    {
      id: 1,
      fname: "Sergej",
      lname: "Astapov",
      addr:  "str. Vesnina 5",
      zip:   "61002",
      city:  "Kharkiv",
      state: "",
      country: "Ukraine",
      phone: "123456789"
    },
    {
      id: 2,
      fname: "Kenny",
      lname: "McCormick",
      addr:  "str. Vesnina 5",
      zip:   "61002",
      city:  "South Park",
      state: "co",
      country: "USA",
      phone: "123456789"
    },
  ];

  shippingAddressesRouter.get('/', function(req, res) {
    res.send({
      "shipping-address": shippingAddresses
    });
  });

  shippingAddressesRouter.post('/', jsonParser, function(req, res) {
    var shippingAddress = req.body.shippingAddress;
    shippingAddress.id = 123;

    res.send({
      "shipping-address": shippingAddress
    }).status(201).end();
  });

  shippingAddressesRouter.get('/:id', function(req, res) {
    res.send({
      "shipping-address": {
        "id": req.params.id
      }
    });
  });

  shippingAddressesRouter.put('/:id', function(req, res) {
    res.send({
      "shipping-address": {
        "id": req.params.id
      }
    });
  });

  shippingAddressesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/shipping-address', shippingAddressesRouter);
};
