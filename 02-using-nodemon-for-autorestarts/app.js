const path = require('path');

const express = require('express');
//const bodyParser = require('body-parser'); deprecated
const app = express();

const adminRoutes = require('./router/admin');
const shopRouter = require('./router/shop');
const errorController = require('./controllers/error'); 

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);
