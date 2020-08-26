const express = require('express');

const router = express.Router();

const usersCtrl = require('../controllers/usersCtrl');
const jwtUtils = require('../utils/jwt.utils');

const UnauthorizedError = require('../utils/errors/unauthorized_401_error');
const BadRequestError = require('../utils/errors/bad_request_400_error');

router.post('/signup', async (req, res) => {
  const { firstName, email } = req.body;

  if (firstName === null || firstName === undefined || firstName === '') {
    throw new BadRequestError('Mauvaise requête', "Le champ firstName n'est pas renseigné");
  }

  if (typeof firstName !== 'string') {
    throw new BadRequestError(
      'Mauvaise requête',
      'Le champ firstName doit être une chaîne de caractères'
    );
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
    throw new BadRequestError(
      'Mauvaise requête',
      'Un utilisateur utilisant cette adresse email est déjà enregistré'
    );
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
          firstName: userFound.firstName,
          lastname: userFound.lastName,
          email: userFound.email,
        },
      });
    } else {
      throw new UnauthorizedError(
        'utilisateur non authentifié ',
        "Votre mot de passe n'est pas correct"
      );
    }
  } else {
    throw new UnauthorizedError('utilisateur non authentifié ', "Votre compte n'existe pas");
  }
});

module.exports = router;
