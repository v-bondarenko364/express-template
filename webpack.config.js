const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env, argv) => ({
  devtool: 'inline-source-map',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new NodemonPlugin(),
    new Dotenv({
      path: argv.mode === 'production' ? '.env.prod' : '.env.dev',
    }),
  ],
  resolve: {
    extensions: ['.ts'],
    modules: [path.resolve('./src')],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  externals: [nodeExternals()],
});
