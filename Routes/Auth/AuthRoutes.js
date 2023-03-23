
const express = require('express');
const passport = require('passport');
const { Login } = require('../../Controllers/Auth/Login');
const { Register } = require('../../Controllers/Auth/Register');
const router = express.Router();

router.post('/Register', Register)
router.post('/Login', Login)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})


module.exports = router;