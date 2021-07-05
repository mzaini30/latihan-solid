const fs = require('fs')
const { generateRoutes } = require('vue-route-generator-jsx')
const chokidar = require('chokidar');

const generate = () => fs.writeFileSync('./src/routes.js', generateRoutes({
  pages: './src/pages'
}))

if (process.argv[2] == '-w') {
  const watcher = chokidar.watch('./src/pages')
  watcher.on('add', () => generate())
  watcher.on('unlink', () => generate())  
} else {
  generate()
}