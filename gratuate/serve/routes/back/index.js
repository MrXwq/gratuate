module.exports = (app) => {
  const user = require('./user');
  const commodity = require('./commodity');
  const origin = require('./origin');
  const category = require('./category');
  const param = require('./param');
  const service = require('./service');
  const ad = require('./ad');
  const upload = require('./upload');
  
  app.use('/back/user', user);
  app.use('/back/api', commodity);
  app.use('/back/api', origin);
  app.use('/back/api', category);
  app.use('/back/api', param);
  app.use('/back/api', service);
  app.use('/back/api', ad);
  app.use('/back/api', upload);

}