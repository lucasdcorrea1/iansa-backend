'use strict'
const express = require('express');
const multer = require("multer");
const router = express.Router();

const controller = require('../App/Slideshow/Controllers/slideshowController');
const multerConfig = require("../Middlewares/multer");
const authMiddleware = require('../Middlewares/auth');

router.get("/",  controller.index);

router.post("/", authMiddleware, multer(multerConfig).single("file"), controller.create);

router.delete("/delete/:id", authMiddleware, controller.delete);

module.exports = router;