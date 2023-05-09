

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
        type: String,
    },

    Responsables: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsable'
    }],




}, { timestamps: true, versionKey: false });

const LocaleModel = mongoose.model('Locale', LocaleSchema);
module.exports = LocaleModel;