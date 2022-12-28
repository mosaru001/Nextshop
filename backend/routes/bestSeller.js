const axios = require('axios');
const express = require('express');
const router = express.Router();

const bestSellerMain = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/shop/categories/-s-1237/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

const bestSeller = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/shop/categories/-s-1237/products/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

router.get('/', async (req, res, next) => {
    try {
        const { data: { content: items } } = await axios(bestSeller);
        res.send(items);
    }
    catch (ex) {
        next(ex.message);
    }
});

router.get('/main', async (req, res, next) => {
    try {
        const { data } = await axios(bestSellerMain);
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;