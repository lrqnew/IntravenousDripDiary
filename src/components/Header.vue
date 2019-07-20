<template>
   <div class="header">
    <div class="nav">
      <div class="left">
       <Row type="flex" justify="start">
        <Col span="6" :xs="22" :sm="20" :md="14" :lg="6">
          <router-link to="/">
          <img src="../assets/images/site_logo.png" title="点滴日记-日记本,网络日记本,在线日记应用" />
        </router-link>
        </Col>
        <Col span="6" :xs="0" :sm="0" :md="0" :lg="6">
         <span class="tody">记录人生从这里开始</span>
        </Col>
        <Col span="6" :xs="0" :sm="0" :md="0" :lg="6">
  <span class="tody">{{nowTime}}</span>
        </Col>
        <Col span="6" :xs="2" :sm="4" :md="10" :lg="6">
        <router-link title="关于点滴日记" to="/about">
              <span class="icon glyphicon glyphicon-info-sign"></span>
            </router-link>
        </Col>
    </Row>
      </div>
      <!-- <div class="right">
        <ul class="topNavigation">
          <li>
            <router-link title="关于点滴日记" to="/about">
              <span class="icon glyphicon glyphicon-info-sign"></span>
            </router-link>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
  data(){
    return({
       nowTime:""
    })
  },
  methods: {
    // about() {
    //   this.$router.replace({path:'about'})
    // }
  },
  mounted() {
    //获取当前时间,动态更新
    this.timeId= setInterval(()=>{
       var now = new Date().toLocaleString();
       this.nowTime=now
    },1000)
  },
  beforeDestroy:function(){
           //实例销毁前青出于定时器
           if(this.timeId){
               clearInterval(this.timeId);
           }
       }
};
</script>
<style scoped>
.header {
  min-width: 40px;
  height: 40px;
  background: #363f45;
  color: #fff;
  position: relative;
  z-index: 2;
}
/* .header .nav {
  width: 75%;
  height: 40px;
} */
.header .left {
  width: 50%;
  height: 40px;
 line-height: 40px;
}

.header .nav img {
  vertical-align: middle;
}
.header span.tody {
  color: #c4c4c4;
  font-size: 12px;
  font-weight: normal;
  vertical-align: middle;
}

.header  a {
  color: #fff;
}
.header  a .icon {
  font-size: 14px;
  line-height: 40px;
}
</style>


