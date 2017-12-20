"use strict";
// TODO: Search autodocumented functions methods
import express from 'express';
import authController from '../auth/AuthController';

let router = express.Router();

router.post('/login', function(req, res) {
    // authController.login(req.body.email)
    console.log('login in progress');
});

export default router;
