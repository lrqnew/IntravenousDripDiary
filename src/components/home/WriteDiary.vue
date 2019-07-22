<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">记录日记</p>
        <p>
          Content of no border type. Content of no border type. Content of no
          border type. Content of no border type.
        </p>
      </Card>

      <Collapse  simple>
        <Panel name="1">
          日记选项
          <p slot="content">
            史蒂夫·乔布斯（Steve
            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          </p>
        </Panel>
      </Collapse>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.write {
  height: 400px;
}
</style>



