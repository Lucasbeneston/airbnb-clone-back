const express = require('express');

const citiesCtrl = require('../controllers/citiesCtrl');

const router = express.Router();

router.get('/cities', async (req, res) => {
  const citiesFound = await citiesCtrl.getCities();
  res.status(201).json(citiesFound);
});

module.exports = router;
