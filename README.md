# π TodoList
webpack μ νμ©ν React ν¬λλ¦¬μ€νΈ 

</br>

β’β’β’ μμ± μ€(22-06-13)
</br>

## βοΈ webpack β

> `webpack` μ΄λ μ€ν μμ€ μλ°μ€ν¬λ¦½νΈ λͺ¨λ λ²λ€λ¬λ‘, μ£Όλ‘ μλ°μ€ν¬λ¦½νΈλ₯Ό μν λͺ¨λ λ²λ€λ¬μ΄μ§λ§ νΈν νλ¬κ·ΈμΈμ ν¬ν¨νλ κ²½μ° HTML, CSS, μ¬μ§μ΄λ μ΄λ―Έμ§μ κ°μ νλ‘ νΈμλ μμ°λ€μ λ³νν  μ μλ€. (λ²λ€λ¬λ νμν μμ‘΄μ±μ μΆμ νμ¬ ν΄λΉνλ μμ‘΄μ±λ€μ κ·Έλ£Ήν ν΄μ£Όλ λκ΅¬μ΄λ€.) μΉν©μ νλμ μμμ (Entry point)μΌλ‘λΆν° μμ‘΄μ μΈ λͺ¨λλ€μ λͺ¨λ μ°Ύμλ΄μ΄ νλμ νμΌλ‘ λ§λ€κ² λκ³  κ·Έ κ²°κ³Όλ¬Όμ Output μ΄λΌκ³  νλ€. entry, output κ³Ό κ΄λ ¨λ μ€μ λ€μ webpack.config.js νμΌμμ ν΄μ€ μ μλ€.

</br>

## βοΈ webpack μ μ μ¬μ©ν κΉ π

* μ±λ₯ ν₯μ </br>
μΉν©μ λͺ¨λ λ²λ€λ§ κΈ°λ₯μ κ°μ§κ³  μκΈ° λλ¬Έμ νμΌμ λ λΉ λ₯΄κ² μ»΄νμΌν  μ μλ€. 
* μ μ°μ± </br>
μΉν©μ Loader κΈ°λ₯μ ν΅ν΄ λ€μν λ¦¬μμ€λ₯Ό μλ°μ€ν¬λ¦½νΈμμ μ¬μ©ν  μ μλ μ¬λ¬ ννλ‘ λ³ννμ¬ μ¬μ©μ΄ κ°λ₯νλ€. 
* μμ¬μ΄ μ‘°μ </br>
μΉν©μ CLI(Command line Interface) λ‘ μ‘΄μ¬νκΈ° λλ¬Έμ, κ°λ¨ν λͺλ Ήμ΄λ‘ μ‘°μ λ° μ»΄νμΌμ΄ κ°λ₯νλ€.

</br>

