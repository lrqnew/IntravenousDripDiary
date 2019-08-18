<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <h3 class="uname">
      {{ userName == "null" ? "" : userName }}
      <span class="uemai">{{ user_email }}</span>
      <span class="signs">{{ signs }}</span>
      <router-link to="/personalData">
        <Icon class="userSet" type="ios-cog-outline" size="22" />
      </router-link>
    </h3>
    <Content :style="{ padding: '24px', minHeight: '280px' }">
      <!-- 内容统计面板 -->
      <div class="total">
        <Row type="flex" justify="space-around">
          <Col span="6">
            <Card class="card">
              <div class="statistical">
                <Row type="flex" justify="space-around">
                  <Col span="12">
                    <p>共记录字符</p>
                    <p>{{ totalInfo.charCount }}个</p>
                  </Col>
                  <Col span="12">
                    <span class="staIcon"><Icon type="ios-paper"/></span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div class="statistical">
                <Row type="flex" justify="space-around">
                  <Col span="12">
                    <p>共记录日记</p>
                    <p>{{ totalInfo.diaryCount }}篇</p>
                  </Col>
                  <Col span="12">
                    <span class="staIcon"><Icon type="md-bookmarks"/></span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div class="statistical">
                <Row type="flex" justify="space-around">
                  <Col span="12">
                    <p>注册时间</p>
                    <p>{{ totalInfo.regTime }}天</p>
                  </Col>
                  <Col span="12">
                    <span class="staIcon"><Icon type="ios-time"/></span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span="6">
            <Card>
              <div class="statistical">
                <Row type="flex" justify="space-around">
                  <Col span="12">
                    <p>共有日记标签</p>
                    <p>{{ totalInfo.tagsCount }}个</p>
                  </Col>
                  <Col span="12">
                    <span class="staIcon"><Icon type="md-pricetags"/></span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <!-- 内容底部 -->
      <div class="content_bot">
        <Row>
          <Col span="16">
            <Card
              style="width:95%;min-height:400px;"
              dis-hover
              :bordered="false"
            >
              <p slot="title"><Icon type="md-create" />日记概览</p>
              <a href="#" slot="extra">
                <Poptip title="操作" placement="bottom-end">
                  <div slot="content" class="shortcuts">
                    <p><router-link to="/writeDiary">写日记</router-link></p>
                    <p><router-link to="/allDiary">所有日记</router-link></p>
                    <p><router-link to="/diaryTags">日记标签</router-link></p>
                  </div>
                  <Icon type="md-more" />
                </Poptip>
              </a>
              <Tabs name="1" @on-click="selectDiary">
                <TabPane
                  label="上一篇日记"
                  name="1"
                  icon="ios-arrow-dropleft-circle"
                >
                  <div
                    class="prev"
                    v-for="(item, index) of diaryList"
                    :key="index"
                  >
                    <p class="tabTitle">
                      <span v-text="item.dTitle"></span>
                      <span>
                        <Button
                          type="primary"
                          size="small"
                          :to="`/diaryDetails/${item.dId}`"
                          >查看该日记</Button
                        >
                      </span>
                    </p>

                    <p v-html="item.dContent"></p>
                  </div>
                </TabPane>
                <TabPane label="最近的日记" name="5" icon="ios-clock">
                  <CellGroup>
                    <Cell
                      v-for="(item, index) of diaryList"
                      :key="index"
                      extra="浏览"
                      :title="item.dTitle"
                      :to="`/diaryDetails/${item.dId}`"
                    />
                  </CellGroup>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span="8">
            <Card style="width:100%;height:400px;" dis-hover :bordered="false">
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
import { userInfo } from "os";
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
      user_email: JSON.parse(localStorage.getItem("userInfo")).email,
      userName: JSON.parse(localStorage.getItem("userInfo")).userName,
      signs: JSON.parse(localStorage.getItem("userInfo")).signs,
      diaryQuery: {
        pno: 0,
        pageSize: 3,
        userId: JSON.parse(localStorage.getItem("userInfo")).userId
      },
      diaryList: [],
      totalInfo: {
        charCount: "0",
        diaryCount: "0",
        tagsCount: "0",
        regTime: "0"
      }
    };
  },
  created() {
    this.selectDiary(1);
    this.totalDinfo();
  },
  methods: {
    selectDiary(size) {
      this.diaryQuery.pageSize = size;
      this.request
        .httpGet(this.requestUrl.selectDiary, this.diaryQuery)
        .then(res => {
          this.diaryList = res.data;
        });
    },
    goDetails(id) {
      this.$router.push({ path: "/diaryDetails" });
    },
    //查询统计信息
    totalDinfo() {
      this.request
        .httpGet(this.requestUrl.totalDinfo, { userId: this.diaryQuery.userId })
        .then(res => {
          var tags = [];
          if (res.data) {
            res.data.forEach((element, index) => {
              tags.push(...element.dTag.split(","));
            });
          }
          //计算注册时间
          var regTime = JSON.parse(localStorage.getItem("userInfo")).regTime;
          var startDate = Date.parse(regTime);
          var nowTime = new Date().toLocaleDateString();
          var endDate = Date.parse(nowTime);
          var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
          this.totalInfo.charCount = res.charCount == null ? 0 : res.charCount;
          this.totalInfo.diaryCount = res.diaryCount;
          this.totalInfo.tagsCount = tags.length;
          this.totalInfo.regTime = days;
        });
    }
  }
};
</script>
<style>
iframe {
  width: 100% !important;
  height: 400px;
}
#weather-view-he{
  width: 100% !important;
}
</style>

<style scoped>
h3 {
  margin: 20px;
}
h3 > .uemai {
  color: #c4c4c4;
  font-size: 1.5rem;
}
.signs {
  padding-left: 20px;
  font-size: 1.5rem;
  color: #2db7f5;
}
.userSet {
  margin-left: 10px;
}
.total {
  width: 100%;
  color: #fff;
}
.total .ivu-row-flex .ivu-col .ivu-card {
  /* width: 350px; */
  height: 100px;
  /* line-height: 100px; */
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
.prev h4 {
  font-weight: bold;
  margin-bottom: 10px;
  border: none;
}
.shortcuts p {
  padding-top: 5px;
}
/* .card .ivu-card-body{
  height: 100% !important;
} */
.statistical {
  width: 100%;
  height: 100%;
}
.statistical p {
  height: 10px;
  padding: 10px;
}
.statistical p:nth-child(2) {
  font-size: 24px;
  font-weight: bold;
}
.statistical .staIcon {
  float: right;
  font-size: 44px;
}
.ivu-tabs {
  height: 500px;
}
.tabTitle {
  margin-bottom: 15px;
}
.tabTitle span:nth-child(1) {
  font-size: 20px;
  font-weight: bold;
}
.tabTitle span:nth-child(2) {
  float: right;
}

</style>



