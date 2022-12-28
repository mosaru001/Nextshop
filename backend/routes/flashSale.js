const axios = require('axios');
const express = require('express');
const router = express.Router();

// const axios = require('axios');
// const express = require('express');
// const router = express.Router();

const flashSale = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/mobile/flashsale',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

router.get('/', async (req, res, next) => {
    try {
        // const response = await axios(flashSale)
        // res.send(response.data);
        const { data: { campaignItems: items } } = await axios(flashSale);
        res.send(items);
    }
    catch (ex) {
        next(ex.message);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { data: { campaignItems: items } } = await axios(flashSale);
        const item = items.find(i => parseInt(i.productId) === parseInt(req.params.id));
        if (!item) res.status(404).send('The product with the given ID was not available in this campaign');
        res.send(item);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;



// const flashSale = {
//     method: 'get',
//     url: 'https://integ1.7online.7eleven.co.th/ishop-api/shop/categories/-s-1232/products/',
//     headers: {
//         'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
//         'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
//     }
// };

// router.get('/', async (req, res, next) => {
//     try {
//         const { data: { content: items } } = await axios(flashSale);
//         res.send(items);
//     }
//     catch (ex) {
//         next(ex.message);
//     }
// });

// module.exports = router;