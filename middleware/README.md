<!--
 * @Description: 目录说明
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-18 21:17:09
 * @Author: wangshuhao <https://wangshuhao.com>
 -->

# 中间件目录

**中间件允许定义运行在页面渲染之前的自定义函数**

### 相关注意事项

- 一般情况下，所有中间件都分类存放在本目录下

- 中间件执行流程顺序：nuxt.config.js > 匹配布局 > 匹配页面

- 中间件可以异步执行，只需要返回一个 promise 或使用 callback 回调函数

***
