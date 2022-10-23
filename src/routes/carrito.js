const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productoController = require('../controllers/productoController');

router.get('/', productoController.carrito);

module.exports = router;