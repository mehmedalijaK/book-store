'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Knjigas', {
      fields: ['kategorijaId'],
      type: 'foreign key',
      references: {
        table:'Kategorijas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('KnjigaPisacs', {
      fields: ['knjigaId'],
      type: 'foreign key',
      references: {
        table:'Knjigas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('KnjigaPisacs', {
      fields: ['pisacId'],
      type: 'foreign key',
      references: {
        table:'Pisacs',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('StavkaNarudzbines', {
      fields: ['knjigaId'],
      type: 'foreign key',
      references: {
        table:'Knjigas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('StavkaNarudzbines', {
      fields: ['narudzbinaId'],
      type: 'foreign key',
      references: {
        table:'Narudzbinas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Kategorijas', { cascade: true });
    queryInterface.dropTable('KnjigaPisacs', { cascade: true });
    queryInterface.dropTable('StavkaNarudzbines', { cascade: true });
  }
};
