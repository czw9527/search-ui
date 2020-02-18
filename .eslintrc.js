/*
 * @Description: ESlint 配置
 * @version: v1.0.0
 * @Date: 2020-02-17 21:15:01
 * @LastEditors: wangshuhao
 * @LastEditTime: 2020-02-18 22:27:09
 * @Author: wangshuhao <https://wangshuhao.com>
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {},
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // 自定义代码规范检查规则
  rules: {}
}
