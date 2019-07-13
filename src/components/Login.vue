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
                  <div class="form">
                    <div class="form-group">
                      <input
                        name="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="电子邮件"
                      />
                      <ul class="parsley-errors-list">
                        <li class="parsley-custom-error-message">请输入您的电子邮箱</li>
                      </ul>
                      <span class="glyphicon glyphicon-envelope"></span>
                    </div>

                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                      />
                      <ul class="parsley-errors-list">
                        <li class="parsley-custom-error-message">请输入密码</li>
                      </ul>
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-orange submit" @click="login()">立 即 登 录</button>
                    </div>
                  </div>
                </div>
                <!-- 注册 -->
                <div class="tab-pane" id="tab-item-2">
                  <div class="form">
                    <div class="form-group">
                      <input
                        name="username"
                        type="text"
                        class="form-control simple-form-control"
                        placeholder="电子邮件"
                        v-input
                        v-validate="'required|email'"
                      />
                      <!-- <ul :class="regInfo.ulClass">
                        <li class="parsley-custom-error-message">{{tipsMsg}}</li>
                      </ul>-->
                      <span class="glyphicon glyphicon-envelope"></span>
                    </div>
                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                        v-validate="'required|email'"
                      />
                      <!-- <ul >
                        <li class="parsley-custom-error-message">请输入密码</li>
                      </ul>-->
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>

                    <div class="form-group">
                      <input
                        name="password"
                        type="password"
                        class="form-control simple-form-control"
                        placeholder="您的密码"
                      />
                      <ul class="parsley-errors-list">
                        <li class="parsley-custom-error-message">请输入确认密码</li>
                      </ul>
                      <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-orange submit">立 即 注 册</button>
                    </div>
                  </div>
                </div>
              </div>
              <p align="right">
                <!-- <a  class="btn btn-xs btn-success" @click="about()">关于我们</a> -->
                <router-link class="btn btn-xs btn-success" to="/about">关于我们</router-link>
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
export default {
  components: {
    Header: Header
  },
  data() {
    return {
      Day: require("../assets/images/the_sun.png"),
      msg: "指令",
      tipsBorderColor: "red",
      msg1: "最简单的指令",
      msg2: "验证不能为空的指令",
      msg3: "进行正则验证",
      tipsMsg: ""
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
    login() {
      this.$router.push({ path: "/index" });
    },
    // 验证是否是邮箱
    email() {
      let emailRule = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!emailRule.test(this.regInfo.email)) {
        this.tipsMsg = "请输入正确的邮箱地址";
        this.regInfo.ulClass = "parsley-errors-list";
        return false;
      } else {
        this.regInfo.ulClass = "";
        return true;
      }
    },
    //验证密码
    pwd() {
      if (this.regInfo.pwd == "" || this.regInfo.pwd == null) {
        this.pwdMag = "密码不能为空";
        this.regInfo.ulClass = "parsley-errors-list";
        return false;
      } else {
        this.regInfo.ulClass = "";
        return true;
      }
    }
  },
  directives: {
    // 修饰input框的指令
    input: {
      // 当被绑定的元素插入到DOM上的时候
      inserted: function(el) {
        el.style.width = "300px";
        el.style.height = "35px";
        el.style.lineHeight = "35px";
        el.style.background = "#ddd";
        el.style.fontSize = "16px";
        el.style.border = "1px solid #eee";
        el.style.textIndent = "5px";
        el.style.textIndent = "8px";
        el.style.borderRadius = "5px";
      }
    },
    // input框默认选中的指令
    focus: {
      inserted: function(el) {
        el.focus();
      }
    },
    // 不能为空的指令
    required: {
      inserted: function(el) {
        el.addEventListener("blur", function() {
          if (el.value == "" || el.value == null) {
            el.style.border = "1px solid red";
            console.log("我不能为空");
          }
        });
      }
    },
    // 验证指令
    checked: {
      inserted: function(el) {
        return el;
      }
    },
    // 验证
    validate: {
      inserted: function(el, validateStr) {
        // 将验证规则拆分为验证数组
        let validateRuleArr = validateStr.value.split("|");
        // 监听失去焦点的时候
        el.addEventListener("blur", function() {
          //失去焦点进行验证
          checkedfun();
        });

        // 循环进行验证
        function checkedfun() {
          for (var i = 0; i < validateRuleArr.length; ++i) {
            let requiredRegex = /^required$/; // 判断设置了required
            let emailRegex = /^email$/; // 判断设置了email
            let phoneRegex = /^phone$/; // 判断设置了 phone
            let minRegex = /min\(/; //判断设置了min 最小值
            let maxRegex = /max\(/; //判断设置了max 最大值
            let minlengthRegex = /minlength\(/; //判断设置了 minlength 最大长度
            let maxlengthRegex = /maxlength\(/; //判断设置了 maxlength 最大长度
            let regexRegex = /regex\(/;
            // 判断设置了required
            if (requiredRegex.test(validateRuleArr[i])) {
              if (!required()) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断设置了email
            if (emailRegex.test(validateRuleArr[i])) {
              if (!email()) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断设置了 phone
            if (phoneRegex.test(validateRuleArr[i])) {
              if (!phone()) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断是否设置了最小值
            if (minRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断是否设置了最大值
            if (maxRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断设置了最小长度
            if (minlengthRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断设置了最大长度
            if (maxlengthRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断测试正则表达式
            if (regexRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }
          }
        }

        // 验证是否是必填项
        function required() {
          if (el.value == "" || el.value == null) {
            // console.log("不能为空");
            tipMsg("不能为空");
            return false;
          }

          return true;
        }

        // 验证是否是邮箱
        function email() {
          let emailRule = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
          if (!emailRule.test(el.value)) {
            tipMsg("请输入正确的邮箱地址");
            return false;
          }

          return true;
        }

        // 验证是否是手机号码
        function phone() {
          let phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!phoneRule.test(el.value)) {
            tipMsg("请输入正确的手机号码");
            return false;
          }

          return true;
        }

        // 最小值验证
        function min(num) {
          if (el.value < num) {
            tipMsg("最小值不能小于" + num);
            //console.log('最小值不能小于'+num);
            return false;
          }

          return true;
        }

        // 最大值验证
        function max(num) {
          if (el.value > num) {
            tipMsg("最大值不能大于" + num);
            //console.log('最大值不能大于'+num);
            return false;
          }

          return true;
        }

        // 最小长度验证
        function minlength(length) {
          if (el.value.length < length) {
            //console.log('最小长度不能小于'+length);
            tipMsg("最小长度不能小于" + length);
            return false;
          }

          return true;
        }

        // 最大长度进行验证
        function maxlength(length) {
          if (el.value.length > length) {
            //console.log('最大长度不能大于'+length);
            tipMsg("最大长度不能大于" + length);
            return false;
          }
          return true;
        }

        // 进行正则表达式的验证
        function regex(rules) {
          if (!rules.test(el.value)) {
            tipMsg("请输入正确的格式");
            return false;
          }
          return true;
        }

        // 添加提示信息
        function tipMsg(msg) {
          removeTips();
          let tipsDiv = document.createElement('div');
                        let curDate = Date.parse(new Date());
                        tipsDiv.innerText = msg;
                        tipsDiv.className = "tipsDiv";
                        tipsDiv.id = curDate;
                        tipsDiv.style.position = "absolute";
                        tipsDiv.style.top = el.offsetTop + 45 + 'px';
                     
                        tipsDiv.style.left = el.offsetLeft + 'px';
                           console.log(el.offsetTop);
                            console.log(el.offsetLeft);
                        document.querySelector('.tab-content').appendChild(tipsDiv);
          // tipsDiv.innerText = msg;
          // tipsUl.className = "parsley-errors-list";
          // tipsUl.style.position = "absolute";
          // tipsUl.style.left = "105%";
          // tipsUl.style.top = "16px";
          // tipsUl.style.padding = "0";
          // tipsUl.style.background = "#f92919";
          // tipsUl.style.whiteSpace = "nowrap";
          // tipsUl.style.textTransform = "uppercase";
          // var tipsLi = document.createElement("li");
          // tipsLi.className = "parsley-custom-error-message";
          // tipsLi.style.padding = "2px 10px";
          // tipsLi.style.display = "block";
          // tipsLi.style.margin = "0";
          // tipsLi.style.listStyleType = "none";
          // tipsLi.style.position = "relative";
          //  tipsLi.style.color = "#FFF";
          // tipsUl.appendChild(tipsLi);
          // tipsLi.innerText = msg;
          // tipsUl.id = curDate;
          // tipsDiv.style.position = "absolute";
          // tipsDiv.style.top = el.offsetTop + 45 + 'px';
          // tipsDiv.style.left = el.offsetLeft + 'px';
          // document.querySelectorAll(".form .form-group")[3].appendChild(tipsUl);
          // console.log(document.querySelectorAll(".form .form-group")[3]);
          //setTimeout(function(){
          //  document.getElementById(curDate).remove();
          //},2000);
        }

        // 移除提示信息
        function removeTips() {
          if (document.getElementsByClassName("parsley-errors-list")[0]) {
            document.getElementsByClassName("parsley-errors-list")[0].remove();
          }
        }
      }
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
/*验证*/
.input {
  padding-bottom: 20px;
  float: left;
  clear: both;
  margin-left: 500px;
  display: block;
}

.check input {
  width: 300px;
  height: 35px;
  outline: none;
  background: #ddd;
}

.check span {
  padding-left: 20px;
}

.tipsDiv {
  height: 27px;
  line-height: 25px;
  border: 1px solid #333;
  background: #333;
  padding: 0px 5px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}

.tipsDiv:before {
  content: "";
  display: block;
  border-width: 0 5px 8px;
  border-style: solid;
  border-color: transparent transparent #000;
  position: absolute;
  top: -9px;
  left: 6px;
}
</style>


