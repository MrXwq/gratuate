module.exports = (app) => {
  let user = require('./user');
  let commodity = require('./commodity');
  let origin = require('./origin');
  let category = require('./category');
  app.use('/back/user', user);
  app.use('/back/api', commodity);
  app.use('/back/api', origin);
  app.use('/back/api', category);
}