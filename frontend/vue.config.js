module.exports = {
    publicPath: '/Soft-Park/',
    outputDir: 'dist',
    
  }
  
  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Soft-Park/'
      : '/'
  }
  