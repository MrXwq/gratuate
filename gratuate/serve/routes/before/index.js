module.exports = app => {
  let user = require('./user')
  let commodity = require('./commodity')
  let category = require('./category')
  let order = require('./order')
  let cart = require('./cart')

  app.use('/web/user', user)
  app.use('/web/api', commodity)
  app.use('/web/api', category)
  app.use('/web/api', order)
  app.use('/web/api', cart)
}