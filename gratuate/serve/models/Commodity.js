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
    }
    // params: [{
    //     paramsName: {
    //         type: String
    //     },
    //     paramsVal: {
    //         type: String
    //     }
    // }],
    // service: {
    //     type: Array
    // },
})

module.exports = mongoose.model('Commodity', CommoditySchema);