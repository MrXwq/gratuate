module.exports = app => {
  let user = require('./user')
  app.use('/web/user', user)
}