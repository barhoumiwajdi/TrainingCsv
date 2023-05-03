const express = require('express');


const passport = require('passport');
const { getAllpays, getpaysbyid, updatepays, deletePays, addpays } = require('../../Controllers/Pays/PaysController');

const router = express.Router()


router.post('/pays', passport.authenticate('bearer', { session: false }), addpays);
router.get('/pays', passport.authenticate('bearer', { session: false }), getAllpays);
router.get('/pays/:id', passport.authenticate('bearer', { session: false }), getpaysbyid)
router.put('/pays/:id', passport.authenticate('bearer', { session: false }), updatepays)
router.delete('/pays/:id', passport.authenticate('bearer', { session: false }), deletePays)

module.exports = router
