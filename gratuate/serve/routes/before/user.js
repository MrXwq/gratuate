const router = require('express').Router()

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

router.post('/login', async (req, res) => {
  let model = await AdminUser.find(req.body)
  res.send(model)
})

module.exports = router