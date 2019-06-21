import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Tabbar/Main.vue'
import Home from '../components/Tabbar/Home.vue'
import Search from '../components/Tabbar/Search.vue'
import Me from '../components/Tabbar/Me.vue'

import NewsList from '../components/News/NewsList.vue'
import NewsDetail from '../components/News/NewsDetail.vue'

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
    },{
      path: '/home/newsList',
      name: 'newsList',
      component: NewsList
    },{
      path: '/newsDeatils',
      name: 'newsDetail',
      component: NewsDetail
    }
  ],
  linkActiveClass:'mui-active'//'blue'//默认首页选中的样式
})
