"use strict";
import Policy from '../models/Policy';

// This will receive request and response from route
const getPolicies = (req, res) => {
  res.status(200).send('List of policies in progress');
}

const getPoliciesByUserID = (req, res) => {
  console.log('res: ',res);
  console.log('req: ',req);
  console.log('req.params: ',req.params);
  res.status(200).send(`Policies for User with ID: ${req.params.user} is in progress`);
}

export default {
  getPolicies,
  getPoliciesByUserID
};
