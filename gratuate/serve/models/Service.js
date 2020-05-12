const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    basis: {
        type: String
    },
},{
    timestamps: true
  })

module.exports = mongoose.model('Service', ServiceSchema);