import User from '../models/User';
import Policy from '../models/Policy';
import async from 'async';

// This will receive request and response from route

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
}

const getUsersByID = (req, res) => {
  // res.status(200).send(`User with ID: ${req.params.id} is in progress`);
  User.findById(req.params.id, (err, user) => {
      if (err) return res.status(500).send(err);
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
}

const getUsersByName = (req, res) => {
  // res.status(200).send(`User with ID: ${req.params.id} is in progress`);
  User.find({name: req.params.name}, (err, user) => {
      if (err) return res.status(500).send(err);
      if (!user || user.length==0) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
}

const getUserByPolicyNumber = (req, res) => {
  // Async waterfall is an utility for the async library that allows
  // to execute arrays of functions in a serie, passing the result of each
  // function to the next one.
  // ref: https://github.com/caolan/async/blob/master/lib/waterfall.js
  async.waterfall(
    [
        (callback) => {
          Policy.findById(req.params.policyId, { "clientId": 1, "_id": 0 }, callback);
        },
        (result, callback) => {
          if (!result || result.length==0) return res.status(404).send("No policies found with this Id.");
          User.findById(result.clientId, callback)
        }
    ],
    function(err,user) {
       if (err) return res.status(500).send(err);
       if (!user || user.length==0) return res.status(404).send("No user found.");
       res.status(200).send(user);
    }
  )
}

export default {
  getUsers,
  getUsersByID,
  getUsersByName,
  getUserByPolicyNumber
};
