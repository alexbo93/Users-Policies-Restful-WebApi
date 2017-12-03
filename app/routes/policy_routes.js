"use strict";
// TODO: Search autodocumented functions methods
// TODO: export models to have instances methods available
import express from 'express';
import policiesController from '../controllers/PoliciesController';

let router = express.Router();

router.get('/', (req, res) => {
  policiesController.getPolicies(req, res);
});

// Get list of policies related with userID
router.get('/:user', (req, res) => {
  policiesController.getPoliciesByUserID(req, res);
});

// export default router with all the gets, not function
export default router;
