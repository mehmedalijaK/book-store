'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Knjigas', {
      fields: ['KategorijaId'],
      type: 'foreign key',
      references: {
        table:'Kategorijas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('KnjigaPisacs', {
      fields: ['KnjigaId'],
      type: 'foreign key',
      references: {
        table:'Knjigas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('KnjigaPisacs', {
      fields: ['PisacId'],
      type: 'foreign key',
      references: {
        table:'Pisacs',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('StavkaNarudzbines', {
      fields: ['KnjigaId'],
      type: 'foreign key',
      references: {
        table:'Knjigas',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    queryInterface.addConstraint('StavkaNarudzbines', {
      fields: ['NarudzbinaId'],
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
