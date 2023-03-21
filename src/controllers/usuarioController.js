const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");
const nodemailer = require('nodemailer');
const db = require("../../database/models/");
const { validationResult } = require("express-validator");
const Op = db.Sequelize.Op;
const Usuarios = db.Usuario;
const Ventas = db.Ventas;
const config = require("../../config");
const jwt = require("jsonwebtoken");

let usuarioController = {
    register: (req, res) => {
        return res.render('login');
    },
    registerProcess: (req, res) => {
        let errores = validationResult(req);

        if (errores.isEmpty()) {
            let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);

            let userID = Usuarios.create({
                nombre: req.body.nombre,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                password: passwordEncriptada
            }).then((userID) => {
                res.redirect("/user/login");
            })
        } else {
            res.render("login", {
                errores: errores.mapped(),
                old: {...req.body, telefono: Number(req.body.telefono) },
                titulo: "Registro",
                registerPage: true
            })
        }
    },

    login: (req, res) => {

        res.render("login", {
            titulo: "Login"
        });
    },

    loginprocess: (req, res) => {
        let loginValidationResult = validationResult(req);

        if (loginValidationResult.errors.length > 0) {
            return res.render('login', {
                errores: loginValidationResult.mapped(),
                old: req.body,

            })
        }

        Usuarios.findOne({
                where: {
                    email: req.body.emaillogin
                }

            }).then((usuario) => {
                if (bcrypt.compareSync(req.body.passwordlogin, usuario.dataValues.password)) {

                    let usuarioLogeado = {
                        idUsuarios: usuario.dataValues.idUsuarios,
                        nombre: usuario.dataValues.nombre,
                        email: usuario.dataValues.email,
                        direccion: usuario.dataValues.direccion,
                        password: usuario.dataValues.password,
                        rol: usuario.dataValues.rol
                    };

                    req.session.login = usuarioLogeado;

                    if (req.body.remember_user) {
                        res.cookie("userCookie", usuarioLogeado, {
                            maxAge: 10000 * 60 * 60 * 24,
                        });
                    }

                    return res.redirect('/user/cuenta');
                } else {
                    res.render('login', {
                        errores: {
                            emaillogin: { msg: 'Clave o Email incorrecto' }
                        },
                        old: req.body
                    })
                }
            })
            .catch(() => {
                res.render('login', {
                    errores: {
                        emaillogin: { msg: 'Clave o Email incorrecto' }
                    },
                    old: req.body
                })
            });
    },

    editarPerfil: (req, res) => {
        Usuarios.findByPk(req.params.id)
            .then(usuario => {

                res.render("editarPerfil", {
                    titulo: "Editar perfil",
                    usuario: usuario
                });
            })
    },

    editedPerfil: async(req, res) => {
        let editValidationResult = validationResult(req);
        const user = await Usuarios.findByPk(req.params.id);

        if (editValidationResult.errors.length > 0) {
            return res.render('editarPerfil', {
                errores: editValidationResult.mapped(),
                old: req.body,
                usuario: user
            })
        }

        if (bcrypt.compareSync(req.body.password, user.dataValues.password)) {
            await Usuarios.update({
                nombre: req.body.nombre,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono
            }, {
                where: {
                    idUsuarios: req.params.id
                },
            })

            const userUpdated = await Usuarios.findByPk(req.params.id);

            req.session.login = userUpdated.dataValues;
            res.clearCookie("userCookie");
            res.redirect("/user/cuenta");
        } else {
            res.render('editarPerfil', {
                titulo: 'Editar Perfil',
                usuario: user,
                old: req.body,
                errorPassword: "Contraseña incorrecta"
            })
        };
    },

    actualizar: (req, res) => {
        Usuarios.findByPk(req.params.id)
            .then(usuario => {
                res.render("actualizarPassword", {
                    titulo: "Actualizar contraseña",
                    usuario: usuario
                });
            })
    },

    actualizarPassword: async(req, res) => {
        let editValidationResult = validationResult(req);
        const user = await Usuarios.findByPk(req.params.id);

        if (editValidationResult.errors.length > 0) {
            return res.render('actualizarPassword', {
                errores: editValidationResult.mapped(),
                titulo: "Actualizar contraseña",
                usuario: user
            })
        }

        let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);
        Usuarios.update({
            password: passwordEncriptada
        }, {
            where: {
                idUsuarios: req.params.id
            }
        }).then((usuario) => {
            res.render('cuenta', {
                usuario: usuario
            })
        })


    },

    logout: (req, res) => {
        res.clearCookie("userCookie");
        req.session.destroy();
        res.redirect("/");
    },
    cuenta: (req, res) => {

        Ventas.findAll({
                group: [
                    ['pedidoNum', 'idUsuarios']
                ],
                [Op.eq]: 'pedidoNum'
            })
            .then(ventasH => {
                res.render("cuenta", {
                    ventasH: ventasH,

                });
            })

    },

    listadoClientes: (req, res) => {
        Usuarios.findAll()
            .then((usuario) => {
                res.render("listadoClientes", {
                    nombre: "Listado de clientes",
                    usuario: usuario
                })
            })
    },

    recuperar: (req, res) => {
        res.render("recuperar");
    },

    recuperarLink: async(req, res) => {
        const { id, token } = req.params;

        const user = await Usuarios.findByPk(id);

        if (!user) {
            return res.redirect("/");
        };

        const secret = config.jwt.secret + user.password;

        try {
            const payload = jwt.verify(token, secret);
            return res.render("recuperarPassword", { email: user.email });
        } catch (error) {
            console.log(error.message);
            return res.redirect("/");
        }
    },

    recuperarpost: async(req, res) => {
        const { id, token } = req.params;
        const { password } = req.body;

        const user = await Usuarios.findByPk(id);

        if (!user) {
            return res.redirect("/");
        };

        let editValidationResult = validationResult(req);

        if (editValidationResult.errors.length > 0) {
            return res.render('recuperarPassword', {
                errores: editValidationResult.mapped(),
                email: user.email
            })
        };

        const secret = config.jwt.secret + user.password;

        try {
            const payload = jwt.verify(token, secret);
            let passwordEncriptada = bcrypt.hashSync(password, 10);

            await Usuarios.update({ password: passwordEncriptada }, { where: { idUsuarios: payload.id, email: payload.email } });

            return res.redirect("/user/login");

        } catch (error) {
            console.log(error.message);
            res.redirect("/");
        }

    },
};

module.exports = usuarioController;