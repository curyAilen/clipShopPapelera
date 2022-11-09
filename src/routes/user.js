const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const updateProfileAuth = require("../middlewares/updateProfileAuth");
const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require("../middlewares/registerValidations");


// Register 
router.get('/registro',  usuarioController.register);
router.post('/registro', registerValidations, usuarioController.registerProcess);

// Login
router.get('/login', usuarioController.login);
router.post('/login',loginValidations, usuarioController.loginprocess);


// Profile
router.get('/cuenta', authMiddleware, usuarioController.cuenta);
//router.get('/cuenta/editar/:id', updateProfileAuth, usuarioController.editprofile);
//router.post('/cuenta/editar/:id', uploadFile.single('updateprofilephoto'), usuarioController.editedprofile);

// Logout
router.get('/logout', usuarioController.logout);

module.exports = router;