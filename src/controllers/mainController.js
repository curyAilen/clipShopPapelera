const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const Banner = db.Banner;
const Voucher = db.Voucher;
const Producto = db.Producto;
const Email = db.Email;
const Ventas = db.Ventas;
const { validationResult } = require("express-validator");
const { mercadopago } = require("../../mercadopago");
const config = require("../../config");
const uuid = require("uuid");

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
        return res.render("altaBanner", {
            titulo: "Ingresar nuevo banner"
        });
    },
    altabanner: (req, res) => {
        let bannerValidation = validationResult(req);

        console.log(bannerValidation.mapped());

        if (bannerValidation.errors.length > 0) {
            return res.render("altaBanner", {
                titulo: "Ingresar nuevo banner",
                errores: bannerValidation.mapped()
            });
        };

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
        res.render("altaVoucher", {
            titulo: "Ingresar nuevo voucher"
        });

    },
    altaVoucher: async(req, res) => {
        let voucherValidationResult = validationResult(req);

        if (voucherValidationResult.errors.length > 0) {
            return res.render("altaVoucher", {
                titulo: "Ingresar nuevo voucher",
                errores: voucherValidationResult.mapped(),
                old: req.body
            });
        };

        let nombreVoucherRepetido = await Voucher.findOne({
            where: {
                voucher: req.body.voucher
            }
        })

        if (nombreVoucherRepetido) {
            return res.render("altaVoucher", {
                titulo: "Ingresar nuevo voucher",
                errores: { voucher: { msg: "Ya existe un voucher con este nombre" } },
                old: req.body
            });
        }

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
    editedVoucher: async(req, res) => {
        const voucherEdited = await Voucher.findByPk(req.params.id)

        let voucherValidationResult = validationResult(req);

        if (voucherValidationResult.errors.length > 0) {
            return res.render("editVoucher", {
                titulo: "Edición de vouchers",
                errores: voucherValidationResult.mapped(),
                old: req.body,
                voucher: voucherEdited
            });
        };

        if (req.body.voucher != voucherEdited.voucher) {
            let nombreVoucherRepetido = await Voucher.findOne({
                where: {
                    voucher: req.body.voucher
                }
            })

            if (nombreVoucherRepetido) {
                return res.render("editVoucher", {
                    titulo: "Edición de vouchers",
                    errores: { voucher: { msg: "Ya existe un voucher con este nombre" } },
                    old: req.body,
                    voucher: voucherEdited
                });
            }
        }

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
    obtenerProducto: async(req, res) => {
        let product = await Producto.findByPk(req.params.id, {
            include: [{ association: "categoria" }],
        });
        return res.json(product);
    },
    obtenerVoucher: async(req, res) => {
        let voucher = await Voucher.findOne({ where: { voucher: req.params.voucher } });

        return voucher ? res.json(voucher.valor) : res.json(null);
    },
    comprar: async(req, res) => {
        const { idUsuarios } = res.locals.userLogged;
        const { products, pedidoNum } = req.body;
        let comprobarVoucher = null;

        console.log(products);

        if (req.body.voucher) {
            comprobarVoucher = await Voucher.findOne({ where: { voucher: req.body.voucher } });
        }

        let fecha = new Date();

        products.forEach((product) => {

            let { idProductos, precio, cantidad } = product;
            let importe = precio * cantidad;

            if (comprobarVoucher) {
                importe = importe - (importe * (Number(comprobarVoucher.valor) / 100));
            };

            let venta = {
                idUsuarios, idProductos,
                cantidad, importe,
                pedidoNum, fecha,
                estado: "pending" 
            };

            Ventas.create(venta)
                .then(response => res.json(response))
                .catch(error => console.error(error))

        })
    },

    preferencia: async(req, res) => {
        const { products } = req.body;
        const pedidoNum = uuid.v4();

        let comprobarVoucher = null;

        if (req.body.voucher) {
            comprobarVoucher = await Voucher.findOne({ where: { voucher: req.body.voucher } });
        };

        /*******************************ACÁ AGREGO COSTO ENVIO MANUAL  
         * costoEnvio = 600 cambiar en carrito.js linea 4 ****************************************/
        let preference = {
            shipments: {
                cost: 0,
                mode: "not_specified",
            },
            items: [],
            back_urls: {
                success: `${config.main.url}/carrito/feedback/${pedidoNum}`,
                failure: `${config.main.url}/carrito/feedback/${pedidoNum}`,
                pending: `${config.main.url}/carrito/feedback/${pedidoNum}`
            },
            auto_return: "approved",
        };

        let precioTotal = 0;
        if (comprobarVoucher) {
            products.forEach((product) => {
                let unit_price = product.precio - (product.precio * (Number(comprobarVoucher.valor) / 100));
                preference.items.push({
                    title: product.nombre,
                    unit_price,
                    quantity: Number(product.cantidad)
                });
                precioTotal += unit_price * Number(product.cantidad);
            });

            mercadopago.preferences
                .create(preference)
                .then((response) => {
                    res.json({
                        global: response.body.id,
                        data: {
                            descuento: comprobarVoucher.valor,
                            total: precioTotal,
                            pedidoNum: pedidoNum
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {
            products.forEach((product) => {
                preference.items.push({
                    title: product.nombre,
                    unit_price: Number(product.precio),
                    quantity: Number(product.cantidad)
                });
                precioTotal += Number(product.precio) * Number(product.cantidad);
            });

            mercadopago.preferences
                .create(preference)
                .then((response) => {
                    res.json({
                        global: response.body.id,
                        data: {
                            total: precioTotal,
                            pedidoNum: pedidoNum
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    feedback: async (req, res) => {
        const pedidoNum = req.params.pedidoNum;
        const status = req.query.status;

        const update = await Ventas.update({
            estado: status
        }, {
            where: {
                pedidoNum
            }
        });

        console.log(update)
        return res.redirect("/user/cuenta");
    },

    suscribirse: async(req, res) => {
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const { email } = req.body;

        if (validEmail.test(email)) {
            const emailRepetido = await Email.findOne({ where: { email } });

            if (!emailRepetido) {
                await Email.create({ email });
            };
        };

        res.redirect("/");
    },

    enviarEmail: (req, res) => {
        Email.findAll()
            .then((emails) => {
                res.render("enviarEmail", { emails });
            })
    }
};

module.exports = mainController;