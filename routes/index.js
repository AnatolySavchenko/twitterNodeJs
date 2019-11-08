const express = require('express');
const router = express.Router();
const controllerTwits = require('../controller/controllerTwits');

router.get('/', controllerTwits.getTwit);

module.exports = router;
