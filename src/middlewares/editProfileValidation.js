const { body } = require("express-validator");
const db = require("../../database/models/index");

const editProfileValidation = [
    body('email')
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debe ser un email valido").bail()
    .custom(async(value, { req }) => {
        return db.Usuario.findOne({
            where: {
                email: value
            }
        }).then(user => {
            if (user && user.idUsuarios != req.params.id) {
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
    .isLength({ min: 5 }).withMessage("Debe tener un mínimo de cinco caracteres")
];

module.exports = editProfileValidation;