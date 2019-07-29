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
                  v-model="date"
                  format="yyyy-MM-dd"
                  @on-change='handleChange'
                ></DatePicker>
              </Col>
            </Row>
          </FormItem>

          <FormItem>
            <Button type="primary" @click="selectByDate">查询</Button>
          </FormItem>
          <FormItem>
            <Button type="primary">所有日记({{ diaryCount }})</Button>
          </FormItem>
          <FormItem>
            <Button type="error" to="/writeDiary">写日记</Button>
          </FormItem>
        </Form>
        <Table size="small" :columns="columns" :data="data">
          <template slot-scope="{ row, index }" slot="action">
            <Button
              icon="ios-create-outline"
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(index)"
              >编辑</Button
            >
            <Button
              icon="ios-trash-outline"
              type="error"
              size="small"
              @click="remove(index)"
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
       date:[],
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
      diaryQuery: {
        pno: 0,
        pageSize: 3,
        userId: localStorage.getItem("userId")
      },
      diaryCount: "",
      //表格数据
      columns: [
        {
          title: "日记标题",
          key: "dTitle",
          width: 900
        },
        {
          title: "时间",
          key: "writeDate",
          render: (h, params) => {
            var dateMat=new Date(params.row.writeDate);
            var year = dateMat.getFullYear();
            var month = dateMat.getMonth() + 1;
            var day = dateMat.getDate();
            var date=year + "-" + month + "-" + day
            // return year + "-" + month + "-" + day;
            return h('div',[date])
         }
        },
        {
          title: "操作",
          slot: "action",
          align: "center"
        }
      ],
      data: []
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
    },
    selectDiary() {
      this.request
        .httpGet(this.requestUrl.selectDiary, this.diaryQuery)
        .then(res => {
          this.data = res.data;
          this.diaryCount = res.count;
        });
    },
    //根据时间查询日记
    selectByDate(){
      console.log(this.date)
       var startDate=this.date[0];
       var endDate=this.date[1];
       this.request.httpGet(this.requestUrl.dateDiary,{startDate:startDate,endDate:endDate}).then(res=>{
         console.log(res);
       })
    },
    handleChange(daterange){
      this.date=daterange;
    }
  },
  created() {
    this.selectDiary();
  },
formatDate: function(value) {
    var dateMat = new Date(
      parseInt(value.replace("/Date(", "").replace(")/", ""), 10)
    );
    var year = dateMat.getFullYear();
    var month = dateMat.getMonth() + 1;
    var day = dateMat.getDate();
    return year + "-" + month + "-" + day;
  }
  
};
</script>
<style scoped>
</style>