## βοΈ webpack μ€μ νκΈ°

   π μ£Όμ μ¬ν­ </br>
   `Node / npm` λͺ¨λ μ€μΉ λμ΄μμ΄μΌ ν¨
     
  #### 1. νλ‘μ νΈ ν΄λ μμ±
  `mkdir todoList`
  
  #### 2. νλ‘μ νΈ ν΄λλ‘ μ΄λ
  `cd todoList`
  
  #### 3. package.json νμΌ μμ±
  `npm init`
  
  #### 4. React νκ²½ μ€μ 
  `npm i react react-dom`
  
  #### 5. webpack μ€μΉ
  `npm i -D webpack webpack-cli webpack-dev-server @types/webpack-dev-server` (D option: κ°λ°μ©)
  
  #### 6. babel μ€μΉ
  `npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader`
  
  #### 6-1. typescript κ΄λ ¨ ν¨ν€μ§ (βοΈ μΆκ°)
  `npm i -D @types/webpack @types/node @babel/preset-typescript`
  
  #### 7. loader μ€μΉ (μ ν)
  `npm i -D style-loader css-loader`
  
  #### 8. νμν ν΄λ / νμΌ μμ±
  ```
  mkdir dist src src/components 
  touch index.html src/index.js src/components/App.js
  ```
  #### 9. webpack μ€μ  νμΌ μμ±
  * webpack.config.js νμΌ μμ± </br>
  `touch webpack.config.js ` </br></br>
  * webpack.config.js νμΌ μ€μ   </br>
  ```javascript
  // webpack.config.js settings

  const path = require('path');

  module.exports = {
    name: 'todoList-setting',
    mode: 'development', // μ€μλΉμ€: production
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    entry: {
      app: ['./src/index'] // resolveμ μν΄ νμ₯μ μλ΅ κ°λ₯
    }, // μλ ₯
    module: {
      rules: [{
        test: /\.jsx?$/, // js, jsx νμΌμ κ·μΉ(babel-loader) μ μ©
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'] // babel loaderμμ μ¬μ©ν  μ΅μ
        }
      }]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    }, // μΆλ ₯
  };
  ```
  
  #### 10. Hot reloader μ μ©
  * λΌμ΄λΈλ¬λ¦¬ μ€μΉ </br>
  `npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin react-refresh` </br></br>
  * webpack.config.js νμΌ μΆκ° μ€μ  </br>
  ```javascript
  const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
  
  ...
          
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] 
            plugins: ['react-refresh/babel'], // μΆκ°
          },
        }],
       },
       plugins: [new RefreshWebpackPlugin()], // μΆκ°
       output: {
         path: path.join(__dirname, 'dist'),
         filename: '[name].js',
       }, 
       devServer: { // μΆκ°
         publicPath: '/dist/',
         hot: true // hot reloading
       }
     };
  ```
   β webpack-dev-server λ μμ€ μ½λμ λ³κ²½μ μ κ°μ§νμ¬ publicPath λ₯Ό μμ ν΄μ€ (hot reloading)
      
   </br>


  #### 11. webpackμ μν tsconfig νμΌ μμ± (βοΈ μΆκ°)
  * tsconfig-for-webpack.json νμΌ μμ± </br>
  `touch tsconfig-for-webpack.json ` </br></br>
  * tsconfig-for-webpack.json νμΌ μ€μ   </br>
  
  ```json
  {
      "compilerOptions": {
         "module": "commonjs",
         "moduleResolution": "Node",
         "target": "es5",
         "esModuleInterop": true
      }
  }
  ```
   
   #### 12. webpack μ€ν
   ##### βΆοΈ Typescript νλ‘μ νΈμΈ κ²½μ°
   * package.json νμΌ μμ  </br>
   
   ```json
   "script": {
      "build": "TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
   }
   ```
   
   * webpack μ€ν </br>
   `npm run dev` </br>
   
   β ts-node μλ¬λλ©΄ `npm i ts-node`
   
   
   ##### βΆοΈ Javascript νλ‘μ νΈμΈ κ²½μ°
   * webpack μ€ν </br>
   `npx webpack`
  
</br>

## βοΈ κΈ°μ  μ€ν

* React
* React-icons
* Styled-components
* Context API
* Weather API
* localStorage
* shortid

</br>

## βοΈ μ€ν¬λ¦° μ·
</br>

* todoList </br>
<img src="https://user-images.githubusercontent.com/71072930/122425090-34bbd300-cfca-11eb-9f26-f36666f7dd65.png" width="280" height="410">

</br>

* λ μ¨μ λ°λΌ λ¬λΌμ§λ νλ©΄ </br>

βοΈ Clear </br>
<img width="320" alt="Clear" src="https://user-images.githubusercontent.com/71072930/122671724-007f2700-d203-11eb-87c3-5948a775239f.png">
</br></br>

βοΈ Clouds </br>
<img width="320" alt="Clouds" src="https://user-images.githubusercontent.com/71072930/122671730-0412ae00-d203-11eb-9e99-f008efe225ef.png">
</br></br>

π§ Rain </br>
<img width="320" alt="Rains" src="https://user-images.githubusercontent.com/71072930/124553120-509af200-de6f-11eb-806a-5fa7c73577c4.png">

π¨ Snow </br>

 </br>
 
