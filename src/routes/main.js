let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.main);
router.get('/nosotros', mainController.nosotros);


module.exports = router;


