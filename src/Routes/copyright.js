'use strict';
const express = require('express');
const router = express.Router();

var Development = ['IANSA'];
Development.push({
   'Made by': 'Lucas Damas Corrês',
    GitHub: 'https://github.com/lucasdcorrea1'
})


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        Development
    });
});
module.exports = route;