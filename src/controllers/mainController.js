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
 
   
}

module.exports = mainController;