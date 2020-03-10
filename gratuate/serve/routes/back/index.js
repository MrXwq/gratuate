module.exports = (app) => {
  let user = require('./user')
  app.use('/back/user', user)
}