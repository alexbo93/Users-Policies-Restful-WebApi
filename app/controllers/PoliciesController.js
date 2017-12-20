"use strict";
import Policy from '../models/Policy';

// This will receive request and response from route
const getPolicies = (req, res) => {
  // res.status(200).send('List of policies in progress');
  Policy.find({}, (err, policies) => {
      if (err) return res.status(500).send("There was a problem finding the policies.");
      res.status(200).send(policies);
  });
}

const getPoliciesByUserID = (req, res) => {
  Policy.find({clientId: req.params.user}, (err, policies) => {
    if (err) return res.status(500).send(err);
    if (!policies || policies.length==0) return res.status(404).send("No policies found.");
    res.status(200).send(policies);
  });
}

export default {
  getPolicies,
  getPoliciesByUserID
};
