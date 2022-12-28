const axios = require('axios');
const express = require('express');
const router = express.Router();

const backOffice = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/backoffice/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

const structureBackOffice = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/backoffice/structure/pages/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

const masterBackOffice = {
    method: 'get',
    url: 'https://integ1.7online.7eleven.co.th/ishop-api/backoffice/masterdata/',
    headers: {
        'Authorization': 'Basic b3JjaGlkOjU0WHJ+RnJ6bA==',
        'Cookie': 'JSESSIONID=924E54A48939B5E55653661FB372E4A1.integ1'
    }
};

router.get('/', async (req, res, next) => {
    try {
        const { data } = await axios(backOffice);
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

router.get('/master', async (req, res, next) => {
    try {
        const { data } = await axios(masterBackOffice);
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

router.get('/structure/pages', async (req, res, next) => {
    try {
        const { data: { content } } = await axios(structureBackOffice);
        res.send(content);
    }
    catch (ex) {
        next(ex.message);
    }
});


router.get('/structure/pages/:id', async (req, res, next) => {
    try {
        const { data: { content } } = await axios(structureBackOffice);
        const data = content.find(d => d.id === req.params.id);
        if (!data) res.status(404).send('The data with the given ID was not found');
        res.send(data);
    }
    catch (ex) {
        next(ex.message);
    }
});

module.exports = router;