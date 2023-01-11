const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const Banner = db.Banner;
const Voucher = db.Voucher;
const Producto = db.Producto;

let mainController = {
    main: (req, res) => {
        Producto.findAll().then((producto) => {
            Banner.findAll().then((banner) => {
           
                res.render('home', {
                    titulo: 'HOME',
                    banner: banner,
                    producto: producto
                  
                });

            })

        })
    },
    nosotros: (req, res) => {
        res.render('nosotros', {
            titulo: 'nosotros'
        });
    },
    configbanner: (req, res) => {
        Banner.findAll()
            .then((banner) => {
                res.render('configBanner', {
                    titulo: '',
                    banner: banner
                });
            })

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
        Banner.findByPk(req.params.id)

        .then((banner) => {
            res.render('editBanner', {
                titulo: 'Edición de banners',
                banner: banner
            });
        })
    },
    editedBanner: (req, res) => {
        let imagen = req.body.imagenOriginal;

        if (req.file) {
            banner = req.file.filename;    
        }
        Banner.update({
                imagen: imagen,
            }, {
                where: {
                    idBanners: req.params.id,
                },
            })
            .then((banner) => {
                res.redirect("/");

            })
    },
    deleteBanner: (req, res) => {
        Banner.destroy({
            where: { idBanners: req.params.id },
        });
        res.redirect("/");
    },
    configVoucher: (req, res) => {
        Voucher.findAll()
            .then((voucher) => {
                res.render('configVoucher', {
                    titulo: '',
                    voucher: voucher
                });
            })
    },
    crearVoucher: (req, res) => {
        Voucher.findAll()
            .then((voucher) => {
                res.render("altaVoucher", {
                    titulo: "Ingresar nuevo voucher",
                    voucher: voucher
                });
            });

    },
    altaVoucher: (req, res) => {
        Voucher.create({
            voucher: req.body.voucher,
            valor: req.body.valor,
            fecha: new Date()
        }).then((newVoucher) => {
            res.redirect("/configVoucher");
        })
    },
    editVoucher: (req, res) => {
        Voucher.findByPk(req.params.id)

        .then((voucher) => {
            res.render('editVoucher', {
                titulo: 'Edición de vouchers',
                voucher: voucher
            });
        })
    },
    editedVoucher: (req, res) => {
        Voucher.update({
                voucher: req.body.voucher,
                valor: req.body.valor,
                fecha: new Date()
            }, {
                where: {
                    idVouchers: req.params.id,
                },
            })
            .then((voucher) => {
                res.redirect("/configVoucher");
            })
    },
    deleteVoucher: (req, res) => {
        Voucher.destroy({
                where: { idVouchers: req.params.id },
            })
            .then((voucher) => {
                res.redirect("/configVoucher");
            })
    },
    carrito: (req, res) => {
        res.render('carrito', {
            titulo: 'Carrito'
        });
    },

    obtenerProducto: async (req, res) => {
        let product = await Producto.findByPk(req.params.id, {
            include: [{ association: "categoria" }],
        });
        return res.json(product);
    },

    obtenerVoucher: async (req, res) => {
        let voucher = await Voucher.findOne({ where: { voucher: req.params.voucher } });
        
        return voucher ? res.json(voucher.valor): res.json(null);
    }
}

module.exports = mainController;