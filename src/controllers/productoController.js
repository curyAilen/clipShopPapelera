const { validationResult } = require("express-validator");
const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const producto = db.Producto;
const categoria = db.Categoria;


// 0 es No oferta
//1 es oferta

let productoController = {
    mostrarTienda: (req, res) => {
        const { buscar, buscarCategoria: categorias, buscarFiltro: filtro } = req.query;

        let where = {};

        where.nombre = {
            [Op.like]: `%${buscar || ""}%`
        };

        if (categorias) {
            where.FKidCategoria = {
                [Op.like]: `%${categorias}%`
            };
        };

        if (filtro) {
            where.filtro = filtro;
        };

        producto.findAll({
            include: [{ association: "categoria" }], where
        })
            .then((producto) => {
                categoria.findAll()
                    .then((categoria) => {
                        res.render('tienda', {
                            titulo: 'Listado de productos',
                            css: 'estiloListado.css',
                            producto: producto,
                            categoria: categoria
                        })
                    })
            });
    },
    buscadorEmbalaje: (req, res) => {
        producto.findAll({
            include: [{ association: "categoria" }],
            where: {
                FKidCategoria: 1
            }
        })
            .then((producto) => {
                categoria.findAll()
                    .then((categoria) => {

                        res.render('tienda', {
                            titulo: 'Listado de productos',
                            producto: producto,
                            categoria: categoria
                        })
                    })
            })
    },
    buscadorOrganizadores: (req, res) => {
        producto.findAll({
            include: [{ association: "categoria" }],
            where: {
                FKidCategoria: 2
            }
        })
            .then((producto) => {
                categoria.findAll()
                    .then((categoria) => {

                        res.render('tienda', {
                            titulo: 'Listado de productos',
                            producto: producto,
                            categoria: categoria
                        })
                    })
            })
    },
    buscadorEtiquetas: (req, res) => {
        producto.findAll({
            include: [{ association: "categoria" }],
            where: {
                FKidCategoria: 4
            }
        })
            .then((producto) => {
                categoria.findAll()
                    .then((categoria) => {

                        res.render('tienda', {
                            titulo: 'Listado de productos',
                            producto: producto,
                            categoria: categoria
                        })
                    })
            })
    },
    detalleProducto: (req, res) => {
        let detalleID = req.params.id;

        producto.findByPk(detalleID, {
            include: [{ association: "categoria" }],
        })
            .then((producto) => {
                res.render("./detalleProducto", {
                    titulo: "Detalle del Producto",
                    producto: producto,
                });
            })
            .catch(() => {
                res.render("notFound", {
                    titulo: "No existe el artículo",
                    id: req.params.id,
                });
            });
    },
    crearProd: (req, res) => {
        categoria.findAll()
            .then((categoria) => {
                res.render("altaProducto", {
                    titulo: "Ingresar nuevo producto",
                    categoria: categoria,
                });
            });
    },
    ingresaProducto: async (req, res) => {

        console.log(req.body);
        let productValidation = validationResult(req);

        if (productValidation.errors.length > 0) {
            const categorias = await categoria.findAll();

            return res.render("altaProducto", {
                titulo: "Ingresar nuevo producto",
                categoria: categorias,
                errores: productValidation.mapped(),
                old: req.body
            });
        };

        producto.create({
            nombre: req.body.nombre,
            FKidCategoria: req.body.categoria,
            precio: req.body.precio,
            imagen: req.file.filename,
            oferta: req.body.oferta,
            filtro: req.body.filtro
        }).then((newProducto) => {
            res.redirect("/tienda");
        });
    },
    edit: (req, res) => {
        producto.findByPk(req.params.id, {
            include: [{ association: "categoria" }],
        })
            .then((producto) => {
                categoria.findAll()
                    .then((categoria) => {
                        res.render("./editProducto", {
                            titulo: "Detalle del Producto",
                            producto: producto,
                            categoria: categoria,
                        });
                    });
            });
    },
    edited: async (req, res) => {
        let productValidation = validationResult(req);

        if (productValidation.errors.length > 0) {
            const categorias = await categoria.findAll();
            const product = await producto.findByPk(req.params.id, { include: [{ association: "categoria" }] })

            return res.render("editProducto", {
                titulo: "Ingresar nuevo producto",
                categoria: categorias,
                errores: productValidation.mapped(),
                producto: product,
                old: req.body
            });
        };

        let imagen = req.body.imagenOriginal;

        if (req.file) {
            imagen = req.file.filename;
        };

        producto.update({
            nombre: req.body.nombre,
            FKidCategoria: req.body.categoria,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: imagen,
            oferta: req.body.oferta,
            filtro: req.body.filtro
        }, {
            where: {
                idProductos: req.params.id,
            },
        })
            .then((prod) => {
                res.redirect("/tienda");
            })
    },
    delete: (req, res) => {
        producto.destroy({
            where: { idProductos: req.params.id },
        });

        res.redirect("/tienda");
    },

   
};

module.exports = productoController;