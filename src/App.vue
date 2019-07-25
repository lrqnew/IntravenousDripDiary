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
    var now=new Date();
    var hour = now.getHours();
    if(hour<19){
      document.getElementsByTagName("body")[0].setAttribute("class","page-login page-login-day");
    }else{
       document.getElementsByTagName("body")[0].setAttribute("class","page-login page-login-night");
    }
  },
  // beforeDestroy() {
  //   document.body.removeAttribute("class", "equipment-body");
  // }
};
</script>
 
<style >
#app{
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
</style>
