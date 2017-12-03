"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Policy = require('../models/Policy');

var _Policy2 = _interopRequireDefault(_Policy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This will receive request and response from route
var PoliciesController = function PoliciesController(req, res) {
  function getPolicies(req, res) {
    res.status(200).send('List of policies in progress');
  }

  function getPoliciesByUserID(req, res) {
    res.status(200).send('Policies for User with ID: ' + req.params.id + ' is in progress');
  }
};

exports.default = PoliciesController;
//# sourceMappingURL=PoliciesController.js.map