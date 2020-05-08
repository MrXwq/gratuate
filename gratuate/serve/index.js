const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

// 应该被放到环境变量里面的
app.set('secret','rewqreqwrsdaf')

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/back', express.static(__dirname + '/back'))
app.use('/', express.static(__dirname + '/before'))

require('./plugins/db')(app);
require('./routes/before/index')(app)
require('./routes/back/index')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})