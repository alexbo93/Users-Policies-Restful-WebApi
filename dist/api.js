"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// TODO: Set initial config
// let config = index.dev;
//
// if(app.get('env') === 'production') {
//     config = index.prod;
// }else if (app.get('env') === 'integration') {
//     config = index.int;
// }

// TODO: Create and enable connection to the database
// let db_ready = new db.connect(config.mssql).then(function () {
//     logger.info('Database connection pool ready');
// })

// Will have to get the port from the config
app.use('/', _routes2.default);

// Export the app object with the connections and the routes
// and the established conneciton with the database
exports.default = app;
//# sourceMappingURL=api.js.map