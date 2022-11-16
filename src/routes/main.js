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

//Autogestion
router.get('/configBanner', mainController.configbanner);

router.get('/altaBanner', mainController.crearBanner);
router.post('/altaBanner', upload.single('imgBanner'), mainController.altabanner);

router.get('/editBanner', mainController.editBanner);

router.get('/configVoucher', mainController.configVoucher);
router.get('/altaVoucher', mainController.altaVoucher);
router.get('/editVoucher', mainController.editVoucher);



module.exports = router;


