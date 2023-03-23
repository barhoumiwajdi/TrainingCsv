const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MigrationSchema = new Schema({
    Series_reference: {
        type: String,
    },
    Period: {
        type: String,
    },
    Data_value: {
        type: String,
    },
    Suppressed: {
        type: String,
    },
    STATUS: {
        type: Boolean,
    },
    UNITS: {
        type: String,
    },
    Magnitude: {
        type: String,
    },
    Subject: {
        type: String,
    },
    Group: {
        type: String,
    },
    Series_title_1: {
        type: String,
    },
    Series_title_2: {
        type: String,
    },
    Series_title_3: {
        type: String,

    },
    Series_title_5: {
        type: String,
    },
    Series_title_6: {
        type: String,
    },
},
    {
        timestamps: true
    });

const migrationModel = mongoose.model('migration', MigrationSchema);
module.exports = migrationModel;