const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  token: {
    type: String,
  },
  commodity: {
      type: Object
  },
  count: {
      type: Number
  },
  receipt: {//收货地址
      type: String
  },
  name: {
      type: String
  },
  telNumber: {
      type: String
  },
  purchaseNum: {
      type: Number
  },
  color: {
      type: String
  }
})

module.exports = mongoose.model('Cart', CartSchema);