const router = require('express').Router()

const AdminUser = require('../../models/AdminUser')

router.post('/register', async (req, res) => {
  let model = await AdminUser.findOne({
    username: req.body.username
  })
  if (model.username === req.body.username) {
    return res.status(409).send({
      message: '用户已存在'
    })
  } else {
    let model = await AdminUser.create(req.body)
    res.send(model)
  }
  // console.log(model.username)
  // console.log(req.body.username)
  // console.log(req.body)
})

router.post('/login', async (req, res) => {
  let model = await AdminUser.find(req.body)
  res.send(model)
})

module.exports = router