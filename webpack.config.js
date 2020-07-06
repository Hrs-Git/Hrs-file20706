const path = require('path');

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
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
