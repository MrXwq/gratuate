const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Category'
    }
},{
    timestamps: true
  })

module.exports = mongoose.model('Category', CategorySchema);