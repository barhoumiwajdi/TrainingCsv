const express = require('express');


const passport = require('passport');
const { getAlllocale, getlocalebyid, updatelocale, deletelocale, addlocal } = require('../../Controllers/Locale/LocaleController');

const router = express.Router()


router.post('/local', passport.authenticate('bearer', { session: false }), addlocal);
router.get('/local', passport.authenticate('bearer', { session: false }), getAlllocale);
router.get('/local/:id', passport.authenticate('bearer', { session: false }), getlocalebyid)
router.put('/local/:id', passport.authenticate('bearer', { session: false }), updatelocale)
router.delete('/local/:id', passport.authenticate('bearer', { session: false }), deletelocale)

module.exports = router
