# dance-web

#### 项目介绍
{**以下是码云平台说明，您可以替换为您的项目简介**
码云是开源中国推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}



#### 软件架构
软件架构说明
<pre>
├── README.md           
├── webpack.config     // 构建服务和webpack配置,项目不同环境的配置
├── dist               // 项目build目录
├── index.tpl          // index.html模版
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js和图片资源
│   ├── router         // 路由配置
│   ├── components     // 各种组件
│   ├── util           // 公共方法
│   ├── static         // 静态资源文件
│   ├── services       // ajax 服务配置
│   ├── views          // 各种页面
│   ├── vuex           // vuex状态管理器
│   └── app.js         // Webpack 预编译入口
</pre>

#### 安装教程

 * npm install 初次启动时,需要运行npm install 安装所有开发依赖
 * npm run mb mac打包指令
 * npm run build windows 打包指令
 * npm run dev localhost启动,端口8080
 * npm run port localhost指定端口启动
 * npm run hot 热更新
 * npm run ip 指定ip端口启动

#### 使用说明
 ## 版本提交
 只需要提交src文件夹里面的内容,其他的文件夹或文件不需要提交
 打包前修改swiper/dist/css/swiper.css
 
 ## 开发页面流程
 1. 在routes的map下新建路由模块,配置路由对象及tab和auth属性(tab和auth属性选填,tab表示当前路由页面是否在头部tab栏显示,auth表示是否需要登录才能查看)
 2. 如果配置了tab,需要在configs的tabs中进行想关配置,配置说明见tabs.js的注释
 3. 在data的nav.js中将旧的path替换成新建路由的path(此步骤上线后省略,协同后端修改即可)
 4. 根据nav.js中对应path的权限,配置configs中的powers,配置说明见powers.js中的注释
 5. 配置configs的tips.js中对应的页面提示
 6. 新建对应的views services vuex开始开发
 7. mint-ui的Api开发文档地址:http://mint-ui.github.io/#!/zh-cn

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [http://git.mydoc.io/](http://git.mydoc.io/)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)