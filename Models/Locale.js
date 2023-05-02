

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LocaleSchema = new Schema({
    Nom: {
        type: String,
    },
    Adresse: {
        type: String,
    },
    Pays: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pays'
    },

    Responsables: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsable'
    }],




});

const LocaleModel = mongoose.model('Locale', LocaleSchema);
module.exports = LocaleModel;