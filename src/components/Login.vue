<template>
  <div>
    <Header></Header>
    <!--主体start-->
    <div class="the_sun">
      <img :src="Day" alt />
    </div>
    <div class="loginContentWrap">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-5 col-sm-offset-7 col-lg-4 col-lg-offset-8">
            <div class="user_login_reg_box">
              <ul class="nav nav-tabs">
                <li role="presentation" class="col-xs-6 active">
                  <a href="#" data-target="#tab-item-1" data-toggle="tab" class="active">用户登录</a>
                </li>
                <li role="presentation" class="col-xs-6">
                  <a href="#" data-target="#tab-item-2" data-toggle="tab">用户注册</a>
                </li>
              </ul>
              <div class="tab-content">
                <!-- 登录 -->
                <div class="tab-pane active" id="tab-item-1">
                  <form action data-parsley-validate novalidate>
                    <div class="form-group">
                      <input
                        name="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="电子邮件"
                        required
                        data-parsley-error-message="请输入您的电子邮箱"
                        data-parsley-id="4"
                      />
                      <span class="glyphicon glyphicon-envelope"></span>
                    </div>
                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                        required
                        data-parsley-error-message="请输入密码"
                        data-parsley-id="6"
                      />
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-orange submit">立 即 登 录</button>
                    </div>
                  </form>
                </div>
                <!-- 注册 -->
                <div class="tab-pane" id="tab-item-2">
                  <form action data-parsley-validate novalidate>
                    <div class="form-group">
                      <input
                        name="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="电子邮件"
                        required
                        data-parsley-error-message="请输入您的电子邮箱"
                        data-parsley-id="4"
                      />
                      <span class="glyphicon glyphicon-envelope"></span>
                    </div>
                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                        required
                        data-parsley-error-message="请输入密码"
                        data-parsley-id="6"
                      />
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                        required
                        data-parsley-error-message="请再次输入密码"
                        data-parsley-id="6"
                      />
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-orange submit">立 即 注 册</button>
                    </div>
                  </form>
                </div>
              </div>
              <p align="right">
                <!-- <a href class="btn btn-xs btn-success" @click="about()">关于我们</a> -->
                <router-link class="btn btn-xs btn-success" to="/about">关于我们</router-link>
              </p>
            </div>
            <div class="mobile_client" align="center">
              <a href data-toggle="modal" data-target="#myModal">
                <strong>访问点滴日记手机版</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--主体end-->

    <!-- modal start-->
    <div
      class="modal fade qrcode"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content" style="margin-top: 344px;">
          <div class="modal-body" align="center">
            <p>&nbsp;</p>
            <img src="../assets/images/the_sun.png" alt />
            <p>&nbsp;</p>
            <p>
              <strong>拿出手机扫一扫</strong>
            </p>
            <p>访问零点日记手机版</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  components: {
    Header: Header
  },
  data() {
    return {
      Day: require("../assets/images/the_sun.png")
    };
  },
  mounted() {
    //获取当前时间
    var now = new Date();
    var hour = now.getHours();
    if (hour < 19) {
      this.Day = require("../assets/images/the_sun.png");
    } else {
      this.Day = require("../assets/images/the_moon.png");
    }
  },
  methods: {
    about() {
      this.$router.replace({path:'about'})
    }
  }
};
</script>
<style scoped>
.page-login {
  background: url(../assets/images/bg_day.png) no-repeat center;
  color: #bde7ed;
  background-size: cover;
}

.page-login-day {
  background-color: #bde7ed;
  background-image: url(../assets/images/bg_day.png);
}

.page-login-night {
  background-color: #1b4b56;
  background-image: url(../assets/images/bg_night.png);
}
@-webkit-keyframes sun {
  0% {
    -webkit-transform: translateX(0px) scaleX(1) scaleY(1);
  }
  42% {
    -webkit-transform: translateX(2px) scaleX(1.05) scaleY(1.05);
  }
  83% {
    -webkit-transform: translateX(-2px) scaleX(1) scaleY(1);
  }
  126% {
    -webkit-transform: translateY(2px) scaleX(1.05) scaleY(1.05);
  }
  100% {
    -webkit-transform: translateY(0px) scaleX(1) scaleY(1);
  }
}

.the_sun {
  -webkit-animation: sun 5s 0s infinite ease normal none;
  position: absolute;
  top: 12%;
  left: 15%;
}
.loginContentWrap {
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  position: absolute;
}
.page-login-night .user_login_reg_box {
  background-color: rgb(34, 80, 90);
  border: 2px solid #26373a;
}
.page-login-day .user_login_reg_box {
  background-color: rgba(161, 223, 232, 1);
  border: 2px solid #e3f9ff;
}
.user_login_reg_box {
  padding: 20px;
}
.page-login-night .nav-tabs {
  border-bottom: 1px solid #227280;
}
.page-login-day .nav-tabs {
  border-bottom: 1px solid #46dbf1;
}
.page-login-night .nav-tabs li.active {
  background: #225d6b;
  border-bottom: none;
  color: #fff;
}
.page-login-day .nav-tabs li.active {
  background: #46dbf1;
  color: #fff;
  border-bottom: none;
}

.user_login_reg_box .nav-tabs li {
  text-align: center;
}
.page-login-night .nav-tabs li.active a,
.page-login-day .nav-tabs li.active a {
  background: none;
  border-bottom: none;
}
.page-login-night .nav-tabs > li.active > a,
.page-login-day .nav-tabs > li.active > a {
  color: #ffffff;
  border: none;
}
.nav-tabs > li > a {
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 25px;
}
.nav-tabs > li > a {
  position: relative;
  border: 0;
  border-bottom: 1px solid transparent;
  color: #919599;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 25px;
}
.page-login-night .nav-tabs > li > a:hover,
.page-login-night .nav-tabs > li > a:focus {
  color: #ffffff;
  border-bottom-color: #225d6b;
  background-color: transparent;
}
.page-login-day .nav-tabs > li > a:hover,
.page-login-day .nav-tabs > li > a:focus {
  color: #ffffff;
  border-bottom-color: #46dbf1;
  background-color: transparent;
}
.tab-content {
  padding: 20px 0;
}
.loginContentWrap form .form-group {
  margin: 0;
  position: relative;
}
.loginContentWrap form .form-control {
  padding-left: 65px;
  margin: -1px 0 0 0;
  font-size: 2rem;
}
.form-control.simple-form-control {
  border-left: 1px solid #e6e7ed;
}
.form-control {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  outline: 0;
  /* border-color: #e6e7ed; */
  border-left: 3px solid #4bae4f;
  font-weight: 400;
  height: 56px;
  padding: 16px 18px;
  margin-bottom: 20px;
}
.loginContentWrap form .form-group .glyphicon {
  position: absolute;
  left: 26px;
  top: 20px;
  color: #cfcfcf;
  font-size: 16px;
  font-size: 1.6rem;
}
.loginContentWrap form .btn {
  margin: 20px 0 0 0;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  text-transform: uppercase;
  padding: 15px 0;
}
.page-login-night .btn-orange {
  background-color: #1b785c;
  color: #fff;
}
.page-login-day .btn-orange {
  background-color: #46dbf1;
  color: #fff;
}
.btn.btn-orange:hover {
  background: #fe470d;
}
.mobile_client {
  line-height: 32px;
}
.qrcode {
  color: #000;
}
</style>


