<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的头像</p>
        <i>浏览、修改我的头像</i>
        <div class="demo-avatar">
          <Avatar class="avt" shape="square" src="../../imgs/599a521472424.jpg" />
        </div>
      </Card>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style scoped>
.avt{
    width: 500px;
    height: 500px;
}
</style>



