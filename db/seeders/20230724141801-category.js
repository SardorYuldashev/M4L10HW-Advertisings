'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        // id: 1
        name: 'Texnika',
      },
      {
        // id: 2
        name: 'Kiyim-kechak',
      },
      {
        // id: 3
        name: 'Oziq-ovqat',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
