const express = require('express');

const placesCtrl = require('../controllers/placesCtrl');
const citiesCtrl = require('../controllers/citiesCtrl');
const authMid = require('../utils/jwt.utils');

const router = express.Router();

router.get('/places', async (req, res) => {
  const placesFound = await placesCtrl.getAllPlaces();

  res.status(200).json(placesFound);
});

router.get('/places/:placeId', async (req, res) => {
  const placeFound = await placesCtrl.getPlaceById(req.params.placeId);
  if (placeFound) {
    res.status(200).json({
      id: placeFound.id,
      city: placeFound.City.name,
      name: placeFound.name,
      description: placeFound.description,
      rooms: placeFound.rooms,
      bathrooms: placeFound.bathrooms,
      maxGuests: placeFound.maxGuests,
      priceByNight: placeFound.priceByNight,
    });
  } else {
    return res.status(404).json({
      error: "La ressource demandée n'existe pas",
    });
  }
});

router.post('/places', authMid.authenticateJWT, async (req, res) => {
  const { userRole } = req.user;
  const { description, rooms } = req.body;

  if (userRole === 'tourist') {
    return res.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette ressource",
    });
  }

  if (description === null || description === undefined || description === '') {
    return res.status(400).json({
      message: "Le champ description n'est pas renseigné",
    });
  }

  if (typeof rooms !== 'number') {
    return res.status(400).json({
      message: 'Le champ rooms doit être un nombre entier',
    });
  }

  const newPlace = await placesCtrl.addPlace(req.body);
  const cityFound = await citiesCtrl.getCityById(req.body.cityId);
  console.log(cityFound);

  res.status(201).json({
    id: newPlace.id,
    city: cityFound.name,
    name: newPlace.name,
    description: newPlace.description,
    rooms: newPlace.rooms,
    bathrooms: newPlace.bathrooms,
    maxGuests: newPlace.maxGuests,
    priceBynight: newPlace.priceBynight,
  });
  console.log(cityFound);
});

router.patch('/places/:placeId', authMid.authenticateJWT, async (req, res) => {
  const { userRole } = req.user;

  if (userRole === 'tourist') {
    res.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette ressource",
    });

    const placeUpdated = await placesCtrl.updatePlace(req.body, req.params.id);

    res.status(200).json({
      id: placeUpdated.id,
      city: placeUpdated.city,
      name: placeUpdated.name,
      description: placeUpdated.description,
      rooms: placeUpdated.rooms,
      bathrooms: placeUpdated.bathrooms,
      maxGuests: placeUpdated.maxGuests,
      priceByNight: placeUpdated.priceByNight,
    });
  }
});

module.exports = router;
