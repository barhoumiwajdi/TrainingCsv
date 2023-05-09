const User = require('../../Models/Account')
const bcrypt = require('bcryptjs')

exports.Register = async (req, res) => {
    try {
        const found = await User.findOne({ Email: req.body.Email })
        if (found) {
            res.status(400).send({ message: 'Email est déja enregistré.' })
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            req.body.Password = bcrypt.hashSync(req.body.Password, salt);
            const resgistered = await User.create(req.body)
            res.send({ message: "Ajouté avec succés", resgistered })
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message || 'Error message' })
    }
}