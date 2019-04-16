// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './iconfont/iconfont.css';
import axios from 'axios';
// -- axios是vue的一个库，不是插件，不能直接使用Vue.use来使用，可搭配vue-axios插件使用
import VueAxios  from 'vue-axios';

// -- 插入富文本编辑器库
import '../static/UE/ueditor.config.js';
import '../static/UE/ueditor.all.js';
import '../static/UE/lang/zh-cn/zh-cn.js';
import '../static/UE/ueditor.parse.js';
import store from './store';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
// Vue.prototype.axios = axios;若不搭配使用，可使用原型对象赋值使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
