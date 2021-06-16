// webpack settings

const path = require('path');

module.exports = {
  name: 'todoList-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다는 의미
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./src/index']
  }, // 입력
  module: {
    rules: [{
      test: /\.jsx?$/, // js, jsx 파일에 룰(babel-loader) 적용
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'] // babel loader에서 사용할 옵션
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }, // 출력
};