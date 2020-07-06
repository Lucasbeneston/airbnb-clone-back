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
      include: [
        {
          model: City,
          attributes: ['name'],
        },
      ],
      raw: true,
      attributes: ['id', 'name', 'description', 'rooms', 'bathrooms', 'maxGuests', 'priceByNight'],
    });
  },
};
