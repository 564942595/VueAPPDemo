// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//底部tabbar用的mui
import './css/mui.min.css';



import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON=true;
Vue.http.options.root='http://lenovoserver:90/';//全局配置请求的根路径，便于以后维护，不用每个请求的页面都进行修改

Vue.config.productionTip = false

//引入全局配置的过滤器，比如时间格式化等过滤管道
import filter from './filter'

console.log("OK")
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
  	App
   },
  template: '<App/>'
  //render:x => x(App)
})
