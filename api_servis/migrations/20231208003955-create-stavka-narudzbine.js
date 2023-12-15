'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StavkaNarudzbines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      komada: {
        type: Sequelize.INTEGER
      },
      jedinicna_cena:{
        type: Sequelize.INTEGER
      },
      knjigaId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      narudzbinaId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StavkaNarudzbines');
  }
};