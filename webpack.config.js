const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//エントリーポイントを取得

module.exports = {
  entry: './src/javascripts/main.js',
  output: {
    //出力先とする
    path: path.resolve(__dirname, './dist'), //絶対パスを記述dir_nameとする
    filename: 'javascripts/main.js', //filename
  },
  module: {
    rules: [
      {
        test: /\.css/, //ファイル検知　正規表現の為バックスラッシュ
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylestheets/main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
