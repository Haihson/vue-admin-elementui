# vue-admin-elementui

> Vue + ElementUI 后台管理模版，根据权限动态配置路由。

> [https://haihson.github.io/vue-admin-elementui/](https://haihson.github.io/vue-admin-elementui/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Features

* 基于 [Vue](https://vuejs.org/) **2.0+** & [ElementUI]() **2.0.1**

* Node >= v6

* NPM >= v5

* Webpack v3

## CODE

> 目录结构

```
├── build	编译任务配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.test.conf.js
├── config	webpack 的配置文件
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html	主HTMl
├── package.json	npm依赖配置文件
├── src	源代码
│   ├── assets	素材
│   ├── components	组件
│   │   └── MenuTree.vue 菜单组件
│   ├── router	路由
│   │   └── index.js
│   ├── utils	工具类
│   │   ├── menuComponentModule.js
│   │   └── MenuUtils.js
│   ├── views	视图
│   │   ├── Home.vue
│   │   └── .....vue 
│   ├── App.vue
│   └── main.js	入口JS文件
├── static	静态文件
├── README.md
```