module.exports = function(app) {
  var express = require('express');
  var statesRouter = express.Router();

  statesRouter.get('/', function(req, res) {
    res.send({
      "state": []
    });
  });

  statesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  statesRouter.get('/:id', function(req, res) {
    res.send({
      "state": {
        "id": req.params.id
      }
    });
  });

  statesRouter.put('/:id', function(req, res) {
    res.send({
      "state": {
        "id": req.params.id
      }
    });
  });

  statesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/state', statesRouter);
};
