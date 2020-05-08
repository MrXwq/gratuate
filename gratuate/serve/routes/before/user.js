const router = require('express').Router()
const jwt = require('jsonwebtoken')
const assert = require('http-assert')

const AdminUser = require('../../models/AdminUser')

router.post('/register', async (req, res) => {
  let model = await AdminUser.findOne({
    username: req.body.username
  })
  if (model && model.username === req.body.username) {
    return res.status(409).send({
      message: '用户已存在'
    })
  } else {
    let user = await AdminUser.create(req.body)
    res.send(user)
  }
})

router.post('/user', async (req, res) => {
  const {
    username,
    password
  } = req.body
  // 1.根据用户名查找用户,因为密码被散列了，所以不能按密码来找

  // 在设置用户数据库的时候，我们默认把密码不显示，所以我们这里是取不到的，我们需要在这里加一个.select('+password')
  const user = await AdminUser.findOne({
    username
  }).select('+password')

  assert(user, 422, '用户不存在')
  // if(!user) {
  //     return res.status(422).send({
  //         message: '用户不存在'
  //     })
  // }
  // 2.校验密码
  // 对比请求的密码和数据库中的密码
  const isValue = require('bcrypt').compareSync(password, user.password)
  assert(isValue, 422, '密码错误')
  // if(!isValue) {
  //     return res.status(422).send({
  //         message: '密码错误'
  //     })
  // }
  // 3.返回token

  // app.get()只有一个参数就代表获取配置，如果有两个那么就是获取路由
  // token的生成
  const token = jwt.sign({
    id: user._id
  }, req.app.get('secret'))
  res.send({
    token
  })
})

module.exports = router