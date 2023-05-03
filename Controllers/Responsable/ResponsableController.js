const Responsable = require("../../Models/Responsable")



exports.addresponsable = async (req, res) => {
    try {

        await Responsable.create(req.body)
        res.status(200).send({ message: 'responsable added succefully' })

    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}
exports.getAllresponsable = async (req, res) => {


    try {
        const responsable = await Responsable.find()
        res.send({ message: 'Responsable :  ', responsable })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }

}



exports.getresponsablebyid = async (req, res) => {

    try {
        const responsable = Responsable.findById(req.params.id).populate('Pays').populate('Locale')
        res.status(200).send({ message: 'Responsable ', responsable })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.updateresponsable = async (req, res) => {

    try {
        const responsable = Responsable.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Responsable has been updated ', responsable })
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })

    }

}
exports.deleteResponsable = async (req, res) => {
    try {

        const deleted = await Responsable.findOneAndDelete(req.params.id)
        res.status(200).send({ message: 'Responsable has been deleted ', deleted })

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }
}