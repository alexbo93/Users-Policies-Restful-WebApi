"use strict";
import express from 'express';
import authController from '../auth/AuthController';
import verifyToken from '../auth/VerifyToken';

let router = express.Router();

router.post('/login', (req, res) => {
    authController.login(req, res)
});

// Normally this is done in client side cleaning cookies (where tokens are
// usually stored)
router.get('/logout', verifyToken, (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

export default router;
