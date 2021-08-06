const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("Router connected");

router.get('/',homeController.home)
// router.use('/users',require('./user'));

router.post('/get-data',homeController.fetch);

module.exports=router;