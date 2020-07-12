const express = require('express');

const placesCtrl = require('../controllers/placesCtrl');
const citiesCtrl = require('../controllers/citiesCtrl');
const authMid = require('../utils/jwt.utils');

const router = express.Router();

// GET/places/:placeId
router.get('/places/:placeId', async (req, res) => {
  const placeFound = await placesCtrl.getPlaceById(req.params.placeId);
  if (placeFound) {
    res.status(200).json({
      id: placeFound.id,
      city: placeFound.City.name,
      name: placeFound.name,
      photos: placeFound.photos,
      description: placeFound.description,
      rooms: placeFound.rooms,
      bathrooms: placeFound.bathrooms,
      maxGuests: placeFound.maxGuests,
      priceByNight: placeFound.priceByNight,
    });
  } else {
    return res.status(404).json({
      error: "Cette appartement n'existe pas",
    });
  }
});

// GET/places permet de récupérer toutes les places
router.get('/places', async (req, res) => {
  const placesFound = await placesCtrl.getAllPlaces(req.query.city);
  res.status(200).json(placesFound);
});

// POST/places permet de créer une nouvelle place
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

  res.status(201).json({
    id: newPlace.id,
    city: cityFound.name,
    name: newPlace.name,
    photos: newPlace.photos,
    description: newPlace.description,
    rooms: newPlace.rooms,
    bathrooms: newPlace.bathrooms,
    maxGuests: newPlace.maxGuests,
    priceBynight: newPlace.priceBynight,
  });
  console.log(cityFound);
});

// PATCH/places permet de modifier une place selon son id
// router.put('/places/:placeId', async (req, res) => {
//   const placeFound = await placesCtrl.updatePlaceById(req.params.placeId);
//   if (placeFound) {
//     res.status(200).json({
//       placeFound,
//     });
//   } else {
//     return res.status(404).json({
//       error: "Cette appartement n'existe pas",
//     });
//   }
// });

// DELETE/places permet de supprimer une place selon son id
router.delete('/places/:placeId', async (req, res) => {
  const placeFound = await placesCtrl.deletePlaceById(req.params.placeId);
  if (placeFound) {
    res.status(200).json({
      message: 'Appartement supprimé avec succès',
    });
  } else {
    return res.status(404).json({
      error: "Cette appartement n'existe pas",
    });
  }
});

module.exports = router;
