const router = require('express').Router()
const AdminUser = require('../../models/AdminUser')

router.get('/users', async (req, res) => {
  let model = await AdminUser.find()
  console.log(model)
  res.send(model)
})

module.exports = router