import axios from 'axios';
import Vue from 'vue';
import VueCookies from 'vue-cookies'
// import TokenStorage from  './token-storage'
// import router from 'router'

Vue.use(VueCookies)

var token = VueCookies.get('token')

const url = "https://26285cfe7b75.ngrok.io/"
const instance = createInstance(url);

function createInstance(baseURL) {
    return axios.create({
        baseURL
        // headers: {
        //     'x-access-token' : token
        // },
    })
}
instance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('access_token');
    config.headers.Authorization =  token;
    return config;
});

const instanceUpload = createInstanceUpload(url);
function createInstanceUpload(baseURL) {
    return axios.create({
        baseURL,
        // headers: {
            // 'x-access-token' : token,
            // 'Content-Type' : 'multipart/form-data'
        // },
        withCredentials: true
    })
}

instanceUpload.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access_token');
    config.headers['x-access-token'] =  token;
    config.headers['Content-Type'] =  'multipart/form-data';
    return config;
});

const defaultInstance = axios.create();
defaultInstance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('access_token');
    // config.headers['x-access-token'] =  token;
    config.headers['Content-Type'] =  'application/x-www-form-urlencoded';
    return config;
});


export default {
    install () {
        Vue.prototype.$http = instance;
        Vue.prototype.$httpUpload = instanceUpload;
        Vue.prototype.$defaultHttp = defaultInstance;
    },
    instance: instance,
    instanceUpload: instanceUpload,
    defaultInstance: defaultInstance
};