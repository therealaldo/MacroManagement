'use strict';

// Configuration
const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Have body parser parse json automatically
app.use(body_parser.json());

// Routes
app.use('/', require('../routes/home.js')(express));

// Starting the server
const server = app.listen(port, () => {
  console.log('Listening on port ' + port + '...');
});

module.exports = server;
