'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Pierre',
          lastName: 'ABBA',
          role: 'host',
          password: 'azerty',
          email: 'Pierre@hotmail.fr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Paul',
          lastName: 'ENTA',
          role: 'host',
          password: 'azerty',
          email: 'Paul@hotmail.fr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Sylvie',
          lastName: 'MERCI',
          role: 'tourist',
          password: 'azerty',
          email: 'Syvlie@hotmail.fr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Lola',
          lastName: 'LALILOLO',
          role: 'tourist',
          password: 'azerty',
          email: 'Lola@hotmail.fr',
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
