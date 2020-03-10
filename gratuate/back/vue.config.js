module.exports = {
  outputDir: __dirname + '/../serve/back',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/back/'
    : '/'
}