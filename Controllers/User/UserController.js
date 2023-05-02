
const User = require('../../Models/Account')

exports.getAllusers = async (req, res) => {


    try {
        const user = await User.find()
        res.send({ message: 'Users :  ', user })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}



exports.getuserbyid = async (req, res) => {

    try {
        const user = User.findById(req.params.id)
        res.status(200).send({ message: 'user ', user })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.updateuser = async (req, res) => {

    try {
        const user = User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'user has been updated ', user })
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
