/*
 * @Description: Nuxt 配置
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-17 23:25:20
 * @Author: wangshuhao <https://wangshuhao.com>
 */

import { Configuration } from '@nuxt/types'

/**
 * 运行时环境变量
 */
require('dotenv').config()

/**
 * Nuxt 配置
 */
const config: Configuration = {
  mode: 'universal',
  /**
   * 全局页面头信息
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
   * 自定义顶部进度条色值
   */
  loading: { color: '#fff' },
  /**
   * 全局样式资源
   */
  css: [],
  /**
   * Vue 根实例挂载前执行的插件
   */
  plugins: [],
  /**
   * Nuxt 开发模块
   */
  buildModules: [
    // 文档：https://typescript.nuxtjs.org/guide
    '@nuxt/typescript-build',
    // 文档：https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // 文档：https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /**
   * Nuxt 模块
   */
  modules: [
    // 文档：https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 文档：https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /**
   * TypeScript 模块配置
   */
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  /**
   * Axios 模块配置
   */
  axios: {},
  /**
   * 打包配置
   */
  build: {
    /**
     * 编程式扩展 webpack 配置
     */
    extend() {}
  }
}

export default config
