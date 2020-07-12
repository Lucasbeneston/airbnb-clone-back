const { QueryTypes } = require('sequelize');

const models = require('../models');

const { Place, City } = models;

module.exports = {
  addPlace: (data) => {
    const { cityId, name, photos, description, rooms, bathrooms, maxGuests, priceByNight } = data;

    return Place.create({
      cityId,
      name,
      photos,
      description,
      rooms,
      bathrooms,
      maxGuests,
      priceByNight,
    });
  },

  getAllPlaces: async (data) => {
    const where = {};
    if (data) {
      const cityFound = await City.findOne({
        where: { name: data },
        attributes: ['id'],
        raw: true,
      });
      console.log('Console.log de cityFound :', cityFound);
      console.log('Console.log de data :', data);
      where.cityId = cityFound.id;
    }

    return Place.findAll({
      include: [
        {
          model: City,
          attributes: ['name'],
        },
      ],
      order: [['id', 'DESC']],
      limit: 10,
      raw: true,
      attributes: [
        'id',
        'name',
        'photos',
        'description',
        'rooms',
        'bathrooms',
        'maxGuests',
        'priceByNight',
      ],
      where,
    });
  },

  getPlaceById: (placeId) => {
    return Place.findByPk(placeId, {
      include: [
        {
          model: City,
          attributes: ['name'],
        },
      ],
    });
  },

  // updatePlaceById: (id) => {
  //   return Place.update(id, {
  //     where: {
  //       id,
  //     },
  //   });
  // },

  deletePlaceById: (id) => {
    return Place.destroy({
      where: {
        id,
      },
    });
  },
};
