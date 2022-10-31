const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");
const db = require("../../database/models/");
const { validationResult } = require("express-validator");
const Op = db.Sequelize.Op;
const Usuarios = db.Usuario;


let usuarioController = {
register: (req, res) => {
		return res.render('login');
	},
registerProcess: (req, res) => {
		let errores = validationResult(req);
		if (errores.isEmpty()) {
		//let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);
    console.log(req.body)
    console.log(req.body.nombre)
    let userID = Usuarios.create({
        nombre: req.body.nombre,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        FKCodigoPostal: req.body.cp,
        password: req.body.clave

      }
    )	
		res.redirect("/perfil/" + userID);
		} else {
		res.render("login", {
			errores: errores.errores,
			old: req.body,
			titulo: "Registro"
		})
		console.log(errores)
		}
},
loginprocess: (req, res) => {

    let loginValidationResult = validationResult(req);

    if (loginValidationResult.errors.length > 0) {
    return res.render('login', {
        errores: loginValidationResult.mapped(),
        oldData: req.body
    })
    }

    Usuarios.findOne({
      where: {
        email: req.body.emailLogin
      }
    }).then((usuario) => {
      if (
        bcrypt.compareSync(
          req.body.passwordLogin,
          usuario.password
        )
      ) {
        let usuarioLogeado = {
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
        };

        req.session.login = usuarioLogeado;

        if (req.body.recordarme) {
          res.cookie("userCookie", usuarioLogeado, {
            maxAge: 1000 * 60 * 60 * 24,
          });
        }

        return res.redirect("/");
      } else {
        res.render('login', {
          error: 'Clave o Email incorrecto',
          oldData: req.body,
          titulo: 'Login',
          css: 'estiloLogin.css'
        })

      }
    }

    )
      .catch(() => {
        res.render('login', {
          error: 'Clave o Email incorrecto',
          oldData: req.body,
          titulo: 'Login',
          css: 'estiloLogin.css'
        })
      }
      )
      ;
  },
login: (req, res) => {
		res.render("login", {
		titulo: "Login"
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
