const express = require('express');
const { getdata } = require('../Controllers/Migration');

const router = express.Router()



router.get('/migration', getdata)

module.exports = router