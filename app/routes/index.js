"use strict";
import express from 'express';
import userRoutes from './user_routes';
import policyRoutes from './policy_routes';
import authRoutes from './auth_routes';

let router = express.Router();

router.use('/users', userRoutes);
router.use('/policies', policyRoutes);
router.use('/auth', authRoutes);

// Let's export routes for each object
export default router;
