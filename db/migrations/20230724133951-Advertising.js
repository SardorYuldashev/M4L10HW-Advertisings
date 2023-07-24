'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('advertisings', {
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
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('advertisings');
  }
};