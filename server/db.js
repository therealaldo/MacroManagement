'use strict';
module.exports = function() {

  // Requiring dependencies
  const dotenv = require('dotenv').load();
  const Sequelize = require('sequelize');
  const mysql = require('mysql');

  // Initializing sequelize
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

  // Creating preferences table schema
  const _preferences = _sequelize.define('preferences', {

  });


  // Creating groceryLists table schema
  const _groceryLists = _sequelize.define('groceryLists', {

  });

  // Syncs the created tables and the data inside the tables
  _sequelize.sync();

  // Returns data to be called in the models
  return {
    connection: _sequelize,
    preferences: _preferences,
    groceryLists: _groceryLists
  }

}();
