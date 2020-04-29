const mongoose = require('mongoose')

const OriginSchema = new mongoose.Schema({
    pinyin: {
        type: String
    },
    placeName: {
        type: Array
    }
        
})

module.exports = mongoose.model('Origin', OriginSchema);