<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">日记标签 Tags</p>
        <i>所有日记的标签,点击标签浏览相关联日记.</i>
        <div class="tags">
          <Tag color="default">default</Tag>
          <Tag color="primary">primary</Tag>
          <Tag color="success">success</Tag>
          <Tag color="error">error</Tag>
          <Tag color="warning">warning</Tag>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="yellow">yellow</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
          <Tag color="#FFA2D3">Custom Color</Tag>
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
.tags{
    margin-top: 10px;
}
</style>



