
const User = require('../../Models/Account')


exports.getAllusers = async (req, res) => {


    try {
        const data = await User.find()
        res.send({ message: 'Users :  ', data })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }


}