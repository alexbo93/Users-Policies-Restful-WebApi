'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This will receive request and response from route

var getUsers = function getUsers(req, res) {
  res.status(200).send('List of users in progress');
};

var getUsersByID = function getUsersByID(req, res) {
  res.status(200).send('User with ID: ' + req.params.id + ' is in progress');
};

var getUsersByPolicyNumber = function getUsersByPolicyNumber(req, res) {
  res.status(200).send('User with policy ID: ' + req.params.policyId + ' is in progress');
};

exports.default = {
  getUsers: getUsers,
  getUsersByID: getUsersByID,
  getUsersByPolicyNumber: getUsersByPolicyNumber
};
//# sourceMappingURL=UsersController.js.map