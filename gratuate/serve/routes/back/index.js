module.exports = (app) => {
  let user = require('./user')
  app.use('/admin/user', user)
}