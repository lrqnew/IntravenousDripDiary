<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">日记标签 Tags</p>
         <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <i>所有日记的标签,点击标签浏览相关联日记.</i>
        <div class="tags">
          <Tag
            :color="tagsColor[index]"
            v-for="(item, index) of dTags"
            :key="index"
            v-text="item"
            @click.native="selectagDiary(item)"
          ></Tag>
        </div>
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
      dTags: [],
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
    this.selectTags();
  },
  methods: {
    selectTags() {
      this.request
        .httpGet(this.requestUrl.diaryTags, { userId: this.userId })
        .then(res => {
          res.forEach((element, i) => {
            this.dTags.push(...element.dTag.split(","));
          });
        });
    },
    selectagDiary(tagName) {
      this.$router.push({path:'/allDiary',query:{kwd:tagName}})
      // this.request.httpGet(this.requestUrl.selectagDiary,{kwd:tagName,userId:this.userId}).then(res=>{
      //   this.$router.push({path:'/allDiary',query:{data:res}})
      // })
    },
     //返回上一页
    peve() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.tags {
  margin-top: 10px;
  min-height: 400px;
}
</style>



