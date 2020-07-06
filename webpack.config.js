const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//エントリーポイントを取得

module.exports = {
  entry: './src/index.js',
  output: {
    //出力先とする
    path: path.resolve(__dirname, './dist'), //絶対パスを記述dir_nameとする
    filename: 'main.js', //filename
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
