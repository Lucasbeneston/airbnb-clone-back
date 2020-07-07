const models = require('../models');

const { Place, City } = models;

module.exports = {
  addPlace: (data) => {
    const { cityId, name, description, rooms, bathrooms, maxGuests, priceByNight } = data;

    return Place.create({
      cityId,
      name,
      description,
      rooms,
      bathrooms,
      maxGuests,
      priceByNight,
    });
  },

  getAllPlaces: () => {
    return Place.findAll({
      where: {
        cityId: 1,
        maxGuests: 1,
      },
      include: [
        {
          model: City,
          attributes: ['name'],
        },
      ],
      order: [['id', 'DESC']],
      limit: 10,
      raw: true,
      attributes: ['id', 'name', 'description', 'rooms', 'bathrooms', 'maxGuests', 'priceByNight'],
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
};
