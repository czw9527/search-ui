<!--
 * @Description: 项目说明
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-18 22:18:23
 * @Author: wangshuhao <https://wangshuhao.com>
 -->

# 网络搜索结果预处理程序：用户界面

> 用户体验：致力于让用户付出最小交互成本即可满足相关需求

## 作者信息

- 作者：wangshuhao

- 工作地点：成都、内江

- 工作邮箱：work_wangshuhao@163.com

## 启动项目

``` bash
# 前置条件：安装 Node.js 及 Yarn 包管理工具

# 安装依赖
$ yarn install

# 启动热部署开发模式
$ yarn dev

# 编译代码及启动生产环境服务器
$ yarn build
$ yarn start

# 生成静态应用部署文件
$ yarn generate
```

## 环境变量

项目根目录下存在一个 .env 文件用于存放代码逻辑中使用到的环境变量（未启用版本控制）

测试环境 .env 文件代码：

``` bash
# 配置环境变量到 Nuxt 上下文对象及 Node 运行环境中
# 强制遵循大写字母及下划线命名规则

```

## 主要待办事项

- ...

- 等待部分第三方模块升级 core-js 至 ^3.0.0 版本

- 更新 lint-staged 至 ^10.0.0 版本以获取更快速的 pre-commit

- 利用现有 vue2 生态使本项目支持 vue3 的一些重要理念及开发模式

## 项目浏览器兼容性说明

- 最低兼容至 IE9 等支持 ECMAScript5 标准的浏览器内核

- 面向标准浏览器内核进行适配

- 差量抛弃使用老旧 ECMAScript 标准内核的浏览器（附浏览器升级引导页）

- 对于一些使用高度定制化内核的浏览器采用不牺牲性能的前提下尽量适配的原则

## 代码规范检查💡

为保证代码质量和项目长效可维护性，项目启用了各种代码规范检查机制（包括但不仅限于 ESLint、StyleLint）及触发场景，务必留意控制台或其他终端中的相关警告信息及错误提示

***
