const db = require('../../database/models/');

function updateProfileAuth(req, res, next) {
    
    // Si no esta logueado, no permite entrar
    if (!req.session.login) {
        res.redirect('/user/login');
    }

    let updateID = req.params.id;

    db.Usuario.findOne({
        where: {
            email: req.session.login.email
        }
    })
    .then((usuario) =>{
        if (usuario.idUsuarios != updateID) {
            res.redirect(`/user/cuenta/editar/${usuario.id_usuario}`)
        }
    });

    next();
}

module.exports = updateProfileAuth;