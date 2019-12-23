1、创建项目
    mkdir antd-course
    cd antd-course
    npm init -y    [创建初始化 package.json]
    cnpm install antd --save    [安装 antd， 在开发和 部署都使用]
    cnpm install umi --save-dev  [安装 umi， 仅在开发阶段使用]
    cnpm install umi-plugin-react --save-dev [umi 的 react 插件]

    cnpm install node-sass --save-dev --unsafe-perm
    cnpm install sass-loader --save-dev

    cnpm install babel-plugin-import --save

2、umi 支持 typeScript
    2.1、安装依赖
        npm install -g typescript
        cnpm install tslint tslint-config-prettier tslint-react @types/react @types/react-dom --save [typeScript 的依赖]

    2.2、新建 tsconfig.json 和 tslint.json 文件
        tsconfig.json 来声明这是一个 TypeScript 项目，并且进行配置
        tslint 类似 eslint 是一个代码风格检查器


3、安装 webstorm scss
    ruby -v
    sudo gem install sass

4、webstorm 配置 typescript

        Name:TypeScript
        File Type:TypeScript
        Scope:All Places
        Program:/usr/local/lib/node_modules/typescript/bin/tsc（既安装typescript的路径下的tyc文件）
        Arguments:--sourcemap --target "ES5"
        Output paths to refresh:$FileNameWithoutExtension$.js:$FileNameWithoutExtension$.js.map
        WOrking directory:$FileDir$


5、umi 项目的一般目录:
    .
    ├── dist/                          // 默认的 build 输出目录
    ├── mock/                          // mock 文件所在目录，基于 express
    ├── config/
        ├── config.js                  // umi 配置，同 .umirc.js，二选一
    └── src/                           // 源码目录，可选
        ├── layouts/index.js           // 全局布局
        ├── pages/                     // 页面目录，里面的文件即路由
            ├── .umi/                  // dev 临时目录，需添加到 .gitignore
            ├── .umi-production/       // build 临时目录，会自动删除
            ├── document.ejs           // HTML 模板
            ├── 404.js                 // 404 页面
            ├── page1.js               // 页面 1，任意命名，导出 react 组件
            ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
            └── page2.js               // 页面 2，任意命名
        ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
        ├── global.js                  // 可以在这里加入 polyfill
        ├── app.js                     // 运行时配置文件
    ├── .umirc.js                      // umi 配置，同 config/config.js，二选一
    ├── .env                           // 环境变量
    └── package.json


6、本示例
    不使用 dva， 我们直接使用 redux

7、启动
    npm start




二：
    1、疑问
        webstorem 怎样才能在 js 中 支持 webpack 识别@


