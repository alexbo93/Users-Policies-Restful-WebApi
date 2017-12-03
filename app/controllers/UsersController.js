import User from '../models/User';

// This will receive request and response from route

const getUsers = (req, res) => {
  res.status(200).send('List of users in progress');
}

const getUsersByID = (req, res) => {
  res.status(200).send(`User with ID: ${req.params.id} is in progress`);
}

const getUsersByPolicyNumber = (req, res) => {
  res.status(200).send(`User with policy ID: ${req.params.policyId} is in progress`);
}

export default {
  getUsers,
  getUsersByID,
  getUsersByPolicyNumber
};
