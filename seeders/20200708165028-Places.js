'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Places',
      [
        {
          cityId: 1,
          name: 'Superbe 2 pièces tout équipé Vincennes Montreuil',
          photos:
            'https://a0.muscache.com/im/pictures/2f43547d-3f6f-4a26-97a7-d2b319a536f8.jpg?im_w=1920',
          description:
            'Superbe 2 pièces tout équipé, refait à neuf. Nombreux commerces de bouches, boulangeries, restaurants et cafés aux alentours. Métro à 5 min à pied, puis ligne direct pour le centre Paris, Châtelet, en 20 min ! Parfait en couple ou solo',
          rooms: 1,
          bathrooms: 1,
          maxGuests: 1,
          priceByNight: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Charmant studio au calme entouré de verdure',
          photos:
            'https://a0.muscache.com/im/pictures/a95ec0d1-50f7-491a-a4a3-ce89dbefcce9.jpg?im_w=1920',
          description:
            'Joli studio de 14 m/2,entièrement neuf,équipé de neuf,c’est une maison d’hôte joliment aménagée,située dans notre propriété qui est situé au quartier Cité à la ville Le Pecq. Il est consisté d’une pièce-salon-cuisine, d’une salle de douche,Wc, lavabo.',
          rooms: 1,
          bathrooms: 1,
          maxGuests: 1,
          priceByNight: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Studio à Montmartre avec vue sur Paris',
          photos:
            'https://a0.muscache.com/im/pictures/9b80d045-666d-4351-8650-55c2ebcb5d2f.jpg?im_w=1920',
          description:
            "Au pied du Sacré Coeur, studio avec vue exceptionnelle sur Paris au 8ème étage avec ascenseur d'un immeuble pierre de taille. Entièrement équipé.",
          rooms: 1,
          bathrooms: 1,
          maxGuests: 1,
          priceByNight: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Cosy Studio rue Montorgueil',
          photos:
            'https://a0.muscache.com/im/pictures/c07240f1-235e-4b2e-b95d-6257e565e08f.jpg?im_w=1920',
          description:
            "Ce cosy loft est situé en plein coeur du quartier Montorgueil et peut accueillir jusqu'à 2 personnes. Il est entouré par de nombreux commerces, notamment des magasins de grandes marques, des restaurants réputés et des commerces de proximité.",
          rooms: 1,
          bathrooms: 1,
          maxGuests: 1,
          priceByNight: 110,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Appartement a proximité de Place des Vosges',
          photos:
            'https://a0.muscache.com/im/pictures/63641d4a-b3c5-4e79-b2bb-cf62ddf66617.jpg?im_w=1920',
          description:
            "Appartement confortable sur la Place des Vosges, la plus ancienne place de Paris. La place a été inaugurée en 1612 à l'occasion des fiançailles de Louis XIII et d'Anne d'Autriche",
          rooms: 2,
          bathrooms: 1,
          maxGuests: 2,
          priceByNight: 130,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Appartement 2 pièces proche coulée verte et Gare de Lyon',
          photos:
            'https://a0.muscache.com/im/pictures/a8654995-6577-48c1-a303-d4294639619c.jpg?im_w=1920',
          description:
            "Petit 2 pièces de 25m2 avec une vraie chambre, un salon avec kitchenette et petit canapé lit et une petite salle d'eau. Emplacement très agréable: au pied de la coulée verte, 5 min Gare de Lyon, 15 min Bastille.",
          rooms: 2,
          bathrooms: 1,
          maxGuests: 3,
          priceByNight: 140,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId: 1,
          name: 'Charmant studio proche du Parc des Princes',
          photos:
            'https://a0.muscache.com/im/pictures/6e0b4849-dd8f-41da-a70b-11a17171786e.jpg?im_w=1920',
          description:
            'Bienvenue dans mon charmant appartement de 29 mètres carrés situé à Boulogne-billancourt. Il est localisé au 3ème étage AVEC ascenseur. Il est idéalement placé à proximité du magnifique Parc des Princes, de Rolland Garros.',
          rooms: 2,
          bathrooms: 1,
          maxGuests: 2,
          priceByNight: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
