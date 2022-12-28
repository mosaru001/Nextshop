const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {

    const { itemId, quantity } = req.body;
    const cookies = req.headers.cookie;
    // console.log(itemId);
    // console.log(quantity);
    // console.log(cookies);
    const addToBasket = {
        method: "post",
        url: "https://integ1.7online.7eleven.co.th/ishop-api/mobile/customer/basket/items/",
        headers: {
            "Authorization": "Basic b3JjaGlkOjU0WHJ+RnJ6bA==",
            "Content-Type": "application/json;charset=UTF-8",
            "Cookie": cookies
        },
        data: {
            "itemId": itemId,
            "quantity": quantity
        }
    };

    try {
        const { data } = await axios(addToBasket);
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;