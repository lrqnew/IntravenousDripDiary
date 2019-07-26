<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的资料</p>
        <i>浏览、修改我的个人资料</i>
        <div class="forms">
          <Form :model="formItem" :label-width="40" label-position="left">
            <FormItem label="昵称">
              <Input 
                v-model="formItem.input"
                placeholder="Enter something..."
              ></Input>
            </FormItem>
            <FormItem label="生日">
              <DatePicker
                type="date"
                placeholder="Select date"
                v-model="formItem.date"
              ></DatePicker>
            </FormItem>
            <FormItem label="性别">
              <RadioGroup v-model="formItem.radio">
                <Radio label="male">男Male</Radio>
                <Radio label="female">女Female</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="签名">
              <Input 
                v-model="formItem.textarea"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 5 }"
                placeholder="Enter something..."
              ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">保存</Button>
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
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      }
    };
  }
};
</script>
<style scoped>
.forms {
  margin-top: 20px;
}
</style>



