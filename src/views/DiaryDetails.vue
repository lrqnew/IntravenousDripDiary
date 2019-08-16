<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title" v-text="dTitle"> </p>
        <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <div v-html="dContent"></div>
        <p class="tag">
          <Icon type="ios-pricetags" style="margin-right:20px;" />
          <Tag
            :color="tagsColor[index]"
            v-for="(item, index) of dTag"
            :key="index"
            v-text="item"
          ></Tag>
          <i style="float:right" v-text="writeDate"></i>
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
      userId: JSON.parse(localStorage.getItem("userInfo")).userId,
      dTitle: "",
      dContent: "",
      dTag: [],
      writeDate: "",
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
      ]
    };
  },
  created() {
    this.diaryDetails();
  },
  methods: {
    //根据id查询用户日记内容
    diaryDetails() {
      var did = this.$route.params.id;
      this.request
        .httpGet(this.requestUrl.diaryDetails, {
          dId: did,
          userId: this.userId
        })
        .then(res => {
          this.dTitle = res[0].dTitle;
          this.dContent = res[0].dContent;
          this.dTag = res[0].dTag.split(",");
          this.writeDate =this.formateDate(res[0].writeDate);
        });
    },
    formateDate(value) {
      var dateMat = new Date(value);
      var year = dateMat.getFullYear();
      var month = dateMat.getMonth() + 1;
      var day = dateMat.getDate();
      var date = year + "-" + month + "-" + day;
      return date;
    },
    //返回上一页
    peve(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.tags {
  margin-top: 10px;
}
.tag {
  margin-top: 50px;
}
</style>



