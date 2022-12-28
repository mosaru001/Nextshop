const axios = require('axios');
const express = require('express');
const router = express.Router();

const moment = require("moment-timezone");

const AES_Encryption = require('../encryption');

const aesEncryp = new AES_Encryption();
const passPhraseEncryp = 'R29zb2Z0T25saW5lVW5pdEFsbG1lbWJlcg==';
const passPhraseDecryp = 'R29zb2Z0T25saW5lVW5pdEFsbG1lbWJlcg==';

const config = {
    "channel_id": "CN09",
    "sys_date_time": "",
    "channel_tran_id": "123213423423423",
    "redirect_uri": "http://localhost:5000/auth",
    "logout_uri": "http://localhost:5000/auth",
    // "redirect_uri": "http://localhost:3000/",
    // "logout_uri": "http://localhost:3000/",
    "email_address": "",
    "store_id": "90999",
    "action": ""
}

const window = {
    location: ""
}

const redirect = {
    url: "",
    cipherText: "",
    decrypted: ""
}

let cookies = "";
let JSESSIONID = "";
let iuv2 = "";
let auth = false;
let action = null;

getDateTime = () => {
    let date = new Date()
    return "" + moment(date.getTime()).tz('Asia/Bangkok').format("YYYY-MM-DDTHH:mm:ss+07:00");
}

router.get('/', (req, res, next) => {
    redirect.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(redirect.url);

    redirect.cipherText = redirect.url.split('?')[1];

    res.redirect('http://localhost:5000/auth/decryption');
})

router.post('/encryption', (req, res, next) => {
    const { action, currentLocation } = req.body;

    console.log(currentLocation);
    window.location = currentLocation;

    config.action = action;
    config.sys_date_time = getDateTime();
    const plainText = JSON.stringify(config);
    const encrypted = aesEncryp.encrypt(passPhraseEncryp, plainText);
    const authPage = `https://ssl-alcweblogin-staging.online-allcustomer.net/login?${encrypted}`;

    res.send(authPage);
});


router.get('/decryption', async (req, res, next) => {
    redirect.decrypted = aesEncryp.decrypt(passPhraseDecryp, redirect.cipherText);
    console.log(redirect.decrypted);

    // config.action === "login" ?
    //     res.redirect('http://localhost:5000/auth/externallogin')
    //     :
    //     res.redirect('http://localhost:3000/');

    if (config.action === "login") {
        res.redirect('http://localhost:5000/auth/externallogin');
    } else {
        cookies = "";
        JSESSIONID = "";
        iuv2 = "";
        res.redirect('http://localhost:3000/')
    }
});

router.get('/externallogin', async (req, res, next) => {
    const config = {
        method: "post",
        url: "https://integ1.7online.7eleven.co.th/mobile/customer/externallogin/",
        headers: {
            "Authorization": "Basic b3JjaGlkOjU0WHJ+RnJ6bA==",
            "Content-Type": "application/json"
        },
        data: {
            "revokeAccountDeletion": "false",
            "loginType": "CustomerID",
            "customerIdentifier": "",
            "userAcceptedPDPAVersion": "0.1"
        }
    };

    config.data.customerIdentifier = JSON.parse(redirect.decrypted).member_id;

    try {
        const { headers: { 'set-cookie': cookies }, data } = await axios(config);

        JSESSIONID = cookies[0].replace('Domain=7eleven.co.th;', '').replace('Secure;', '').replace('HttpOnly', '') + ';';
        iuv2 = cookies[1].replace('Domain=7eleven.co.th;', '').replace('Secure;', '').replace('HttpOnly', '') + ';';


        console.log(JSESSIONID);
        console.log(iuv2);
        console.log(data);

        res.redirect('http://localhost:5000/auth/customer');
    }
    catch (ex) {
        next(ex.message);
    }

});

router.get('/customer', async (req, res, next) => {
    cookies = JSESSIONID + iuv2;
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

        res
            .setHeader('Set-Cookie', [JSESSIONID, iuv2])
            // .setHeader('Set-Cookie', iuv2)
            .redirect(window.location)


        console.log("AuthCookies:", cookies);

        // if (cookies) {
        //     auth = true;
        //     action = "login";
        // } else {
        //     auth = false;
        //     action = "logout";
        // }

        // console.log("AuthStatus:", auth);
        // console.log("ActionStatus:", action)

        // res
        //     .setHeader('Set-Cookie', iuv2)
        //     .send([action, auth])
        //     .redirect(window.location)
    }

    catch (ex) {
        next(ex.message);
    }

});

router.get('/status', (req, res, next) => {
    console.log("AuthCookies:", cookies);

    if (cookies) {
        auth = true;
        action = "login";
    } else {
        auth = false;
        action = "logout";
    }

    console.log("AuthStatus:", auth);
    console.log("ActionStatus:", action)
    res.send([action, auth]);
});

module.exports = router;