<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title" v-text="dTitle"></p>
        <div v-html="dContent">
        </div>
        <p class="tag">
           <Icon type="ios-pricetags" style="margin-right:20px;"/>
           <Tag type="border" :color="tagsColor[index]" v-for="(item,index) of dTag" :key="index" v-text="item"></Tag>
        </p>
      </Card>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId:localStorage.getItem("userId"),
      dTitle:'',
      dContent:'',
      dTag:[],
      tagsColor: [
        "primary",
        "success",
        "error",
        "warning",
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "yellow",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple",
        "#FFA2D3"
      ],
    };
  },
  created(){
    this.diaryDetails();
  },
  methods:{
    //根据id查询用户日记内容
    diaryDetails(){
      var did=this.$route.params.id;
      this.request.httpGet(this.requestUrl.diaryDetails,{dId:did,userId:this.userId}).then(res=>{
        this.dTitle=res[0].dTitle;
        this.dContent=res[0].dContent;
        this.dTag=res[0].dTag.split(",");
        console.log(res);
        console.log(this.dTag);
      })
    }
  }
};
</script>
<style scoped>
.tags{
    margin-top: 10px;
}
.tag{
  margin-top: 50px;
}

</style>



