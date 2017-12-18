import User from '../models/User';

// This will receive request and response from route

const getUsers = (req, res) => {
  // res.status(200).send('List of users in progress');
  User.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
}

const getUsersByID = (req, res) => {
  // res.status(200).send(`User with ID: ${req.params.id} is in progress`);
  User.findById(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.",err);
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
}

const getUsersByPolicyNumber = (req, res) => {
  res.status(200).send(`User with policy ID: ${req.params.policyId} is in progress`);
}

export default {
  getUsers,
  getUsersByID,
  getUsersByPolicyNumber
};
