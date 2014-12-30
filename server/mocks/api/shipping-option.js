module.exports = function(app) {
  var express = require('express');
  var shippingOptionsRouter = express.Router();
  var shippingOptions = [
  {
    id: 1,
    title: "Shiiping type 1"
  },
  {
    id: 2,
    title: "Shiiping type 2"
  }
  ];

  shippingOptionsRouter.get('/', function(req, res) {
    res.send({
      "shipping-option": shippingOptions
    });
  });

  shippingOptionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  shippingOptionsRouter.get('/:id', function(req, res) {
    res.send({
      "shipping-option": {
        "id": req.params.id
      }
    });
  });

  shippingOptionsRouter.put('/:id', function(req, res) {
    res.send({
      "shipping-option": {
        "id": req.params.id
      }
    });
  });

  shippingOptionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/shipping-option', shippingOptionsRouter);
};
