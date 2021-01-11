/*
 * @Author: your name
 * @Date: 2021-01-07 09:49:29
 * @LastEditTime: 2021-01-11 15:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element_vue3.0\.eslintrc.js
 */
module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/prettier"
    ],

    parserOptions: {
        parser: "babel-eslint"
    },
    // "writable" 以允许重写变量，或 "readonly" 不允许重写变量
    globals: {
        VE_ENV: "readonly",
        VE_API: "readonly"
    },

    rules: {
        indent: [2, 4],
        "prettier/prettier": [2, { tabWidth: 4 }],
        "no-console": "off",
        "no-debugger": "off"
    }
};
