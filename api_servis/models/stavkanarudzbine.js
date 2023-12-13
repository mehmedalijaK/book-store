'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StavkaNarudzbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Knjiga, Narudzbina) {
      this.belongsTo(Knjiga);
      this.belongsTo(Narudzbina)
    }
  }
  StavkaNarudzbine.init({
    komada: DataTypes.INTEGER,
    jedinicna_cena: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StavkaNarudzbine',
  });
  return StavkaNarudzbine;
};