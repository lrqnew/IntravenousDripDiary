<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <h3 class="uname">
      {{ userName == "null" ? "" : userName }}
      <span class="uemai">{{ user_email }}</span>
      <Icon class="userSet" type="ios-cog-outline" size="22" />
    </h3>
    <Content :style="{ padding: '24px', minHeight: '280px' }">
      <!-- 内容统计面板 -->
      <div class="total">
        <Row type="flex" justify="space-around">
          <Col span="6">
            <Card>
              <div style="text-align:center">
                A high quality UI Toolkit based on Vue.js
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div style="text-align:center">
                A high quality UI Toolkit based on Vue.js
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div style="text-align:center">
                A high quality UI Toolkit based on Vue.js
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div style="text-align:center">
                A high quality UI Toolkit based on Vue.js
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <!-- 内容底部 -->
      <div class="content_bot">
        <Row>
          <Col span="16">
            <Card style="width:95%;height:400px;" dis-hover :bordered="false">
              <p slot="title"><Icon type="md-create" />日记概览</p>
              <a href="#" slot="extra">
                <Icon type="md-more" />
              </a>
              <Tabs>
                <TabPane label="上一篇日记" icon="ios-arrow-dropleft-circle">上一篇日记</TabPane>
                <TabPane label="最近的日记" icon="ios-clock">标签二的内容</TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span="8">
            <Card style="width:90%;height:400px;" dis-hover :bordered="false">
              <p slot="title"><Icon type="ios-cloud" />今日天气</p>
              <!-- 点滴日记 -->
              <div id="weather-view-he"></div>

              <remote-js></remote-js>
              <remote-script
                src="https://apip.weatherdt.com/view/static/js/r.js?v=1111"
              >
              </remote-script>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {
    //创建script标签组件
    "remote-script": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    },
    "remote-js": {
      render(createElement) {
        var el = createElement("script", {
          attrs: { type: "text/javascript" }
        });
        el.text = `WIDGET = {ID: 'qednB1yr2E'};`;
        return el;
      }
    }
  },
  data() {
    return {
      user_email: localStorage.getItem("user_email"),
      userName: localStorage.getItem("userName")
    };
  },
  mounted() {}
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
  width: 100%;
  color: #fff;
}
.total .ivu-row-flex .ivu-col .ivu-card {
  width: 350px;
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
.total .ivu-row-flex .ivu-col:nth-child(4) .ivu-card {
  background: #ff9900;
}
.content_bot {
  margin-top: 20px;
  width: 100%;
}
</style>



