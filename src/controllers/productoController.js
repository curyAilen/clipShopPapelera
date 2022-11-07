const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const producto = db.Producto;
const categoria = db.Categoria;

// 0 es No oferta
//1 es oferta

let productoController = {
    mostrarTienda: (req, res) => {  
        let buscar = req.query.buscar;

        if (buscar != "" && buscar != undefined) {
            console.log(req.query)
            categoria.findAll()
            .then((categoria) => {
                producto.findAll({
                    include: [{ association: "categoria" }],
                    where: {
                        nombre: {
                            [Op.like]: `%${buscar}%`
                        }
                    }
                    })              
                })
                    .then((producto) => {
                    res.render('tienda', {
                        titulo: 'Listado de productos',
                        css: 'estiloListado.css',
                        producto: producto,
                        categoria: categoria
                    });
                })
            }else{
        categoria.findAll()
            .then((categoria) => {
                producto.findAll({
                include: [{ association: "categoria" }],
        })
            .then((producto) => {
                res.render("tienda", {
                nombre: "Producto",
                producto: producto,
                categoria: categoria
            });
        })
    })}
    },
    buscador:(req, res)=>{
        let precioMax = req.query.max;
        let precioMin = req.query.min;
        
        if ((precioMax != "" && precioMax != undefined)&&(precioMin != "" && precioMin != undefined) ) {
            categoria.findAll().then((categoria)=>{
                producto.findAll({
                    include: [{ association: "categoria" }],
                    where:{
                        precio:{[Op.and]:{
                            [Op.gte]:precioMin, 
                            [Op.lte]:precioMax
                        }
                    }}            
                })              
        }).then((productoPrecio) => {
            res.render("tienda", {              
                productoPrecio: productoPrecio
            });
        })
    }else{
        categoria.findAll().then((categoria)=>{
        producto.findAll({include: [{ association: "categoria" }],
        }).then((producto) => {
            res.render("./tienda", {
                nombre: "Producto",
                producto: producto,
                categoria: categoria
            });
        })
    })
    }},

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
    carrito: (req, res) => {
        res.render("./carrito", {
            titulo: "Carrito",
        });
    },
    crearProd: (req, res) => {
        db.Categoria.findAll()
        .then((categoria) => {
            res.render("altaProducto", {
                titulo: "Ingresar nuevo producto",
                categoria: categoria,
            });
        });
    },
    ingresaProducto: (req, res) => {
    db.Categoria.findAll()
    .then((categoria) => {
            producto.create({
                nombre: req.body.nombre,
                FKidCategoria: req.body.categoria,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                imagen: req.file.filename,
                oferta: req.body.oferta,               
                color: req.body.color,                
                peso: req.body.peso,         
                medida: req.body.medida                
            }).then(() => {
                res.redirect("/tienda");
            })
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
    edited: (req, res) => {
        let imagen = req.body.imagenOriginal;

        if (req.file) {
            imagen = req.file.filename;
        }
        producto.update(
            {
                nombre: req.body.nombre,
                FKidCategoria: req.body.categoria,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                imagen: imagen,
                oferta: req.body.oferta,               
                color: req.body.color,                
                peso: req.body.peso,         
                medida: req.body.medida   
            },
            {
                where: {
                    idProductos: req.params.id,
                },
            })
            .then((prod)=>{
                console.log(prod)
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
