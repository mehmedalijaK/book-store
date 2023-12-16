'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.StavkaNarudzbine, {foreignKey: "NarudzbinaId", as: "narduzbina"});
    }
  }
  Narudzbina.init({
    status: DataTypes.STRING,
    vreme_narucivanja: {
      type: DataTypes.DATE,
      allowNull: false
    },
    zakazano_vreme: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adresa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefon: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ime_prezime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};