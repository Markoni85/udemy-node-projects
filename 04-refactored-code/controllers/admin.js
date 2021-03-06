const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  })
}

exports.postAddProduct = (req, res, next) => {
    const {title, imgUrl, price, description}  = req.body;
    const product = new Product(title, imgUrl, price, description);
    product.save()
    res.redirect('/')
}

exports.getAdminProducts = (req, resp, next) => {
  Product.fetchAll( products => {
    resp.render('admin/products', {
      products,
      pageTitle: 'Admin Products',
      path: 'admin/products'
    
    })
  })
}