const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const Op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');
const {	validationResult} = require('express-validator');
const usuarios = db.Usuarios


let usuarioController = {
register: (req, res) => {
		return res.render('login');
	},
registerProcess: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
		let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);
		usuarios.create({
			nombre: req.body.nombre,
			telefono: req.body.telefono,
			mail: req.body.mailRegister,
			
			direccion: req.body.direccionRegister,
			userPassword: passwordEncriptada,
			rol: user
		});
	
		res.redirect("/login");
		} else {
		res.render("login", {
			errors: errors.errors,
			old: req.body,
			titulo: "Registro",
			css: "estiloRegistro.css",
		})
		console.log("se registro correctamete")
		}
},
loginprocess: (req, res) => {

		let loginValidationResult = validationResult(req);
	
		if (loginValidationResult.errors.length > 0) {
		return res.render('login', {
			errores: loginValidationResult.mapped(),
			oldData: req.body,
		
		})
		}	
		usuarios.findOne({
		where: {
			userEmail: req.body.usuarioLogin
		}
		}).then((usuario) => {
		if (
			bcrypt.compareSync(
			req.body.passwordLogin,
			usuario.password
			)) 
			{
			let usuarioLogeado = {			
			direccion: usuario.direcion,
			email: usuario.email,
			rol: usuario.rol
			};
	
			req.session.login = usuarioLogeado;
	
			if (req.body.recordarme) {
			res.cookie("userCookie", usuarioLogeado, {
				maxAge: 1000 * 60 * 60 * 24,
			});
			}
			console.log("se Logueo correctamete");
			return res.redirect("/");
		} else {
			res.render('login', {
			error: 'Clave o Email incorrecto',
			oldData: req.body,
			
			})
	
		}
		})
		.catch(() => {
			res.render('login', {
			error: 'Clave o Email incorrecto',
			oldData: req.body,
		
			})
		});
	},
login: (req, res) => {
		res.render("login", {
		titulo: "Login",
		css: "estiloLogin.css",
		});
	},
	
logout: (req, res) => {
		res.clearCookie("userCookie");
		req.session.destroy();
		res.redirect("/");
	},
cuenta:(req, res)=>{
    res.render('cuenta', {
	titulo: "Login",
    css: "estiloLogin.css",
    })
}
};

module.exports = usuarioController;
