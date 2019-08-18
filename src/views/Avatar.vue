<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的头像</p>
         <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <i>浏览、修改我的头像</i>
        <div class="avatar">
          <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
              <img :src="item.url" />
              <div class="demo-upload-list-cover">
                <Icon
                  type="ios-eye-outline"
                  @click.native="handleView(item.name)"
                ></Icon>
                <Icon
                  type="ios-trash-outline"
                  @click.native="handleRemove(item)"
                ></Icon>
              </div>
            </template>
            <template v-else>
              <Progress
                v-if="item.showProgress"
                :percent="item.percentage"
                hide-info
              ></Progress>
            </template>
          </div>
          <Upload
            ref="upload"
            :headers="{'Authorization':'Bearer '+token}"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            :action="uploadUrl"
            :data="uploadData"
            style="display: inline-block;width:58px;"
          >
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="查看头像" v-model="visible">
            <img
              :src="url"
              v-if="visible"
              style="width: 100%"
            />
          </Modal>
        </div>
      </Card>
    </Content>
  </Layout>
</template>

<script>
import { userInfo } from 'os';
export default {
  components: {},
  data() {
    return {
      avatar:'',
      url:'',
      token:localStorage.getItem('token'),
      uploadUrl:process.env.VUE_APP_BASE_API+this.requestUrl.avatar,
      uploadData:{userId:JSON.parse(localStorage.getItem("userInfo")).userId},
      defaultList: [
        {
          url:sessionStorage.getItem("avatar")
        }
      ],
      imgName: "",
      visible: false,
      uploadList: []
    };
  },
  methods: {
    //  handleBeforeUpload (file) { /*上传前确定上传地址*/
    //             let researchId = this.activeUploadId;
    //             this.uploadUrl = process.env.VUE_APP_BASE_API+requestUrl.avatar;
    //             this.uploadData = {
    //                 role: patient,
    //                 abc: file
    //             };
    //             let promise = new Promise((resolve) => {
    //                 this.$nextTick(function () {
    //                     resolve(true);
    //                 });
    //             });
    //             return promise; //通过返回一个promis对象解决
    //         },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      // file.url =
      //   "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      // file.name = "7eb99afb9d5f317c912f08b5212fd69a";
      let avatar=process.env.VUE_APP_BASE_API+"/images/"+res.avatar;
      this.avatar=avatar;
      this.url=avatar;
      this.$store.commit('setAvatar',avatar);
      file.url =avatar;
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length <1;
      if (!check) {
        this.$Notice.warning({
          title: "最多上传一张图片."
        });
      }
      return check;
    },
    //返回上一页
    peve() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
    this.url=this.$refs.upload.fileList[0].url;
  }
};
</script>
<style scoped>
.avatar {
  margin-top: 10px;
}
.avt {
  width: 500px;
  height: 500px;
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>



