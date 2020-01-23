'use strict'
const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/Auth/authController');
const userController = require('../App/Controllers/User/UserController');
const authMiddleware = require('../Middlewares/auth');

router.post('/authenticate', authController.authenticate);
router.post('/authenticatetoken', authController.authenticateToken);
router.post('/forgotpassword', authController.forgotPassword);

router.put('/resetpassword', authController.resetPassword);

router.use(authMiddleware);
router.post('/register', userController.register);

module.exports = router;
