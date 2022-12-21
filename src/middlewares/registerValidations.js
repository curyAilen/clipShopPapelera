const { body } = require("express-validator");
const db = require("../../database/models/index");


const registerValidations = [
    body('email')
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debe ser un email valido").bail()
    .custom(async(value) => {
        return db.Usuario.findOne({
            where: {
                email: value
            }
        }).then(user => {
            if (user) {
                return Promise.reject("Email uso");
            }
        })
    })
    .withMessage("Este email ya esta en uso"),

    body('nombre')
    .notEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLength({ min: 2 }).withMessage("Debe tener un minimo de dos caracteres"),

    body('direccion')
    .notEmpty().withMessage("Debes ingresar una dirección de entrega").bail()
    .isLength({ min: 2 }).withMessage("Debe tener un mínimo de dos caracteres"),

    body('email')
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debe ser un email valido"),

    body('password')
    .trim()
    .notEmpty().withMessage("Debes ingresar una clave").bail()
    .isLength({ min: 4 }).withMessage("La clave debe tener como minimo 4 caracteres").bail(),

    body('re-clave')
    .trim()
    .notEmpty().withMessage("Debes confirmar la clave").bail()
    .custom((value, { req }) => {
        let clave = req.body.password;
        return clave == value
    })
    .withMessage("Las contraseñas no coinciden"),

];

module.exports = registerValidations;