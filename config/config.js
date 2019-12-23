// umi的配置文件
// antd  antd-design  蚂蚁金服开源的动效库 Ant Motion 和 ui组件库antd 。  蚂蚁金服的一套 ui 框架， 可以 基于 React，vue，Angular 等框架
// label-plugin-import 安装 babel-plugin-import 是为了能够动态加载仅仅被引入的 antd组件所依赖的样式，而非全部引入。
    // webpack 配置
        //  .webpackrc 添加
        // {
        // +  "extraBabelPlugins": [
        //     +    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
        //     +  ]
        // }
// dva 框架本质上是 蚂蚁金服基于 React技术栈封装的一套框架，特点在于免去了新手手动搭建完整开发环境（Redux，React-Router等的安装）的麻烦，
// 一键安装即可项目开发，虽然降低了上手难度，但不可避免的是反而使扩展成本变得更高（如需要单独配置特定的webpack配置项
// umi  umijs 是蚂蚁金服的底层前端框架, 中文可发音为乌米，是一个可插拔的企业级 react 应用框架。 是由 阿里 开源的 。umi 以路由为基础的，支持类 next.js 的约定式路由，

// sass 动态样式语言， 可以用来像 写 代码一样编写 css， sass3 以上被称为 scss， 只能再服务器端运行，sass 是 ruby 写的
// less 和 sass 类似， 动态样式语言，它可以在 服务器端 和客户端运行， 语法比较简单

import path from 'path';

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

export default {
    plugins: [
        [
            'umi-plugin-react',
            {
                // 在umi中，redux是封装在dva中的，但是我们想用原始的那种redux (仅仅是个人原因)，我们就不去使用dva的模式
                antd: true, // 使用 antd
                dva: false // 不使用 dva， 我们直接使用 redux
            }
        ]
    ],
    // 使用自定义的router，如果不使用则是用umi的约定式路由(按文件夹路径来)
    // 这里的path都是相对于pages文件，例如：
    //  routes:[{
    //   path:'/box', // 指定路由地址(url)
    //   component:'Box/index' //引用的组件路径
    // }]
    // 引用的就是pages文件夹下 Box/index.js文件

    routes:[
        {
            path:'/',
            component:'index',
            routes: [
                {
                    path: '/',
                    component: './home/index'
                },
                {
                    path: '/center',
                    component: './center/index'
                }
            ]
        }
    ],
    // 参考： https://www.jianshu.com/p/0b536e66ac61
    cssLoaderOptions: {  // 此参数是 scss 载入时 找不到 样式需要加载的参数
        localIdentName:'[local]'
    },
    // umi 添加额外的 webpack 配置
    chainWebpack(config, { webpack }) {
        // https://blog.csdn.net/eunice_sytin/article/details/83587697
        // 参考：https://www.jianshu.com/p/84de29925f7f?utm_source=oschina-app
        // 需要注意的是，module.rules.use数组中，loader 的位置。根据 webpack 规则：放在最后的 loader 首先被执行。所以，首先应该利用sass-loader将 scss 编译为 css，剩下的配置和处理 css 文件相同。
        // 同时，对于其他的 css 预处理语言，处理方式一样，首先应该编译成 css，然后交给 css 的相关 loader 进行处理。

        // config.context(path.resolve(__dirname, './'));
        // config.resolve.alias.set("@", require('path').resolve(__dirname, 'src'));

        config.module.rule([
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            }
        ]);
    },
    theme: './src/assets/css/theme.js'
};