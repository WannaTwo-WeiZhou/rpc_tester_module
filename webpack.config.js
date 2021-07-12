const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: '/node_modules/'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: '[name].js',
    library: 'rpc_tester_module',
    libraryTarget: 'umd',
    globalObject: "this"
  },
};
