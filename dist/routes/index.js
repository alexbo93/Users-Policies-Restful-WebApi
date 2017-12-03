"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user_routes = require('./user_routes');

var _user_routes2 = _interopRequireDefault(_user_routes);

var _policy_routes = require('./policy_routes');

var _policy_routes2 = _interopRequireDefault(_policy_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function routes(app, db) {
//   userRoutes(app, db);
//   policyRoutes(app, db);
// };

var router = _express2.default.Router();

router.use('/users', _user_routes2.default);
router.use('/policies', _policy_routes2.default);

// Let's export routes for each object
exports.default = router;
//# sourceMappingURL=index.js.map