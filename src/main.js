import Vue from 'vue';
import App from './App.vue';
import router from './router';
import api from './api';

/* 导入公共的样式 && VANT */
import './assets/reset.min.css';
import './assets/common.less';
import Vant from 'vant';
import 'vant/lib/index.css';
import {
  Lazyload
} from 'vant';
Vue.use(Vant);
Vue.use(Lazyload);

Vue.prototype.$api = api;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');