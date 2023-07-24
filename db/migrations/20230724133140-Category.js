'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'categories',
      timestamps: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};