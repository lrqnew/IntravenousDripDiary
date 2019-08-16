<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">修改密码</p>
        <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <i>为了您的账户安全,请您定期修改账户密码.</i>
        <div class="forms">
          <Form
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="60"
            label-position="left"
          >
            <FormItem label="旧密码" prop="oldPassword">
              <Input type="password" placeholder="旧密码" v-model="formValidate.oldPassword"></Input>
            </FormItem>
            <FormItem label="新密码" prop="password">
              <Input
                type="password"
                v-model="formValidate.password"
                placeholder="新密码"
                size="large"
              >
              </Input>
            </FormItem>
            <FormItem label="确认密码" prop="passwordCheck">
              <Input
                type="password"
                placeholder="确认密码"
                size="large"
                v-model="formValidate.passwordCheck"
              >
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary"    @click="handleSubmit('formValidate')">保存</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </Content>
  </Layout>
</template>
<script>
export default {
  components: {},
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else {
        if (value.length < 6) {
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
      formValidate: {
        oldPassword: "",
        password: "",
        passwordCheck: ""
      },
      ruleValidate: {
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      },
      userId:JSON.parse(localStorage.getItem("userInfo")).userId
    };
  },
  methods: {
    //返回上一页
    peve() {
      this.$router.go(-1);
    },
    //修改密码
      handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.request
            .httpPut(this.requestUrl.updatePwd, {
              oldPassword:this.formValidate.oldPassword,
              userPwd: this.formValidate.password,
              userId:this.userId
            })
            .then(res => {
              if(res.code==200){
                this.$Message.success("修改成功!");
                localStorage.clear();
                this.$router.push({path:'/'});
              }
              else if(res.code==402){
                 this.$Message.error("旧密码错误");
              }
              else{
                this.$Message.error("修改失败");
              }
              
            })
        } else {
          this.$Message.error("信息填写错误");
        }
      });
    },
  }
};
</script>
<style scoped>
.forms {
  margin-top: 20px;
}
</style>



