// Librerías, módulos, variables, etc.
const express = require('express');
const app = express();
const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");
const rutasMain = require('./src/routes/main.js');
const rutasProducto = require('./src/routes/producto.js');
const rutasUsers = require('./src/routes/user.js');
const rutasContacto = require("./src/routes/contacto.js");
const userLogged = require('./src/middlewares/userloggedMiddleware');
const adminMiddleware = require('./src/middlewares/adminMiddleware');
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');

//Cokkies
app.use(session(
    {secret: 'Secreto',
    resave: false,
    saveUninitialized: false}));
app.use(cookies());

//Middlewares globales
app.use(userLogged);
app.use(adminMiddleware);

// Configuración vista y form
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));

//Carpetas
app.use('/', express.static(__dirname + '/public/'));
app.use('/images', express.static(__dirname + '/public/images'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))

// Rutas
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', rutasMain);
app.use('/user', rutasUsers);
app.use('/tienda', rutasProducto);
app.use('/contacto', rutasContacto);

// Ruta de page not found (404)

app.use((req,res,next) => {

    res.status(404).render('notFound',{
        titulo: 'Not Found',
        css: 'estiloNotFound.css'
    });

});
// Levantar el server
const puerto = 3001;
app.listen(puerto, () => {
    console.log("servidor corriendo en localhost:" + puerto);
})