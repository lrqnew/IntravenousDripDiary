<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">向我们反馈</p>
        <i
          >你的好点子，意见或者建议都可以在这里向我们提交。|
          当然，您也可以直接发邮件(<a href="mailto:alger_li@163.com"
            >alger_li@163.com</a
          >)</i
        >
        <div class="fkform">
          <Form :label-width="60" label-position="left">
            <FormItem label="反馈内容" prop="passwdCheck">
              <Input type="textarea" style="width:500px" class="inp" v-model="adContent"></Input>
              <img
                src="http://www.zerodiary.org/tpl/zero/Public/images/feedback.jpg"
                alt=""
              />
            </FormItem>
            <FormItem>
              <Button type="primary" @click="pushAdvice">提交</Button>
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
    return {
      adContent: ""
    };
  },
  methods:{
    pushAdvice(){
      if(this.adContent.trim()){

        this.request
          .httpPost(this.requestUrl.pushAdvice,{adContent:this.adContent} )
          .then(res => {
            if (res.code === 200) {
              this.$Message.success("建议提交成功!");
              this.dContent = "";
            } 
          });
      }else{
         this.$Message.error("日记内容不能为空！");
      }
    }
  }
};
</script>
<style >
.fkform {
  margin-top: 20px;
}
.fkform div.inp textarea.ivu-input {
  height: 180px;
}
.fkform img {
  width: 300px;
  height: 150px;
}
</style>



