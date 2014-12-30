module.exports = function(app) {
  var express = require('express');
  var apiPaymentMethodsRouter = express.Router();
  var paymentMethods = [
    {
      "id" : 1,
      "title": 'Pay with PayPal'
    },
    {
      "id" : 2,
      "title": 'Use a gift card'
    }
  ];

  apiPaymentMethodsRouter.get('/', function(req, res) {
    res.send({
      "payment-method": paymentMethods
    });
  });

  apiPaymentMethodsRouter.post('/', function(req, res) {
    res.send({
      "payment-method": {
        "title": 'new pay method',
        "id" : 999
      }
    }).status(201).end();
  });

  apiPaymentMethodsRouter.get('/:id', function(req, res) {
    res.send({
      "payment-method": {
        "id": req.params.id
      }
    });
  });

  apiPaymentMethodsRouter.put('/:id', function(req, res) {
    res.send({
      "payment-method": {
        "id": req.params.id
      }
    });
  });

  apiPaymentMethodsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/payment-method', apiPaymentMethodsRouter);
};
