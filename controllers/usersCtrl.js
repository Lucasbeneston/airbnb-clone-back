const bcrypt = require('bcrypt');

const models = require('../models');

const { User } = models;

module.exports = {
  addUser: async (data) => {
    const { role, firstName, lastName, email, password } = data;
    const bcryptHash = await bcrypt.hash(password, 5);

    return User.create({
      role,
      firstName,
      lastName,
      email,
      password: bcryptHash,
    });
  },

  checkEmail: (email) => {
    return User.findOne({
      attributes: ['email'],
      where: {
        email,
      },
    });
  },
};
