<template>
  <div class="hello">
    <ul class="mui-table-view">
        <li v-for="(item,index) in newsArry" :key="item.RescueCode+index" class="mui-table-view-cell mui-media">
          <router-link :to="'/newsDeatils?id='+item.RescueCode" href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../assets/100.png">
            <div class="mui-media-body">
              {{item.Place}}
              <p class='mui-ellipsis'>
                <span>发表时间：{{item.Next_Survey_Date | dateFormatter('yyyy-MM-dd')}}</span>
                <!-- <span>发表时间：{{item.Next_Survey_Date | dateFormatter('yyyy-MM-dd hh:mm:ss')}}</span> -->
                <span>点击：{{item.UsePlace}}次</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  data () {
    return {
      newsArry:[]
    }
  },
  created(){
    this.getNewsList();
  },
  methods:{
    getNewsList(){
      this.$http.post(
          'MaintenceApi/Modify/',
          { 
            "type": "GetElevator", 
            data: "{ \"rescueCode\":\"009999\"}", 
            "us": "E2EMIZmPqGnBm1bAX8nH/s5L8rqffrZcxFw+1J+TFDsq0pNaD4ziwB4VlgK5OMo4ihWaV3OeNY9H/AUgl5CEsA==" 
          },
          //{emulateJSON:true}
        )
        .then(data=>{
          console.log(data);
          for(var i=0;i<15;i++){
            this.newsArry.push(JSON.parse(data.body));
          }
          console.log( this.newsArry);
        },err=>{

        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.mui-table-view{
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
