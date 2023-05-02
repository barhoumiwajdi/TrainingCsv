const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ResponsableSchema = new Schema({
    Nom: {
        type: String,
    },
    Prenom: {
        type: String,
    },
    num_passport: {
        type: String,
    },
    date_affectation: {
        type: Date,
    },
    Pays: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pays'
    },
    Locale: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locale'
    },




});

const ResponsableModel = mongoose.model('Responsable', ResponsableSchema);
module.exports = ResponsableModel;