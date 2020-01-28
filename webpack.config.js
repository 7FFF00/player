const path = require('path');

const ENTRY_FILE = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const OUT_DIR = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'development',
  entry: ENTRY_FILE,
  output: {
    path: OUT_DIR,
    filename: 'player_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
