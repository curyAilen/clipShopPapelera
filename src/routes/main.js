let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.main);
router.get('/nosotros', mainController.nosotros);

//Autogestion
router.get('/ModificarBanner', mainController.formularioBanner);
router.post('/ModificarBanner', mainController.editBanner);

router.get('/ModificarVoucher', mainController.formularioVoucher);
router.post('/ModificarVoucher', mainController.editVoucher);



module.exports = router;


