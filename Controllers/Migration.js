const Migration = require('../Models/Migration')




exports.getdata = async (req, res) => {


    try {
        const data = await Migration.find()
        res.send(data)

    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }


}