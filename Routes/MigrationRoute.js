const express = require('express');
const { getdata } = require('../Controllers/Migration');

const passport = ('passport');
const router = express.Router()



router.get('/migration', passport.authenticate('bearer', { session: false }), getdata)

module.exports = router