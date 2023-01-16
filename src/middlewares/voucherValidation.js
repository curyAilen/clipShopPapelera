const { body } = require("express-validator");

const voucherValidation = [
    body("voucher")
        .notEmpty().withMessage("Debes ingresar un nombre para tu voucher").bail(),
    body("valor")
        .notEmpty().withMessage("Debes ingresar un valor").bail()
        .isInt({ min: 1, max: 100 }).withMessage("Debes ingresar un numero entre 1 y 100")
];

module.exports = voucherValidation;