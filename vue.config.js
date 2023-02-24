// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages: {
    'index': {
      entry: './src/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    // 'about': {
    //   entry: './src/pages/About/main.js',
    //   template: 'public/index.html',
    //   title: 'About',
    //   chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    // }
  }
}