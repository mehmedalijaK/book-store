'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knjiga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Kategorija, {foreignKey: "KategorijaId", as: "kategorija"});
      this.hasMany(models.StavkaNarudzbine, {foreignKey: "KnjigaId", as: "stavke"});
      this.belongsToMany(models.Pisac, {foreignKey: "KnjigaId", as: "pisci", through:"KnjigaPisac"});
    }
  }
  Knjiga.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    opis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
  }, {
    sequelize,
    modelName: 'Knjiga',
  });
  return Knjiga;
};