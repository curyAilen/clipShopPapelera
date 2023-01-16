const { body } = require("express-validator");

const productValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("Debes ingresar un nombre").bail()
    .isLength({ min: 5 })
    .withMessage("Debes ingresar un mínimo de 5 caracteres"),
  body("categoria")
    .custom(value => {
      return value != 0;
    })
    .withMessage("Debes ingresar una categoria"),
  body("precio")
  .notEmpty()
  .withMessage("El producto debe tener un precio"),

  body("filtro")
  .notEmpty()
  .withMessage("Debes agregar un filtro"),

  body("subfiltro")
  .notEmpty()
  .withMessage("Debes agregar un subfiltro"),

  body('imgProd')
  .custom((value, { req })=>{
      if (req.body.imagenOriginal && !req.file) {
        return true;
      };

      if (!req.file) {
        return false;
      };

      if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg'){
          return '.png'; 
      }else{
          return false; 
      }
      
  }).withMessage("Debes subir una imagen con uno de los siguientes formatos: png, jpg o jpeg")

];

module.exports = productValidation;
