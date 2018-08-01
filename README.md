### React基础框架使用流程

## 技术点
   - React
   - Redux
   - Router4.0
   - TypeScript
   - Sass
   - WebPack

## JavaScripts版本
   - 全局采用ES6语法进行开发，结合Babel解析成ES5语法兼容浏览器版本

## 开发面向对象化
   - 全局采用TypeScript(超集)模式进行面向对象化开发，需严格遵循该开发模式（通过tsconfig.json 和 tslint.json进行代码静态检查），在开发阶段能够避免一些常见错误的发生，提高开发效率，尤其在组件化开发模式下尤为突出。
   
   - 全局尽量采用组件化开发，有助于日后的代码维护。

## 全局数据流跟踪方案
   - 全局采用Redux单向数据流模式对数据进行统一管理

   - 数据流走向： View -> Action -> Reducer -> View
 

 ![Image text](https://img-blog.csdn.net/20180530214840982)

  - action：官方的解释是action是把数据从应用传到 store 的有效载荷，它是 store 数据的唯一来源；要通过本地或远程组件更改状态，需要分发一个action；

  - reducer：action发出了做某件事的请求，只是描述了要做某件事，并没有去改变state来更新界面，reducer就是根据action的type来处理不同的事件；

  - store：store就是把action和reducer联系到一起的对象，store本质上是一个状态树，保存了所有对象的状态。任何UI组件都可以直接从store访问特定对象的状态。

  ## 注意事项
  - React将ReactDOM进行的单独拆分，react-dom

  - Router4.0 拆分出react-router-dom，与<4.0版本有一定的变化

  - 由于TypeScript依赖缘故，在npm安装包时需要同时安装一份对应的d.ts映射文件的包，安装方式：npm install @types/XXX包名 --save 大部分情况下每个包都有对应的的d.ts文件无需我们手工写，除了自己定义的ts文件外，详细可参考http.d.ts书写方式。

  - 每个组件类都需要严格定义其Interface。
  - 全局组件化开发。

  - 保证代码的干净整洁。


## 启动
```
 1. npm install 根据依赖安装包

 2. npm start  启动项目 默认3000端口

 3. npm run build 上线编译打包项目
```





