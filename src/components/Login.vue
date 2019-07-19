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
          <div
            class="col-xs-12 col-sm-5 col-sm-offset-7 col-lg-4 col-lg-offset-8"
          >
            <div class="user_login_reg_box">
              <ul class="nav nav-tabs">
                <li role="presentation" class="col-xs-6 active">
                  <a
                    href="#"
                    data-target="#tab-item-1"
                    data-toggle="tab"
                    class="active"
                    >用户登录</a
                  >
                </li>
                <li role="presentation" class="col-xs-6">
                  <a href="#" data-target="#tab-item-2" data-toggle="tab"
                    >用户注册</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <!-- 登录 -->
                <div class="tab-pane active" id="tab-item-1">
                  <Form
                    ref="loginFoemValidate"
                    :model="loginFoemValidate"
                    :rules="loginRuleValidate"
                  >
                    <div class="form">
                      <div class="form-group">
                        <!-- <input
                        name="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="电子邮件"
                        />-->
                        <FormItem prop="mail">
                          <Input
                            placeholder="电子邮件"
                            size="large"
                            v-model="loginFoemValidate.mail"
                          >
                            <Icon type="ios-at-outline" slot="prepend"></Icon>
                          </Input>
                        </FormItem>
                        <!-- <ul class="parsley-errors-list">
                        <li class="parsley-custom-error-message">请输入您的电子邮箱</li>
                        </ul>-->
                        <!-- <span class="glyphicon glyphicon-envelope"></span> -->
                      </div>

                      <div class="form-group">
                        <!-- <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                        />-->
                        <FormItem prop="password">
                          <Input
                            type="password"
                            placeholder="您的密码"
                            size="large"
                            v-model="loginFoemValidate.password"
                          >
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                          </Input>
                        </FormItem>
                        <!-- <ul class="parsley-errors-list">
                          <li class="parsley-custom-error-message">请输入密码</li>
                        </ul>-->
                        <!-- <span class="glyphicon glyphicon-lock"></span> -->
                      </div>
                      <div class="form-group">
                        <Button
                          class="btn btn-orange"
                          @click="loginHandleSubmit('loginFoemValidate')"
                          >立 即 登 录</Button
                        >
                      </div>
                    </div>
                  </Form>
                </div>
                <!-- 注册 -->
                <div class="tab-pane" id="tab-item-2">
                  <Form
                    ref="formValidate"
                    :model="formValidate"
                    :rules="ruleValidate"
                  >
                    <div class="form">
                      <div class="form-group">
                        <FormItem prop="mail">
                          <Input
                            placeholder="电子邮件"
                            size="large"
                            v-model="formValidate.mail"
                          >
                            <Icon type="ios-at-outline" slot="prepend"></Icon>
                          </Input>
                        </FormItem>

                        <!-- <span class="glyphicon glyphicon-envelope"></span> -->
                      </div>
                      <div class="form-group">
                        <!-- <input
                          name="password"
                          type="password"
                          class="form-control simple-form-control"
                          placeholder="您的密码"
                          v-validate="'required|email'"
                        />-->

                        <!-- <span class="glyphicon glyphicon-lock"></span> -->
                        <FormItem prop="password">
                          <Input
                            type="password"
                            v-model="formValidate.password"
                            placeholder="您的密码"
                            size="large"
                          >
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                          </Input>
                        </FormItem>
                      </div>

                      <div class="form-group">
                        <!-- <input
                          name="password"
                          type="password"
                          class="form-control simple-form-control"
                          placeholder="您的密码"
                        />-->
                        <!-- <ul class="parsley-errors-list">
                          <li class="parsley-custom-error-message">请输入确认密码</li>
                        </ul>-->
                        <!-- <span class="glyphicon glyphicon-lock"></span> -->
                        <FormItem prop="passwordCheck">
                          <Input
                            type="password"
                            placeholder="确认密码"
                            size="large"
                            v-model="formValidate.passwordCheck"
                          >
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                          </Input>
                        </FormItem>
                      </div>
                      <div class="form-group">
                        <Button
                          class="btn btn-orange sumit"
                          @click="handleSubmit('formValidate')"
                          >立 即 注 册</Button
                        >
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <p align="right">
                <!-- <a  class="btn btn-xs btn-success" @click="about()">关于我们</a> -->
                <router-link class="btn btn-xs btn-success" to="/about"
                  >关于我们</router-link
                >
              </p>
            </div>
            <div class="mobile_client" align="center">
              <a data-toggle="modal" data-target="#myModal">
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
import { constants } from "crypto";
import { type } from "os";
export default {
  components: {
    Header: Header
  },
  data() {
    //邮箱验证
    const isHasEmail = (rule, value, callback) => {
      this.request
        .httpGet(this.requestUrl.selectMail, { email: value })
        .then(res => {
          callback();
        })
        .catch(err => {
          callback(new Error("此邮箱已被注册"));
        });
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else {
        if(value.length<6)
        {
           callback(new Error("密码长度不能小于6位"));
          
        }
        if (this.formValidate.passwordCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formValidate.validateField("passwordCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入您的密码"));
      } else if (value !== this.formValidate.password) {
        callback(new Error("两次密码输入不一致!"));
      } else {
        callback();
      }
    };
    return {
      Day: require("../assets/images/the_sun.png"),
      loginFoemValidate: {
        mail: "",
        password: ""
      },
      formValidate: {
        mail: "",
        password: "",
        passwordCheck: ""
      },
      //登录验证规则
      loginRuleValidate: {
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "不正确的电子邮件格式", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          }
        ]
      },
      //注册验证规则
      ruleValidate: {
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "不正确的电子邮件格式", trigger: "blur" },
          { validator: isHasEmail, trigger: "blur" }
        ],
        // password: [
        //   {
        //     required: true,
        //     message: "请填写密码",
        //     trigger: "blur"
        //   },
        //   {
        //     type: "string",
        //     min: 6,
        //     message: "密码长度不能小于6位",
        //     trigger: "blur"
        //   }
        // ]
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
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
    //注册
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.request
            .httpPost(this.requestUrl.userReg, {
              email: this.formValidate.mail,
              userPwd: this.formValidate.password
            })
            .then(res => {
              this.$Message.success("注册成功!");
            })
            .catch(err => {
              this.$Message.success("注册失败!");
            });
        } else {
          this.$Message.error("注册信息填写错误");
        }
      });
    },
    //登录
    loginHandleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.request
            .httpPost(this.requestUrl.userLogin, {
              email: this.loginFoemValidate.mail,
              userPwd: this.loginFoemValidate.password
            })
            .then(res => {
              this.$Message.success("登录成功!");
              this.$router.push({ path: "/index" });
            })
            .catch(err => {
              this.$Message.error("邮箱或密码错误!");
            });
        } else {
          this.$Message.error("登录信息填写错误");
        }
      });
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
.loginContentWrap .form .form-group {
  margin: 0;
  position: relative;
}
.loginContentWrap .form .form-control {
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
.loginContentWrap .form .form-group .glyphicon {
  position: absolute;
  left: 26px;
  top: 20px;
  color: #cfcfcf;
  font-size: 16px;
  font-size: 1.6rem;
}
.loginContentWrap .form .btn {
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
/* 验证样式 */
.loginContentWrap .form .parsley-errors-list {
  position: absolute;
  left: 105%;
  top: 16px;
  padding: 0;
  background: #f92919;
  margin: 0;
  white-space: nowrap;
  text-transform: uppercase;
  display: block;
}
.loginContentWrap .form .parsley-errors-list li {
  display: block;
  padding: 2px 10px;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.loginContentWrap .form .parsley-errors-list li:before,
.loginContentWrap .form .parsley-errors-list li:after {
  content: "";
  right: 100%;
  top: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.loginContentWrap .form .parsley-errors-list li:before {
  border-right-color: red;
  border-width: 6px;
  margin-top: -6px;
}
.ivu-btn {
  border-color: none;
}
</style>


