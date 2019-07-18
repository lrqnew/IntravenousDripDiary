<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <h3 class="uname">
      钢铁侠
      <span class="uemai">1406107400@qq.com</span>
      <Icon class="userSet" type="ios-cog-outline" size="22" />
    </h3>
    <Content :style="{padding: '24px', minHeight: '280px'}">
      <!-- 内容统计面板 -->
      <div class="total">
        <Row type="flex" justify="start">
          <Col span="8">
            <Card>
              <div style="text-align:center">A high quality UI Toolkit based on Vue.js</div>
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <div style="text-align:center">A high quality UI Toolkit based on Vue.js</div>
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <div style="text-align:center">A high quality UI Toolkit based on Vue.js</div>
            </Card>
          </Col>
        </Row>
      </div>
      <!-- 内容底部 -->
      <div class="content_bot">
        <Row>
          <Col span="16" >
            <Card style="width:90%;height:400px;" dis-hover :bordered="false">
              <p slot="title">
                <Icon type="md-create" />日记概览
              </p>
              <a href="#" slot="extra">
                <Icon type="md-more" />
              </a>
             
            </Card>
          </Col>
          <Col span="8">
           <Card style="width:90%;height:400px;" dis-hover :bordered="false">
              <p slot="title">
                <Icon type="ios-cloud" />今日天气
              </p>
            
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
.total {
  width: 90%;
  color: #fff;
}
.total .ivu-row-flex .ivu-col .ivu-card {
  width: 400px;
  height: 100px;
  line-height: 100px;
}
.total .ivu-row-flex .ivu-col:nth-child(1) .ivu-card {
  background: #2db7f5;
}
.total .ivu-row-flex .ivu-col:nth-child(2) .ivu-card {
  background: #19be6b;
}
.total .ivu-row-flex .ivu-col:nth-child(3) .ivu-card {
  background: #ed4014;
}
.content_bot{
    margin-top: 20px;
    width: 90%;
}
</style>



