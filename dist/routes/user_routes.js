"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UsersController = require('../controllers/UsersController');

var _UsersController2 = _interopRequireDefault(_UsersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  _UsersController2.default.getUsers(req, res);
});

router.get('/:id', function (req, res) {
  _UsersController2.default.getUsersByID(req, res);
});

router.get('/policy/:policyId', function (req, res) {
  _UsersController2.default.getUsersByPolicyNumber(req, res);
});

exports.default = router;
//# sourceMappingURL=user_routes.js.map