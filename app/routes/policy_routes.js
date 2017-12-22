"use strict";
import express from 'express';
import policiesController from '../controllers/PoliciesController';
import verifyToken from '../auth/VerifyToken';
import verifyRole from '../auth/VerifyRole';

let router = express.Router();

router.get('/', verifyToken, (req, res) => {
  policiesController.getPolicies(req, res);
});

// Get list of policies related with userID
router.get('/user/:user_name', verifyToken, verifyRole, (req, res) => {
  policiesController.getPoliciesByUserName(req, res);
});

// export default router with all the gets, not function
export default router;
