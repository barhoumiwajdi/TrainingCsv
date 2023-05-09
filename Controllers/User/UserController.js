
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
        const user = await User.findById(req.params.id)
        res.status(200).send({ message: 'user ', user: user })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
        console.log(error)
    }

}
exports.updateuser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        const updateduser = await User.findById(req.params.id)
        res.status(200).send({ message: 'user has been updated ', update: updateduser })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.deleteUser = async (req, res) => {
    try {

        const deleted = await User.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'user has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}
