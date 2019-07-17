<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <h3 class="uname">
      钢铁侠
      <span class="uemai">1406107400@qq.com</span>
      <Icon class="userSet" type="ios-cog-outline" size="22" />
    </h3>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div>
        <Row type="flex" justify="start">
          <Col span="8">
            <Card style="width:320px">
              <div style="text-align:center">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
              </div>
            </Card>
          </Col>
          <Col span="8">
            <Card style="width:320px">
              <div style="text-align:center">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
              </div>
            </Card>
          </Col>
          <Col span="8">
            <Card style="width:320px">
              <div style="text-align:center">
                <h3>A high quality UI Toolkit based on Vue.js</h3>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
h3 {
  margin: 20px;
}
h3 > .uemai {
  color: #c4c4c4;
  font-size: 1.5rem;
}
.userSet {
  margin-left: 10px;
}
</style>



