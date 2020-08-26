---
title: "webpack笔记"
date: 2020-08-25 13:00:00
categories:
  - 前端
tags:
  - 珠峰高级
  - 学习笔记
sidebar: auto
---

## webpack的基础操作
### 安装


>// 为防止全局安装webpack导致版本冲突，真实项目中以本地安装为主  
>$ npm init -y  
>$ npm install webpack webpack-cli --save-dev  
>OR  
>$ yarn init -y  
>$ yarn add webpack webpack-cli -D  

### 零配置使用

webpack默认会把当前项目src目录下的文件进行打包编译（默认编译的文件名是index.js），编译到dist文件目录下（合并打包后的文件名是main.js）（webpack编译代码的过程中支持CommonJS规范和ES6Module规范）  
|- src  
&nbsp;&nbsp;&nbsp;&nbsp;当前项目开发的原代码  
|- dist  
&nbsp;&nbsp;&nbsp;&nbsp;编译后的文件（未来部署到服务器上的）  

```shell
/*
 * 默认会打包SRC目录中的JS文件（入口默认index.js）
 * 打包完成的目录默认是DIST/MAIN.JS
 * webpack默认支持CommonJS和ES6 Module的模块规范，依此进行依赖打包
 */
$ npx webpack
```

### 自定义基础配置

> webpack.config.js OR webpackfile.js


编写自定义的webpack配置项，以后webpack打包编译的时候是按照自己配置的内容进行打包编译处理的（这个文件放置在项目的根目录下）  
文件名：webpack.config.js / webpackfile.js  
1. webpack本身是基于Node开发的，所以配置项的模块处理规则参考CommonJS规范来完成  

```js
const path = require('path');
module.exports = {
  // 设置编译模式 development/production
  mode: 'production',
  // 设置编译的入口文件（真实项目中一般开发的代码都要放置到SRC下）
  entry: './src/main.js',
  // 设置编译的出口文件 
  output: {
    // 编译后的文件名
    filename: 'bundle.[hash].min.js',
    // 输出的目录(绝对路径)
    path: path.resolve(__dirname, 'build')
  }
}
```

 ### 自定义配置文件名

 可在package.json中配置可执行的脚本命令（区分开发环境）

 ```js
 "scripts": {
    "serve": "webpack --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
},
```

### html-webpack-plugin

