// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import Public from './until/until';
import VueHighcharts from 'highcharts';
import 'element-ui/lib/theme-chalk/index.css';
import './style/css/public.css';
import './icons/iconfont.css';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueHighcharts);
Vue.config.productionTip = false;

/* eslint-disable no-new */
if (Public.BrowserType()) {
    new Vue({
        el: '#app',
        router,
        store,
        template: '<App/>',
        components: {
            App
        }
    });
    let Url = window.location.href;
    let flag = Url.indexOf('errorBow') >= 0;
    if (flag) {
        router.replace({
            path: '/home/'
        });
    }
} else {
    new Vue({
        el: '#app',
        router,
        store,
        template: '<App/>',
        components: {
            App
        }
    });
    MessageBox.confirm('您使用的IE浏览器版本太低，请更换浏览器访问!', '消息提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'error'
    }).then(() => {

    }).catch(() => {

    });
    router.replace({
        path: '/errorBow'
    });
}