const Product = require('../model/product');

exports.getAddProduct = (req, resp, next) => {
    // resp.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    resp.render('add-product', { pageTitle:  req.body.title});
};

exports.postAddProduct =  (req, resp, next) => {
    const newProd = new Product(req.body.title);
    newProd.save();
    resp.redirect("/");
};

exports.getProducts = (req, resp, next) => {
    // resp.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll( products => {
        resp.render('shop', { 
            products, 
            pageTitle: 'Shop' 
        });
    })
}