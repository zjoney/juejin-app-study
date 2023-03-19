import axios from 'axios';
import qs from 'qs';
// 比较大的项目中，我们需要向很多后台发请求，可能需要传递的格式等都不太一样

const instance = axios.create();
instance.defaults.baseURL = "";
instance.defaults.withCredentials = true;
instance.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
instance.defaults.transformRequest = data => qs.stringify(data);
instance.interceptors.response.use(response => {
    return response.data;
}, reason => {
    return Promise.reject(reason);
});

export default instance;