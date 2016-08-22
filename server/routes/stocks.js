const express = require('express');
const router = express.Router();
const stock = require('../models/stock')

router.route('/:text')
  .get((req, res) =>{
    stock(req.params.text, (err, stocks) => {
      res.send(stocks)
    })
  })

module.exports = router;
