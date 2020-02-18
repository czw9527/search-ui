<!--
 * @Description: 目录说明
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-18 21:19:09
 * @Author: wangshuhao <https://wangshuhao.com>
 -->

# 插件目录

**Nuxt 允许在挂载 vue 根实例之前执行 js 插件**

### 相关注意事项

- 一般情况下，所有插件都分类存放在本目录下

- 只有 beforeCreate 和 created 这两个方法会在客户端和服务端同时被调用

- 配置选项 mode 来指定插件类型，可能的值是 client 或 server

- 如果需要同时在 context、vue、vuex 中同时注入逻辑，可以使用 inject 方法

***
