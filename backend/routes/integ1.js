const axios = require('axios');
const express = require('express');
const router = express.Router();

const integ1 = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA=='
    }
};

router.get('/', async (req, res, next) => {
    try {
        const { headers: { 'set-cookie': cookies } } = await axios(integ1);
        // const JSESSIONID = cookies[0];
        // const iuv2 = cookies[1].replace('Domain=7eleven.co.th;', null);

        const JSESSIONID = cookies[0].replace('HttpOnly', '');
        const iuv2 = cookies[1].replace('Domain=7eleven.co.th', '').replace('HttpOnly', '');
        let count = 1;
        let message = "";

        if (count === 1) {
            console.log("------------------------------------------------------------------");
            message = `cookies was sent: ${count.toString()} times`;
            console.log(message);
            console.log(JSESSIONID);
            console.log(iuv2);
            res.setHeader('Set-Cookie', [JSESSIONID, iuv2]).send([JSESSIONID, iuv2]);
            count++;
        }
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;
