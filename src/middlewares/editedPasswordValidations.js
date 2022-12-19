const { body } = require("express-validator");
const db = require("../../database/models");

const editedPasswordValidations = [
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
    }).withMessage("Las contrasenias no coinciden"),

];

module.exports = editedPasswordValidations;