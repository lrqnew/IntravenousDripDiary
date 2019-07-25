<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img
              src="../assets/images/site_logo.png"
              title="点滴日记-日记本,网络日记本,在线日记应用"
            />
          </div>
          <div class="layout-nav">
            <MenuItem name="1" to="/userCenter">
              <Icon type="md-person" />
              用户中心
            </MenuItem>
            <MenuItem name="2" to="/writeDiary">
              <Icon type="md-create" />
              记录日记
            </MenuItem>
            <MenuItem name="3">
              <Icon type="md-mail-open" />
              建议
            </MenuItem>
            <MenuItem name="4" to="/about">
              <Icon type="ios-pricetags-outline" />
              关于
            </MenuItem>
            <MenuItem name="5" @click.native="exit()">
              <Icon type="ios-power" />
              退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <div class="demo-avatar">
            <Avatar
              src="https://i.loli.net/2017/08/21/599a521472424.jpg"
              size="large"
            />
          </div>
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >
            <MenuItem name="2-1" to="/userCenter">
              <Icon type="md-person" />
              用户中心
            </MenuItem>

            <Submenu name="2">
              <template slot="title">
                <Icon type="md-bookmarks" />
                我的日记本
              </template>
              <MenuItem name="2-1" to="/writeDiary">记录日记</MenuItem>
              <MenuItem name="2-2" to="/allDiary">所有日记</MenuItem>
              <MenuItem name="2-3" to="/diaryTags">日记标签</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-paper" />
                我的资料
              </template>
              <MenuItem name="3-1" to="/avatar">我的头像</MenuItem>
              <MenuItem name="3-2">个人资料</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-unlock" />
                安全设置
              </template>
              <MenuItem name="4-1">密码修改</MenuItem>
            </Submenu>
        
            
              <MenuItem name="5-1" @click.native="exit()">
              <Icon type="md-power" />
              安全退出
              </MenuItem>
       
          </Menu>
        </Sider>
        <router-view></router-view>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$router.push({ path: "/UserCenter" });
  },
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
/* a{
    color: rgba(255,255,255,.7);
}
li:hover a{
    color: #fff;
} */
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;

  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 0px;
  left: 0px;
}
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 20px;
}
.demo-avatar > span {
  width: 200px;
  height: 200px;
  border-radius: 0px;
}
</style>
<style>
body {
  background: #fff;
}
</style>


