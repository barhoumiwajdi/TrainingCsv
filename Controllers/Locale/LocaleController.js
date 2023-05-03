const Locale = require("../../Models/Locale")



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
        const locale = Locale.findById(req.params.id)
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

        const deleted = await Locale.findOneAndDelete(req.params.idlocale)
        res.status(200).send({ message: 'locale has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}