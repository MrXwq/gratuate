const router = require('express').Router()

const AdminUser = require('../../models/AdminUser')

router.get('/user', async (req, res) => {
  let model = await AdminUser.find()
  res.send(model)
})

module.exports = router