<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">修改密码</p>
        <i>为了您的账户安全,请您定期修改账户密码.</i>
        <div class="forms">
          <Form :model="formItem" :label-width="60" label-position="left">
            <FormItem label="旧密码" prop="passwd">
              <Input type="password"></Input>
            </FormItem>
            <FormItem label="新密码" prop="passwdCheck">
              <Input type="password"></Input>
            </FormItem>
            <FormItem label="重复密码" prop="passwdCheck">
              <Input type="password"></Input>
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
.forms{
    margin-top: 20px;
}
</style>



