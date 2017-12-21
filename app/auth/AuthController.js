// AuthController.js
import express from 'express';
import User from '../models/User';

import jwt from 'jsonwebtoken';
import config from '../../config';

let router = express.Router();

// Making authentication with email and username
const login = (req, res) => {
    User.findOne({ name: req.body.name }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      let emailIsValid = req.body.email.localeCompare(user.email) == 0;
      if (!emailIsValid) return res.status(401).send({ auth: false, token: null, message: 'Incorrect credentials!' });
      let token = jwt.sign({ id: user._id }, config.dev.auth.clientSecret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });
}

export default {
  login
};
