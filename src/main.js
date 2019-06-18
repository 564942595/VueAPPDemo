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

Vue.config.productionTip = false

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
