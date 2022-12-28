const axios = require('axios');
const express = require('express');
const router = express.Router();

const products = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/shop/products/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

// router.get('/:id', async (req, res, next) => {
//     try {
//         const { data: { content } } = await axios(products);
//         const contentById = content.find(c => parseInt(c.id) === parseInt(req.params.id));
//         if (!contentById) res.status(404).send('The product with the given ID was not found');
//         res.send(contentById);
//     }
//     catch (ex) {
//         next(ex.message);
//     }
// });


router.get('/:id', async (req, res, next) => {
    try {
        url = products.url;
        products.url = url + req.params.id + '/';
        const { data: contentById } = await axios(products);
        products.url = url;
        res.send(contentById)
    }
    catch (ex) {
        next(ex.message);
    }
});

router.get('/:id/items', async (req, res, next) => {
    try {
        url = products.url;
        products.url = url + req.params.id + '/items/';
        const { data: contentById } = await axios(products);
        products.url = url;
        res.send(contentById)
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;