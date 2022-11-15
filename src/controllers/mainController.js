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
    formularioBanner:(req, res) => {
        res.render('banners', {
            titulo: 'banner inicio'
         });
    },
    editBanner:(req, res) => {
        
    },
    formularioVoucher:(req, res) => {
        res.render('voucher', {
            titulo: 'voucher descuentos'
         });
    },
    editVoucher:(req, res) => {
        
    },
   
}

module.exports = mainController;