const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESCompressPlugin = require('escompress-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const package = require('./package.json');
const header = package.name + ' v' + package.version + '\n' + 'Copyright (c) Tom W Hall 2017';

const common = {
  entry: {
    app: path.join(PATHS.app, 'js/Components/index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(PATHS.build, 'js'),
    filename: package.name + '.js'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        include: PATHS.app
      }
    ]
  }
};

const dev = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from: path.join(PATHS.app, 'css'), to: path.join(PATHS.build, 'css') },
      { from: path.join(PATHS.app, 'index.html'), to: PATHS.build }
    ]),
    new webpack.BannerPlugin(header)
  ]
});

const release = merge(dev, {
  output: {
    filename: package.name + '.min.js'
  },
  plugins: [
    new ESCompressPlugin(),
    new webpack.BannerPlugin(header)
  ]
});

if (TARGET === 'dev' || !TARGET) {
  module.exports = dev;
}

if (TARGET === 'release') {
  module.exports = release;
}