const User = require('../../Models/Account')




exports.Login = async (req, res) => {

    const Found = await User.findOne({ Email: req.body.email })
    if (found) {
        res.status(400).send({ message: ' email elready exists try anither one' })

    }
    else {

    }


}