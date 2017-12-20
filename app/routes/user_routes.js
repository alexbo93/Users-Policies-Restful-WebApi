"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available
import express from 'express';
import userController from '../controllers/UsersController';

let router = express.Router();

router.get('/', (req, res) => {
  userController.getUsers(req, res);
});

router.get('/:id', (req, res, next) => {
  // Check if parameter is not a number (searching by name)
  const isID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(req.params.id);
  console.log('isID: ',isID);
  isID ? userController.getUsersByID(req, res) : next('route');
});

router.get('/:name', (req, res) => {
  userController.getUsersByName(req, res);
});

router.get('/policy/:policyId', (req, res) => {
  userController.getUserByPolicyNumber(req, res);
});

export default router;
