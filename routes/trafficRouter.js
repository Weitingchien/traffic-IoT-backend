const express = require('express');
const trafficLoginController = require('../controllers/trafficLoginController');

const router = express.Router();

router.route('/Check').post(trafficLoginController.check);
router.route('/Login').post(trafficLoginController.login);
router.route('/Signup').post(trafficLoginController.signup);

module.exports = router;
