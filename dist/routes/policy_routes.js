"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _PoliciesController = require('../controllers/PoliciesController');

var _PoliciesController2 = _interopRequireDefault(_PoliciesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  _PoliciesController2.default.getPolicies(req, res);
});

// Get list of policies related with userID
router.get('/:user', function (req, res) {
  _PoliciesController2.default.getPoliciesByUserID(req, res);
});

// export default router with all the gets, not function
exports.default = router;
//# sourceMappingURL=policy_routes.js.map