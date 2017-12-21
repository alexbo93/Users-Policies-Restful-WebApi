"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available
import express from 'express';
import userController from '../controllers/UsersController';
import verifyToken from '../auth/VerifyToken'
import verifyRole from '../auth/VerifyRole';

let router = express.Router();

router.get('/', verifyToken, (req, res) => {
  userController.getUsers(req, res);
});

router.get('/:id', verifyToken, (req, res, next) => {
  // Check if parameter is not a number (searching by name)
  const isID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(req.params.id);
  isID ? userController.getUsersByID(req, res) : next('route');
});

router.get('/:name', verifyToken, (req, res) => {
  userController.getUsersByName(req, res);
});

router.get('/policy/:policyId', verifyToken, verifyRole, (req, res) => {
  userController.getUserByPolicyNumber(req, res);
});

export default router;
