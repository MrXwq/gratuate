const mongoose = require('mongoose')

const ParamSchema = new mongoose.Schema({
    paramName: {
        type: String
    },
    paramVal: {
        type: String
    }
        
},{
    timestamps: true
  })

module.exports = mongoose.model('Param', ParamSchema);