[https://www.webpackjs.com/plugins/html-webpack-plugin/](https://www.webpackjs.com/plugins/html-webpack-plugin/)

>$ npm i html-webpack-plugin –save-dev  

>$ yarn add html-webpack-plugin -D    


```js
  plugins: [
    // 配置指定的HTML页面模板 (后期在编译的时候会把编译好的资源文件自动导入到我们的页面模板中)
    new HtmlWebpackPlugin({
      // 模板的路径
      template: './public/index.html',
      // 编译后生成的文件名
      filename: 'index.html',
      // 是否把编译后的资源文件导入到页面中, 设置HASH值, 清除强缓存, 和outPut设置HASH值是一样的
      hash: true,
      // 把模板中的HTML代码也进行压缩(配置规则 https://github.com/kangax/html-minifier)
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true
      }
    }),
  ]
    ```

### clean-webpack-plugin

> 每一次打包之前，清除之前打包的内容

>$ npm i clean-webpack-plugin –save-dev
>$ yarn add clean-webpack-plugin -D


```js
  plugins: [
    // 每次打包都把之前的文件清空
    new CleanWebpackPlugin()
  ]
```

### webpack-dev-server

[https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)


>$ npm i webpack-dev-server –save-dev  

>$ yarn add webpack-dev-server -D    


```js
  // 配置DEV-SERVER  编译后的结果放在计算机内存中，并不会向之前的webpack命令一样，把编译后的东西放到build下，dev-server仅仅是在开发模式下，随时编译并且预览的，项目要部署的时候，还是需要基于webpack编译打包的
  devServer: {
    port: '3000',
    // 开启GZIP压缩
    compress: true,
    //=>指定访问资源目录
    contentBase: path.resolve(__dirname, "dist"),
    //=>自动打开浏览器
    open: true,
    //=>开启热更新
    hot: true,
    //=>请求代理
    proxy: {
      "/": {
        target: "http://localhost:8888",
        // secure: false, //若为true则表示是https，false是http
        // changeOrigin: true //把请求头当中的host值改成服务器地址
      }
    }
  },
  ```

  ### 多入口、多出口

```js
const htmlPlugins = ['index', 'login'].map(chunk => {
    return new HtmlWebpackPlugin({
        template: `./${chunk}.html`,
        filename: `${chunk}.html`,
        hash: true,
        chunks:[chunk,'jquery'],
        minify: {
           collapseWhitespace: true,
           removeComments: true,
           removeAttributeQuotes: true,
           removeEmptyAttributes: true
       }
   });
});

module.exports={
    entry: {
        index: "./src/index.js",
        login: "./src/login.js",
        jquery:"./src/jquery.js"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[
        ...htmlPlugins
    ]
};
```
### webpack中的加载器loader：处理样式的

>$ npm install css-loader style-loader less less-loader autoprefixer postcss-load –save-dev  

>$ yarn add css-loader style-loader less less-loader autoprefixer postcss-loader -D  


```js
module.exports = {
    //=>配置模块加载器LOADER
    module: {
        //=>模块规则：使用加载器（默认从右向左执行，从下向上）
        rules: [{
            test: /\.(css|less)$/, //=>基于正则匹配哪些模块需要处理
            use: [
                "style-loader", //=>把CSS插入到HEAD中
                "css-loader", //=>编译解析@import/URL()这种语法
                "postcss-loader", //=>设置前缀
                {
                    loader: "less-loader",
                    options: {
                        //=>加载器额外的配置
                    }
                }
            ]
        }]
    }
}
```

**postcss.config.js**

```js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
};
```

**package.json**

```js
// https://github.com/browserslist/browserslist
"browserslist": [
    "> 1%",
    "last 2 versions"
]
```

### mini-css-extract-plugin 抽离CSS内容

[https://www.npmjs.com/package/mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

>$ npm install mini-css-extract-plugin --save-dev  

>$ yarn add mini-css-extract-plugin -D

```js
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports = {
	plugins: [
		//=>使用插件
		new MiniCssExtractPlugin({
			//=>设置编译后的文件名字
			filename: 'main.[hash].css'
		})
	],
	module: {
		rules: [{
			test: /\.(css|less)$/,
			use: [
				// "style-loader",
				//=>使用插件中的LOADER代替STYLE方式
				MiniCssExtractPlugin.loader,
				"css-loader",
				"postcss-loader",
				"less-loader"
			],
			// 指定哪些目录下的CSS我们才处理
			include: path.resolve(__dirname, 'src'),
			// 忽略哪些目录下的CSS我们不处理
			exclude: /node_modules/
		}]
	}
}

```

### 设置优化项压缩CSS/JS

> $ npm install optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin terser-webpack-plugin –save-dev  

> yarn add optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin terser-webpack-plugin -D

```js
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');

module.exports = {
    //=>设置优化项
    optimization: {
        //=>设置压缩方式
        minimizer: [
            //=>压缩CSS（但是必须指定JS的压缩方式）
            new OptimizeCssAssetsWebpackPlugin(),
            //=>压缩JS
            //new UglifyjsWebpackPlugin({
                //cache: true, //=>是否使用缓存
                //parallel: true, //=>是否是并发编译
                //sourceMap: true, //=>启动源码映射（方便调试）
            //}),
            new TerserPlugin()
        ]
    }
};
```

### webpack中图片的处理

>$ npm install file-loader url-loader html-withimg-loader --save-dev  

>$ yarn add file-loader url-loader html-withimg-loader -D  


```js
module.exports = {
  module: {
    //=>模块规则：使用加载器（默认从右向左执行）
    rules: [{
      // 图片的处理  file-loader就是编译图片的加载器
      test: /\.(png|jpe?g|gif|ico|bmp|svg|eot|ttf|woff|woff2)$/i,
      use: [{
        // url-loader在编译的时候，会把符合条件的图片进行BASE64，对于不符合条件的还是继续使用file-loader处理
        loader: "url-loader",
        options: {
          limit: 100 * 1024,
          // 在编译的时候，把图片都放在统一的IMAGES文件夹下
          name: 'images/[name].[hash].[ext]',
          esModule: false
        }
      }]
    }, {
      // 编译HTML中的图片的，把其按照上述图片的处理机制处理
      test: /\.html$/,
      use: ['html-withimg-loader']
    }]
  }
}
```

### 基于babel实现ES6的转换和ESLint语法检测

[https://babeljs.io/](https://babeljs.io/)
[https://eslint.org/](https://eslint.org/)

>$ npm install babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-runtime --save-dev  
>$ npm insall @babel/runtime @babel/polyfill  
>$ npm install eslint eslint-loader --save-dev

>$ yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-runtime -D  
>$ yarn add @babel/runtime @babel/polyfill  
>$ yarn add eslint eslint-loader -D

```js
module.exports = {
  module: {
    //=>模块规则：使用加载器（默认从右向左执行）
    rules: [{
			test: /\.js$/i,
			use: [{
				loader: "babel-loader",
				options: {
					presets: [
						// 把ES6转为ES5
						"@babel/preset-env"
					],
					// 基于插件处理ES6/ES7中CLASS的特殊语法
					plugins: [
						// 类的装饰器的
						["@babel/plugin-proposal-decorators", {
							"legacy": true
						}],
						// 类中设置属性的
						["@babel/plugin-proposal-class-properties", {
							"loose": true
						}],
						"@babel/plugin-transform-runtime"
					]
				}
			}], // , "eslint-loader"  开启词法检测
			include: path.resolve(__dirname, 'src'),
			exclude: /node_modules/
		}]
  }
}
```

**类的装饰器**

```js
@log
class A{
    a=1;
}
function log(target){}
```