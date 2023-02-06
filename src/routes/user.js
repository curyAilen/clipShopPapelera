const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const updateProfileAuth = require("../middlewares/updateProfileAuth");
const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require("../middlewares/registerValidations");
const editProfileValidation = require("../middlewares/editProfileValidation");
const editedPasswordValidations = require("../middlewares/editedPasswordValidations");
const updatePasswordAuth = require('../middlewares/updatePasswordAuth');

// Register 
router.get('/registro', usuarioController.register);
router.post('/registro', registerValidations, usuarioController.registerProcess);

// Login
router.get('/login', usuarioController.login);
router.post('/login', loginValidations, usuarioController.loginprocess);

// Profile
router.get('/cuenta', authMiddleware, usuarioController.cuenta);
router.get('/cuenta/editarPerfil/:id', updateProfileAuth, usuarioController.editarPerfil);
router.post('/cuenta/editarPerfil/:id', editProfileValidation, usuarioController.editedPerfil);

// Recuperar Password

router.get("/recuperar", usuarioController.recuperar);

// Link de recuperacion
router.get("/recuperar/:id/:token", usuarioController.recuperarLink);
router.post("/recuperar/:id/:token", editedPasswordValidations, usuarioController.recuperarpost);

//Actualizar Password
router.get('/cuenta/actualizarPassword/:id', updatePasswordAuth, usuarioController.actualizar);
router.post('/cuenta/actualizarPassword/:id', editedPasswordValidations, usuarioController.actualizarPassword);

//Listado Clientes
router.get('/listadoClientes', authMiddleware, usuarioController.listadoClientes);

// Logout
router.get('/logout', usuarioController.logout);

module.exports = router;