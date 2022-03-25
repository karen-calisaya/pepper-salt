const products = require('../data/index.js')
module.exports = {
    index: function(req, res, next) {
        res.render('index', { 
            title: 'Pimienta & Sal',
             
        });
    },
    detail: function(req, res) {
        let idProducto = +req.params.id;
        let product = products.find(prod => prod.id === idProducto)
        res.render('detalleMenu', {
            title: product.name,
            product
        })
    }
}