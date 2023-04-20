
const User = require('../../Models/Account')


exports.getAllusers = async (req, res) => {


    try {
        const data = await User.find()
        res.send({ message: 'Users :  ', data })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}

exports.deleteUser = async (req, res) => {
    try {

        const deleted = await User.findOneAndDelete(req.params.iduser)
        res.status(200).send({ message: 'user has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}