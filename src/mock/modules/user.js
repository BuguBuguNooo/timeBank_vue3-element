/*
 * @Author: your name
 * @Date: 2021-01-05 10:50:33
 * @LastEditTime: 2021-01-08 17:32:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_3.0_test\src\mock\user.js
 */
const Mock = require("mockjs"); //引入
const menuItem = Mock.mock({
    code: "00",
    "list|10": [
        {
            //这个对象是用来写数据模板的
            "id|+1": 0, //初始值是0每次id都+1
            goodsName: "@ctitle(3, 5)", //看官网，这个名字是3-5之间的
            "goodsPrice|+1": 100, //这个类似上面的id一个，只是初始值是从100开始的
            address: "@county(true)", //这个是地址，@county(true)  对象的属性值都是mock.mock()提供的方法，直接拿过来用就可以了
            tel: /^1(3|5|7|8|9)\d{9}$/, //正则写的电话后面1开头，正则不懂自己去学！！！！！！！！！！！很重要
            goodsImg: "@image('200x100', '#894FC4', '#FFF', '我爱你...')", // 图片
            date: '@date("yyyy-MM-dd M:dd:d")', //时间
            email: "@email()", //邮箱
            "children|3": [
                {
                    //这个对象是用来写数据模板的
                    "id|+1": 0, //初始值是0每次id都+1
                    goodsName: "@ctitle(3, 5)", //看官网，这个名字是3-5之间的
                    "goodsPrice|+1": 100, //这个类似上面的id一个，只是初始值是从100开始的
                    address: "@county(true)", //这个是地址，@county(true)  对象的属性值都是mock.mock()提供的方法，直接拿过来用就可以了
                    tel: /^1(3|5|7|8|9)\d{9}$/, //正则写的电话后面1开头，正则不懂自己去学！！！！！！！！！！！很重要
                    goodsImg:
                        "@image('200x100', '#894FC4', '#FFF', '我爱你...')", // 图片
                    date: '@date("yyyy-MM-dd M:dd:d")', //时间
                    email: "@email()" //邮箱
                }
            ]
        }
    ]
});
const user = {
    userMenuList: {
        url: "/userMenuList",
        type: "post",
        response: () => {
            return menuItem;
        }
    }
};
module.exports = user;
