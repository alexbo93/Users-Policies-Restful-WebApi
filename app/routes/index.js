"use strict";
import express from 'express';
import userRoutes from './user_routes';
import policyRoutes from './policy_routes';

// function routes(app, db) {
//   userRoutes(app, db);
//   policyRoutes(app, db);
// };

let router = express.Router();

router.use('/users', userRoutes);
router.use('/policies', policyRoutes);

// Let's export routes for each object
export default router;
