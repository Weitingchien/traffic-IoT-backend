const express = require('express');
const trafficLoginController = require('../controllers/trafficLoginController');

const router = express.Router();

router.route('/Login').post(trafficLoginController.login);

module.exports = router;
