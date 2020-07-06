const express = require('express');

const router = express.Router();

const usersCtrl = require('../controllers/usersCtrl');
const jwtUtils = require('../utils/jwt.utils');

router.post('/signup', async (req, res) => {
  const { firstName, email } = req.body;

  if (firstName === null || firstName === undefined || firstName === '') {
    return res.status(400).json({
      error: "Le champ firstName n'est pas renseigné",
    });
  }
  if (typeof firstName !== 'string') {
    return res.status(400).json({
      error: 'Le champ firstName doit être une chaîne de caractères',
    });
  }

  const userFound = await usersCtrl.checkEmail(email);
  if (!userFound) {
    const newUser = await usersCtrl.addUser(req.body);
    res.status(201).json({
      role: newUser.role,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    });
  } else {
    return res.status(409).json({
      error: 'Un utilisateur utilisant cette adresse email est déjà enregistré',
    });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const userFound = await usersCtrl.getUserByEmail(email);

  if (userFound) {
    const isIdentified = await usersCtrl.checkPassword(password, userFound.password);
    if (isIdentified) {
      res.status(200).json({
        token: jwtUtils.generateTokenForUser(userFound),
        user: {
          role: userFound.role,
          firstName: userFound.firstname,
          lastname: userFound.lastName,
          email: userFound.email,
        },
      });
    } else {
      return res.status(401).json({
        error: "Votre mot de passe n'est pas correct",
      });
    }
  } else {
    return res.status(401).json({
      error: "Votre compte n'existe pas",
    });
  }
});

module.exports = router;
