<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的资料</p>
         <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <i>浏览、修改我的个人资料</i>
        <div class="forms"> 
          <Form :model="formItem" :label-width="40" label-position="left">
            <FormItem label="昵称">
              <Input 
                v-model="formItem.userName"
                placeholder="请输入您的昵称"
              ></Input>
            </FormItem>
            <FormItem label="生日">
              <DatePicker
                type="date"
                placeholder="请选择您的生日"
                format="yyyy-MM-dd"
                v-model="formItem.birthday"
                @on-change="getBirthday"
              ></DatePicker>
            </FormItem>
            <FormItem label="性别">
              <RadioGroup v-model="formItem.sex">
                <Radio label="1" true-value="1" false-value="0" v-model="formItem.sex">男 Male</Radio>
                <Radio label="0" true-value="0" false-value="1" v-model="formItem.sex">女 Female</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="签名">
              <Input 
                v-model="formItem.signs"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 5 }"
                placeholder="请输入您的签名"
              ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="save()">保存</Button>
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
      formItem: {
        userName: JSON.parse(localStorage.getItem("userInfo")).userName,
        sex:"1",
        birthday:JSON.parse(localStorage.getItem("userInfo")).birthday,
        signs:JSON.parse(localStorage.getItem("userInfo")).signs,
        userId:JSON.parse(localStorage.getItem("userInfo")).userId
      }
    };
  },
  methods:{
     //返回上一页
    peve() {
      this.$router.go(-1);
    },
    getBirthday(date){
      this.formItem.birthday=date;
    },
    //保存
    save(){
       var user= JSON.parse(localStorage.getItem("userInfo"));
       user.userName=this.formItem.userName;
       user.signs=this.formItem.signs;
       localStorage.setItem("userInfo",JSON.stringify(user));
      //  localStorage.setItem('userInfo',this.formItem.userName);
      //  localStorage.setItem('signs',);
       this.request.httpPut(this.requestUrl.updateUser,this.formItem).then(res=>{
        if(res.code===200){
          this.$Message.success('修改成功');
        }
       })
    }
  }
};
</script>
<style scoped>
.forms {
  margin-top: 20px;
}
</style>



