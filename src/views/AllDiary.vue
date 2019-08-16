<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '500px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">我的日记本</p>
        <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
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
                  @on-change="handleChange"
                ></DatePicker>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="selectByDate">查询</Button>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="selectDiary"
              >所有日记({{ diaryCount }})</Button
            >
          </FormItem>
          <FormItem>
            <Button type="error" to="/writeDiary">写日记</Button>
          </FormItem>
        </Form>
        <Table
          size="small"
          :columns="columns"
          :data="data"
          :loading="loading"
          @on-row-dblclick="diartDetails"
        >
          <template slot-scope="{ row, index }" slot="action">
            <Button
              icon="ios-create-outline"
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(row)"
              >编辑</Button
            >
            <Button
              icon="ios-trash-outline"
              type="error"
              size="small"
              @click="(modal = true), (dId = row.dId)"
              >删除</Button
            >
          </template>
        </Table>
        <div class="page">
          <Page
            :total="diaryCount"
            :page-size="diaryQuery.pageSize"
            :page-size-opts="diaryQuery.pageSizeOpts"
            @on-change="pageChange"
            @on-page-size-change="pageSizeChange"
            show-sizer
          />
        </div>
        <Modal v-model="modal" width="360">
          <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>删除确认</span>
          </p>
          <div style="text-align:center">
            <p>
              删除此日记后，将永久无法恢复！
            </p>
            <p>是否继续删除？</p>
          </div>
          <div slot="footer">
            <Button
              type="error"
              size="large"
              long
              :loading="modal_loading"
              @click="remove()"
              >删除</Button
            >
          </div>
        </Modal>
      </Card>
    </Content>
  </Layout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      loading: true,
      modal: false,
      modal_loading: false,
      date: [],
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
        pageSize: 5,
        userId: JSON.parse(localStorage.getItem("userInfo")).userId,
        pageSizeOpts: [5, 10, 15]
      },
      diaryCount: 1,
      //表格数据
      columns: [
        {
          title: "日记标题(双击查看)",
          key: "dTitle",
          width: 800
        },
        {
          title: "时间",
          key: "writeDate",
          render: (h, params) => {
            var dateMat = new Date(params.row.writeDate);
            var year = dateMat.getFullYear();
            var month = dateMat.getMonth() + 1;
            var day = dateMat.getDate();
            var date = year + "-" + month + "-" + day;
            return h("div", [date]);
          }
        },
        {
          title: "操作",
          slot: "action",
          align: "center"
        }
      ],
      data: [],
      dId: ""
      //分页属性
    };
  },
  methods: {
    //查看日记
    diartDetails(row) {
      this.$router.push({ path: `/diaryDetails/${row.dId}` });
    },
    pageChange(pno) {
      this.diaryQuery.pno = pno - 1;
      this.selectDiary();
    },
    pageSizeChange(pageSize) {
      this.diaryQuery.pageSize = pageSize;
      this.selectDiary();
    },

    show(show) {
     
       console.log(this.date)
    },
    //删除日记
    remove() {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modal = false;
        this.request
          .httpDelete(this.requestUrl.delDiary, {
            dId: this.dId,
            userId: this.diaryQuery.userId
          })
          .then(res => {
            if (res.code === 200) {
              this.selectDiary();
              this.$Message.success("删除成功");
            }
          });
      }, 1000);
    },
    //查询所有日记
    selectDiary() {
      this.request
        .httpGet(this.requestUrl.selectDiary, this.diaryQuery)
        .then(res => {
          this.loading = false;
          this.data = res.data;
          this.diaryCount = res.count;
        });
    },
    //根据时间查询日记
    selectByDate() {
      var startDate = this.date[0];
      var endDate = this.date[1];
      this.request
        .httpGet(this.requestUrl.dateDiary, {
          startDate: startDate,
          endDate: endDate,
          userId: this.diaryQuery.userId
        })
        .then(res => {
          this.data = res;
          this.loading = false;
        });
    },
    handleChange(daterange) {
      this.date = daterange;
    },
    //返回上一页
    peve() {
      this.$router.go(-1);
    }
  },

  created() {
    var kwd = this.$route.query.kwd;
    if (kwd) {
      this.request
        .httpGet(this.requestUrl.selectagDiary, {
          kwd: kwd,
          userId: this.diaryQuery.userId
        })
        .then(res => {
          this.data = res;
          this.loading = false;
        });
    } else {
      this.selectDiary();
    }
  }
};
</script>
<style scoped>
.page {
  margin-top: 20px;
  /* float: right; */
}
</style>



