const axios = require('axios');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res, next) => {
  try {

    const { path } = req.body;

    const config = {
      method: 'post',
      url: `https://integ1.7online.7eleven.co.th/ishop-api/search/?term=${path}`,
      headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=0234EDD2C22B57C745AB9EA3568EF77B.integ1'
      },
      data: {},
    };

    const { data } = await axios(config);
    res.send(data);
  }
  catch (ex) {
    next(ex.message);
  }
});

module.exports = router;