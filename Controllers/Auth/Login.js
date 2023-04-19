const User = require('../../Models/Account')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.Login = async (req, res) => {
    try {
        const found = await User.findOne({ Email: req.body.Email })
        console.log(found)
        if (found) {
            const passwordcheck = await bcrypt.compareSync(req.body.Password, found.Password)
            if (passwordcheck) {
                const data = {
                    idClient: found._id
                }
                const token = jwt.sign(data, 'Secret', { expiresIn: '1d' })

                res.send({ message: `Bienvenue ${found.Nom} , tu es connecté. `, token })
            }
            else {
                res.status(400).send({ message: "Verifiez votre email or password!" })
            }
        }
        else {
            res.status(400).send({ message: "Verifiez votre email or password!" })
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message || 'Error' })
    }
}
