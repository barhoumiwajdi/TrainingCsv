const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs')
const passport = require('passport');

// require midlleware
require('./Midlleware/Passport/Bearer')
// connect to database
require('./Database/Connect.js');

// Create express App
const app = express();
const port = 4000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Use this if the 4th param is default value(false)
//job.start()
// Routes sections
/**
 * load Admin function
 */
async function addAdmin() {
    const salt = bcrypt.genSaltSync(10);
    const Password = bcrypt.hashSync("admin", salt);
    const data = {
        Nom: "admin",
        Prenom: "admin",
        Date_Naissence: "01-01-1996",
        Lieu: "Country",
        Pays: "Default",
        Email: "admin@admin.com",
        Password: Password,
        Role: "Admin"
    }
    await Account.create(data)
}
addAdmin()

// Home Route
app.get('/', async (req, res) => {
    res.json({ message: 'Welcome to my REST API.' });
});

app.use('/api/v1', require('./Routes/MigrationRoute'))
app.use('/api/v1', require('./Routes/Auth/AuthRoutes'))
app.use('/api/v1', require('./Routes/Affectation/Affectation'))
app.use('/api/v1', require('./Routes/Locale/Local'))
app.use('/api/v1', require('./Routes/Pays/pays'))
app.use('/api/v1', require('./Routes/User/user'))
app.use('/api/v1', require('./Routes/Responsable/Responsable'))

// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});