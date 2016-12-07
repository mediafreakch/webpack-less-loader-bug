var path = require('path')

module.exports = {
  entry: './src/components/styles.less',
  output: {
    path: './dist',
    filename: 'bundle.css'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader?{"paths":["' + path.resolve(__dirname, './') + '"]}'
      }
    ]
  },
  resolveLoader: {
      modules: [ path.resolve(__dirname, './'), 'node_modules' ]
  }
}
