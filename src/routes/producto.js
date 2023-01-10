const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require ('path');
const productoController = require('../controllers/productoController');


const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, path.join(__dirname, '../../public/images/imgProd'))
    },
    filename: (req, file,cb)=>{
        console.log(file)
        const newFileName = 'Producto' +  Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    } 
  });
const upload = multer({storage});
 
//listado productos
router.get('/', productoController.mostrarTienda);
router.get('/embalajes', productoController.buscadorEmbalaje);
router.get('/organizadores', productoController.buscadorOrganizadores);
router.get('/rollosDePapel', productoController.buscadorRollosPapel);
router.get('/etiquetas', productoController.buscadorEtiquetas);

//Crear un producto nuevo 
router.get('/altaProducto', productoController.crearProd);
router.post('/altaProducto', upload.single('imgProd'), productoController.ingresaProducto);
 
//detalle productos
router.get('/detalle/:id', productoController.detalleProducto);

//Modificar Producto
router.get('/editProducto/:id', productoController.edit);
router.post('/editProducto/:id', upload.single('imgProd'),productoController.edited)

//Borrar Producto
router.delete('/:id', productoController.delete);

module.exports = router;