module.exports = app => {
  let user = require('./user')
  app.use('/user', user)
}