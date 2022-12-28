const axios = require('axios');
const express = require('express');
const router = express.Router();


const categories = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/shop/categories/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA=='
    }
};


router.get('/', async (req, res, next) => {
    try {
        const { data: { content } } = await axios(categories);
        res.send(content);
    }
    catch (ex) {
        next(ex.message);
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const { data: { content } } = await axios(categories);
        const contentById = content.find(c => parseInt(c.id) === parseInt(req.params.id));
        if (!contentById) res.status(404).send('The category with the given ID was not found');
        res.send(contentById);
    }
    catch (ex) {
        next(ex.message);
    }
});


router.get('/:id/products', async (req, res, next) => {
    try {
        url = categories.url;
        categories.url = url + req.params.id + '/products/';
        const { data: productList } = await axios(categories);
        categories.url = url;
        res.send(productList)
    }
    catch (ex) {
        next(ex.message);
    }
});


module.exports = router;