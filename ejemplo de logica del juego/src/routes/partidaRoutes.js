const express = require('express');
const router = require('express').Router()
const { ExpressSwagger } = require('node-swagger-ui-express');

ExpressSwagger.initController('/api/partidas', express, router);

router.get('/sayok', async (req, res) => {
    res.json("ok")
}).toSwagger();

module.exports = router