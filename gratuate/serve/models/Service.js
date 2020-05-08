const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    basis: {
        type: String
    },
})

module.exports = mongoose.model('Service', ServiceSchema);