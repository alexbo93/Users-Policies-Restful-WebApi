"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// TODO: Set current config
var current = _config2.default.dev;
if (app.get('env') === 'production') {
  current = _config2.default.prod;
}

var db_endpoint = 'mongodb://' + current.mongodb.user + current.mongodb.password + '@' + current.mongodb.server + '/' + current.mongodb.database;

// TODO: Create and enable connection to the database
var db_ready = _mongoose2.default.connect(db_endpoint, { useMongoClient: true }, function (err, db) {
  if (err) {
    console.log('Error connecting to the DB' + err);
  } else {
    console.log('DB connection succesfull');
  }
});

// Will have to get the port from the config
app.use('/', _routes2.default);

// Export the app object with the connections and the routes
// and the established conneciton with the database
exports.default = app;
//# sourceMappingURL=api.js.map