const path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties',
            new CopyWebpackPlugin([
                {from:'src/images',to:'images'} 
            ])]
          }
        }
      },
    ],
  }
};
