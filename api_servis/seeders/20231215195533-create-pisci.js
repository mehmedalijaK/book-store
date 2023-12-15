'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pisacs',
    [
      {id:"1",naziv:"Orhan Pamuk", createdAt: new Date(), updatedAt: new Date()},
      {id:"2",naziv:"Ivo Andric", createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pisacs', null, {});
  }
};
