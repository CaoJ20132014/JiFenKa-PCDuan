import Axios from 'axios';
import qs from 'qs';
import { MessageBox } from 'element-ui';
import Route from '@/router/index';

Axios.defaults.timeout = 10000;
if (process.env.NODE_ENV == 'development') {
	Axios.defaults.baseURL = '/api';
} else {
	Axios.defaults.baseURL = 'https://a.91jfk.com';
}
// http request 拦截器
Axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);
// http response 拦截器
Axios.interceptors.response.use(
    response => {
        if (response) {
            // console.log(response);
            if (response.data.code == 900 || response.data.code == 899 || response.data.code == 901) {                      
                // 900登录过期,899账号未登录,901其他地方登陆
                MessageBox.confirm(response.data.msg, '消息提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                }).then(() => {
                    Route.replace({
                        path: '/login',
                        query: {
                            redirect: Route.currentRoute.fullPath
                        }
                    });
                }).catch(() => { });
                return;
            }
        }
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.status == 404) {
                Route.replace({
                    path: '/error404',
                    query: {
                        redirect: Route.currentRoute.fullPath
                    }
                });
            } else if (error.response.status == 500) {
                Route.replace({
                    path: '/error500',
                    query: {
                        redirect: Route.currentRoute.fullPath
                    }
                });
            }
        }
        return Promise.reject(error.response.data);
    }
)
export function fetch(url,params,method){
    if (method == 'GET' || method == 'get') {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                params: params
            }).then(response => {
                if (typeof response != 'undefined') {
                    resolve(response.data);
                }
            }).catch(err => {
                reject(err)
            });
        });
    } else if (method == 'POST' || method == 'post'){
        return new Promise((resolve, reject) => {
            Axios.post(url, params).then(response => {
                if (typeof response != 'undefined') {
                    resolve(response.data);
                }
            }, err => {
                reject(err)
            });
        });
    }
}