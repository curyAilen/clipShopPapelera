const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');



// Register 
router.get('/registro', usuarioController.register);
router.post('/registro', usuarioController.registerProcess);

// Login
router.get('/login', usuarioController.login);
router.post('/login', usuarioController.loginprocess);


// Profile
router.get('/cuenta', usuarioController.cuenta);
//router.get('/cuenta/edit/:id', updateProfileAuth, usuarioController.editprofile);

// Logout
router.get('/logout', usuarioController.logout);

module.exports = router;