const { body } = require("express-validator");
const db = require("../../database/models/index");

const registerValidations = [
    body('email')
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Debe ser un email valido").bail()
        .custom(async (value) => {
            return db.Usuario.findOne({
                where: {
                    userEmail: value
                }
            }).then(user =>{
                if (user) {
                    return Promise.reject("Email uso");
                } 
            })
        }).withMessage("Este email ya esta en uso"),

    body('passwordRegister')
        .trim()
        .notEmpty().withMessage("Debes ingresar una clave").bail()
        .isLength({ min: 8 }).withMessage("La clave debe tener como minimo 8 caracteres").bail(),

    body('passwordRegisterConfirm')
        .trim()
        .notEmpty().withMessage("Debes confirmar la clave").bail()
        .custom( (value, { req }) => {
            let clave = req.body.clave;
            return clave == value
        }).withMessage("Las contrasenias no coinciden"),

        body('direccion')
        .notEmpty().withMessage("Debes ingresar una dirección de entrega").bail()
        .isLength({ min: 8}).withMessage("Debe tener un minimo de 10 caracteres"),

    
];

module.exports = registerValidations;