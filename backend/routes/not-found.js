const axios = require('axios');
const express = require('express');
const router = express.Router();

const flashSale = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/backoffice/structure/pages/ErrorPageHttp404ErrorTeasers/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

router.get('/', async (req, res, next) => {
    try {
        const data = await axios(flashSale);
        res.send(null);
    }
    catch (ex) {
        next(ex.message);
    }
});