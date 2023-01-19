module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/shop-admin/'
      : '/',
    outputDir: "docs",
    assetsDir: 'static'
}
