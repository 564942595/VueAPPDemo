<template>
  <div class="newsDetailCont">

   <h4>{{msg.InstallAddress}}</h4>
   <br>
   <hr>
   <p>运用全局过滤器实现时间格式化：{{msg.Next_Survey_Date | dateFormatter('yyyy-mm-dd hh:mm:ss')}}</p>
   <p>{{msg.Eid}}</p>
   <p>{{msg.City}}</p>

   <br> 
   <hr> 

   <comment :id="idData"></comment>    
    
  </div>
</template>

<script>
//这里是引入评论的公共组件
import comment from '../SubComponent/comment.vue'

export default {
  name: 'newsDetail',
  data () {
    return {
      msg:{},
      idData:""
    }
  },
  components:{
      comment//评论组件
  },
  created(){
     // console.log(this.$route.query)
     // console.log(this.$route.query.id)
     this.idData=this.$route.query.id;
     this.getNewsList()
  },
  methods:{
    getNewsList(){
      this.$http.post(
          'MaintenceApi/Modify/',
          { 
            "type": "GetElevator", 
            data: "{ \"rescueCode\":\""+this.$route.query.id+"\"}", 
            "us": "E2EMIZmPqGnBm1bAX8nH/s5L8rqffrZcxFw+1J+TFDsq0pNaD4ziwB4VlgK5OMo4ihWaV3OeNY9H/AUgl5CEsA==" 
          },
          //{emulateJSON:true}
        )
        .then(data=>{
          //console.log(data);
          
            this.msg=JSON.parse(data.body);

          //console.log(this.msg);
          
        },err=>{

        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.mui-table-view{/**/
      margin-bottom:55px;/*避免最后一行被底部导航遮挡*/
      li{
        .mui-ellipsis{
          display:flex;
          justify-content:space-between;/*两端对齐*/
          span {
            color:blue
           }
        }
        
      }
}
</style>
