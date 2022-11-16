const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const Banner = db.Banner;

let mainController = {
    main: (req, res) => {
        res.render('home', {
            titulo: 'HOME'

        });
    },
    nosotros: (req, res) => {
        res.render('nosotros', {
            titulo: 'nosotros'
        });
    },
    configbanner: (req, res) => {
        res.render('configBanner', {
            titulo: ''
        });
    },
    crearBanner: (req, res) => {
        Banner.findAll()
        .then((banner) => {
            res.render("altaBanner", {
                titulo: "Ingresar nuevo banner",
                banner: banner
            });
        });
    
    },
    altabanner: (req, res) => {            
        Banner.create({
            banner: req.file.filename               
            }).then((newBanner) => {
                res.redirect("/configBanner");
            })       
    },
    editBanner: (req, res) => {
        res.render('editBanner', {
            titulo: ''
        });
    },
    configVoucher: (req, res) => {
        res.render('configVoucher', {
            titulo: ''
        });
    },
    altaVoucher: (req, res) => {
        res.render('altaVoucher', {
            titulo: ''
        });
    },
    editVoucher: (req, res) => {
        res.render('editVoucher', {
            titulo: ''
        });
    },

}

module.exports = mainController;