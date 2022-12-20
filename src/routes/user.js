const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const updateProfileAuth = require("../middlewares/updateProfileAuth");
const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require("../middlewares/registerValidations");
const editedPasswordValidations = require("../middlewares/editedPasswordValidations");


// Register 
router.get('/registro', usuarioController.register);
router.post('/registro', registerValidations, usuarioController.registerProcess);

// Login
router.get('/login', usuarioController.login);
router.post('/login', loginValidations, usuarioController.loginprocess);


// Profile
router.get('/cuenta', authMiddleware, usuarioController.cuenta);
router.get('/cuenta/editarPerfil/:id', updateProfileAuth, usuarioController.editarPerfil);
router.post('/cuenta/editarPerfil/:id', usuarioController.editedPerfil);

//Actualizar Password
router.get('/cuenta/actualizarPassword/:id', usuarioController.actualizar);
router.post('/cuenta/actualizarPassword/:id', editedPasswordValidations, usuarioController.actualizarPassword);

//Listado Clientes
router.get('/listadoClientes', authMiddleware, usuarioController.listadoClientes);



// Logout
router.get('/logout', usuarioController.logout);

module.exports = router;