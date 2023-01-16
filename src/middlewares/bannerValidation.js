const { body } = require("express-validator");

const bannerValidation = [
    body('imgBanner')
  .custom((value, { req })=>{
      if (req.file) {
        if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg'){
            return true; 
        }else{
            return false; 
        }
      } else {
        return false;
      }
      
  }).withMessage("Debes subir un banner con uno de los siguientes formatos: png, jpg o jpeg")

];

module.exports = bannerValidation;