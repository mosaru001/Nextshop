const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    const cookies = req.body.cookies;
    const config = {
        method: "get",
        url: "https://integ1.7online.7eleven.co.th/mobile/customer/",
        headers: {
            "Authorization": "Basic b3JjaGlkOjU0WHJ+RnJ6bA==",
            "Content-Type": "application/json",
            "Cookie": cookies
        }
    };

    try {
        const { data } = await axios(config);

        console.log(data);

        res.send(data);
    }

    catch (ex) {
        next(ex.message);
    }

});

module.exports = router;