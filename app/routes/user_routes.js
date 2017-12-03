"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available
import express from 'express';
import userController from '../controllers/UsersController';

let router = express.Router();

router.get('/', (req, res) => {
  userController.getUsers(req, res);
});

router.get('/:id', (req, res) => {
  userController.getUsersByID(req, res);
});

router.get('/policy/:policyId', (req, res) => {
  userController.getUsersByPolicyNumber(req, res);
});

export default router;
