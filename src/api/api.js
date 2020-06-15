import axios from 'axios'
// const baseUrl = "https://www.askajohnny.com:8000/"; //这个不用了，改用https 但是要注意nginx 配置  /blogs -> 
const baseUrl = "http://localhost:8080/justauth";


export const getRequest = (url, params) => {
    let reqUrl = getServerUrl(url);
    return axios({
        method: 'get',
        url: `${reqUrl}`,
        params: params,
    });
};

export const postRequest = (url, params, contentType) => {
    let reqUrl = getServerUrl(url);
    let transformRequest = [function (params) {
        let ret = '';
        for (let it in params) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&';
        }
        return ret;
    }];
    let axiosObj = {
        method: 'post',
        url: `${reqUrl}`,
        data: params
    };
    return axios(axiosObj);
};
function getServerUrl(url) {
    return baseUrl + url;
};


axios.interceptors.request.use(function (config) {
    console.log('request interceptors')
    return config;
})

axios.interceptors.response.use(function (response) {
    //判断是不是从 blogs/blogUser/getUserByToken 这个接口过来的，如果是表示已经有了authUser 放入 Store
    console.log('response interceptors')
    return response;
})

