const Migration = require('../Models/Migration')


exports.getdata = async (req, res) => {


    try {
        const data = await Migration.find()
        if (data.length == 0) {
            res.status(200).send({ message: 'no data has been found try yto insert new data ' })

        } else {
            res.status(200).send({ message: 'this is list of my migartion', data: data })

        }
    } catch (error) {
        res.status(500).send({ message: 'erruer serveur ' || error })
    }


}

