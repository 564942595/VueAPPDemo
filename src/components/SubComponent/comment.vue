<template>
  <div class="commentCont">
    <h3>发表评论</h3> 
    <hr>  
    <br>  
    <textarea name="  " id="" maxlength="120" placeholder="请输入要评价 的内容（最多120字）"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">  
        <div v-for="(item,index) in cmtMsg" class="cmt-item">  
            <div class="cmt-tit"> 
              第{{index+1}}楼&nbsp;&nbsp;用户：{{item.CustomPerson}}&nbsp;&nbsp;发表时间：{{item.Next_Survey_Date | dateFormatter()}}
            </div>
            <div class="cmt-body">  
                 {{item.Customer}}
             </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click='getData()'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
       cmtMsg:[],
       pageIndex:1,//模拟请求页码
    }
  },
  created(){
    this.getData()
  },
  props:['id'],
  methods:{
    getData(){
      this.$http.post('MaintenceApi/Modify/', 
        { 
            "type": "GetElevator", 
            data: "{ \"rescueCode\":\""+this.id+"\"}", 
            "us": "E2EMIZmPqGnBm1bAX8nH/s5L8rqffrZcxFw+1J+TFDsq0pNaD4ziwB4VlgK5OMo4ihWaV3OeNY9H/AUgl5CEsA==" 
          }).then(
            res=>{
              this.cmtMsg=[];
              for(var i=0;i<this.pageIndex;i++){
                this.cmtMsg.push(JSON.parse(res.body))
              }
              this.pageIndex++;
              console.log(this.cmtMsg);
            },
            err=>{}
            )
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' scoped>
.commentCont{
    textarea{
      font-size:14px;
      margin:5px 0;
    }
    .cmt-list{
      margin:5px 0;
      font-size:13px;
      .cmt-tit{
        background-color:#b9b4b4;
        line-height:35px;
      }
      .cmt-body{
          line-height:40px;
          text-indent:2em;
        }
    }

}

</style>
