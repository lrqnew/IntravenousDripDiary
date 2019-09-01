<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isNight: false,
      isDay: true
    };
  },
  mounted() {
    //获取当前时间
    var now = new Date();
    var hour = now.getHours();
    if (hour < 19) {
      document
        .getElementsByTagName("body")[0]
        .setAttribute("class", "page-login page-login-day");
    } else {
      document
        .getElementsByTagName("body")[0]
        .setAttribute("class", "page-login page-login-night");
    }
    //检测设备重定向
    var url = window.location.pathname;
    var wapurl = "http://localhost:57428" + url;

    if (
      /AppleWebKit.*Mobile/i.test(navigator.userAgent) ||
      /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
        navigator.userAgent
      )
    ) {
      if (window.location.href.indexOf("?mobile") < 0) {
        try {
          if (
            /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
          ) {
            window.location.href = wapurl;
          } else {
            window.location.href = wapurl;
          }
        } catch (e) {}
      }
    }
  }

  // beforeDestroy() {
  //   document.body.removeAttribute("class", "equipment-body");
  // }
};
</script>
 
<style >
#app {
  height: 100%;
}
.page-login {
  background: url(./assets/images/bg_day.png) no-repeat center;
  /* color: #bde7ed; */
  background-size: cover;
}

.page-login-day {
  background-color: #bde7ed;
  background-image: url(./assets/images/bg_day.png);
}

.page-login-night {
  background-color: #1b4b56;
  background-image: url(./assets/images/bg_night.png);
}
#open {
  display: block;
}
#close {
  display: none;
}
</style>
