<template>
  <div class="homeCont">

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for ,必需绑定key -->
      <mt-swipe-item v-for="item in lunbotuMsg" :key='item.img'>
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
     <!--  <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item> -->
    </mt-swipe>


   <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">新闻列表</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">Email</div>
          </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
              <span class="mui-icon mui-icon-location"></span>
              <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
              <span class="mui-icon mui-icon-search"></span>
              <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">Phone</div>
        </a>
      </li>
  </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'home',
  data () {
    return {
      lunbotuMsg:[//模拟获取的轮播图数据
      {
        url:'http://www.baidu.com',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3240810690,3600163505&fm=26&gp=0.jpg'
      },
      {
        url:'http://www.baidu.com',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1654306080,2880916375&fm=26&gp=0.jpg'
      },
      {
        url:'http://www.baidu.com',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2752941037,1105880434&fm=26&gp=0.jpg'
      }]
    }
  },
  created(){
    //this.getSwipe();
  },
  methods:{
    //获取轮播图的跳转地址和图片路径
    getSwipe(){
      this.$http.get("http://vue.studyit.io/api/getlunbotu").then(res=>{
        console.log(res);
        if(res.body.status==0){
          lunbotuMsg=res.body.data;
        }else{
          Toast("轮播图获取数据失败");//提示框
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- 注意swipe要给他设置一个高度才能显示出来 -->
<style scoped lang='scss'>
.homeCont{/*给组件的根元素一个类，所有样式写在这下面，及时没有scoped，也不会污染全局*/
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
          &:nth-child(1){
            background-color:red
          }
          &:nth-child(2){
            background-color:yellow
          }
          &:nth-child(3){
            background-color:pink
          }
        }
      }
      .mui-grid-view.mui-grid-9{background-color:#fff}
    }

</style>
