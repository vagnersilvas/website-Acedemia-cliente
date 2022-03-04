Iniciando o projeto

`yarn init -y`

`yarn add react`

`yarn add react-dom`

criar pasta `src` e arquivo `index.js`

criar pasta `public`  e arquivo  `index.html `

configurar o `babel`

`babel` é usado somente em abiente de desenvolvimento

`yarn add @babel/core @babel/cli @babel/preset-env -D`

criar arquivo `babel.config.js`

##### configurar o arquivo `babel.config.js`
````
module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react']
    }
````



para que consiga os diferentes tipos de browser entendam o codigo react

`yarn add @babel/preset-react -D` 

`yarn babel src/index.js --out-file dist/bundle.js` 

##### integracao entre o babel e o webpack

`yarn add babel-loader -D` 

##### Configurar o `webpack`

Estipula uma serie de configuracoes que sao chamados de loaders que vai ensinar para a nossa aplicacao como ela deve tratar cada tipo de arquivo.
vai tornar cada arquivo entendivel pelo browser

##### instalar `webpack`

`yarn add webpack webpack-cli -D` 

##### criar arquivo de configuração do webpack

`webpack.config.js`


````
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        },
    resolve: {
        extensions: ['.js', '.jsx']
        },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
}
````
##### executar comando

`yarn webpack` - a cada mudança nos arquivos


##### configurar estrutura do React 

apartir da versao 17 nao precisa importar em todo arquivo o React

para isso no arquivo `babel.config.js`, 
adicionamos um objeto junto a estrutura

`['@babel/preset-react', {runtime: automatic'}]`

##### No index.html

criar `<div id="root"></div>`

normalmente essa div é criada, e sera a unica do arquivo `index.html`

importar o arquivo bundle.js

`<script src="../dist/bundle.js"></script>`

##### No index.js

```
import { render } from 'react-dom';

render(<App/>, document.getElementById('root'));
```

executar comando novamente

`yarn webpack` 

##### Melhorando

excluir importacao

`<script src="../dist/bundle.js"></script>`

##### instalar plugin webpack-html

`yarn add html-webpack-plugin -D`

e no arquivo `webpack.config.js` adicionar 

`const HtmlWebpackPlugin = require('html-webpack-plugin')`  
````
plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

````

adicionar a funcionalidade `dev sever` do `webpack`

`yarn add webpack-dev-server -D`

ela vai servir para que nos nao precisemos dar o comando `yarn webpack` toda vez que o documento for alterado
o webpack vai ficar observando as alterações nos arquivos, assim que houver alguma ele criar o bundle.js de novo

consfigurar o dev sever dentro do arquivo `webpack.config.js`

````
devServer:{
    static: path.resolve(__dirname, 'public')
}
````

##### Executar comando 

`yarn webpack serve`

##### Configurar funcionalidade dentro webpack - `source maps`

serve para ver exatamente onde um erro aconteceupelo browser

há diferentes tipos de source maps, uns mais lentos outros mais rapidos, um para ambiente de desenvolvimento outro para ambiente de producao...

vamos usar o `devtool:'eval-source-map'`

pausar e executar o webpack novamente

`yarn webpack serve`

consfigurar um ambiente de desenvolvimento e um de produção

`const isDevelopment = process.env.NODE_ENV !== 'production';`

````
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',

````
##### Instalar cross-env para criar variavel de ambiente NODE_ENV

serve para criar variaveis de ambientes em diferentes tipos de sistema operacionais

`yarn add cross-env -D`

##### configurar package.json

````
"scripts": {
    "dev":"webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
````
rodar `yarn dev` para ambiente de desenvolvimento

rodar `yarn build` para ambiente de produção

##### configuracao css

vai possibilar que possamos importar arquivos css dentro da nossa aplicação

instalar outros loaders

`yarn add style-loader css-loader -D`

adicionar uma nova rule em `webpack.config.js`
````
{
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
}
````

##### configuracao sass
instalar o sass

`yarn add node-sass -D`

instalar loader do webpack para entender arquivo sass

`yarn add sass-loader -D` 

add `.scss` e `sass-loader`
````
{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}
````
##### instalar plugin react fast refresh

`yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`

add ao arquivo `webpack.config.js`

````
  devServer: {
    hot: true,
  },
````

````
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};
````

##### Instalar TypeScript

`yarn add typescript -D`

Para inicializar o typescritp na aplicacao rodar o comando

`yarn tsc --init`

para o babel entender typescript precisamos adicionar essa extensao

`yarn add @babel/preset-typescript -D`

adicionar configuração no arquivo babel

`'@babel/preset-typescript',`

adicionar types ts

`yarn add @types/react-dom -D`

`yarn add @types/react -D`
