'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Knjigas',
    [
      {id:"1",naziv:"Mali princ", opis:"Jedna fina knjiga", cena: 1200, kategorijaId:1, createdAt: new Date(), updatedAt: new Date()},
      {id:"2",naziv:"My name is red", opis:"Good book", cena: 300, kategorijaId:2, createdAt: new Date(), updatedAt: new Date()}
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Knjigas', null, {});
  }
};
