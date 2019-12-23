import 'whatwg-fetch';
import 'es6-promise';

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    let objStr = [];
    if(obj) {
        for(let key in obj) {
            let value = obj[key];
            value = typeof value === 'object' ? JSON.stringify(value): value;
            objStr.push(`${key}=${value}`);
        }
    }

    return objStr.join("&");
}


// get 请求
export const get = (url, params) => {
    const param = obj2params(params);

    return fetch(
        param ? `${url}?${param}`: url,
        {
            credentials: 'include',
            method: 'GET',
        }
    );
};

// post 请求
export const post = (url, params) => {
    return fetch(
        url,
        {
            credentials: 'include',
            method: 'POST',
            body: obj2params(params)
        },
    )
};


