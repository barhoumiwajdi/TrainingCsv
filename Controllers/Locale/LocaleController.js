const Locale = require("../../Models/Locale")
const PaysModel = require("../../Models/Pays")



exports.addlocal = async (req, res) => {
    try {

        const Pays = await PaysModel.findOne({ nom: req.body.nom })
        const data = {
            Nom: req.body.nom,
            Adresse: req.body.adresse,
            Pays: Pays._id
        }
        const newlocal = await Locale.create(data)
        await PaysModel.findByIdAndUpdate(Pays._id, { $push: { locales: newlocal._id } })
        res.status(200).send({ message: 'locale added succefully' })

    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}

exports.getAlllocale = async (req, res) => {

    try {
        const locale = await Locale.find()
        res.send({ message: 'locales :  ', locale })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}

exports.getlocalebyid = async (req, res) => {

    try {
        const locale = Locale.findById(req.params.id).populate('Responsable')
        res.status(200).send({ message: 'locale ', locale })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.updatelocale = async (req, res) => {

    try {
        const locale = Locale.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'locale has been updated ', locale })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.deletelocale = async (req, res) => {
    try {

        const deleted = await Locale.findOneAndDelete(req.params.id)
        res.status(200).send({ message: 'locale has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}