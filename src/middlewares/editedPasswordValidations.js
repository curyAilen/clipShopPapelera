const { body } = require("express-validator");
const db = require("../../database/models");

const editedPasswordValidations = [
    body('password')
    .trim()
    .notEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({ min: 8 }).withMessage("La contraseña debe tener como minimo 8 caracteres").bail(),
    body('confirmpassword')
    .trim()
    .notEmpty().withMessage("Debes confirmar la contraseña").bail()
    .custom((value, { req }) => {
        let clave = req.body.password;
        return clave == value
    }).withMessage("Las contraseñas no coinciden"),
];

module.exports = editedPasswordValidations;