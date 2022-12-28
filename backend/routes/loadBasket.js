const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {

    const cookie = req.headers.cookie
    const loadBasket = {
        method: 'get',
        url: 'https://integ1.7online.7eleven.co.th/ishop-api/mobile/customer/basket',
        headers: {
            "Authorization": "Basic b3JjaGlkOjU0WHJ+RnJ6bA==",
            "Content-Type": "application/json;charset=UTF-8",
            "Cookie": cookie
        }
    };

    try {
        const { data: { items } } = await axios(loadBasket);

        console.log(items)

        res.send(items);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;