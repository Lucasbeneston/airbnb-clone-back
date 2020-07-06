const express = require('express');

const placesCtrl = require('../controllers/placesCtrl');
const citiesCtrl = require('../controllers/citiesCtrl');
const authMid = require('../utils/jwt.utils');

const router = express.Router();

router.get('/places', async (req, res) => {
  const placesFound = await placesCtrl.getAllPlaces();
  res.status(200).json(placesFound);
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

module.exports = router;
