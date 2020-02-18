<!--
 * @Description: 目录说明
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-18 21:11:25
 * @Author: wangshuhao <https://wangshuhao.com>
 -->

# 资源目录

**存放需要通过 webpack 处理的资源文件**

### 相关注意事项

- 一般情况下，所有需要通过 webpack 处理的资源文件都分类存放在本目录下

- ~/alias 将无法在 css 文件中正确解析，你必须使用 ~alias（没有斜杠）或 @ 作为别名标识

- 在 webpack 编译过程中，所有的静态资源 url（含 css 中的 @import）均会被解析成模块并通过 require 引用

***
