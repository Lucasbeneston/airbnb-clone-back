const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const router = express.Router();
const usersRouter = require('./users');
const placesRouter = require('./places');
const citiesRouter = require('./cities');
const { notFoundHandler, errorLogger, errorHandler } = require('../middlewares');

router.use(bodyParser.json());
router.use(usersRouter);
router.use(placesRouter);
router.use(citiesRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World !' });
});

router.use(notFoundHandler);
router.use(errorLogger);
router.use(errorHandler);

module.exports = router;
