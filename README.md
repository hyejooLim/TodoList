# 📝 TodoList
webpack 을 활용한 React 투두리스트 

</br>

••• 작성 중(21-06-20)
</br>

## ☁️ webpack ❓

> `webpack` 이란 오픈 소스 자바스크립트 모듈 번들러로, 주로 자바스크립트를 위한 모듈 번들러이지만 호환 플러그인을 포함하는 경우 HTML, CSS, 심지어는 이미지와 같은 프론트엔드 자산들을 변환할 수 있다. (번들러란 필요한 의존성을 추적하여 해당하는 의존성들을 그룹핑 해주는 도구이다.) 웹팩은 하나의 시작점(Entry point)으로부터 의존적인 모듈들을 모두 찾아내어 하나의 파일로 만들게 되고 그 결과물을 Output 이라고 한다. entry, output 과 관련된 설정들은 webpack.config.js 파일에서 해줄 수 있다.

</br>

## ☁️ webpack 을 왜 사용할까 🌀

* 성능 향상 </br>
웹팩은 모듈 번들링 기능을 가지고 있기 때문에 파일을 더 빠르게 컴파일 할 수 있다. 
* 유연성 </br>
웹팩은 Loader 기능을 통해 다양한 리소스를 자바스크립트에서 사용할 수 있는 여러 형태로 변환하여 사용이 가능하다. 
* 손쉬운 조작 </br>
웹팩은 CLI(Command line Interface) 로 존재하기 때문에, 간단한 명령어로 조작 및 컴파일이 가능하다.

</br>

## ☁️ webpack 설정하기

   📌 주의 사항 </br>
   `Node / npm` 모두 설치 되어있어야 함
     
  #### 1. 프로젝트 폴더 생성
  `mkdir todoList`
  
  #### 2. 프로젝트 폴더로 이동
  `cd todoList`
  
  #### 3. npm init
  ❕ package.json 파일이 생성됨
  
  #### 4. React 환경 설정
  `npm i react react-dom`
  
  #### 5. webpack 설치
  `npm i -D webpack webpack-cli webpack-dev-server` (D option: 개발용)
  
  #### 6. babel 설치
  `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`
  
  #### 7. loader 설치 (선택)
  `npm i -D babel-loader style-loader css-loader`
  
  #### 8. 필요한 폴더 / 파일 생성
  ```
  mkdir dist src src/components 
  touch index.html src/index.js src/components/App.js
  ```
  #### 9. webpack 설정 파일 생성
  * webpack.config.js 파일 생성 </br>
  `touch webpack.config.js ` </br></br>
  * webpack.config.js 파일 설정  </br>
  ```javascript
  // webpack.config.js settings

  const path = require('path');

  module.exports = {
    name: 'todoList-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    entry: {
      app: ['./src/index'] // resolve에 의해 확장자 생략 가능
    }, // 입력
    module: {
      rules: [{
        test: /\.jsx?$/, // js, jsx 파일에 규칙(babel-loader) 적용
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
  ```
  
  #### 10. Hot reloader 적용
  * 라이브러리 설치 </br>
  `npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin` </br></br>
  * webpack.config.js 파일 추가 설정 </br>
  ```javascript
  const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
  
  ...
          
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] 
            plugins: ['react-refresh/babel'], // 추가
          },
        }],
       },
       plugins: [new RefreshWebpackPlugin()], // 추가
       output: {
         path: path.join(__dirname, 'dist'),
         filename: '[name].js',
       }, 
       devServer: { // 추가
         publicPath: '/dist/',
         hot: true // hot reloading
       }
     };
  ```
   ❕ webpack-dev-server 는 소스 코드의 변경점을 감지하여 publicPath 를 수정해줌 (hot reloading)

</br>

## ☁️ 기술 스택

* React
* React-icons
* Styled-components
* Context API
* Weather API
* localStorage
* shortid

</br>

## ☁️ 스크린 샷
</br>

* todoList </br>
<img src="https://user-images.githubusercontent.com/71072930/122425090-34bbd300-cfca-11eb-9f26-f36666f7dd65.png" width="280" height="410">

</br>

* 날씨에 따라 달라지는 화면 </br>

☀️ Clear </br>
<img width="320" alt="Clear" src="https://user-images.githubusercontent.com/71072930/122671724-007f2700-d203-11eb-87c3-5948a775239f.png">
</br></br>

☁️ Clouds </br>
<img width="320" alt="Clouds" src="https://user-images.githubusercontent.com/71072930/122671730-0412ae00-d203-11eb-9e99-f008efe225ef.png">
</br></br>

🌧 Rain </br>
<img width="320" alt="Rains" src="https://user-images.githubusercontent.com/71072930/124553120-509af200-de6f-11eb-806a-5fa7c73577c4.png">

🌨 Snow </br>

 </br>
 
