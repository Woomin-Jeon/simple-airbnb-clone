const express = require('express');
const router = express.Router();

router.use('/', require('./page'));

module.exports = router;
