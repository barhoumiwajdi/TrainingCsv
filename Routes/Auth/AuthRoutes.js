
const express = require('express');
const passport = require('passport');
const { Login } = require('../../Controllers/Auth/Login');
const { Register } = require('../../Controllers/Auth/Register');
const { forgetPassword, resetPassword } = require('../../Controllers/Auth/ForgetandResetPassword');
const router = express.Router();

router.post('/Register', Register)
router.post('/Login', Login)
router.post('/forgetPassword', forgetPassword)
router.put('/resetPassword/:token', resetPassword)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})


module.exports = router;

