const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const Banner = db.Banner;
const Voucher = db.Voucher;
const Producto = db.Producto;

let mainController = {
    main: (req, res) => {
        Producto.findAll().then((producto)=>{
            Banner.findAll().then((banner)=>{ 
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
        .then((banner)=>{
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
          
        .then((banner)=>{
            res.render('editBanner', {
                titulo: 'Edición de banners',
                banner: banner
            });
        })        
    },
    editedBanner:(req, res)=>{
        let imagen = req.body.imagenOriginal;

        if (req.file) {
            banner = req.file.filename;
     }
        Banner.update(
            {
                imagen: imagen,
            },
            {
                where: {
                    idBanners: req.params.id,
                },
            })
            .then((banner)=>{                
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
        .then((voucher)=>{
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
          
        .then((voucher)=>{
            res.render('editVoucher', {
                titulo: 'Edición de vouchers',
                voucher: voucher
            });
        })     
    },
    editedVoucher:(req, res)=>{
        Voucher.update(
            {
            voucher: req.body.voucher,   
            valor: req.body.valor,   
            fecha: new Date() 
            },
            {
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
        let productosCarrito = req.session.carrito;

        res.render('carrito', {
            titulo: 'Carrito',
            carrito: productosCarrito
        });
    },

    agregarproducto: (req, res) => {
        let productoAlCarrito= {
            idProductos: req.params.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            FKidCategoria: req.body.categoria,
            descripcion: req.body.descripcion,  
            color: req.body.color,                
            peso: req.body.peso,         
            medida: req.body.medida    

        }

        let productosEnCarrito = req.session.carrito;

        if (productosEnCarrito != null && productosEnCarrito != undefined) {
            req.session.carrito =  [...productosEnCarrito, productoAlCarrito];
        } else {
            req.session.carrito = [];
            req.session.carrito.push(productoAlCarrito)
        }

        res.redirect("/tienda");
    },
    eliminarProdutoCarrito: (req, res) => {
        
    }

}

module.exports = mainController;