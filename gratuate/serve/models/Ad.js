const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
})

module.exports = mongoose.model('Ad', AdSchema);