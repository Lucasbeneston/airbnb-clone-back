const express = require('express');

const usersCtrl = require('../controllers/usersCtrl');

const router = express.Router();

router.post('/signup', async (req, res) => {
  res.status(200).json({ message: 'Je suis la route POST/Signup' });
});

router.post('/signin', async (req, res) => {
  res.status(200).json({ message: 'Je suis la route POST/Signin' });
});
