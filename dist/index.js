
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appServer = (0, _express2.default)();
// let logger = require('./lib/logger');

// TODO:Will have to get the port from the config
appServer.set('port', process.env.PORT || 3000);

_api2.default.listen(appServer.get('port'), function () {
  //  logger.info("Listening on port",appServer.get('port'));
  console.log("Listening on port", appServer.get('port'));
});

// TODO: Promise received from db conneciton will be handled here
// app.ready.then(function () {
//     app.app.listen(appServer.get('port'), function() {
//         logger.info("Listening on port",appServer.get('port'));
//         console.log("Listening on port",appServer.get('port'));
//     });
// });
//# sourceMappingURL=index.js.map