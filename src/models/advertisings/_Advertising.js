const { DataTypes } = require('sequelize');
const db = require('../../db');
const Category = require('../categories/_Category');

const Advertising = db.define('Advertising', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  store_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  final_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  promo_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'advertisings',
  timestamps: false
});

Advertising.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Advertising, {
  foreignKey: 'category_id'
});

module.exports = Advertising;