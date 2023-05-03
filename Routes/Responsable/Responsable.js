
const express = require('express');


const passport = require('passport');
const { getAllresponsable, getresponsablebyid, updateresponsable, deleteResponsable, addresponsable } = require('../../Controllers/Responsable/ResponsableController');

const router = express.Router()

router.post('/responsable', passport.authenticate('bearer', { session: false }), addresponsable);
router.get('/responsable', passport.authenticate('bearer', { session: false }), getAllresponsable);
router.get('/responsable/:id', passport.authenticate('bearer', { session: false }), getresponsablebyid)
router.put('/responsable/:id', passport.authenticate('bearer', { session: false }), updateresponsable)
router.delete('/responsable/:id', passport.authenticate('bearer', { session: false }), deleteResponsable)



module.exports = router