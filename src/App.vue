<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    
    <transition >
       <router-view/>
    </transition>

    <nav class="mui-bar mui-bar-tab">
       <router-link to='/home' class="mui-tab-item " href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to='/main' class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link to='/search' class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link to='/me' class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:false
    }
  },
  methods:{
   
  }
}
</script>

<style scoped lang='scss'> 
#app {
  padding-top:40px;
  overflow-x:hidden;/*实现动画第一步，app横向超出隐藏，否则是加宽到200%到100%的效果*/
  .borderTop{
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 100%); 
  }
  .mint-badge.is-error{position:absolute;left:57px;top:-3px;width:10px;font-size:10px;width:18px;height:18px;line-height:18px;padding:0}
  .blue{
    background-color: #eaeaea;
    color: #26a2ff;
  }

}

/*动画2：进之前是位移100%，从右侧进入*/
.v-enter{
  opacity:0;
  transform:translateX(100%);
}
/*动画3：出去，消失是向左侧划出*/
.v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position:absolute
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

</style>
