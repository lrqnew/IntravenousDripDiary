<template>
   <div class="header">
    <div class="nav">
      <div class="left">
        <a href="/">
          <img src="../assets/images/site_logo.png" title="点滴日记-日记本,网络日记本,在线日记应用" />
        </a>
        <span class="left_w">
          <!-- <img src="./images/site_desc.png" alt=""> -->
          <span class="tody">记录人生从这里开始</span>
          <span class="tody">&nbsp;&nbsp;2019/06/29</span>
        </span>
      </div>
      <div class="right">
        <ul class="topNavigation">
          <li>
            <a href title="关于点滴日记">
              <span class="icon glyphicon glyphicon-info-sign"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
.header .nav {
  width: 75%;
  height: 40px;
}
.header .left {
  width: 30%;
  height: 40px;
  float: left;
}
.header .nav .left a {
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
.header .right {
  width: 70%;
  float: right;
}
.header .right .topNavigation {
  text-align: right;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}
.header .right .topNavigation > li {
  list-style: none;
  width: 40px;
}
.header .topNavigation a {
  color: #fff;
}
.header .topNavigation > li > a .icon {
  font-size: 18px;
  line-height: 40px;
}
</style>


