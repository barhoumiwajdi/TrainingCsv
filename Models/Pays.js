const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PaysSchema = new Schema({
    nom: {
        type: String,
    },
    langue: {
        type: String,
    },
    continent: {
        type: String,
    },
    couleur_drapeau: {
        type: String,
    },
    Réligion: {
        type: String,
    },
    popilisation: {
        type: Number,
    },
    taux_de_migration: {
        type: String,
    },
    Locales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locale'
    }],



});

const PaysModel = mongoose.model('Pays', PaysSchema);
module.exports = PaysModel;