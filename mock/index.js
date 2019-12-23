// 前端模拟请求数据 参考：https://umijs.org/zh/guide/mock-data.html#%E4%BD%BF%E7%94%A8-umi-%E7%9A%84-mock-%E5%8A%9F%E8%83%BD

import mockjs from 'mockjs';

export default {
    // get 请求可以省略
    "/getlist_get": mockjs.mock({
        "list|10": [{
            city: "@city",
            name: "@cname",
            "sex|0-1": 1,
            email: "@email",
            "id|1-10": 5
        }]
    }),
    // 支持值为 Object 和 Array
    "/getlist_get1": { users: [1, 2] },
    // 支持自定义函数，API 参考 express@4
    "/getlist_get2": (req, res) => { res.end('OK'); },

    "GET /getlist_get": mockjs.mock({
        "list|10": [{
            city: "@city",
            name: "@cname",
            "sex|0-1": 1,
            email: "@email",
            "id|1-10": 5
        }]
    }),

    "POST /getlist_post": mockjs.mock({
        "list|10": [{
            city: "@city",
            name: "@cname",
            "sex|0-1": 1,
            email: "@email",
            "id|1-10": 5
        }]
    }),
};




