const Pays = require('../../Models/Pays')


exports.getAllpays = async (req, res) => {


    try {
        const pays = await Pays.find()
        res.send({ message: 'Pays :  ', pays })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}



exports.getpaysbyid = async (req, res) => {

    try {
        const pays = Pays.findById(req.params.id)
        res.status(200).send({ message: 'Pays ', pays })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.updatepays = async (req, res) => {

    try {
        const pays = Pays.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Pays has been updated ', pays })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.deletePays = async (req, res) => {
    try {

        const deleted = await Pays.findOneAndDelete(req.params.idpays)
        res.status(200).send({ message: 'Pays has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}