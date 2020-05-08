const mongoose = require('mongoose')

const ParamSchema = new mongoose.Schema({
    paramName: {
        type: String
    },
    paramVal: {
        type: String
    }
        
})

module.exports = mongoose.model('Param', ParamSchema);