const express = require('express');


const passport = require('passport');
const { getAllusers, getuserbyid, updateuser, deleteUser } = require('../../Controllers/User/UserController');

const router = express.Router()


router.get('/user', passport.authenticate('bearer', { session: false }), getAllusers);
router.get('/user/:id', passport.authenticate('bearer', { session: false }), getuserbyid)
router.put('/user/:id', passport.authenticate('bearer', { session: false }), updateuser)
router.delete('/user/:id', passport.authenticate('bearer', { session: false }), deleteUser)

module.exports = router
