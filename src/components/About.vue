<template>
  <div>
    <!-- 主体 -->
    <div class="aboutUsWrap">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-12 col-lg-4 col-md-offset-1 col-lg-offset-1 about">
            <!-- 关于我们 -->
            <div class="intro">
              <h3>关于我们</h3>
              <hr />
              <div class="content">
                <p>
                  <strong>什么是点滴日记？</strong>
                </p>
                <p>
                  它是一个专门用来记录个人日记的网络应用。
                  <br />
                </p>
                <p>
                  <strong>TA能做什么？</strong>
                </p>
                <p>
                  TA帮你记录每天的成长历程；善用TA，TA就是你记忆的一部分。
                  <br />
                </p>
                <p>
                  <strong>TA不能做什么？</strong>
                </p>
                <p>TA除了帮你记录写日记，什么都做不了。</p>
                <p>
                  <strong>我为什么要用TA?</strong>
                </p>
                <p>TA简单易用，永久免费；如果你想为自己的过去留下一些内容的话，也许TA很适合你。</p>
                <p>
                  <br />
                </p>
              </div>
              <a href class="btn btn-success">开启我的日记本</a>
              <p>
                <a href class="txt-small" data-toggle="modal" data-target="#myModal">更新记录</a>
              </p>
            </div>
            <!-- 更新记录 -->
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
                  <!-- 模态框头部 -->
                  <div class="modal-header">
                    <h4 class="modal-title">更新记录</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body" align="center">
                    <div class="intro">
                      <div class="content"> 
                        <h4>v1.0.0</h4>
                        <p class="log">
                          <span>□ PC端增加了日记导出功能。</span>
                        </p>
                        <p class="log">
                          <span>□ PC端日记阅读页面增加天气信息。</span>
                        </p>
                        <p class="log">
                          <span>□ 修复PC端日记阅读页面在部分情况下显示错位的问题。</span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          <br />
                        </p>
                      </div>
                      <p>
                        <a href class="txt-small">返回</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  background: url(../assets/images/aboutUs.png) no-repeat !important;
  background-size: cover !important;
  background-color: #dfccaa !important;
}

.aboutUsWrap {
  font-family: Microsoft YaHei, "宋体", Tahoma, Helvetica, Arial, "\5b8b\4f53",
    sans-serif;
  width: 100%;
  top: 15%;
  position: absolute;
  color: #333;
}

.aboutUsWrap .intro {
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 10px;
}

.aboutUsWrap .intro hr {
  margin: 15px 0;
  border-color: #e6e7ed;
}

.aboutUsWrap .intro .content {
  margin: 0 0 10px;
}

.aboutUsWrap .intro .content p {
  white-space: normal;
}

@media (min-width: 1200px) {
  .container {
    width: 100%;
  }
}

a.txt-small {
  font-size: 1rem;
  color: #00a379;
}

a:hover,
a:active,
a:focus {
  outline: 0;
  text-decoration: none;
  /* color: #363f45; */
}

.aboutUsWrap .intro a.btn {
  margin-bottom: 20px;
}

.aboutUsWrap .intro .content h4 {
  box-sizing: border-box;
  font-family: "Microsoft YaHei", 宋体, Tahoma, Helvetica, Arial, 宋体,
    sans-serif;
  font-weight: 500;
  line-height: 1.1;
  color: rgb(54, 63, 69);
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  white-space: normal;
  background-color: rgba(255, 255, 255, 0.901961);
}

.aboutUsWrap .intro .content .log {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 10px;
  color: rgb(54, 63, 69);
  font-family: "Microsoft YaHei", 宋体, Tahoma, Helvetica, Arial, 宋体,
    sans-serif;
  font-size: 14px;
  white-space: normal;
  background-color: rgba(255, 255, 255, 0.901961);
}
.aboutUsWrap .intro .content .log span {
  font-size: 12px;
}
.intro .content{
    text-align: left;
}
</style>


