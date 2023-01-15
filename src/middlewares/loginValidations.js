const { body, validationResult } = require("express-validator");

const loginValidations = [
    body('emaillogin')
    .notEmpty().withMessage('Ingrese un Email').bail()
    .isEmail().withMessage("Escriba un formato de correo electrónico válido"),

    body('passwordlogin')
    .notEmpty().withMessage('Ingrese la contraseña')
];

module.exports = loginValidations;