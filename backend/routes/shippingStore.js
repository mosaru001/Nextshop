const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {

        const { path } = req.body;
        console.log('path-->', path)
        const shippingStore = {
            method: 'get',
            url: `https://integ1.7online.7eleven.co.th/ishop-api/mobile/logistics/${path}/`,
            headers: {
                'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
                'Content-Type': 'application/json;charset=UTF-8',
                'Cookie': 'JSESSIONID=0234EDD2C22B57C745AB9EA3568EF77B.integ1'
            }
        };

        const { data } = await axios(shippingStore);
        console.log('data-->', data)
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;