'use strict';
module.exports = function() {

  // Requiring dependencies
  const db = require('../server/db.js');
  const sequelize = db.connection;

  // Create functionality (data being created, error callback, success, callback)
  function _create(data, err, success) {
    let payload = data;
    db.preferences.create(payload)
    .then(success)
    .catch(err)
  }

  // Find functionality (data to find, error callback, success callback)
  // Looking for ONE specific db entry
  function _find(data, err, success) {
    let payload = data;
    db.preferences.findAll({where: {uuid: payload.uuid}})
    .then(success)
    .catch(err);
  }

  // FindAll functionality (error callback, success callback)
  // Looking for ALL db entries
  function _findAll(err, success) {
    db.preferences.findAll()
    .then(success)
    .catch(err);
  }

  // Update functionality (data being updated, error callback, success, callback)
  // Finding the specific db entry first, and then updating attributes
  function _update(data, err, success) {
    let payload = data;
    db.preferences.find({where: {uuid: payload.uuid}})
    .then(function(matchedOrder) {
      matchedOrder.updateAttributes(data)
      .then(success)
      .catch(err)
    })
    .catch(err)
  }

  // Destroy/Delete Functionality (data being destroyed/deleted, error callback, success callback)
  // Destroying specific db entry
  function _destroy(data, err, success) {
    let payload = data;
    db.preferences.destroy({where: {uuid: payload.uuid}})
    .then(success)
    .catch(err);
  }

  // Returns data to be called in the models
  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    destroy: _destroy
  }

}();
