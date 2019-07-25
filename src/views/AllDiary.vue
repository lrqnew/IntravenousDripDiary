<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的日记本</p>
        <i>搜索、浏览、删除我的日记</i>
        <Form inline>
          <FormItem>
            <Row>
              <Col span="12">
                <DatePicker
                  type="daterange"
                  :options="options"
                  placement="bottom-start"
                  placeholder="选择开始和结束日期"
                  style="width: 200px"
                ></DatePicker>
              </Col>
            </Row>
          </FormItem>

          <FormItem>
            <Button type="primary">查询</Button>
          </FormItem>
          <FormItem>
            <Button type="primary">所有日记(0)</Button>
          </FormItem>
          <FormItem>
            <Button type="error">写日记</Button>
          </FormItem>
        </Form>
        <Table size="small" :columns="columns" :data="data" >
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button
            icon="ios-create-outline"
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(index)"
              >编辑</Button
            >
            <Button icon="ios-trash-outline" type="error" size="small" @click="remove(index)"
              >删除</Button
            >
          </template>
        </Table>
      </Card>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //日期选择器
      options: {
        shortcuts: [
          {
            text: "一个周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      },
      //表格数据
      columns: [
        {
          title: "日记标题",
          key: "title",
          width:900,
        },
        {
          title: "时间",
          key: "time"
        },
        {
          title: "操作",
          slot: "action",
          align: "center"
         
        }
      ],
      data: [
        {
          title: "John Brown",
          time: "2019/07/09 19:33",
        },
        {
         title: "John Brown",
          time: "2019/07/09 19:33",
        },
        {
          title: "John Brown",
          time: "2019/07/09 19:33",
        },
        {
          title: "John Brown",
          time: "2019/07/09 19:33",
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
      });
    },
    remove(index) {
      this.data.splice(index, 1);
    }
  }
};
</script>
<style scoped>
</style>



