"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Policy = require('../models/Policy');

var _Policy2 = _interopRequireDefault(_Policy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This will receive request and response from route
var getPolicies = function getPolicies(req, res) {
  res.status(200).send('List of policies in progress');
};

var getPoliciesByUserID = function getPoliciesByUserID(req, res) {
  console.log('res: ', res);
  console.log('req: ', req);
  console.log('req.params: ', req.params);
  res.status(200).send('Policies for User with ID: ' + req.params.user + ' is in progress');
};

exports.default = {
  getPolicies: getPolicies,
  getPoliciesByUserID: getPoliciesByUserID
};
//# sourceMappingURL=PoliciesController.js.map