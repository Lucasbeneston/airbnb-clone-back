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

  getAllPlaces: () => {
    return Place.findAll({
      include: [
        {
          model: City,
          attributes: ['name'],
        },
      ],
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
