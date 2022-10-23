const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const updateProfileAuth = require("../middlewares/updateProfileAuth");
const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require("../middlewares/registerValidations");

// Register 
router.get('/login', guestMiddleware, usuarioController.register);

router.post('/login', registerValidations, usuarioController.registerProcess);

// Login
router.get('/login', guestMiddleware, usuarioController.login);
router.post('/login', loginValidations, usuarioController.loginprocess);


//Cuenta
router.get('/cuenta', authMiddleware, usuarioController.cuenta);

// Logout
router.get('/logout/', usuarioController.logout);

module.exports = router;