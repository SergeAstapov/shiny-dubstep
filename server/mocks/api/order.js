module.exports = function(app) {
  var express = require('express');

  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  var ordersRouter = express.Router();

  ordersRouter.get('/', function(req, res) {
    res.send({
      "order": [{
        "id" : 666,
        "email": "mail@example.com",
        "shippingAsBilling": false,
        "paymentMethod": 1,
        "shippingAddress": 2
      }]
    });
  });

  ordersRouter.post('/', jsonParser, function(req, res) {
    var order = req.body.order;
    order.id = 666;

    res.send({
      "order": order
    }).status(201).end();
  });

  ordersRouter.get('/:id', function(req, res) {
    res.send({
      "order": {
        "id": req.params.id
      }
    });
  });

  ordersRouter.put('/:id', function(req, res) {
    res.send({
      "order": {
        "id": req.params.id
      }
    });
  });

  ordersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/order', ordersRouter);
};
