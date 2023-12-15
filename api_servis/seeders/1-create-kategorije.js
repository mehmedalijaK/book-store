'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategorijas',
    [
      {id:"1",naziv:"Roman", createdAt: new Date(), updatedAt: new Date()},
      {id:"2",naziv:"Historija", createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategorijas', null, {});
  }
};
