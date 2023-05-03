const express = require('express');


const passport = require('passport');
const { affecteRespo, dessaffecteRespo } = require('../../Controllers/Affectation/AffectationController');
const router = express.Router()

router.put('/affectation/:idlocal/:idRespo', affecteRespo)
router.put('/dessaffectation/:idlocal/:idRespo', dessaffecteRespo)


module.exports = router


