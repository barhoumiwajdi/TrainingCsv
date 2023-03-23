const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://127.0.0.1:27017/PFE').then((success) => {
    console.log("=> Successfully connection to database")
}).catch((error) => {
    console.log("=> Connect with error")
});

module.exports = connect;