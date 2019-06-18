import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Me from '../components/Me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	redirect:'/home'//默认加载的时候显示home页
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ],
  linkActiveClass:'mui-active'//'blue'//默认首页选中的样式
})
