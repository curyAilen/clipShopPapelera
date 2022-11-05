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
  
		let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);

      let userID = Usuarios.create({
          nombre: req.body.nombre,
          email: req.body.email,
          direccion: req.body.direccion,
          telefono: req.body.telefono,
          password: passwordEncriptada 
        }
      ).then((userID)=>{
  
        res.redirect("/user/login");
      })    
		} else {
		res.render("login", {
			errores: errores.errores,
			old: req.body,
			titulo: "Registro"
		})

		}
},
loginprocess: (req, res) => {
 
  let loginValidationResult = validationResult(req);

  if (loginValidationResult.isEmpty()) {
    return res.render('login', {
      errores: loginValidationResult.mapped(),
      old: req.body,
      titulo: "Login",
      css: "estiloLogin.css"
    })
  }
  Usuarios.findOne({
    where: {
      email: req.body.email
    }
  }).then((usuario) => {

    if ( bcrypt.compareSync( req.body.password, usuario.password)) {      
      let usuarioLogeado = {
        nombre: usuario.nombre,
        email: usuario.email,
        direccion: usuario.direccion,
        telefono: usuario.telefono,       
        rol: usuario.rol
      }
      req.session.login = usuarioLogeado;

      if (req.body.remember_user) {
        res.cookie("userCookie", usuarioLogeado, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }

      return res.redirect("/");
    } else {
      console.log("entro")
      res.render('login', {
        error: 'Clave o Email incorrecto',
        old: req.body,
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
