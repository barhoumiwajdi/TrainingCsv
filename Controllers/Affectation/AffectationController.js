const LocaleModel = require("../../Models/Locale")




exports.affecteRespo = async (req, res) => {
    try {
        const affectation = await LocaleModel.findByIdAndUpdate(req.params.idlocal, { $Push: { Responsables: req.params.idRespo } })
        res.status(200).send({ message: 'responsable affected avec suuccess', affectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
    }
}

exports.dessaffecteRespo = async (req, res) => {
    try {
        const dessaffectation = await LocaleModel.findByIdAndUpdate(req.params.idlocal, { $pull: { Responsables: req.params.idRespo } })
        res.status(200).send({ message: 'responsable dessaffected avec suuccess', dessaffectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
    }

}