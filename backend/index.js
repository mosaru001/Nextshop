const customer = require('./routes/customer');
const integ1 = require('./routes/integ1');
const auth = require('./routes/auth');
const backoffice = require('./routes/backoffice');
const products = require('./routes/products');
const flashSale = require('./routes/flashSale');
const bestSeller = require('./routes/bestSeller');
const newArrival = require('./routes/new-arrival');
const brand = require('./routes/brand');
const coupon = require('./routes/coupon');
const categories = require('./routes/categories');
const search = require('./routes/search');
const shippingStore = require('./routes/shippingStore');
const loadBasket = require('./routes/loadBasket');
const addToBasket = require('./routes/addToBasket');
const loadShippingData = require('./routes/loadShippingData');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/', integ1);
app.use('/auth', auth);
app.use('/categories', categories);
app.use('/flashsale', flashSale);
app.use('/bestseller', bestSeller);
app.use('/new-arrival', newArrival);
app.use('/brand', brand);
app.use('/coupon', coupon);
app.use('/products', products);
app.use('/backoffice', backoffice);
app.use('/search', search);
app.use('/shippingStore', shippingStore);
app.use('/loadBasket', loadBasket);
app.use('/addToBasket', addToBasket);
app.use('/loadShipping', loadShippingData);
app.use('/customer', customer);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
