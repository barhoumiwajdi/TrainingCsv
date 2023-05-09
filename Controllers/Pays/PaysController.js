const Pays = require('../../Models/Pays')




exports.addpays = async (req, res) => {
    try {
        const verif = await Pays.findOne({ nom: req.body.nom })

        if (verif) {
            res.status(400).send({ message: " pays alrready exist try another one " })
        } else {
            const added = await Pays.create(req.body)
            res.status(200).send({ message: 'pays added succefully', pays: added })
        }


    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}

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
        const pays = await Pays.findById(req.params.id).populate('Locales')

        res.status(200).send({ message: 'Pays ', pays: pays })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
        console.log(error)

    }

}
exports.updatepays = async (req, res) => {

    try {
        const pays = await Pays.findByIdAndUpdate(req.params.id, req.body)
        const updated = await Pays.findById(req.params.id).populate('Locales')
        res.status(200).send({ message: 'Pays has been updated ', pays: updated })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.deletePays = async (req, res) => {
    try {

        const deleted = await Pays.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Pays has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}