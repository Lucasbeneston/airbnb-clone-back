const models = require('../models');

const { City } = models;

module.exports = {
  getCityById: (id) => {
    return City.findByPk(id, {
      attributes: ['name'],
    });
  },
};
