let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({ 
    destination: (req, file,cb)=>{
        cb(null, path.join(__dirname, '../../public/images/imgBanner'))
    },
    filename: (req, file,cb)=>{
        console.log(file)
        const newFileName = 'Banner' +  Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    } 
  });

const upload = multer({storage});

router.get('/', mainController.main);
router.get('/nosotros', mainController.nosotros);


// Obtenemos carrito de compra
router.get('/carrito', mainController.carrito);
router.post('/agregarProducto/:id',upload.single('imgProd'), mainController.agregarproducto);
 
//Autogestion Banner
router.get('/configBanner', mainController.configbanner);

//crear
router.get('/altaBanner', mainController.crearBanner);
router.post('/altaBanner', upload.single('imgBanner'), mainController.altabanner);

//Editar
router.get('/editBanner/:id', mainController.editBanner);
router.post('/editBanner/:id',upload.single('imgBanner'), mainController.editBanner);

//Borrar
router.delete('/eliminarBanner/:id', mainController.deleteBanner);

//Autogestion Voucher
router.get('/configVoucher', mainController.configVoucher);

//Crear
router.get('/altaVoucher', mainController.crearVoucher);
router.post('/altaVoucher', mainController.altaVoucher);

//Editar
router.get('/editVoucher/:id', mainController.editVoucher);
router.post('/editVoucher/:id', mainController.editedVoucher);

//Borrar
router.delete('/eliminar/:id', mainController.deleteVoucher);



module.exports = router;


