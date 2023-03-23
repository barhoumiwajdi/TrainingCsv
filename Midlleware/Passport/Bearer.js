const jwt = require('jsonwebtoken');
const Client = require('../../models/Account')
const passport = require('passport');
const LocalStrategy = require('passport-http-bearer').Strategy

passport.use(new LocalStrategy(
    async function (token, done) {
        const decoded = jwt.verify(token, 'Secret')

        const response = await Client.findById(decoded.ClientId)

        if (!response) { return done(null, false); }
        return done(null, response);
    }
));