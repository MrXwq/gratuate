const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    select: false,//不给前端反这数据
    set(val) {
      return require('bcrypt').hashSync(val,10)
    }//最存入的值做处理之后再存
  },
  // authority: {
  //   type: String,
  //   default: 'operation'
  // }
  authority: {
    type: String,
    default: 'ordinary'
  }
  // confirmPassword: {
  //   type: String
  // }
},{
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema);