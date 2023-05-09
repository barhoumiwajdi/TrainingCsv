const LocaleModel = require("../../Models/Locale")
const ResponsableModel = require('../../Models/Responsable')

const nodemailer = require('nodemailer')


exports.affecteRespo = async (req, res) => {
    try {
        const affectation = await LocaleModel.findByIdAndUpdate(req.params.idlocal, { $push: { Responsables: req.params.idRespo } })


        const local = await LocaleModel.findById(req.params.idlocal)
        const respo = await ResponsableModel.findById(req.params.idRespo)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            // port: process.env.port,
            secure: false,
            auth: {
                user: "wajdi.barhoumi26@gmail.com",
                pass: "uggpeedoyivliars",
            },
        });

        await transporter.sendMail({
            from: "wajdi.barhoumi26@gmail.com",
            to: `${respo.EmailRespo}`,
            subject: "Affectation",

            html: `<h1>Affectation </h1> 
    <p> Bonjour  ${respo.Nom} yu have been affected to ${local.Nom} </p> <br>`
        })
        res.status(200).send({ message: 'responsable affected avec suuccess', affectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
        console.log(error)
    }
}

exports.dessaffecteRespo = async (req, res) => {
    try {
        const dessaffectation = await LocaleModel.findByIdAndUpdate(req.params.idlocal, { $pull: { Responsables: req.params.idRespo } })

        const local = await LocaleModel.findById(req.params.idlocal)
        const respo = await ResponsableModel.findById(req.params.idRespo)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: process.env.port,
            secure: false,
            auth: {
                user: process.env.email,
                pass: process.env.password,
            },
        });

        await transporter.sendMail({
            from: `${process.env.email}`,
            to: `${respo.Email}`,
            subject: "Affectation",

            html: `<h1>reset your password </h1> 
    <p> Bonjour  ${respo.Nom} yu have been dessaffected to ${local.Nom} </p> <br>`
        })
        res.status(200).send({ message: 'responsable dessaffected avec suuccess', dessaffectation })
    } catch (error) {
        res.status(500).send({ message: ' erreur serveur ' || error })
    }

}