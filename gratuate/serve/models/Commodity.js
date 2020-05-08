const mongoose = require('mongoose')

const CommoditySchema = new mongoose.Schema({
    price: {
        type: Number
    },
    preferential: {
        type: Number
    },
    title: {
        type: String
    },
    freight: {
        type: Number
    },
    sales: {
        type: Number,
        default: 0
    },
    origin: {
        type: String
    },
    categories: {
        type: Array
    },
    params: [{
        paramName: {
            type: String
        },
        paramVal: {
            type: String
        }
    }],
    service: [{
        basis: {
            type: String
        }
    }],
    carousel: {
        type: Array
    },
    detail: {
        type: Array
    },
    listImg: {
        type: String
    },
    color: {
        type: Array
    }
})

module.exports = mongoose.model('Commodity', CommoditySchema);