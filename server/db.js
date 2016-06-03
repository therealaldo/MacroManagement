'use strict';
module.exports = function() {

  const dotenv = require('dotenv').load();
  const Sequelize = require('sequelize');
  const mysql = require('mysql');

  const _sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  const _preferences = _sequelize.define('preferences', {

  });

  const _groceryLists = _sequelize.define('groceryLists', {

  });

  _sequelize.sync();

  return {
    connection: _sequelize,
    preferences: _preferences,
    groceryLists: _groceryLists
  }

}();
