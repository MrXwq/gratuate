const mongoose = require('mongoose')

const OriginSchema = new mongoose.Schema({
    pinyin: {
        type: String
    },
    placeName: {
        type: Array
    }
        
},{
    timestamps: true
  })

module.exports = mongoose.model('Origin', OriginSchema);