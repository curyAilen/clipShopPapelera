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

login: (req, res) => {
  res.render("login", {
  titulo: "Login"
  });
},

loginprocess: (req, res) => {
  let loginValidationResult = validationResult(req);
  if (!loginValidationResult.isEmpty()) {    
    return res.render('login', {
      errores: loginValidationResult.mapped(),
      old: req.body,    
    })}
  
  Usuarios.findOne({
    where: {
      email: req.body.email
    }
  }).then((usuario) => {
  
    if ( bcrypt.compareSync( req.body.password, usuario.dataValues.password)) {    
    
      let usuarioLogeado = {
        idUsuarios: usuario.idUsuarios,
        nombre: usuario.nombre,
        email: usuario.email,
        direccion: usuario.direccion,
        FKCodigoPostal: usuario.cp,
        password: usuario.password,
        rol: usuario.rol
      };
      req.session.login = usuarioLogeado;
      if (req.body.remember_user) {
        res.cookie("userCookie", usuarioLogeado, {
          maxAge: 10000 * 60 * 60 * 24,
        });
      }
      return res.render('home')
    } else {
      console.log("No se logueo")  
      res.render('login', {
        error: 'Clave o Email incorrecto',
        old: req.body,
        titulo: 'Login',
        css: 'estiloLogin.css'
      })
    }
  })
    .catch(() => {
      res.render('login', {
        error: 'Clave o Email incorrecto',
        oldData: req.body,
        titulo: 'Login',
        css: 'estiloLogin.css'
      })
    });
},

editarPerfil: (req, res) => {
  Usuarios.findByPk(req.params.id)
    .then(usuario => {
      console.log(usuario.nombre)
      res.render("editarPerfil", {
        titulo: "Editar perfil",
        usuario: usuario
      });
    })
},

editedPerfil: (req, res) => {
  let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);s
  Usuarios.update({
    nombre: req.body.nombre,
    email: req.body.email,
    direccion: req.body.direccion,
    telefono: req.body.telefono
  }, {
    where: {
      idUsuarios: req.params.id
    }
  }).then((usuario)=>{
    res.render('cuenta', {
      titulo: "Perfil",
        css: "estiloLogin.css",
        })
  })  
	res.clearCookie("userCookie");
	req.session.destroy();
  res.redirect("/user/login");
},
actualizar: (req, res)=>{
  Usuarios.findByPk(req.params.id)
  .then(usuario => { 
    res.render("actualizarPassword", {
      titulo: "Actualizar contraseña",
      usuario: usuario
    });
  })
},
//////////////EN PROCESO////////////////////////////////
actualizarPassword: (req, res) => {
  let passwordEncriptada = bcrypt.hashSync(req.body.password, 10);
  Usuarios.findOne({
    where: {
      email: req.body.email
    }
  }).then((usuario) => {
  
    if ( bcrypt.compareSync( req.body.password, usuario.dataValues.password)) {    
    
      Usuarios.update({
        password: req.body.password
      }, {
        where: {
          idUsuarios: req.params.id
        }
      }).then((usuario)=>{
        return res.render('home')
      })     
      
    } else {
      console.log("no coinciden contraseñas")  
      res.render('actualziarPassword', {
        error: 'Clave o Email incorrecto',
        old: req.body,
        titulo: 'Login',
        css: 'estiloLogin.css'
      })
    }
  })
    .catch(() => {
      res.render('login', {
        error: 'Clave o Email incorrecto',
        oldData: req.body,
        titulo: 'Login',
        css: 'estiloLogin.css'
      })
    });





  Usuarios.update({
    password: req.body.password
  }, {
    where: {
      idUsuarios: req.params.id
    }
  }).then((usuario)=>{
    res.render('cuenta', {
      titulo: "Perfil",
        css: "estiloLogin.css",
        })
  })  
	res.clearCookie("userCookie");
	req.session.destroy();
  res.redirect("/user/login");


},
/////////////////////////////////////////////////
	
logout: (req, res) => {
		res.clearCookie("userCookie");
		req.session.destroy();
		res.redirect("/");
	},

cuenta:(req, res)=>{
    res.render('cuenta', {
	titulo: "Perfil",
    css: "estiloLogin.css",
    })
},
listadoClientes:(req, res)=>{
  Usuarios.findAll()
  .then((usuario) => {
    res.render("listadoClientes", {
      nombre: "Listado de clientes",
      usuario: usuario
    })
  })
},
};

module.exports = usuarioController;
