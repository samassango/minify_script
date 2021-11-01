import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: "development",
  entry: ['./src/index.js', './src/utils.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'min.bundle.js',
  },
};

export default config;